var para = document.createElement("div");
para.setAttribute("id", "fib");
para.setAttribute("class", "column column-one");
para.style.textShadow = '1px 1px 1px black';
para.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
var node = document.createTextNode("Fibonacci numbers:");
para.appendChild(node);
var element = document.getElementsByTagName("body")[0];
element.appendChild(para);

var para = document.createElement("div");
para.setAttribute("id", "trib");
para.setAttribute("class", "column column-two");
para.style.textShadow = '1px 1px 1px black';
para.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
var node = document.createTextNode("Tribonacci numbers:");
para.appendChild(node);
var element = document.getElementsByTagName("body")[0];
element.appendChild(para);
var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = 'black';

var para = document.createElement("div");
para.setAttribute("id", "pell");
para.setAttribute("class", "column column-three");
para.style.textShadow = '1px 1px 1px black';
para.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
var node = document.createTextNode("Pell numbers:");
para.appendChild(node);
var element = document.getElementsByTagName("body")[0];
element.appendChild(para);

var element = document.getElementsByTagName("title")[0];
element.innerHTML = "Programatic AF";

function recursiveFibonacci(n)  {
    if(n == 0)
        return 0;
    else if(n == 1)
        return 1;
    else
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
function recursiveTribonacci(n)
{
    if(n==1){
        return 0;
    }
    else if(n==2){
        return 1;
    }
    else if(n==3){
        return 1;
    }
    else if(n>3){
        return (recursiveTribonacci(n-1)+recursiveTribonacci(n-2)+recursiveTribonacci(n-3));
    }
    else{
        return -1;
    }
}

function recursivePell(n){
    if(n === 0){
      return 1;
    }
    else if (n===1){
      return 2;
    }
    else{
      return (2*recursivePell(n - 1)) + recursivePell(n - 2);
    }

}


function fibDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDiv");
  if(n==1)
    value = 0;
  else if(n==2)
    value = 1;
  else if(n==3)
    value = 1;
  else {value = recursiveFibonacci(n);}
  var node = document.createTextNode('Fib('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('fib');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  fibDivs(n-1,x+1);
}

function tribDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDiv");
  if(n<2){
    if(n === 0){
      value=0;
    }
    else if (n===1){
      value=1;
    }
  }
  else {value = recursiveTribonacci(n);}
  var node = document.createTextNode('Fib('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('trib');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  tribDivs(n-1,x+1);
}

function pellDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDiv");
  if(n<2){
    if(n === 0){
      value=1;
    }
    else if (n===1){
      value=2;
    }
  }
  else {value = recursivePell(n);}
  var node = document.createTextNode('Pell('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('pell');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  pellDivs(n-1,x+1);
}

function fibonacci(){
  fibDivs(15,0);
}

function tribonacci(){
  tribDivs(12,0);
}
function pell(){
  pellDivs(9,0);
}
function addHyperlinks(){
  var div = document.createElement('div');
  div.setAttribute("id", "test");
  var node = document.createTextNode('This is a test');
  div.appendChild(node);
  var element = document.getElementById('pell');
  element.appendChild(div);
  var str = "What are Pell numbers?";
  var result = str.link("https://en.wikipedia.org/wiki/Pell_number#Computations_and_connections");
  document.getElementById("test").innerHTML = result;

  var div = document.createElement('div');
  div.setAttribute("id", "test1");
  var node = document.createTextNode('This is a test');
  div.appendChild(node);
  var element = document.getElementById('fib');
  element.appendChild(div);
  var str = "What are Fibonacci numbers?";
  var result = str.link("https://en.wikipedia.org/wiki/Fibonacci_number");
  document.getElementById("test1").innerHTML = result;

  var div = document.createElement('div');
  div.setAttribute("id", "test2");
  var node = document.createTextNode('This is a test');
  div.appendChild(node);
  var element = document.getElementById('trib');
  element.appendChild(div);
  var str = "What are Tribonacci numbers?";
  var result = str.link("http://mathworld.wolfram.com/TribonacciNumber.html");
  document.getElementById("test2").innerHTML = result;

}
pell();
tribonacci();
fibonacci();
addHyperlinks();

//additional css in js
var style = document.createElement('style');
style.textContent =
".container {"+
"    position: relative;"+
"    width: 500px;"+
"}"+
".container div {"+
"    height: 300px;"+
"}"+

".column-one {"+
"    width: 33%;"+
"    left: 0;"+
"    background: #00F;"+
"    position: absolute;"+
"}"+
".column-two {"+
"    width: 34%;"+
"    background: #933;"+
"    margin-left: 32.5%;"+
"    position: absolute;"+
"}"+
".column-three {"+
"    width: 33%;"+
"    right: 0;"+
"    position: absolute;"+
"    background: #999;"+
"}"
;

document.querySelector('body').appendChild(style);
