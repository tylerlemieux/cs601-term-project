// Returns a promise 
function onPageLoaded() {
    var httpRequest;
}

var httpGet = (function(url) {
    return new Promise((resolve, reject) => {
        httpRequest = new XMLHttpRequest();

        if(!httpRequest) { 
            alert("Failed to initialize request"); 
            return;
        }

        httpRequest.onreadystatechange = handleHttpRequestResponse(resolve, reject);
        httpRequest.open('GET', url);
        httpRequest.send();
    });
})

var handleHttpRequestResponse = function(resolve, reject){
    if(httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            resolve(JSON.parse(httpRequest.responseText));
        } else {
            reject(new Error("Error occurred in ajax request"));
        }
    }
}