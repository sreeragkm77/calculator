
function dispBox(num){
    var res=document.querySelector(".disp")
    res.value+=num
}
function print(){
    var res=document.querySelector(".disp").value;
    var out=eval(res);
    var res=document.querySelector(".disp").value=out;

}
function del(){
    var res=document.querySelector(".disp").value;
    var data=res.slice(0,-1);
    var res=document.querySelector(".disp").value=data;
    value=data;

}
function clr(){
    var res=document.querySelector(".disp").value;
    var data=res.slice(0,0);
    var res=document.querySelector(".disp").value=data;
    value=data;
}