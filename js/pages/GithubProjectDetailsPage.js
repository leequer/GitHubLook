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
    TouchableOpacity,
    WebView
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
export default class GithubProjectDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            canGoBack:false,
        }
    }

    backOnClick = () => {
        if(this.state.canGoBack){
            this.refs.webview.goBack();
        }else{
            this.props.navigator.pop();
        }
    }
    leftView = () => {
        return <View>
            <TouchableOpacity
                onPress={this.backOnClick}
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')}
                       style={{height: 24, width: 24}}/>
            </TouchableOpacity>
        </View>
    }
    rightView = () => {
        return <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                focusedOpacity={0.7}
            >
                <Image source={require('../../res/images/ic_share.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginLeft:10}}
                focusedOpacity={0.7}
            >
                <Image source={require('../../res/images/ic_star_navbar.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    }
    onNavigationStateChange=(s)=>{
        this.setState({canGoBack:s.canGoBack});
    }
    render() {
        console.log(this.props.title + ',' + this.props.url);
        return (
            <View style={styles.container}>
                <NavigationBar title={this.props.title} leftButton={this.leftView()} rightButton={this.rightView()}/>
                <WebView
                    ref="webview"
                    startInLoadingState={true}
                    onNavigationStateChange={this.onNavigationStateChange}
                    source={{uri:this.props.url}}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon:{
        width:12,
        height:12
    }
});