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
    TouchableOpacity,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
import ProjectRow from '../../js/Component/ProjectRow.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
var defaut_lans = require('../../res/data/popular_def_lans.json');

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        //这里是state  不是 statue
        this.state = {
            languages: defaut_lans
        };

    }

    componentWillUnmount() {
        this.state.languages = null;

    }
    componentDidMount() {
        AsyncStorage.getItem('myPage_custom_key').then((value) => {
            if (value !== null) {
                var org = JSON.parse(value);
                this.setState({languages: org});
            }

        });


    }

    rightView = () => {
        return <View style={styles.navigationBarRihgt}>
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
    centerView=()=>{
        return <Text style={styles.BarText}>最热</Text>
    }


    render() {
        return (
            <View style={styles.container}>
                <NavigationBar centerView={this.centerView()}
                               rightButton={this.rightView()}/>

                <ScrollableTabView
                    tabBarBackgroundColor="#63b8ff"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={[{backgroundColor: '#E7E7E7'}, {height: 2}]}
                >


                    {
                        this.state.languages.map((item, i) => {
                            return (item.checked == undefined || item.checked) ?
                                <PopularTab {...this.props} key={`tab${i}`} tabLabel={item.name}/> : null;
                        })

                    }


                </ScrollableTabView>
            </View>
        )
    }
}
class PopularTab extends Component {
    static defaultProps = {
        //这个tabLabel 是<PopularTab tabLabel={item} key={`tab${i}`}/> 这个tablabel这个属性 相当于自定义属性
        tabLabel: "ios"
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            isRefreshing: true
        };

    }

    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>  <ProjectRow {...this.props} item={rowData}/>}
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
    handleRefresh = () => {
        this.loadData();
    }
    componentWillUnmount() {
        this.state.dataSource=null;
        this.state.isRefreshing = null;
    }
    componentDidMount = () => {
        this.loadData();
    }
    loadData = () => {
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
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                //调用this.setState 就会重新给listview值 同时listview调用render方法刷新
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json.items)
                });
            })
            .catch((error) => {
                console.log(error)
            })
            .done(() => {
                //调用了this.setState 界面就会重新绘制 就会刷新   牢记
                this.setState({isRefreshing: false})
            })


    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    BarText: {
        fontSize: 18,
        color: '#FFF'
    },
    icon: {
        width: 24,
        height: 24,
    },
    navigationBarRihgt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 8,
    }
});