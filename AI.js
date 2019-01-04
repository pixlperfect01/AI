//this file is just a housing file the code is in the other two
function AI(){
  this.info=[];
  this.orders=[];
  this.commonOrders=[];
  this.vals=["abcdefghijklmnopqrstuvwxyz"];
  this.sort=function(){
    for(var i=0;i<this.orders.length;i++){
      numOf(this.orders[i],this.orders);
    }
  }
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
