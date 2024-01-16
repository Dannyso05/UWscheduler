import Time from "./Time"
import TimeError from "./TimeError";


/**
 * Represents a timeslot for a class.
 * startTime and endTime are of type Time.
 */
export default class Timeslot {
    private _startTime: Time;
    private _endTime: Time;

    constructor(startTime: Time, endTime: Time) {
        if (startTime.afterThan(endTime)) {
            throw new TimeError("Start time must be before or equal to end time.");
        }

        this._startTime = startTime;
        this._endTime = endTime;
    }

    get startTime(): Time {
        return this._startTime;
    }

    get endTime(): Time {
        return this._endTime;
    }

    /**
     * Returns true if this and otherTimeSlot are exactly equal.
     * @param {Timeslot} otherTimeSlot
     * @returns Boolean
     */
    equals(otherTimeSlot: Timeslot): boolean{
        return this.startTime.equals(otherTimeSlot.startTime) && this.endTime.equals(otherTimeSlot.endTime);
    }

    /**
     * Returns true if this and otherTimeSlot overlap.
     * @param {Timeslot} otherTimeSlot 
     * @returns Boolean
     */
    doesOverlap(otherTimeSlot: Timeslot): boolean {
        return this.startTime.equals(otherTimeSlot.startTime) ||
                (this.startTime.afterThan(otherTimeSlot.startTime) && otherTimeSlot.endTime.afterThan(this.startTime)) || 
                (otherTimeSlot.startTime.afterThan(this.startTime) && this.endTime.afterThan(otherTimeSlot.startTime));
    }

    /**
     * Returns a copy of itself.
     * @returns Timeslot
     */
    copy(): Timeslot {
        return new Timeslot(this.startTime.copy(), this.endTime.copy())
    }

    toString(): String {
        return this.startTime.toString() + ' - ' + this.endTime.toString();
    }

    isWithin(otherTimeSlot: Timeslot): boolean {
        return !otherTimeSlot.startTime.afterThan(this.startTime) && !this.endTime.afterThan(this.endTime);
    }
}
