/**
 * Created by liqing on 2017/6/7.
 * 趋势界面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RefreshControl,
    TouchableOpacity,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
export default class PopularPage extends Component {
    centerView=()=>{
        return <Text style={styles.BarText}>趋势</Text>
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar centerView={this.centerView()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BarText: {
        fontSize: 18,
        color: '#FFF'
    },
});
