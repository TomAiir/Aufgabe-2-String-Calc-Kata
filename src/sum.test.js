const   stringCalculator  = require('./sum');

    it('should return 0', () => {
        expect(stringCalculator(" ")).toBe(0);
    });

    it('should return 720', () => {
        expect(stringCalculator("720")).toBe(720);
    });

    it('should add 2 and 2 to return 4', () => {
        expect(stringCalculator("2,2")).toBe(4);
    });

    it('should add 700 and 20 to return 720', () => {
        expect(stringCalculator("700,20")).toBe(720);
    });