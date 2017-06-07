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
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar title="趋势"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
