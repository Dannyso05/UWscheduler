import TimeError from './TimeError'

/**
 * Represents a time in hours (24 hour schedule) and minutes for a class.
 */
export default class Time {
    private _hours: number
    private _minutes: number

    constructor(hours: number, minutes: number) {
        if (hours < 0 || hours > 24) {
            throw new TimeError('hours must be between 0 and 24.')
        }
        if (minutes < 0 || minutes > 60) {
            throw new TimeError('minutes must be between 0 and 60.')
        }

        this._hours = hours
        this._minutes = minutes
    }

    get hours(): number {
        return this._hours
    }

    get minutes(): number {
        return this._minutes
    }

    equals(otherTime: Time): boolean {
        return (
            this.hours == otherTime.hours && this.minutes == otherTime.minutes
        )
    }

    afterThan(otherTime: Time): boolean {
        return (
            this.hours > otherTime.hours ||
            (this.hours == otherTime.hours && this.minutes > otherTime.minutes)
        )
    }

    toString(): string {
        return this.hours.toString() + ':' + this.minutes.toString()
    }

    copy(): Time {
        return new Time(this.hours, this.minutes)
    }

    isPM(): boolean {
        return this.hours >= 12
    }

    static fromString(timeStr: string, mustBePM: boolean = false) {
        // eslint-disable-next-line prefer-const
        let [hours, minutes] = timeStr.split(':').map((str) => +str)

        if (hours < 8 || mustBePM) {
            hours += 12
        }

        return new Time(hours, minutes)
    }
}
