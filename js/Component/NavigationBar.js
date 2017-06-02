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
    static  defaultProps = {
        title: '',
    }

    render() {
        var title = this.props.title;

        return (
            <View style={styles.container}>
                <StatusBar hidden={Platform.OS === 'ios' ? false : true}
                           barStyle={Platform.OS === 'ios' ? 'light-content' : null}/>
                <View style={styles.navigationBar}>
                    <View style={styles.leftViewStyle}>
                        {this.props.leftButton}
                    </View>
                    <View style={styles.navigationBarText}>
                        <Text style={styles.BarText}>{title}</Text>
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
        fontSize: 18,
        color: '#FFF'
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', //等分
        alignItems: 'center', //交叉轴
        marginTop: 30
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