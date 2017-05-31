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
    ListView
} from 'react-native';
import NavigationBar from '../../js/Component/NavigationBar.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class PopularPage extends Component {
    constructor(props){
        super(props);
        this.status = {
            languages : ['java','ios','react','js']
        };

    }
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
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        };

    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
    componentDidMount = () =>{
        this.loadData();
    }
    loadData = ()=>{
        //fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
        //this.state.dataSource.cloneWithRows(['row 1', 'row 2']);
       // this.state.dataSource= ds.cloneWithRows();
        //给listview 添加值
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(['row 1', 'row 2'])
        });

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});