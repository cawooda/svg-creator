const Shape = require('../lib/Shape');

describe('Shape', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    
        it('should produce a Circle when instatiated', () => {
            const shape = new Shape;
            expect(shape).toBeInstanceOf(Shape);
          });
        it('should correctly set the color when calling setColor to "red"', () => {
            const shape = new Shape;
            const color = "red";
            shape.setColor(color);
            expect(shape.getColor()).toEqual(color);
            expect(shape.color).toEqual(color);
          });            
});

  


  