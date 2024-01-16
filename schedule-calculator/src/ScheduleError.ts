export default class ScheduleError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "ScheduleError"
    }
}