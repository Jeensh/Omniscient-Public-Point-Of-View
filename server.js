const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
const fs = require('fs'); // JSON 파일 읽기

// 네이버 검색 Open API 예제 - 블로그 검색
var client_id = 'Q5XjQPuQgvUh7MQCyBHx';
var client_secret = 'dF9OQ6AqrV';

// DB 연결
var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.m2pvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(에러, client){
    // 연결되면 할 결
    if(에러){
        return console.log(에러);
    }
    else{
        db = client.db('OPPOV');

        app.listen(8080, function(){
            console.log('listening on 8080')
        });
    }
});

// 메인 페이지
app.get('/', function(요청, 응답){
    응답.render('index.ejs');
})

// 진보,보수 동시 검색 페이지
app.get('/list',function(요청, 응답){
    응답.render('list.ejs', {주제 : 요청.query.subject});
});

// 보수 측 네이버 뉴스 검색
app.get('/result/liberal/:subject', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/news.json?query=' + encodeURI(req.query.query); // json 결과
 //   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
    var request = require('request');
    const option = {
        query : req.params.subject,
        start :1,
        display :100,
        sort :'sim'
    }
    var options = {
        url: api_url,
        qs : option,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const jsonData = JSON.parse(body);
        const result = jsonData;
        // 보수 뉴스만 걸러내기
        var i;
        var news = [];
        for (i=0; i<parseInt(result.display); i++){
            var con = result.items[i].originallink.includes('chosun') | result.items[i].originallink.includes('joongang') | result.items[i].originallink.includes('donga')
            if (con){
                news.push(result.items[i])
            }
            else{
                continue;
            }
        }
        res.render('result_lib.ejs', {posts : news, num : news.length})
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  })

// 진보 측 네이버 뉴스 검색
app.get('/result/progress/:subject', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/news.json?query=' + encodeURI(req.query.query); // json 결과
 //   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
    var request = require('request');
    const option = {
        query : req.params.subject,
        start :1,
        display :100,
        sort :'sim'
    }
    var options = {
        url: api_url,
        qs : option,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const jsonData = JSON.parse(body);
        const result = jsonData;
        // 진보뉴스만 걸러내기
        var i;
        var news = [];
        for (i=0; i<parseInt(result.display); i++){
            var con = result.items[i].originallink.includes('hani') | result.items[i].originallink.includes('khan') | result.items[i].originallink.includes('ohmynews')
            if (con){
                news.push(result.items[i])
            }
            else{
                continue;
            }
        }
        res.render('result_pro.ejs', {posts : news, num : news.length})
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  });