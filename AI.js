//this file is just a housing file the code is in the other two
function AI(){
  this.info=[];
  this.orders=[];
  this.commonOrders=[];
  this.vals=["abcdefghijklmnopqrstuvwxyz"];
  this.vals[0]+=this.vals[0].toUpperCase();
  this.sort=function(){
    for(var i=0;i<this.orders.length;i++){
      if(numOf(this.orders[i],this.orders)>=5&&this.commonOrders.findIndexOf(this.orders[i])>-1){
        this.commonOrders.push(orders[i]);
      }
    }
  }
  this..generate=function(){
    var out="";
    for(var i=0;i<2;i++){
      out+=translate(this.orders[Math.trunc(Math.random()*this.orders.length)]);
      out+=" ";
    }
    document.getElementById("output").innerHTML=out;
  }
}

function translate(c){
  var chars="abcdefghijklmnopqrstuvwxyz";
  var d="";
  chars+=chars.toUpperCase();
  for(var ii=0;ii<c.length;ii++){
    d+=chars.charAt(c[ii]);
  }
  return c;
}

function numOf(a, b){
  if(!a||!b){
    return;
  }
  var out=0;
  for(var ii=0;ii<b.length;ii++){
    if(b[ii]===a){
      out++;
    }
  }
  return out;
}
var ai=new AI();
function begin(){
  ai.gather(["Hello I'm JR","My name is JR","I'm JR","Hi Joe","Bye Joe"]);
  ai.sort();
  ai.generate()
}
