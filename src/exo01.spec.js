const sum = require('./exo01.js');

describe('exo01', () => {
  describe('sum', () => {
    it('should return 3 for 1 and 2', () => {
      expect(sum(1, 2)).toEqual(3);
    });

    it('should return 0 for 1 and -1', () => {
      expect(sum(1, -1)).toEqual(0);
    });

    it('should return 100 for 100 and 0', () => {
      expect(sum(100, 0)).toEqual(100);
    });

    it('should return 2 for 1 and 1', () => {
      expect(sum(1, 1)).toEqual(2);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });

    it('should return 4 for 2 and 2', () => {
      expect(sum(2, 2)).toEqual(4);
    });
  });
});
