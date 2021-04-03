const express = require('express');
const timeout = require('connect-timeout');
const bodyParser = require('body-parser');
const app = express();

// 포트 설정 
app.set('port', process.env.PORT || 3500);

// 라우터 불러오기



// Top level Modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



/* 시간 초과 요청 처리
var timeout = require('connect-timeout'); //express v4

app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

*/

// 시간초과 처리
// app.use(timeout('3s'));


// 사용할 모듈
    // 정적 파일로 보여주기
    app.use(express.static(__dirname + '/public'));
    // index.html 를 보여주고 싶다면, index.html 적으면 안된다.
    // 그냥 public까지 경로만 지정해줘야 한다.
    // 당연히 public 폴더 안에, 파일 이름은 index로 되어 있어야 한다.







// 주소 맵핑 및 라우팅 맵핑
    // 리액트로 부터 오는 API 요청 
    app.get('/api/hello', (req, res) => {
        res.send({express : 'Hello From Express'});
    });

    app.post('/api/world', (req, res) => {
        console.log(req.body);
        res.send(
            `I received your POST request. This is what you sent me : ${req.body.post}`,
        );
    });



    






// 빈페이지 처리
app.use((req, res)=>{
    res.end('404! Not Found!!!');
});



// 에러 처리
app.use(()=>{
    console.log('Server Error!!!!!!!!!!!');
    res.end('500! Server Error');
});



app.listen(app.get('port'), () => {
    console.log(`현재 ${app.get('port')}포트에서 서버 대기중...`);
});