import React, { Component } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';


export default class MultiSwitch extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    } 
  }

  getLayout(){
    let layout = {...this.props.layout};
    if(layout.horizontal === -1){
      layout.horizontal = this.props.children.length;
      layout.vertical = 1;
    }else if(layout.vertical === -1 ){
      layout.vertical = this.props.children.length;
      layout.horizontal = 1;
    }
    return layout;
  }

  getContainerWidth(){
    let layout = this.getLayout();
    return this.props.choiceSize * layout.horizontal;
  }

  getContainerHeight(){
    let layout = this.getLayout();
    return this.props.choiceSize * layout.vertical;
  }

  getHeight(){
    return this.props.choiceSize;
  }

  getWidth(){
    return this.props.choiceSize;
  }

  setActive(index){
    if(!(this.props.neverActivate.includes(index))){
      this.setState({active: index}, () => {this.props.onActivate(index)});
    }
  }

  getStyle(index, prop){
    if(index < 0 || index >= prop.length ){
        return {};
    }//else
    return prop[index];
  }

  renderItem({item, index}){
    let childStyle = item.props.style
    return (
      <TouchableOpacity onPress={() => {this.setActive(index)}}
                        style={[{
                          width: this.props.choiceSize, 
                          height: this.props.choiceSize,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }, index === this.state.active ? 
                           this.getStyle(index, this.props.activeContainerStyle) : 
                           this.getStyle(index, this.props.inactiveContainerStyle)]} >
        {
          this.state.active === index ? 
          React.cloneElement(
            item,
            {
              style: [childStyle, this.getStyle(index, this.props.activeItemStyle)]
            }
          ) :
          React.cloneElement(
            item,
            {
              style: [childStyle, this.getStyle(index, this.props.inactiveItemStyle)]
            }
          ) 
        }
      </TouchableOpacity>
    )
  }

  render(){
    return (
      <View style={[{width: this.getContainerWidth() + 2, height: this.getContainerHeight()+2}, this.getStyle(this.state.active, this.props.containerStyles)]}>
        <FlatList data={this.props.children} 
                  keyExtractor={(item, nb) => { return nb.toString() }} 
                  renderItem={this.renderItem.bind(this)} numColumns={this.getLayout().horizontal} style={{flex: 1}} 
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}/>
      </View>
    )
  }
}

MultiSwitch.defaultProps = {
  containerStyles: [{}],
  activeContainerStyle: [{ backgroundColor: 'red', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'green', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'yellow', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       ],
  inactiveContainerStyle: [{ backgroundColor: 'white', borderRadius: 100,}
                       , { backgroundColor: 'white', borderRadius: 100,}
                       , { backgroundColor: 'white', borderRadius: 100,}
                       , { backgroundColor: 'white', borderRadius: 100,}
                       ],
  activeItemStyle: [{}, {}, {}, {}],
  inactiveItemStyle: [{}, {}, {}, {}],
  neverActivate: [],
  layout: {horizontal: -1, vertical: 0},
  onActivate: () => { },
}
