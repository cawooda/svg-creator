const {Circle, Square, Triangle} = require('../lib/Shapes');

describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Circle', () => {
        it('should produce a Circle when instatiated', () => {
            const shape = new Circle;
            expect(shape).toBeInstanceOf(Circle);
          });
        it('should contain the correct shape properties for "circle"', () => {
            const shape = new Circle;
            expect(shape.shape).toEqual("circle");
            expect(shape.shapeDescriptor).toEqual("circle");
          });         
    });   

    describe('Square', () => {
        it('should produce a Square when instatiated', () => {
            const shape = new Square;
            expect(shape).toBeInstanceOf(Square);
          });
        it('should contain the correct shape properties for "square"', () => {
            const shape = new Square;
            expect(shape.shape).toEqual("square");
            expect(shape.shapeDescriptor).toEqual("rect");
          });
    });

    describe('Triangle', () => {
        it('should produce a Triangle when instatiated', () => {
            const shape = new Triangle;
            expect(shape).toBeInstanceOf(Triangle);
          });
        it('should contain the correct shape properties for "triangle"', () => {
            const shape = new Triangle;
            expect(shape.shape).toEqual("triangle");
            expect(shape.shapeDescriptor).toEqual("polygon");
          });
    });

  });


  