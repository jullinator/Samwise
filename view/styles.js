import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  menuItem: {
    flex:1,
    flexDirection:'row',
    borderWidth:0.5,
    borderColor:'blue'
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
  },
  header:{
    fontSize:30
  },
  topicTitle:{
    textDecorationLine:'underline'
  }
})
