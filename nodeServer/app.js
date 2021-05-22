const express = require('express');
const timeout = require('connect-timeout');
const app = express();
const fs = require('fs').promises;
const morgan = require('morgan');
const path = require('path');

// 포트 설정 
app.set('port', process.env.PORT || 3500);




// 라우터 불러오기




// Top level Modules
app.use(morgan('dev'));
app.use(timeout(5000));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 빌드한 리액트 정적파일 연결
console.log(__dirname); // /Users/psh/Desktop/portFolio/nodeServer
app.use(express.static(path.join(__dirname, '/reactFront/build')));    

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




// 위에서 이미 빌드된 리액트 폴더를 연결했기 때문에 더이상의 주소맵핑-모듈연결은 테스트 용도로만 사용한다.
app.get('*', (req, res) => {
    // console.log(path.join(__dirname, '/reactFront/build/index.html'));
    res.sendFile(path.join(__dirname, '/reactFront/build/index.html'));
    // try {
    //     fs.readFile(__dirname + '/reactFront/build/index.html')
    //         .then(data => {
    //             res.end(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     //res.sendFile(path.join(__dirname, '/reactFront/build/index.html'));
    // } catch (err) {
    //     console.log('/ 페이지 로딩중 오류');
    //     console.log(err);
    // }
});
// index.html 를 보여주고 싶다면, index.html 적으면 안된다.
// 그냥 public까지 경로만 지정해줘야 한다.
// 당연히 public 폴더 안에, 파일 이름은 index로 되어 있어야 한다.


// 주소 맵핑 및 라우팅 맵핑
    // 리액트로 부터 오는 API 요청
    app.get('/api/hello', (req, res) => {
        // json() mudule is JSON.stringify() 
        res.json({
            express: 'haha',
        }).end();
    });

    app.post('/api/test', (req, res) => {
        console.log('node: From front data  :  ');
        // This way is to receive from front data
        console.log(req.body);
        // req.body안에 프론트 axios에서 보낸 데이터가 들어있다.
        // 이 req.body에는 프론트에서 보낸 데이터가 들어가있고, 이걸 다시
        // 프론트로 그대로 보내면, 프론트에서는 res.data에 들어가 있다. (axios 기준)

        if(req.body.data1 === 'It is Default.'){
            res.end('It is String.');
        }else{
            res.end('node : Default.');
        }
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
    console.log(`현재 ${app.get('port')}port is waiting...`);
});