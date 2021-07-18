async function testQuery(fetchUrl) {
    const myHeaders = new Headers();

    myHeaders.append('Content-type', 'application/json');
    const raw = JSON.stringify({'firstName': 'Ha!', 'lastName': 'Park!!'});

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // contain reponse data from API
    let sendData = {code: null, body: null};
    await fetch(fetchUrl, requestOptions)
        .then(response => {
            const code = response.status;      // http response status code
            console.log('http응답 코드: ' + code);
            const body = response.json();      // Promise Data
            const resultData = {code, body};   // {code: code, body: body}
            return resultData;
        })
        .then(resultData => {
            if(resultData.code === 200) {
                console.log('InFetch: Success');
                sendData = {body: resultData.body}; // send only body: PromiseObj
            }else if((resultData.code > 400 && resultData.code <= 500)) {
                // But Aws lambda doesn't output others HttpStatusCode except 200
                // So these codes never gonna work!
                console.error('InFetch: http status code is over 400');
                console.log('http status code: ' + resultData.code); 
                sendData = {...sendData, code: resultData.code}; // send only code
            }else{
                // But Aws lambda doesn't output others HttpStatusCode except 200
                // So these codes never gonna work!
                console.log('InFetch: Abnormal detection');
                console.log('http status code: ' + resultData.code);
                sendData = {...sendData, code: resultData.code}; // send only code
            }
        })
        .catch(err => {
            console.log('InTryCatch: ReactFetchError');
            console.error(err);
        });
    return sendData;
}

export default testQuery;