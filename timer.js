var i = 0;
function timer()
{
    i += 1;
    postMessage(i);
    setTimeout(timer, 1000);
} 

setTimeout(timer, 1000);