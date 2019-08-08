import { strike, ball, foul, hit } from './helpers';

describe('Calculator.js', () => {

  describe('strike()', () => {
    it('should add 1 to the given value and return that value', () => {
      expect(strike(0)).toBe(1);
    });
    it('should not add to number greater than 3', () => {
      expect(strike(3)).toBe(3);
    });
  });

  describe('ball()', () => {
    it('should add 1 to the given value and return that value', () => {
      expect(ball(2)).toBe(3);
    });
    it('should not add to number greater than 4', () => {
      expect(ball(4)).toBe(4);
    });
  });

  describe('foul()', () => {
    it('should return 1 if the given strikes number is 0', () => {
      expect(foul(0)).toBe(1);
    })
    it('should return 2 if the given strikes number is 1', () => {
      expect(foul(1)).toBe(2);
    })
    it('should return 2 if the given strikes number is 2', () => {
      expect(foul(2)).toBe(2);
    })
  });

  describe('hit()', () => {
    it('should reset balls to 0 and strikes to 0', () => {
      expect(hit()).toBe(0);
    })
  })
  
})