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

//