const express = require('express');
const timeout = require('connect-timeout');
const app = express();
const fs = require('fs').promises;

// 포트 설정 
app.set('port', process.env.PORT || 3500);




// 라우터 불러오기




// Top level Modules
app.use(timeout(5000));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
    
    // 시간 초과 Test Module
    app.use('/timedoutTest', (req, res, next) => {
        console.log('Entering Timed Out Test Statement');
        setTimeout(() => {
            if(req.timedout){
                // req.에timedout 프로퍼티가 있다면,
                // 바로 다음 모듈로 넘겨서 결국 에러 핸들러 까지 가게 한다.
                next();
            }else{
                // next();
                // 만약 여기까지 와도, next()가 없다면, 시간초과이다.
                // 하나의 요청에 반드시 하나의 res.send()가 있어야 한다.
            }
        }, 6000); // 현재 타임아웃 기준이 5초이다. 
        // 따라서 여기서 5초 이전으로 하면 성공하고 5초 이상으로하면 요청초과된다.
    });



// 사용할 모듈
    // 정적 파일로 보여주기
    app.get('/', express.static(__dirname + '/public'));
    // index.html 를 보여주고 싶다면, index.html 적으면 안된다.
    // 그냥 public까지 경로만 지정해줘야 한다.
    // 당연히 public 폴더 안에, 파일 이름은 index로 되어 있어야 한다.


// 주소 맵핑 및 라우팅 맵핑
    // 리액트로 부터 오는 API 요청
    app.get('/api/hello', (req, res) => {
        // json 모듈을 사용시에는 json 형태를 응답 할 때는 반든시 json() 함수로 응답해야한다.
        res.json({
            express: 'haha',
        }).end();
    });

    app.post('/api/world', (req, res) => {
        console.log("From node  :  ");
        console.log(req.body.post);
        res.end(
            req.body.post,
        );
    });


// Error Handler (404 There is no Page)
// 타임 아웃일 경우 여기까지 오지 않는다. 바로 에러 핸들러 모듈로 간다.
app.use((req, res) => {
    console.log('Entering 404 handler');
    fs.readFile(__dirname + '/public/errorPages/404 Not Found.html')
        .then((data) => {
            res.status(404).end(data);
        })
        .catch((err) => {
            console.log('404PageIOError : ');
            console.log(err);
            res.status(404).end('fsCatchStatement');
        });
});



// Error Handler (timed out + Unknown Server Error)
// 알수 없는 오류나, 요청 시간 치과 오류가 일어났을때, 바로 여기 핸들러로 도착하는 것을 보면
// 왜 꼭 에러핸들러는 4개의 매개변수를 써줘야하는지 이해된다.
// 고유갯수인 것이다. 아마도 4개의 매개변수를 에러핸드러로 인지하나보다.
app.use( (err, req, res, next) => {
    if(req.timedout){
        console.log('Entering timeout error handler');
        fs.readFile(__dirname + '/public/errorPages/503 TimedOut.html')
            .then((data) => {
                res.status(503).end(data);
            })
            .catch((err) => {
                // 위에 res.end(data) 에서 에러가 나도 여기로 잡힌다.
                console.error('timeoutPageIOError : ');
                console.error(err);
                res.status(503).end('fsCatchStatement');
            });
    }else{
        // Unknown Error
        console.log('Entering Unknown Error Handler : ');
        console.error(err);
        fs.readFile(__dirname + '/public/errorPages/500 ServerError.html')
            .then((data) => {
                res.status(500).end(data);
            })
            .catch((err) => {
                console.log('unknownPageIOError : ');
                console.error(err);
                res.status(500).end('fsCatchStatement');
            });
    };
});


app.listen(app.get('port'), () => {
    console.log(`현재 ${app.get('port')}포트에서 서버 대기중...`);
});