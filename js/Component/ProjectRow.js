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
    static defaultProps = {
        item: {}
    }

    render() {
        var item = this.props.item;
        return (
            <View style={styles.container}>
                <Text style={styles.nameSytle}>{item.name}</Text>
                <Text style={{color:'#757575'}}>{item.description}</Text>
                <View style={styles.bottomView}>
                    <View style={styles.avatarView}>
                        <Text>作者：</Text>
                        <Image source={{url: item.owner.avatar_url}} style={[{height: 20}, {width: 20}]}/>
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10,
        padding:5
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
        marginLeft:10
    },
    starView:{
      marginRight:10
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between', //等分
    }

});