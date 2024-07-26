onst timeStr = timeAndWeekDays.replace(/[a-zA-Z]/g, '')
        const daysStr = timeAndWeekDays.replace(/[\d:-]/g, '')

        console.log([timeStr, daysStr])

        dict['timeslot'] = Timeslot.fromString(timeStr)
        dict[