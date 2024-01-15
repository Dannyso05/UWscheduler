/**
 * Represents a time in hours (24 hour schedule) and minutes for a class.
 */
export default class Time {
    private _hours: number;
    private _minutes: number;

    constructor(hours: number, minutes: number) {
        if (hours < 0 || hours > 24) {
            throw "hours must be between 0 and 24."
        }
        if (minutes < 0 || minutes > 60) {
            throw "minutes must be between 0 and 60."
        }

        this._hours = hours;
        this._minutes = minutes;
    }

    get hours(): number {
        return this._hours;
    }

    get minutes(): number {
        return this._minutes;
    }

    equals(otherTime: Time): boolean {
        return this.hours == otherTime.hours && this.minutes == otherTime.minutes;
    }

    afterThan(otherTime : Time): boolean {
        return (this.hours > otherTime.hours) || (this.hours == otherTime.hours && this.minutes > otherTime.minutes)
    }

    toString(): String {
        return this.hours.toString() + ":" + this.minutes.toString()
    }

    copy(): Time {
        return new Time(this.hours, this.minutes);
    }
}
