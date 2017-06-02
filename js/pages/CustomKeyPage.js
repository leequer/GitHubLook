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
    TouchableOpacity
} from 'react-native';
import NavigationBar from "../Component/NavigationBar";
/**
 * 
 * 方法调用时候，什么时候带括号，什么时候不带括号？ 方法要立马执行 就带括号，需要等到点击或者其它事件触发后执行就不带括号
 */
export default class CustomKeyPage extends Component {
    rightView = () => {
        return <View style={styles.rightViewStyle}>
            <Text style={{color: '#FFF', fontSize: 16}}>save</Text>
        </View>
    }
    leftView = () => {
        return <View>
            <TouchableOpacity
                onPress={this.backOnClick}
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')}
                       style={{height: 30, width: 30}}/>
            </TouchableOpacity>
        </View>
    }
    backOnClick = () => {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="偏好设置"
                               leftButton={this.leftView()}
                               rightButton={this.rightView()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    rightViewStyle: {}
});