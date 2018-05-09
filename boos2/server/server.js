import { POINT_CONVERSION_COMPRESSED } from "constants";

const  express=require("express");
//const  mongoose=require("mongoose")
//连接MongoDB，并且使用zixue-react这个集合
// const MO_URL="";
// mongoose.connect(MO_URL);
// mongoose.connections.on("connected",function(){
//     console.log("monge connect sucess")
// })
//类似MySQL，mongo里面有字段、文档的概念,此时新建一个user的集合，并规定规则
//  const User=mongoose.model("user",new mongoose.Schema({
//      userName:{type:String,require:true},
//      age:{type:Number,require:true}
//  }))



 //新建数据,只要保存即已经创建成功，然后就可以注释掉了，或者在改成去他的，去创建新的数据
 /*user.create({
     name:"jiangbo",
     age:18
 },function(err,doc){
     if(!err){
         console.log(doc)
     }else{
         console.log(err)
     }
 })*/




  //删除数据,只要保存即已经删除成功，然后就可以注释掉了，或者在改成去他的，去删除其他的数据
 /* user.remove({
 //删除包含年龄为18岁的数据
    age:18
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})*/


//更新数据,只要保存即已经更新成功，然后就可以注释掉了，或者在改成去他的，去更新其他的数据
/*user.update({
//更新小明的年龄为26
   "name":"xiaoming"
},{"$set":{age:26}},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})*/




//新建App
const app=express()
app.get("/",function(req,res){
    res.send("<h2>我是server端</h2>")
})
app.get("/date",function(req,res){
    //手动返回一个json数据
    /*res.json({
        name:"zhangyuhong",
        age:18,
        height:168,
        weight:100
    })*/



    //查找数据，当查询条件为空的时候，默认查找全部
    /* user.find({},function(){
        res.json(doc)
    })*/
})
app.listen(9030,function(){
    console.log("node app start at  port 9030")
})