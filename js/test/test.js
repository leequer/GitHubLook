/**
 * Created by liqing on 2017/6/6.
 */
var a = ['a','b','c'];
/**
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 第一个参数表示在下标x位置操作
 * 第二个参数 0表示不删除 1 删除
 * 第三个参数表示要插入的内容
 */
a.splice(1,0,'d');//在下标为1的位置添加一个
console.log(a);

a.splice(2,1,'x');
console.log(a);