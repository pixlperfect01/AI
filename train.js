AI.prototype.gather=function(data){
  for(var i=0;i<data.length;i++){
    this.analyze(data[i]);
  }
}

AI.prototype.analyze=function(str){
  this.info.push(str);
}
