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
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from "../Component/NavigationBar";

export default class CustomKeyPage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar title="偏好设置"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});