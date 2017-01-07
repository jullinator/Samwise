import React, {Component} from 'react'
import {View} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'

//Screens
import Home from './Home'
import Menu from './Menu'

export default class App extends Component {
	render(){
		return (
			<TabView>
				<Home tabLabel="Home" />
				<Menu tabLabel="Our Menu" />
			</TabView>
		)
	}
}
