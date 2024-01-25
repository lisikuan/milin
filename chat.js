//获取相关标签
var _wrapper = document.querySelector("#wrapper");
var _inp = document.querySelector("#inp");
var _btn = document.querySelector("#btn");
var _name = document.querySelector("#name");


//得将聊天记录储存到数据库里去

/*var express = require('express');
//应用启动入口
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'));
var http = require('http');
var querystring = require('querystring');
//sql操作部分
const sqlite3 = require("sqlite3").verbose()
let sqliteDbPath = "Chat.db"
var db = new sqlite3.Database(sqliteDbPath)

var text = _inp.value;
var na = _name.value;
var sql_add = db.prepare(`insert into content (text,id) values('${text}','${na}')`);
sql_add.run()

app.get('/milin.html', function (req, res) {
    res.sendFile(__dirname + "/" + "chat.html");
})
app.post('/process_post', urlencodedParser, function (req, res) {
    var text = _inp.value;
    var na = _name.value;
    var sql_add = db.prepare(`insert into content (text,id) values('${text}','${na}')`);
    sql_add.run()
})*/




//定义数组存储头像
var img = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg'];
var me = ['./img/1.webp'];
//定义数组存储名字
var names = ['鼠鼠', '猪猪', '小小熊', '兔兔', '大熊', '小熊'];
var i = 1;

_btn.onclick = function () {
        //const sqlite3 = require("sqlite3").verbose()
//let sqliteDbPath = "Chat.db"
//var db = new sqlite3.Database(sqliteDbPath)
//还是无法实现储存，可恶

//随机的头像和姓名的下标
        var index = Math.floor(Math.random() * 6);
        //随机名字
        var id = names[index];
        //随机头像
        var imgs = img[index];
        //获取用户输入的input的值；
        var imgu = me[0];
    var msg = _inp.value;
    var name =_name.value;
        if (i % 2 == 0) {
            //判断为偶数行时，文本靠右,文本=文本+头像+名字:+信息
            _wrapper.innerHTML =
                `<div style=text-align:left;>${_wrapper.innerHTML}<img src="${imgs}"><span>${id}</span>:${msg}<br></div>`;
        } else {
            //判断为奇数行时，文本靠左,文本=文本+信息+:名字+头像
            _wrapper.innerHTML =
                `<div style=text-align:right;>${_wrapper.innerHTML}${msg}:<span>${name}</span><img src="${imgu}"><br></div>`;
        //var sql_add = db.prepare(`insert into content (text) values('${msg}')`);
        //sql_add.run()

        }
        
        //点击发送后清空input
        _inp.value = "";
        //增加行
        i++;
        _wrapper.scrollTop = _wrapper.scrollHeight;
    }