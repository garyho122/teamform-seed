

describe('loading', function() {
		 
      beforeEach(function(){
        module('teamform');
  
        inject(function($compile, $rootScope){
        compile = $compile;
        scope = $rootScope.$new();
        });
  
        directiveElem = getCompiledElement();
      });

	  	  
		  it('rdLoading', function() {
          
          expect(controller.rdLoading()).toHaveBeenCalled();

		  });



};