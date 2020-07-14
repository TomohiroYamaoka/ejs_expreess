const express=require('express');
const app=express();

const path=require('path');


//１番目の引数は3000番,2番目はコールバック関数
app.listen(3000,()=>{
    console.log("Running at Port 3000...");
});

// 静的ファイルのルーティング
//useメソッドはルーティングを行うミドルウェアを受け取る。
//__dirnameはnode.jsモジュールで
app.use(express.static(path.join(__dirname, 'public')));

//その他のリクエストに対する404エラー
app.use((req,res)=>{
    res.sendeStatus(404);
});

//async awaitでfetchを使用するとresponseオブジェクトというものが返却される。
async function callAPi(){
    const res= await window.fetch("");
    const users= await res.json();
    console.log(res);
}
callAPi();


function callAPi(){
    fetch("url")
    .then(function(res){
        return res.json();
    })
     .then(function(users){
         console.log(users);
     });
    }


    