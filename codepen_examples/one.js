var ColoredConsoleText = new function(){
    var self = this;
  
    self.controls = {
      input: document.getElementById('input'),
      bgToggle: document.getElementById('bg-toggle'),
      submit: document.getElementById('submit')
    }
  
    self.cssString = function(color){
      var background = self.controls.bgToggle.checked ? '#121C21' : '';
      return 'background: '+ background +'; color: ' + color;
    }      
  
    self.handleSubmit = function(text){
      var arguments = [''];
      var textArr = text.split('');
      var ratio = 360 / textArr.length;
      for( var i = 0; i < textArr.length; i++){
        arguments[0] = arguments[0] + '%c' + textArr[i];
        var lightness = self.controls.bgToggle.checked ? '70%' : '40%';
        var color = 'hsl('+ratio*i+', 100%, ' + lightness +')';
        arguments.push( self.cssString(color) );
        if(i === textArr.length - 1){
          console.log.apply(console, arguments);        
        }    
      }
      self.controls.input.value = '';
    }  
  
    self.controls.submit.addEventListener('click', function(e){
      e.preventDefault();    
      self.handleSubmit(self.controls.input.value);
    });  
  }
  
  