/**
 * Created by liqing on 2017/6/1.
 * listview 的每个item
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
export default class ProjectRow extends Component {
    static defaultProps ={
        item :{}
    }
    render() {
        var item = this.props.item;
            return (
                <View style ={styles.container}>
                    <Text>-->{item.full_name}</Text>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});