// When using AWS lambda func, request through it
const fetchFunc = async (url, options) => {
    let response = null;
    if(!url || !options) {
        console.error('Err_in_fetchFunc_no_argument');
    }
    await fetch(url, options).then(res => {
        return res.json();
    }).then(json => {
        response = json
    });
    return response;
}

export default fetchFunc;