import { Campus } from '../src/course-structure/Campus'
import { Component } from '../src/course-structure/Component'
import { Days } from '../src/course-structure/Days'
import OneTimeSection from '../src/course-structure/OneTimeSection'
import Section from '../src/course-structure/Section'
import Time from '../src/course-structure/Time'
import Timeslot from '../src/course-structure/Timeslot'
import WeeklySection from '../src/course-structure/WeeklySection'

export default class StringToSections {
    static stringToWeeklySections(
        courseName: string,
        str: string,
        days: Days[]
    ): Section[] {
        // console.log(str)
        const rows = str.replace(/\t/g, ' ').split('\n')
        const sections: WeeklySection[] = rows.map((row) => {
            const split = row.split(' ')
            // console.log(row);
            // console.log(split);
            let [
                courseCode,
                componentStr,
                sectionNumber,
                campusStr,
                loactionTaughtStr,
                num,
                assoc,
                rel1,
                rel2,
                num2,
                enrolCap,
                enrolTot,
                waitCap,
                waitTot,
                time,
            ] = split
            if (split.length == 14) {
                ;[
                    courseCode,
                    componentStr,
                    sectionNumber,
                    campusStr,
                    loactionTaughtStr,
                    num,
                    assoc,
                    rel1,
                    rel2,
                    enrolCap,
                    enrolTot,
                    waitCap,
                    waitTot,
                    time,
                ] = split
            } else if (split.length == 15) {
                ;[
                    courseCode,
                    componentStr,
                    sectionNumber,
                    campusStr,
                    loactionTaughtStr,
                    num,
                    assoc,
                    rel1,
                    rel2,
                    num2,
                    enrolCap,
                    enrolTot,
                    waitCap,
                    waitTot,
                    time,
                ] = split
            } else {
                console.log(
                    "Split didn't give a permitted length. Gave " + split.length
                )
                const [
                    courseCode,
                    componentStr,
                    sectionNumber,
                    campusStr,
                    loactionTaughtStr,
                    num,
                    assoc,
                    rel1,
                    rel2,
                    enrolCap,
                    enrolTot,
                    waitCap,
                    waitTot,
                    time,
                ] = split
            }
            const [startTime, endTime] = time.split('-')

            //console.log(componentStr);

            const weeklySection = new WeeklySection(
                courseName,
                parseInt(courseCode),
                this.componentStrToComponent(componentStr),
                parseInt(sectionNumber),
                days,
                new Timeslot(
                    new Time(
                        this.convert12hTo24h(startTime.split(':')[0]),
                        this.convert12hTo24h(startTime.split(':')[1])
                    ),
                    new Time(
                        this.convert12hTo24h(endTime.split(':')[0]),
                        this.convert12hTo24h(endTime.split(':')[1])
                    )
                ),
                parseInt(enrolCap),
                parseInt(enrolTot)
            )

            return weeklySection
        })

        return sections
    }

    static convert12hTo24h(str12: string): number {
        const num12 = parseInt(str12)
        return 1 <= num12 && num12 <= 7 ? num12 + 12 : num12
    }

    static stringToOneTimeSections(
        courseName: string,
        str: string,
        date: Date
    ): Section[] {
        const rows = str.replace(/\t/g, ' ').split('\n')
        const sections: OneTimeSection[] = rows.map((row) => {
            const [
                courseCode,
                componentStr,
                sectionNumber,
                campusStr,
                loactionTaughtStr,
                num,
                assoc,
                rel1,
                rel2,
                num2,
                enrolCap,
                enrolTot,
                waitCap,
                waitTot,
                time,
            ] = row.split(' ')
            const [startTime, endTime] = time.split('-')

            // console.log(row.split(' '))

            const section = new OneTimeSection(
                courseName,
                parseInt(courseCode),
                this.componentStrToComponent(componentStr),
                parseInt(sectionNumber),
                date,
                new Timeslot(
                    new Time(
                        parseInt(startTime.split(':')[0]),
                        parseInt(startTime.split(':')[1])
                    ),
                    new Time(
                        parseInt(endTime.split(':')[0]),
                        parseInt(endTime.split(':')[1])
                    )
                ),
                parseInt(enrolCap),
                parseInt(enrolTot)
            )

            return section
        })

        return sections
    }

    static campusStrToCampus(campusStr: string): Campus {
        switch (campusStr) {
            case 'UW':
                return Campus.UW
            case 'CGC':
                return Campus.CGC
            case 'REN':
                return Campus.REN
            case 'STJ':
                return Campus.STJ
            case 'UTD':
                return Campus.UTD
            case 'WLU':
                return Campus.WLU
            case 'BLND':
                return Campus.BLND
            case 'BLNDG':
                return Campus.BLNDG
            case 'BLNDJ':
                return Campus.BLNDJ
            case 'BLNDR':
                return Campus.BLNDR
            case 'BLNDT':
                return Campus.BLNDT
            case 'ONLN':
                return Campus.ONLN
            case 'ONLNG':
                return Campus.ONLNG
            case 'ONLNJ':
                return Campus.ONLNJ
            case 'ONLNR':
                return Campus.ONLNR
            case 'ONLNT':
                return Campus.ONLNT
            case 'OFF':
                return Campus.OFF
            default:
                return null
        }
    }

    static componentStrToComponent(componentStr: string): Component {
        switch (componentStr) {
            case 'LEC':
                return Component.LEC
            case 'OLN':
                return Component.OLN
            case 'ORL':
                return Component.ORL
            case 'PRA':
                return Component.PRA
            case 'PRJ':
                return Component.PRJ
            case 'RDG':
                return Component.RDG
            case 'SEM':
                return Component.SEM
            case 'STU':
                return Component.STU
            case 'TST':
                return Component.TST
            case 'TUT':
                return Component.TUT
            case 'WRK':
                return Component.WRK
            case 'WSP':
                return Component.WSP
            case 'LAB':
                return Component.LAB
            default:
                return null
        }
    }
}
