//��ȡ��ر�ǩ
var _wrapper = document.querySelector("#wrapper");
var _inp = document.querySelector("#inp");
var _btn = document.querySelector("#btn");
var _name = document.querySelector("#name");


//�ý������¼���浽���ݿ���ȥ

/*var express = require('express');
//Ӧ���������
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'));
var http = require('http');
var querystring = require('querystring');
//sql��������
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




//��������洢ͷ��
var img = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg'];
var me = ['./img/1.webp'];
//��������洢����
var names = ['����', '����', 'СС��', '����', '����', 'С��'];
var i = 1;

_btn.onclick = function () {
        //const sqlite3 = require("sqlite3").verbose()
//let sqliteDbPath = "Chat.db"
//var db = new sqlite3.Database(sqliteDbPath)
//�����޷�ʵ�ִ��棬�ɶ�

//�����ͷ����������±�
        var index = Math.floor(Math.random() * 6);
        //�������
        var id = names[index];
        //���ͷ��
        var imgs = img[index];
        //��ȡ�û������input��ֵ��
        var imgu = me[0];
    var msg = _inp.value;
    var name =_name.value;
        if (i % 2 == 0) {
            //�ж�Ϊż����ʱ���ı�����,�ı�=�ı�+ͷ��+����:+��Ϣ
            _wrapper.innerHTML =
                `<div style=text-align:left;>${_wrapper.innerHTML}<img src="${imgs}"><span>${id}</span>:${msg}<br></div>`;
        } else {
            //�ж�Ϊ������ʱ���ı�����,�ı�=�ı�+��Ϣ+:����+ͷ��
            _wrapper.innerHTML =
                `<div style=text-align:right;>${_wrapper.innerHTML}${msg}:<span>${name}</span><img src="${imgu}"><br></div>`;
        //var sql_add = db.prepare(`insert into content (text) values('${msg}')`);
        //sql_add.run()

        }
        
        //������ͺ����input
        _inp.value = "";
        //������
        i++;
        _wrapper.scrollTop = _wrapper.scrollHeight;
    }