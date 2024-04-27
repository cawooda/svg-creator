const Logo = require('../lib/Logo');
const Shape = require('../lib/Shape');
const Text = require('./Text');

describe('Logo', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Logo', () => {
        it('should contain objects of Shape and Text', () => {
            const title = "GrU";
            const textColor = "green";
            const shape = "ciRcle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            
            expect(logo.shape).toBeInstanceOf(Shape);
            expect(logo.text).toBeInstanceOf(Text);
            //expect(logo.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        
          });      
    });   

    describe('Text', () => {
        it('should contain an upperCased title', () => {
            const title = "GrU";
            const textColor = "green";
            const shape = "ciRcle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            
            expect(logo.text.title).toEqual(title.toLocaleUpperCase());
          });   
        it('should crop the title to 3 letters', () => {
            const title = "GFGFD";
            const textColor = "green";
            const shape = "ciRcle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            expect(logo.text.title).toEqual(title.slice(0,3));
        }); 
        it('should set the color correctly', () => {
            const title = "GFG";
            const textColor = "green";
            const shape = "ciRcle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            expect(logo.text.color).toEqual(textColor);
            expect(logo.shape.color).toEqual(color);
        });
    });

    describe('Shape', () => {
        it('should return the correct details for a triangle',()=>{
            const title = "TES";
            const textColor = "green";
            const shape = "triangle"
            const color = "red";
            const logo = new Logo({title,textColor,shape,color})
            expect(logo.shape.drawingDetails).toEqual(`points="50 5, 100 80, 0 80"`);
            expect(logo.shape.shapeDescriptor).toEqual(`polygon`);
        });
        it('should handle ....',()=>{

        });
           

    });

  });


  