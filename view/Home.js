import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

class Topic extends Component {
    render(){
        return(
            <View>
              <Text style={[styles.header, styles.topicTitle]} >{this.props.title}</Text>
              {this.props.children}
            </View>
        )
    }
}

export default class Menu extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View>
        <Topic title="Dagens Lunch">
          <Text>Potatis med mos</Text>
        </Topic>
        <Topic title="Öppettider">
          <Text>Mån-Fre: 10-20</Text>
          <Text>Lör-Sön: 12-20</Text>
        </Topic>
      </View>
    )
  }
}
