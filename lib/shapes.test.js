
const {Triangle,Square,Circle} = require('../lib/shapes')

describe('Shape', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('shape construction', () => {
      it('should return the correct details for a blue Triangle when called', () => {
        const shape = new Triangle;
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

      });
      it('should return the correct details for a red Square when called', () => {
        const shape = new Square;
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');

      });
    });
  });