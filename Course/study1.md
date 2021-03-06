# Javascript初学者需要了解的知识
>简介：Javascript是一门轻量级的编程语言，相对于Java和C语言，它不需要额外配置编译环境。它在浏览器中就可以运行；Javascript可编写到HTML页面的script标签中，也可以独立编写到JS文件中，然后通过script标签的src属性进行引入即可；

特点：轻量级，弱类型，跨平台；说白了就是代码“简单”，“自由”，“兼容性好”；所以入门Javascript并不是很难，但是Javascript是个值得深入研究的语言，目前整个前端体系知识点中都有它的存在；

#### 基本概念
1. 语句：以分号(;)结束的一段代码成为语句，每条语句告诉浏览器该干些啥；例如:console.log("Hello");这条语句告诉浏览器打印出Hello字符串；
2. 注释：用来将能够执行的代码变成不需要执行的代码，注释又分单行注释和多行注释；
    1. 符号//为单行注释；
    2. 符号/*注释内容*/为多行注释；
例如：
```javascript
    //console.log("我被单行注释了，所以不能显示了");
    /*
    console.log("我被多行注释了，不能显示了");
    console.log("我被多行注释了，不能显示了");
    console.log("我被多行注释了，不能显示了");
    */
    console.log("我没有被注释");
```
3. 关键字：
在Javascript中，关键字是指Javascript语言中自定义好的一系列英文字符串，具体特殊的作用；认识关键字主要防止我们在给变量或者函数等命名时，应当避免与关键字同名；否则容易发生冲突；Javascript的关键字有：
if,else,function,break,continue,switch,for,while,return,try,var,finally,do,case,witch,this等一系列关键字；还有很多，这里就不一一列出来，在以后的开发过程中你就会发现更多的关键字；
4. 代码块：
包含在{}符号中的代码可以成为代码块，在Javascript中代码块并没有实际性的作用，在ES2016中，结合let关键字代码块就相当于代码执行的作用域，在这里了解下即可，详情等日后深入介绍；
5. javascript的命名：
javascript的命名主要是给一些变量和函数进行命名，命名说白了就是个称呼，但是建议这种称呼最好遵循Javascript命名规则：规则如下；来自于网上收集;
 1. 变量名区分大小写，允许包含字母、数字、美元符号($)和下划线，但第一个字符不允许是数字，不允许包含空格和其他标点符号
 2. 变量命名长度应该尽可能的短，并抓住要点，尽量在变量名中体现出值的类型
 3. 尽量避免使用没有意义的命名
 4. 禁止使用JavaScript关键词、保留字全名
 5. 变量名命名方法常见的有匈牙利命名法、驼峰命名法和帕斯卡命名法
 6. 运算符：在Javascript有很多不同类型的运算符，我们目前只需要了解以下几类即可，以下几类也是用的比较多的运算符；
    1. 算术运算符：算术运算符主要针对于Number类型的数据，分别是(+)减(-)乘(*)除(/)，累加(++)，累减(--)，求余(%);代码如下:
    ```javascript
        console.log(1+2);   //3 加发运算符
        console.log(2-1);   //1 减法运算符
        console.log(1*2);   //2 乘法运算符
        console.log(10/2);  //5 除法运算符
        console.log(10%3);  //1 求余运算符
        //累加累减运算符其实分两步完成的。运算，赋值这两步；
        //该运算符分“先运算后赋值(n++)”和“先赋值后运算(++n)”这两种情况;
        var n=1;
        var a=n++;  //先赋值后运算
        console.log(a); //1;先将n=1复制给变量a
        console.log(n); //2;赋值完成后n就自我递增+1
        var m=1;
        var b=++m;  //先运算再复制
        cosole.log(b);  //2;这步等变量m运算完成再赋值给变量b
        console.log(n); //2;
    ```
    2. 赋值运算符：该运算符也主要针对Number类型的数据，分别是=,+=,-=,%=,/=,*=;
    ```javascript
        var a=1;
        var a=a+4;
        console.log(a); //5
        //等同于以上
        var a=1;
        var a+=4;
        console.log(a); //5  
    ```
    从以上代码可知，赋值运算符其实是a=a+4的简写，其他运算符也是如此
    3. 比较运算符：比较运算符当然比较条件是否符合，符合返回true，不符合返回false
    ```javascript
        var a=8;
        console.log(a == 8);    //等于比较;返回false
        //全等于比较;返回false,全等于包括值和类型;
        //a=="8"返回true;“==”运算符只是比较值是否等于;
        console.log(a === "8");
        console.log(a != 4);    //不等于比较;返回true
        console.log(a>6);   //大于比较;返回true
        console.log(a<6);   //小于比较;返回false
        console.log(a<=8);  //小于等于比较;返回true
        console.log(a>=8);  //大于等于比较;返回false        
    ```
    4. 逻辑运算符：逻辑判断主要有逻辑或(||)，逻辑与(&&)，逻辑非(!);
    ```javascript
        var bool1=true;
        var bool2=false;
        //返回true，逻辑或是指当其中两个有一个为true，则返回true;
        console.log(bool1 || bool2);
        //返回false，逻辑与是指其中两个一定都为true，才返回true，否则返回false;
        console.log(bool1 && bool2);
        //返回false，逻辑非是指若指定的值为true，则变成false;返回值是其相反值
        console.log(!bool1);
    ```
    5. 三元运算符：写法（条件?结果1:结果2;
    ```javascript
        var a=3;
        var b=2;
        //若a大于b成立(返回true)，则返回a;若不成立，这返回b;
        console.log(a > b?a:b);
    ```
