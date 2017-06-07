/**
 * Created by liqing on 2017/5/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity,
    Platform
} from 'react-native';

export default class NavigationBar extends Component {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={Platform.OS === 'ios' ? false : true}
                           barStyle={Platform.OS === 'ios' ? 'light-content' : null}/>
                <View style={styles.navigationBar}>
                    <View style={styles.leftViewStyle}>
                        {this.props.leftButton}
                    </View>
                    <View style={styles.navigationBarCenterViewStyle}>
                        {this.props.centerView}
                    </View>
                    <View style={styles.navigationBarRihgt}>
                          {this.props.rightButton}
                    </View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63b8ff',
        padding: 5
    },
    navigationBarCenterViewStyle: {
        //中间文字编辑剧中-begin
        flexDirection: 'column',
        alignItems: 'center', //交叉轴
        position: 'absolute',
        left: 50,
        right: 50,

        //中间文字居中-end
        //backgroundColor:'#f00'

    },

    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', //等分
        alignItems: 'center', //交叉轴
        marginTop: 30,
        //最小高度，如果传入的界面高与这个值，此属性就无效,就按照传入的控件的大小来显示
        minHeight:24
    },
    navigationBarRihgt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 8,

    },
    leftViewStyle:{
        height:24
    }

});