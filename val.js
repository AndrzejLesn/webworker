var i = 0.40;
function timer()
{
    var x = Math.random();
    var y = Math.random();

    if (x < 0.5)
    {
        i += y / 5;
    }
    else
    {
        i -= y / 5;
    }
    if (i > 0)
    {
        postMessage(i);
        setTimeout(timer, 1000);
    }
    else
    {
        postMessage("Firma splajtowala :(");
    }
} 

setTimeout(timer, 1000);