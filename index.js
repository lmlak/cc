const http=require('http');
var ch='home contact id about melek messange support';
const ser=http.createServer((req,res)=>{
    var a=req.url;
    a=a.replace('/','');
    while (a.indexOf('/')!=-1){
        a=a.replace('/',' ');
    }
    var a1=a;
    a=a+' ';
    // console.log(a.substr(0,a.indexOf(' ')))
    // a=a.replace(a.substr(0,a.indexOf(' ')+1),'')
    // console.log(a)
    while ( (ch.indexOf(a.substr(0,a.indexOf(' '))) !=-1) && (a!='')){
        a=a.replace(a.substr(0,a.indexOf(' ')+1),'')
        //  console.log(a)
    }
    if (a==''){
        res.statusCode=200;
        res.write('Dear costumer welcome form '+a1);
    }else{
        res.statusCode=404;
        res.write('404   Not Found');
        
    }
    res.end();
});
ser.listen(5000,()=>
{
    console.log('server running')
});
