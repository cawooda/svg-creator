const Logo = require('../lib/Logo');
const Text = require('../lib/Text');

describe('Logo', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Logo', () => {
        it('should instatiate a Logo', () => {
            const title = "GrU";
            const textColor = "green";
            const shape = "ciRcle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            
            expect(logo).toBeInstanceOf(Logo);
            expect(logo.text).toBeInstanceOf(Text);
        
          });      
    });   

  });


  