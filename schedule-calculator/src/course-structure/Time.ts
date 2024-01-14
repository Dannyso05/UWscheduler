/**
 * Represents a time in hours (24 hour schedule) and minutes for a class.
 */
export default class Time {
    private hours: number;
    private minutes: number;

    constructor(hours: number, minutes: number) {
        if (hours < 0 || hours > 24) {
            throw "hours must be between 0 and 24."
        }
        if (minutes < 0 || minutes > 60) {
            throw "minutes must be between 0 and 60."
        }

        this.hours = hours;
        this.minutes = minutes;
    }

    getHours(): number {
        return this.hours;
    }

    getMinutes(): number {
        return this.minutes;
    }

    equals(otherTime: Time): boolean {
        return this.getHours() == otherTime.getHours() && this.getMinutes() == otherTime.getMinutes();
    }

    afterThan(otherTime : Time): boolean {
        return (this.getHours() > otherTime.getHours()) || (this.getHours() == otherTime.getHours() && this.getMinutes() > otherTime.getMinutes())
    }

    toString(): String {
        return this.hours.toString() + ":" + this.minutes.toString()
    }

    copy(): Time {
        return new Time(this.getHours(), this.getMinutes());
    }
}
