/**
 * Created by liqing on 2017/6/5.
 */


 export  default class ArrayUtils{
    static isEquerArray(a,b) {
        /**
         * 双等号  内容相同 完全相同  顺序也相同
         */
        return JSON.stringify(a) == JSON.stringify(b);
    }

    static  clone (a){
        //item 是a数组中的每个对象，for in 是遍历每个对中的属性
        return a.map((item)=> {
            var obj = {};
            //for in 遍历对象的属性
            for(var p in item){
                obj[p] = item[p];
            }
            return obj;
        });
    }


}
var a = [
    {name:'Android',checked:true},
    {name:'IOS',checked:false},
    {name:'React Native',checked:true},
    {name:'Java',checked:true},
    {name:'JS',checked:true}
];
var c = ArrayUtils.clone(a);

a[0].name = "XXXX";
console.log(c);