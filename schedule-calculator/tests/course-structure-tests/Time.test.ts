import Time from '../../src/course-structure/Time'

describe("Time", () => {
    const time1 = new Time(4, 30);
    const time2 = new Time(5, 40);  

    it('Test not equal', () => {
        expect(time1.equals(time2)).toBe(false);
    });

    it('Test equals and copy', () => {
        expect(time1.equals(time1.copy())).toBe(true);
    });

    it('Test equals', () => {
        expect(time1.equals(new Time(4, 30))).toBe(true);
    });

    it('Test afterThan 1', () => {
        expect(time1.afterThan(time2)).toBe(false);
    });

    it('Test afterThan 2', () => {
        expect(time2.afterThan(time1)).toBe(true);
    });

    it('Test afterThan 3', () => {
        expect(time1.afterThan(time1)).toBe(false);
    });

    it('Test get hours 1', () => {
        expect(time1.hours).toBe(4);
    });

    it('Test get hours 2', () => {
        expect(time2.hours).toBe(5);
    });
})

