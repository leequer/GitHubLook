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
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class PopularPage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar/>
                <ScrollableTabView
                    tabBarBackgroundColor="#63b8ff"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={[{backgroundColor:'#E7E7E7'},{height:2}]}
                >
                    <Text tabLabel='IOS'/>
                    <Text tabLabel='Android'/>
                    <Text tabLabel='Java'/>
                    <Text tabLabel='JavaScript'/>
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});