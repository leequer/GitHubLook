/**
 * Created by liqing on 2017/5/27.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import PopularPage from '../../js/pages/PopularPage.js';
import MyPage from "./MyPage";

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'popular',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator >
                    <TabNavigator.Item
                        title="最热"
                        onPress={() => this.setState({selectedTab:'popular'})}
                        selected={this.state.selectedTab==='popular'}
                        selectedTitleStyle={{color:'#63b8ff'}}
                        renderSelectedIcon={
                            ()=> <Image style={[styles.icon,{tintColor:'#63b8ff'}]} source={require('../../res/images/ic_popular.png')}/>
                        }

                        renderIcon={() =>
                            <Image style={ styles.icon} source={require('../../res/images/ic_popular.png')}/>
                        }>

                        {/*选项卡对应的页面*/}
                        <View style={{flex:1}}>
                            <PopularPage/>
                        </View>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title="趋势"
                        selectedTitleStyle={{color:'#63b8ff'}}
                        onPress={() => this.setState({selectedTab:'trending'})}
                        selected={this.state.selectedTab==='trending'}
                        renderIcon={() =>
                            <Image style={ styles.icon} source={require('../../res/images/ic_trending.png')}/>
                        }
                        renderSelectedIcon={
                        ()=> <Image style={[styles.icon,{tintColor:'#63b8ff'}]} source={require('../../res/images/ic_trending.png')}/>
                        }>
                        <Image source={{uri:'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg'}}  style={{height:100,width:100}} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="收藏"
                        selectedTitleStyle={{color:'#63b8ff'}}
                        onPress={() => this.setState({selectedTab:'favorite'})}
                        selected={this.state.selectedTab==='favorite'}
                        renderIcon={() =>
                            <Image style={ styles.icon} source={require('../../res/images/ic_favorite.png')}/>
                        }
                        renderSelectedIcon={
                            ()=> <Image style={[styles.icon,{tintColor:'#63b8ff'}]} source={require('../../res/images/ic_favorite.png')}/>
                        }>
                        <View style={{flex:1,backgroundColor:'#0f0'}}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selectedTitleStyle={{color:'#63b8ff'}}
                        onPress={() => this.setState({selectedTab:'My'})}
                        selected={this.state.selectedTab==='My'}
                        renderIcon={() =>
                            <Image style={ styles.icon} source={require('../../res/images/ic_my.png')}/>
                        }
                        renderSelectedIcon={
                            ()=> <Image style={[styles.icon,{tintColor:'#63b8ff'}]} source={require('../../res/images/ic_my.png')}/>
                        }>
                        {/*
                         把HomePage属性上的navigator对象，传递给MyPage
                         <MyPage navigator={this.props.navigator} c={this.props.c} d={this.props.d} />
                         HomePage props -> {name:'jack',age:10}
                         MyPage  props -> {name:'jack',age:10}

                         {...this.props} 属性全部copy
                         */}
                        <MyPage navigator={this.props.navigator} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    icon: {
        width: 26,
        height: 26
    },
});