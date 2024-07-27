export default class ScheduleError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ScheduleError'
        Object.setPrototypeOf(this, ScheduleError.prototype)
    }
}
