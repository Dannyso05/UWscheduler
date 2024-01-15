import Time from "./Time"


/**
 * Represents a timeslot for a class.
 * startTime and endTime are of type Time.
 */
export default class Timeslot {
    private startTime: Time;
    private endTime: Time;

    constructor(startTime: Time, endTime: Time) {
        if (startTime.afterThan(endTime)) {
            throw "Start time must be before or equal to end time.";
        }

        this.startTime = startTime;
        this.endTime = endTime;
    }

    getStartTime(): Time {
        return this.startTime;
    }

    getEndTime(): Time {
        return this.endTime;
    }

    /**
     * Returns true if this and otherTimeSlot are exactly equal.
     * @param {Timeslot} otherTimeSlot
     * @returns Boolean
     */
    equals(otherTimeSlot: Timeslot): boolean{
        return this.getStartTime().equals(otherTimeSlot.getStartTime()) && this.getEndTime().equals(otherTimeSlot.getEndTime());
    }

    /**
     * Returns true if this and otherTimeSlot overlap.
     * @param {Timeslot} otherTimeSlot 
     * @returns Boolean
     */
    doesOverlap(otherTimeSlot: Timeslot): boolean {
        return this.getStartTime().equals(otherTimeSlot.getStartTime()) ||
                (this.getStartTime().afterThan(otherTimeSlot.getStartTime()) && otherTimeSlot.getEndTime().afterThan(this.getStartTime())) || 
                (otherTimeSlot.getStartTime().afterThan(this.getStartTime()) && this.getEndTime().afterThan(otherTimeSlot.getStartTime()));
    }

    /**
     * Returns a copy of itself.
     * @returns Timeslot
     */
    copy(): Timeslot {
        return new Timeslot(this.getStartTime().copy(), this.getEndTime().copy())
    }

    toString(): String {
        return this.startTime.toString() + ' - ' + this.endTime.toString();
    }
}
