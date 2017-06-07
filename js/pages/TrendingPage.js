/**
 * Created by liqing on 2017/6/7.
 * 趋势界面
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
import GitHubTrending from 'GitHubTrending';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TrendingRow from '../../js/Component/TrendingRow';
var defaut_lans = require('../../res/data/popular_def_lans.json');
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        //这里是state  不是 statue
        this.state = {
            languages: defaut_lans
        };

    }

    more=()=>{

    }
    centerView = () => {
        return <TouchableOpacity
            onPress={this.more}
            focusedOpacity={0.7}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.BarText}>趋势</Text>
                <Image source={require('../../res/images/ic_spinner_triangle.png')} style={{height: 20, width: 20}}/>
            </View>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar centerView={this.centerView()}/>
                <ScrollableTabView
                    tabBarBackgroundColor="#63b8ff"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={[{backgroundColor: '#E7E7E7'}, {height: 2}]}
                >


                    {
                        this.state.languages.map((item, i) => {
                            return (item.checked == undefined || item.checked) ?
                                <TrendingTab {...this.props} key={`tab${i}`} tabLabel={item.name}/> : null;
                        })

                    }


                </ScrollableTabView>
            </View>
        )
    }
}
class TrendingTab extends Component {
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
                renderRow={(rowData) =>  <TrendingRow {...this.props} item={rowData}/>}
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
        new GitHubTrending().fetchTrending(`https://github.com/trending/${this.props.tabLabel}?since=daily`)
            .then(value=>{
                //更新dataSource
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(value),

                });
            }).catch((error) => {
            console.error(error);
        }).done(()=>{
            this.setState({isRefreshing: false})//隐藏进度条
        });


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
});
