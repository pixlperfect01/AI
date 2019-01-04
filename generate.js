AI.prototype.generate=function(){
  var out="";
  for(var i=0;i<2;i++){
    out+=translate(this.orders[Math.trunc(Math.random()*this.orders.length)]);
    out+=" ";
  }
  document.getElementById("output").innerHTML=out;
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
