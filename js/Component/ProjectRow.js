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
    /**
     * 在popularpage.js中的设置list中的item的每一项中的
     * renderRow={(rowData) => <ProjectRow item ={rowData}/>}
     * 这个item 就是 这个ProjectRow中的自定义属性 item 就在这里写 写成这样
     * @type {{item: {}}}
     */
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