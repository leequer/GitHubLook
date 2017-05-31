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
                <StatusBar hidden={Platform.OS==='ios'?false:true} barStyle={Platform.OS==='ios'?'light-content':null}/>
                <View style={styles.navigationBar}>
                    <View style={styles.icon}/>
                    <View style={styles.navigationBarText}>
                        <Text style={styles.BarText}>热门</Text>
                    </View>
                    <View style={styles.navigationBarRihgt}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image style={styles.icon}
                                   source={require('../../res/images/ic_search_white_48pt.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image style={styles.icon}
                                   source={require('../../res/images/ic_more_vert_white_48pt.png')}/>
                        </TouchableOpacity>
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
   navigationBarText: {
        //中间文字编辑剧中-begin
        flexDirection: 'column',
        alignItems: 'center', //交叉轴
        position: 'absolute',
        left: 50,
        right: 50,
        bottom: 1,
        //中间文字居中-end
        //backgroundColor:'#f00'

    },
    BarText: {
        fontSize: 16,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', //等分
        alignItems: 'center', //交叉轴
        marginTop:30

    },
    navigationBarRihgt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight:8,

    },
    icon: {
        width: 28,
        height: 28,
    }

});