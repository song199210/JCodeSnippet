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
> 