# Javascript基础教程—变量和数据类型
>Javascript的开端从变量和数据类型开始，变量和数据类型看起来很简单；其实没那么简单！

### 变量
1.通过关键字var来声明变量；例如：var name，这就是个声明变量的过程！

>备注：声明变量其实就是在内存中开辟了一个位置空间，打算用来放数据进去，注意声明变量的过程还没有数据的；

2.声明变量后再来初始化变量；例如：name="test"！
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
        alert(sex); //男;sex变量只能在show函数中访问
        alert(name);    //test;在show函数内可以访问全局变量
    }
    function set(){//声明set
        alert(sex); //报错，因为在set函数中不能访问show函数中声明的变量
        alert(name); //test;正常访问name属性，符合任何地方都可以访问到name变量
    }
    alert(name); //test;
    show();//执行函数show
    set();//执行set
```

# 数据类型
>Javascript属于弱类型语言，动态类型语言；在JS中总共有7种类型(函数不属于其中)：
1.基本类型:String,Number,Boolean
2.引用类型:Array,Object
3.特殊类型:undefined,null
4.纠结类型:Function
备注:纠结类型属于自己理解的类型，Function是否是JS数据类型我也不确定，但是函数可以通过instanceOf来判断出Function；对于类型的判断稍后解释；

判断数据类型的方法，这里先讲基本类型，引用类型和纠结类型

### 了解值类型和引用类型
