# Javascript条件语句和循环语句
### 条件语句(if,switch,三元运算符)
概念：条件语句主要用于在不同条件执行不同动作的行为，主要依据“是否”的关系来进行判断；
1. if条件语句:
>if条件语句翻译过来就是如果—其他的关系，如果a条件不成立，就执行其他的行为；
在Javascript，对于if条件语句我们可用以下几种形式来使用；
```javascript
    //形式1
    if(条件){
        结果1
    }
    //形式2
    if(条件){
        结果1
    }else{
        结果2
    }
    //形式3
    if(条件1){
        结果1
    }else if(条件2){
        结果2
    }...else if(条件n){//这里省略号表示无限个else if，不是语句的一部分
        结果n
    }else{
        结果n+1
    } 
```
实例代码如下:
```javascript
    var a=4;
    var b=4;
    //判断a>b，如果条件成立，就执行以下代码块的语句；
    //如果不成立，就执行else if的判断；
    //如果以上条件都不成立，就执行最终的else动作
    if(a > b){
        console.log("a大于b!")
    }else if(a < b){
        console.log("a小于b!");
    }else{
        console.log("a等于b!");
    }
```
2. switch条件语句:
> switch语句首先设置判断表达式，然后表达式的值会跟switch结构中的case的值进行比较，如果比较结果为true，则case相关联的代码块会被执行；
实例代码如下:
```javascript
    var n=1;
    switch(n){
        case 1:
            console.log("结果1");
            break;
        case 2:
            console.log("结果2");
            break;
        case 3:
            console.log("结果3");
            break;
        default:
            console.log("结果4");
            break;        
    }
```
备注:break关键字主要用来阻止条件继续执行,default关键字表示当条件都不满足时就执行default语句内的代码；
3. 三元运算符：条件?结果1:结果2
>三元运算符可以看成简单版的if条件语句，例如：
```javascript
    var a=1;
    var b=2;
    var result;
    result=a>b?a:b;
    //等同于以下代码
    if(a>b){
        result=a;
    }else{
        result=b;
    }
```
### 循环语句(for,while,do...while)
>循环语句，用来表示如果条件不符就继续重复执行，一直满足条件位置，若条件一直不满足，则进入死循环，这样浏览器就会崩溃；
>在循环语句中有两个较重要的关键字continue和break；continue表示跳出当前循环开始下一循环，break表示完全跳出循环；
for循环：实例代码如下
1. 没有continue和break关键字
```javascript
    var n=5;
    for(var i=0;i<n;i++){
        console.log("i value:"+i);
    }
```
2. continue关键字
```javascript
    var n=5;
    for(var i=0;i<n;i++){
        if(i = 3){
            continue; //通过continue关键字跳出循环，进行下一次循环；
        }
        console.log("i value:"+i);
    }
```
3. break关键字
```javascript
    var n=5;
    for(var i=0;i<n;i++){
        if(i = 3){
            break; //通过break关键字完全跳出循环，不在执行循环；
        }
        console.log("i value:"+i);
    }
```
while和do...while循环其实执行原理是一样的；它们之间的区别是do...while无论如何执行一次，while完全跟着条件来决定；
```javascript
    var m=1;
    while(m<1){
        console.log(m);	//不能执行，因为条件不满足
    }
    undefined
    var m=1;
    do{
        console.log(m);	//条件虽然不满足，但是还是会执行一次
    }while(m<1)
```