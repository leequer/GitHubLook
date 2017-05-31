/**
 * Created by liqing on 2017/5/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
export default class PopularPage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});