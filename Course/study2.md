# Javascript基础教程—变量和数据类型
>Javascript的开端从变量和数据类型开始，变量和数据类型看起来很简单；其实没那么简单！

### 变量
1. 通过关键字var来声明变量；例如：var name，这就是个声明变量的过程！

>备注：通俗点讲，声明变量其实就是在内存中开辟了一个位置空间，打算用来放数据进去，注意声明变量的过程还没有数据的；

2. 声明变量后再来初始化变量；例如：name="test"！
>当变量声明好了就要初始化变量了，也就是给开辟的空间放点东西进去了
代码1：
```javascript
var name;
name="test";
//等同于
var name="test";
```
可能会有人这么写;如下:
代码2：
```javascript
name="test";
var name;
````
会发生啥事情呢？其实代码2的效果代码1的是一样的；这是为什么呢？发生了【变量提升】
先分析代码2步骤：看起来是先初始化—声明变量，其实执行机制的步骤是：声明变量—初始化变量；变量提升机制让var name置顶到name="test"上面执行了；

### 变量分为局部变量和全局变量
这个知识点涉及到作用域的问题，这里就大概阐述了区别：
全局变量再任何地方都可以访问，局部变量只能在特定的环境中访问，代码如下：
代码3
```javascript
    var name="test";//name全局变量：在任何地方都可以访问到name变量
    function show(){//声明函数show
        var sex="男";//在show函数里声明的变量属于局部变量:只能在show函数内访问的变量
        console.log(sex); //男;sex变量只能在show函数中访问
        console.log(name);    //test;在show函数内可以访问全局变量
    }
    function set(){//声明set
        console.log(sex); //报错，因为在set函数中不能访问show函数中声明的变量
        console.log(name); //test;正常访问name属性，符合任何地方都可以访问到name变量
    }
    console.log(name); //test;
    show();//执行函数show
    set();//执行set
```

# 数据类型
>Javascript属于弱类型语言，动态类型语言；在JS中总共有7种类型(函数不属于其中)：
1. 基本类型:String,Number,Boolean
2. 引用类型:Array,Object
3. 特殊类型:undefined,null
4. 纠结类型:Function
备注:纠结类型属于自己理解的类型，Function是否是JS数据类型我也不确定，但是函数可以通过instanceOf来判断出Function；对于类型的判断稍后解释；

判断数据类型的方法，这里先讲基本类型，引用类型和纠结类型
1. 基本类型通过typeof来判断,代码如下：
代码4
```javascript
var name="test";
var age=26;
var isBool=true;
console.log(typeof name); //string字符串类型
console.log(typeof age);    //number数字类型
console.log(typeof isBool); //boolean布尔值类型
```
2. 引用类型通过instanceOf来判断,写法name instanceOf Object/Array,返回值boolean值，代码如下:
代码5
```javascript
    var obj={
        name:"test"
    };
    var arr=[1,2,3,4];
    console.log(obj instanceOf Object); //true表示对象obj属于Object引用类型
    console.log(arr instanceOf Array);  //true表示数组arr属于Array引用类型
    console.log(arr instanceOf Object); //true表示数组arr属于Object引用类型
```
对于数组arr通过instanceOf判断既可以是Object类型也可以说Array类型；因为在Javascript语言中“一切皆对象”；
3. 特殊类型和纠结类型；
#### 首先解释undefined和null在什么情况下会发生：
undefined:1.声明变量而没有初始化变量；2.函数没有返回值；代码如下：
代码6
```javascript
    var name;   //undefined;声明了变量而没有初始化变量
    console.log(name);
    function show(){//声明了函数并执行，但是函数内部没有return关键字来返回数据
        console.log("测试");
    }
    console.log(show());//undefined
```
null:没有找到相应的对象，这个在DOM对象中最能体现，例如：document.getElementById("test");如果没有Id为test的DOM，那么就会返回null
#### 判断undefined和null
undefined和null的判断可以通过关键字typeof来进行判断，代码如下:
代码7
```javascript
    var name;
    console.log(typeof name);//undefined
    var dom=document.getElementById("test");
    console.log(typeof null); //object
```
其实对null判断最好不要通过object，它无法精确判断，建议通过判断运算符“===”来判断；不要用“==”判断，因为undefined == null返回true的，也不能精确判断；
代码8
```javascript
    var name;
    console.log(name == null);//true
    console.log(name === null);//false
```
