import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native'
import Database from '../model/database'
import styles from './styles'


export default class Menu extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1!==r2 })
    this.state = {
      ds:ds.cloneWithRows([]),
      loading:true
    }
  }
  componentDidMount(){
      Database.child('menu').on('value', (snap)=>{
        this.setState((prevState)=>({
          ds:prevState.ds.cloneWithRows(snap.val()),
          loading:false
        }))
      })
  }
  render(){
    const body = this.state.loading ?
    (
        <ActivityIndicator />
    ) :
    (
        <ListView
            enableEmptySections
            dataSource={this.state.ds}
            renderRow={this._renderRow}
        />
    )
    return (
      <View>
        {body}
      </View>
    )
  }
  _renderRow = (rowData) => {
    return (
      <TouchableOpacity style={[styles.menuItem]}>
        <View style={styles.leftMenu}>
          <Text style={[styles.title]} >{rowData.title}</Text>
          <Text style={[styles.description]}>{rowData.description}</Text>
        </View>
        <View style={styles.rightMenu}>
          <Text style={[styles.price]}>{rowData.price} $</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
