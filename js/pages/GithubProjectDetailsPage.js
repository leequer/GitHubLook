/**
 * Created by liqing on 2017/6/6.
 * 项目item 点击 ->详情页
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
export default class GithubProjectDetailsPage extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.title+','+this.props.url);
        return (
            <View/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});