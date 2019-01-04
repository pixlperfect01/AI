AI.prototype.generate=function(){
  var out="";
  for(var i=0;i<2;i++){
    out+=this.orders[Math.trunc(Math.random()*this.orders.length)]
    out+=" ";
  }
}
