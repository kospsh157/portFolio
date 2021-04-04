const express = require('express');
const timeout = require('connect-timeout');
const app = express();

// 포트 설정 
app.set('port', process.env.PORT || 3500);




// 라우터 불러오기



// Top level Modules
app.use(timeout(2000));
app.use(express.json());
app.use(express.urlencoded({extended: true}));




// 시간초과 처리
    function haltOnTimedout(req, res, next){
        if (!req.timedout) next();
        // timedout 프로퍼티가 없어야만, 다음 모듈로 넘긴다.
        // 만약 여기서 timedout 프로퍼티가 존재한다면,
        // next();를 만나지 못해서 넘어가지 못한다.
        // 즉 여기서, timedout 가 걸려 버린다.
    }
    
    // 시간 초과 Test
    app.use((req, res, next) => {
        console.log("시간 초과 TEST 진입");
        setTimeout(()=>{
            if(req.timedout){
                // req.에timedout 프로퍼티가 있다면,
                // 바로 다음 모듈로 넘겨서 결국 에러 핸들러 까지 가게 한다.
                next();
            }else{
                // 만약 timedout 프로퍼티가 없다면,
                // 성공 반응을 보낸다.
                res.send('success');
            }
        }, 3000); // 현재 타임아웃 기준이 2초이다. 
        // 따라서 여기서 2초 이전으로 하면 성공하고 2초 이상으로하면 요청초과된다.
    });
    //app.use(haltOnTimedout);
  


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
app.use((err, req, res, next)=>{
    console.log('Server Error!!!!!!!!!!!');
    if(req.timedout){
        res.end('503!! Timed Out');
    }
    res.end('500!! Server Error');
});



app.listen(app.get('port'), () => {
    console.log(`현재 ${app.get('port')}포트에서 서버 대기중...`);
});