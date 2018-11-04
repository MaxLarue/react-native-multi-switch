# react-native-multi-switch
A multiple switch widget for react-native

![horizontal1](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/horizontal-3-middle.png "")
![horizontal2](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/horizontal-3-left.png "")
![horizontal3](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/horizontal-3-right.png "")

## install
```
$ npm i -s react-native-multi-switch
```
or
```
$ yarn add react-native-multi-switch
```

No linking is needed

## Usage

Note: these examples use native-base's icon component, but you can use any other component.

```jsx
import React from 'react'
import { View, Text } from 'react-native'

import MultiSwitch from "react-native-multi-switch";
import { Icon } from "native-base"

import _ from 'lodash';

export default class Example extends React.Component {

    render() {
        return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
            <View style={{width: 270}}>
              <Text style={{fontSize: 24}}>{"This is a triple state choice"}</Text>
            </View>
            <View style={{width: 150, justifyContent: 'center', alignItems: 'center'}}>
              <MultiSwitch choiceSize={40}
                            activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'}, ]}
                            layout={{vertical: 0, horizontal: -1}}
                            containerStyles={_.times(3, () => ({
                              backgroundColor: 'white',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            }))}
                            active={1}>
                <Icon name="md-close" style={{fontSize: 15,}}/>
                <Icon name="md-help" style={{fontSize: 15,}}/>
                <Icon name="md-checkmark" style={{fontSize: 15,}}/>
          
              </MultiSwitch>
            </View>
          </View>
        )
    }
}
```

## Props

| Name | Type | Description |
|------|------|-------------|
|choiceSize|Number|The size of the touchable wrapper for each choice (square)|
|active|Number|index of the initialy selected choice, can be -1 if no initial selection is desired|
|layout|{horizontal: Number, vertical: Number}| used to determine overall container's aspect. Vertical is the number or row and horizontal is the number of column, if one of them equals -1, then the container will be flat in that direction. if both are -1,horizontal takes precedence|
|neverActivate|[Number,...]|A list of children's indexes which cannot be selected|
|onActivate|(Number) => {}|Callback called when one of the choices is selected, argument is child index |
|activeContainerStyle|[{styleProp: "value"} or stylesheet]|an array of styles object or stylesheets to be applied to children's touchable container when they are selected, each item is mapped to the corresponding child|
|inactiveContainerStyle|[{styleProp: "value"} or stylesheet]|an array of styles object or stylesheets to be applied to children's touchable container when they are NOT selected, each item is mapped to the corresponding child|
|activeItemStyle|[{styleProp: "value"} or stylesheet]|an array of styles object or stylesheets to be applied to children's component when they are selected, each item is mapped to the corresponding child|
|inactiveItemStyle|[{styleProp: "value"} or stylesheet]|an array of styles object or stylesheets to be applied to children's component when they are NOT selected, each item is mapped to the corresponding child|
|containerStyles|[{styleProp: "value"} or stylesheet]|an array of styles object or stylesheets to be applied to the overall containing view, the item selected correspond to the actively selected child.

## Recipes

### Vertical
![vertical1](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/vertical-3-middle.png "")
![vertical2](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/vertical-3-up.png "")
![vertical3](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/vertical-3-down.png "")
```javascript
<MultiSwitch choiceSize={40}
                            activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'}, ]}
                            layout={{vertical: -1, horizontal: 0}}
                            containerStyles={_.times(3, () => ({
                              backgroundColor: 'white',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            }))}
                            active={1}>
                <Icon name="md-close" style={{fontSize: 15,}}/>
                <Icon name="md-help" style={{fontSize: 15,}}/>
                <Icon name="md-checkmark" style={{fontSize: 15,}}/>
          
</MultiSwitch>
```

### Other layout

![square1](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/square-middle.png "")
![square2](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/square-up-left.png "")
![square3](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/square-down-left.png "")

```javascript
<MultiSwitch choiceSize={40}
                            activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'}, ]}
                            layout={{vertical: 2, horizontal: 2}}
                            containerStyles={_.times(3, () => ({
                              backgroundColor: 'white',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            }))}
                            active={1}>
                <Icon name="md-close" style={{fontSize: 15,}}/>
                <Icon name="md-help" style={{fontSize: 15,}}/>
                <Icon name="md-checkmark" style={{fontSize: 15,}}/>
          
</MultiSwitch>
```

### Making the background color change

![background1](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/background-middle.png "")
![background2](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/background-right.png "")

```javascript
<MultiSwitch choiceSize={40}
                            activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'}, ]}
                            layout={{vertical: 0, horizontal: -1}}
                            containerStyles={[{
                              backgroundColor: 'red',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            },
                            {
                              backgroundColor: 'white',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            },
                            {
                              backgroundColor: 'green',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            }]}
                            activeContainerStyle={[{ backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       ]}
                        inactiveContainerStyle={[{ borderRadius: 100,}
                       , { borderRadius: 100,}
                       , { borderRadius: 100,}
                       ]}
                       activeItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}]}
                       inactiveItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}]}
                            active={1}>
                <Icon name="md-close" style={{fontSize: 15,}}/>
                <Icon name="md-help" style={{fontSize: 15,}}/>
                <Icon name="md-checkmark" style={{fontSize: 15,}}/>
          
              </MultiSwitch>
```

### More options

![4-1](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/4-1.png "")
![4-2](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/4-2.png "")
![4-3](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/4-3.png "")
![4-4](https://raw.githubusercontent.com/MaxLarue/react-native-multi-switch/master/assets/4-4.png "")


```javascript
<MultiSwitch choiceSize={40}
                            activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'}, ]}
                            layout={{vertical: 0, horizontal: -1}}
                            containerStyles={[{
                              backgroundColor: 'red',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            },
                            {
                              backgroundColor: 'white',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            },
                            {
                              backgroundColor: 'green',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            },
                            {
                              backgroundColor: 'yellow',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: "lightgrey",
                              justifyContent: 'space-between',
                            }]}
                            activeContainerStyle={[{ backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       , { backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: 'rgb(180, 180, 180)'}
                       ]}
                        inactiveContainerStyle={[{ borderRadius: 100,}
                       , { borderRadius: 100,}
                       , { borderRadius: 100,}
                       , { borderRadius: 100,}
                       ]}
                       activeItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}]}
                       inactiveItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}]}
                            active={1}>
                <Icon name="md-close" style={{fontSize: 15,}}/>
                <Icon name="md-help" style={{fontSize: 15,}}/>
                <Icon name="md-checkmark" style={{fontSize: 15,}}/>
                <Icon name="md-camera" style={{fontSize: 15,}}/>
          
</MultiSwitch>
```