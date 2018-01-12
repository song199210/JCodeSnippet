;(function(_g){
    var dfEventFuns=function(){
        this.eNames={};	//订阅的事件list
    }
    dfEventFuns.prototype={
        on:function(eType,eFuns){//绑定自定义事件
            if(!(this.eNames) || !(this.eNames instanceof Array)){
                this.eNames={};
            }
            this.eNames[eType]=[];
            this.eNames[eType].push(eFuns);
        },
        emit:function(eType){//触发自定义事件
            if(!eType){
                console.log("暂无可触发的事件");
                return false;
            }
            var eFunsList=this.eNames[eType];
            if(!(eFunsList instanceof Array)){
                console.log(eType+"事件没有回调函数!");
                return false;
            }
            for(var i=0,len=eFunsList.length;i<len;i++){
                eFunsList[i](Array.prototype.slice.call(arguments,1)[0]);
            }
        },
        remove:function(eType){//移除自定义事件
            if(!eType){
                console.log("暂无可移除的事件");
                return false;
            }
            var i=0,eKeys=Object.keys(this.eNames),len=eKeys.length;
            for(;i<len;i++){
                if(eKeys[i] == eType){
                    delete this.eNames[eKeys[i]];
                    break;
                }
            }
        }
    }
    _g.objEvent=new dfEventFuns();
})(window);