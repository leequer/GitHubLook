/**
 * Created by liqing on 2017/6/2.
 */
import React, {Component} from 'react';

import HomePage from "./pages/HomePage";
//这里要有大括号，否则报错（element type is invalid...），估计是因为导入的这个类和系统的有冲突，所以要这样处理
import {Navigator} from 'react-native-deprecated-custom-components';
export default function setup() {
    class Root extends Component {

        //Navigator是一个导航器，通过导航器可以实现在不同页面之间跳转
        //Navigator会建立一个路由栈，它类似于安卓的任务堆栈
        renderScene = (route, navigator) => {
            let Target = route.component;
            //navigator对象作为属性值，传递到HomePage页面
            //传参
            //return <Target {...route.params} navigator={navigator}/>;
            //return <Target navigator={navigator}/>;
            return <Target {...route.params} navigator={navigator}/>
        }

        render() {
            /*
             initialRoute初始化路由，传入组件的名称
             在renderScene（渲染场景）中完成页面跳转
             renderScene指定一个函数，函数会被传入route和navigator对象，返回一个需要跳转到的页面
             route（transition路由）类似于intent，component类似于intent.setComponent()
             renderScene类似于startActivity，会传入intent，这里传入的route

             传参：{{component : HomePage,params:{title:'ABC'}}}
             configureScene={route=>Navigator.SceneConfigs.FadeAndroid} 设置动画
             * */
            return <Navigator
                initialRoute={{component: HomePage}}
                renderScene={(route, navigator) => this.renderScene(route, navigator)}
                configureScene={route => Navigator.SceneConfigs.FadeAndroid}/>;
        }
    }


    return <Root/>;
}
