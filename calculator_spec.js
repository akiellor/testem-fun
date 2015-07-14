describe('calculator', function(){
  for (var i = 0; i < 500; i++) {
    it('should add', function(done){
      runs(function() {
        flag = false;
        value = 0;

        setTimeout(function() {
          value++;
          //keep returning false…
          flag = true;
        }, 50);
      }); 

      waitsFor(function() {
        return flag;
      }, "The Value should be incremented", 5000); 
    });
  }
});
