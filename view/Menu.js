import React, {Component} from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'
import MenuData from '../model/Menu'
import styles from './styles'

export default class Menu extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1!==r2 })
    this.state = {
      ds:ds.cloneWithRows(MenuData)
    }
  }
  render(){
    return (
      <View>
        <ListView
        dataSource={this.state.ds}
        renderRow={this._renderRow}
          />
      </View>
    )
  }
  _renderRow = (rowData) => {
    return (
      <View>
        <Text style={[styles.title]} >{rowData.title}</Text>
        <Text style={[styles.description]}>{rowData.description}</Text>
        <Text style={[styles.price]}>{rowData.price}</Text>
      </View>
    )
  }
}