import Timeslot from '../src/Timeslot'
import Time from '../src/Time'


describe("Timeslot", () => {
    let timeslot1: Timeslot = new Timeslot(new Time(4, 30), new Time(5, 20));
    let timeslot2: Timeslot = new Timeslot(new Time(5, 0), new Time(5, 50));
    let timeslot3: Timeslot = new Timeslot(new Time(4, 40), new Time(5, 10));
    let timeslot4: Timeslot = new Timeslot(new Time(3, 40), new Time(4, 10));
    let timeslot5: Timeslot = new Timeslot(new Time(4, 10), new Time(5, 10));

    it('Test does overlap 1', () => {
        expect(timeslot1.doesOverlap(timeslot2)).toBe(true);
    });

    it('Test does overlap 2', () => {
        expect(timeslot3.doesOverlap(timeslot1)).toBe(true);
    });

    it('Test does not overlap', () => {
        expect(timeslot4.doesOverlap(timeslot1)).toBe(false);
    });

    it('Test copy and equals', () => {
        expect(timeslot1.equals(timeslot1.copy())).toBe(true);
    });

    it('Test overlap edge case', () => {
        expect(timeslot5.doesOverlap(timeslot4)).toBe(false);
    });
})