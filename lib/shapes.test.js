
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
        expect(shape.render()).toEqual('<polygon points="537.4213562373095,559.4213562373095 254.57864376269052,559.4213562373095 254.57864376269046,276.5786437626905 537.4213562373095,276.5786437626905" fill="red" />');

      });
      it('should return the correct details for a blue Triangle when called', () => {
        const shape = new Triangle;
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

      });
    });
  });