/*AI.prototype.gather=function(data){
  for(var i=0;i<data.length;i++){
    this.analyze(data[i]);
  }
}

AI.prototype.analyze=function(str){
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
*/
