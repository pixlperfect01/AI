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
  this.gather=function(data){
    for(var i=0;i<data.length;i++){
      this.analyze(data[i]);
    }
  }
  this.analyze=function(str){
    var val=[];
    this.info.push(str);
    for(var ii=0;ii<str.length;ii++){
      if(str.charAt(ii)!==" "){
        if(this.vals.indexOf(str.charAt(ii))>-1){
          val.push(this.vals.indexOf(str.charAt(ii)));
        }
      }else{
        this.orders.push(val);
        val=[]
      }
    }
    this.orders.push(val);
  }
  this.generate=function(){
    var out="";
    for(var i=0;i<2;i++){
      out+=translate(this.orders[Math.trunc(Math.random()*this.orders.length)]);
      out+=" ";
    }
    document.getElementById("output").innerHTML=out;
    console.log(out+"K");
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
