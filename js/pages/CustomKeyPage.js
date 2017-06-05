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
import CheckBox from "react-native-check-box";
/**
 *
 * 方法调用时候，什么时候带括号，什么时候不带括号？ 方法要立马执行 就带括号，需要等到点击或者其它事件触发后执行就不带括号
 */
export default class CustomKeyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                {name: 'android', checked: false},
                {name: 'ios', checked: false},
                {name: 'react native', checked: false},
                {name: 'js', checked: false},
                {name: 'java', checked: true},
                {name: 'swift', checked: true},
            ]
        }
    }

    rightView = () => {
        return <TouchableOpacity
            focusedOpacity={0.7}
            onPress={this.saveSettings}>
            <View style={styles.rightViewStyle}>
                <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
            </View>
        </TouchableOpacity>
    }
    leftView = () => {
        return <View>
            <TouchableOpacity
                onPress={this.backOnClick}
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')}
                       style={{height: 24, width: 24}}/>
            </TouchableOpacity>
        </View>
    }
    backOnClick = () => {
        this.props.navigator.pop();
    }
    handleCheckBoxOnClick = () => {

    }
    //保存按钮点击事件
    saveSettings=()=>{
        
    }
    renderCheckbox = (item) => {
        return (
            <CheckBox
                onClick={this.handleCheckBoxOnClick}

                style={styles.checkbox}
                isChecked={item.checked}
                leftText={item.name}
                unCheckedImage={<Image source={require('../../res/images/checkbox_normal.png')}
                                       style={styles.checkboxImage}/>}
                checkedImage={<Image source={require('../../res/images/checkbox_checked.png')}
                                     style={styles.checkboxImage}/>}>

            </CheckBox>
        )
    }
    renderCheckBoxView = () => {
        var size = this.state.languages.length;
        var views = [];

        for (var i = 0, j = size - 2; i < j; i += 2) {

            views.push((<View key={`view_${i}`} style={{flexDirection: 'row'}}>
                {this.renderCheckbox(this.state.languages[i])}
                {this.renderCheckbox(this.state.languages[i + 1])}
            </View>))
        }
        //奇数个
        var mo = size % 2;
        if (mo != 0) {
            views.push((<View key={`view_${size - 1}`} style={{flexDirection: 'row'}}>
                {this.renderCheckbox(this.state.languages[size - 1])}
                <View style={styles.checkbox}></View>
            </View>))
        } else {
            //偶数
            views.push((<View key={`view_${size - 1}`} style={{flexDirection: 'row'}}>
                {this.renderCheckbox(this.state.languages[size - 2])}
                {this.renderCheckbox(this.state.languages[size - 1])}
            </View>))
        }
        return views;
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="偏好设置"
                               leftButton={this.leftView()}
                               rightButton={this.rightView()}/>
                {this.renderCheckBoxView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    checkboxView: {},
    checkboxImage: {
        width: 15,
        height: 15
    },
    checkbox: {
        flex: 1, padding: 10,

    },
    rightViewStyle: {}
});