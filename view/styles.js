import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  menuItem: {
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'steelblue'
  },
  rightMenu:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  leftMenu:{
    flex:2
  },
  title:{
      fontSize:20
  },
  description:{
      fontSize:14,
      color:'gray'
  },
  price: {
      fontSize: 25,
      color: 'green'
  }
})
