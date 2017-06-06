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
import GithubProjectDetailsPage from '../pages/GithubProjectDetailsPage'
export default class ProjectRow extends Component {
    /**
     * 在popularpage.js中的设置list中的item的每一项中的
     * renderRow={(rowData) => <ProjectRow item ={rowData}/>}
     * 这个item 就是 这个ProjectRow中的自定义属性 item 就在这里写 写成这样
     * @type {{item: {}}}
     */
    static defaultProps = {
        item: {}
    }
    goToDetails=()=>{
        this.props.navigator.push({
            component:GithubProjectDetailsPage
        });
    }
    render() {
        var item = this.props.item;
        var avatar_url = item.owner.avatar_url;
        return (
            <TouchableOpacity
                focusedOpacity={0.7}
                onPress={this.goToDetails}
            >
            <View style={styles.container}>
                <Text style={styles.nameSytle}>{item.name}</Text>
                <Text style={{color:'#757575'}}>{item.description}</Text>
                <View style={styles.bottomView}>
                    <View style={styles.avatarView}>
                        <Text>作者：</Text>
                        <Image source={{uri:item.owner.avatar_url}}  style={styles.icon}/>
                    </View>
                    <View style={styles.startView}>
                        <Text>Starts:</Text>
                        <Text>{item.stargazers_count}</Text>
                    </View>
                    <View style={styles.starView}>
                        <Image source={require('../../res/images/ic_unstar_navbar.png')} style={[{height:25},{width:25}]}/>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
        marginLeft:10,
        padding:5,
        marginLeft:5,
        marginRight:5,
        marginVertical:5,
        borderColor:'#DDDDDD',
        borderWidth:0.5,
        borderRadius:5,//圆角
        shadowColor:'#CCC',//阴影颜色
        shadowOffset:{width:0.5,height:0.5},
        shadowRadius:5,//模糊半径
        shadowOpacity:0.4,//阴影透明度
        elevation:1//android阴影效果
    },
    icon:{
        width:25,
        height:25
    },
    nameSytle: {
        marginBottom:5,
        fontSize: 18
    },
    avatarView:{
        flexDirection: 'row',
        alignItems:'center',
    },
    startView:{
        flexDirection: 'row',
    },
    starView:{

    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between', //等分
    }

});