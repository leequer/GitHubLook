/**
 * Created by liqing on 2017/6/2.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
import CustomKeyPage from './CustomKeyPage';
export default class MyPage extends Component {
    //跳转到
    gotoCustumePage=()=>{
        this.props.navigator.push({
             component:CustomKeyPage
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar title="我的"/>
                <TouchableOpacity activeOpacity={0.7}
                                  onPress={this.gotoCustumePage}>
                <View style={styles.itemSytle}>
                    <Text  style={{ marginLeft:10}}>分类</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    itemSytle:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#E7E7E7',

    }

});