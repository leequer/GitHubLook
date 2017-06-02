/**
 * Created by liqing on 2017/5/31.
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
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
import ProjectRow from '../../js/Component/ProjectRow.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class PopularPage extends Component {
    constructor(props){
        super(props);
        this.status = {
            languages : ['java','ios','react','js']
        };

    }

    rightView=()=>{
        return    <View style={styles.navigationBarRihgt}>
            <TouchableOpacity activeOpacity={0.7}>
                <Image style={styles.icon}
                       source={require('../../res/images/ic_search_white_48pt.png')}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
                <Image style={styles.icon}
                       source={require('../../res/images/ic_more_vert_white_48pt.png')}/>
            </TouchableOpacity>
        </View>

    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar title="最热"
                               rightButton={this.rightView()}/>

                <ScrollableTabView
                    tabBarBackgroundColor="#63b8ff"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={[{backgroundColor:'#E7E7E7'},{height:2}]}
                >


                    {
                        this.status.languages.map((item,i)=>{

                            return <PopularTab tabLabel={item} key={`tab${i}`}/>
                        })
                    }


                </ScrollableTabView>
            </View>
        )
    }
}
class PopularTab extends Component{
    static defaultProps={
        //这个tabLabel 是<PopularTab tabLabel={item} key={`tab${i}`}/> 这个tablabel这个属性 相当于自定义属性
        tabLabel : "ios"
    }
    constructor(props){
        super(props);
        this.state={
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
            isRefreshing:true
        };

    }
    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ProjectRow item ={rowData}/>}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.handleRefresh}
                        tintColor="#63B8FF"
                        title="Loading..."
                        titleColor="#63B8FF"
                        colors={['#63B8FF']}
                    />
                }
            />
        );
    }
    //下拉刷新调用方法 刷新时 加载请求数据
    handleRefresh=()=>{
        this.loadData();
    }

    componentDidMount = () =>{
        this.loadData();
    }
    loadData = ()=>{
        /**
         * fetch 请求回来的数据 传给了then 方法的response 参数，然后通过json（）方法转为json
         *   .then((response)=>{return response.json()})
         * 接着调用then方法，把转好的json作为参数
         *   .then((json)=>{})
         *
         * 注意写法
         （response）=》response.json()  如果没有大括号 就会直接返回结果
         （response）=》{return response.json()}  如果有大括号 就要写return
         *
         *
         */
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then((response)=>{return response.json()})
            .then((json)=>{
                //调用this.setState 就会重新给listview值 同时listview调用render方法刷新
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(json.items)
                });
            })
            .catch((error)=>{
                console.log(error)
            })
            .done(()=>{
                //调用了this.setState 界面就会重新绘制 就会刷新   牢记
                this.setState({isRefreshing:false})
            })



    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    icon: {
        width: 24,
        height: 24,
    },
    navigationBarRihgt:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 8,
    }
});