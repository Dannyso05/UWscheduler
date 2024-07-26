import Course from "../src/course-structure/Course";
import { Days } from "../src/course-structure/Days";
import StringToSections from "./StringToSections";
import * as fs from 'fs';


const getCourseFunctions = [getCS136, getCS136L, getMATH136, getMATH138, getMATH138, getPHYS122, getPHYS124];
const courseNames = ['CS136', 'CS136L', 'MATH136', 'MATH138', 'MATH138', 'PHYS122', 'PHYS124'];
const prefix = "./tests/course-test-library/"
const suffix = ".json";

function getCourse(str: string): Course {
    return JSON.parse(fs.readFileSync(prefix + str + suffix, 'utf-8'));
}

function saveAllCoursesToJSON() {
    for (let i = 0; i < getCourseFunctions.length; i++) {
        fs.writeFileSync(prefix + courseNames[i] + suffix, JSON.stringify(getCourseFunctions[i]()));
    }
}

const cs136WStr =
    `6021	LEC 001	UW U	1	 	201	100	100	0	0	10:00-11:20
6074	LEC 002	UW U	2	 	201	95	56	0	0	11:30-12:50
6075	LEC 003	UW U	3	 	201	95	95	0	0	01:00-02:20
6103	LEC 004	UW U	4	 	201	95	92	0	0	02:30-03:50
6152	LEC 005	UW U	5	 	201	95	95	0	0	10:00-11:20
6235	LEC 006	UW U	6	 	201	95	79	0	0	01:00-02:20
6262	LEC 007	UW U	7	 	201	95	78	0	0	02:30-03:50
6711	LEC 008	UW U	8	 	201	120	87	0	0	11:30-12:50
6712	LEC 009	UW U	9	 	201	120	91	0	0	01:00-02:20`;
const cs136OTStr = '6056	TST 201	UW U	9999	 	 	910	773	0	0	07:00-08:50'

export function getCS136(): Course {
    return new Course("CS", 136, 0.5, "Elem Algo Dsgn & Data Abstrac",
        StringToSections.stringToWeeklySections("CS 136", cs136WStr, [Days.tuesday, Days.thursday]).concat(
            StringToSections.stringToOneTimeSections("CS 136", cs136OTStr, new Date("03/04/2024"))));
}

const cs136LWStr1 =
    `6609	LAB 001	UW U	1	 	 	65	62	0	0	08:30-10:20
6610	LAB 002	UW U	2	 	 	65	56	0	0	10:30-12:20
6611	LAB 003	UW U	3	 	 	65	65	0	0	12:30-02:20
6612	LAB 004	UW U	4	 	 	65	65	0	0	02:30-04:20
6613	LAB 005	UW U	5	 	 	65	44	0	0	10:30-12:20
6614	LAB 006	UW U	6	 	 	65	65	0	0	12:30-02:20
6615	LAB 007	UW U	7	 	 	65	62	0	0	02:30-04:20
6616	LAB 008	UW U	8	 	 	65	42	0	0	10:30-12:20
6617	LAB 009	UW U	9	 	 	65	58	0	0	12:30-02:20
6618	LAB 010	UW U	10	 	 	65	64	0	0	02:30-04:20`

const cs136LWStr2 = 
`6619	LAB 011	UW U	11	 	 	65	64	0	0	08:30-10:20
6720	LAB 012	UW U	12	 	 	65	56	0	0	10:30-12:20
6721	LAB 013	UW U	13	 	 	65	61	0	0	12:30-02:20
6722	LAB 014	UW U	14	 	 	65	65	0	0	02:30-04:20
6723	LAB 015	UW U	15	 	 	65	30	0	0	10:30-12:20
6724	LAB 016	UW U	16	 	 	65	60	0	0	12:30-02:20
6725	LAB 017	UW U	17	 	 	65	60	0	0	02:30-04:20`

export function getCS136L(): Course {
    return new Course("CS", 136, 0.5, "Tools & Tech for Software Dev",
        StringToSections.stringToWeeklySections("CS 136L", cs136LWStr1, [Days.tuesday])
            .concat(StringToSections.stringToWeeklySections("CS 136L", cs136LWStr2, [Days.thursday])), "L");
}

const math136WStr1 =
    `5937	LEC 001	UW U	1	 	201	120	38	0	0	08:30-09:20
5938	LEC 002	UW U	2	 	201	120	120	0	0	10:30-11:20
5939	LEC 003	UW U	3	 	201	120	120	0	0	09:30-10:20
5940	LEC 004	UW U	4	 	201	120	101	0	0	03:30-04:20
5941	LEC 005	UW U	5	 	201	120	88	0	0	11:30-12:20
5942	LEC 006	UW U	6	 	201	120	48	0	0	12:30-01:20
6061	LEC 007	UW U	7	 	201	120	120	0	0	01:30-02:20
6155	LEC 008	UW U	8	 	201	120	120	0	0	01:30-02:20
6288	LEC 009	UW U	9	 	201	120	105	0	0	02:30-03:20
6541	LEC 010	UW U	10	 	201	120	94	0	0	12:30-01:20
6731	LEC 011	UW U	11	 	201	120	120	0	0	10:30-11:20
6732	LEC 012	UW U	12	 	201	120	31	0	0	08:30-09:20`

const math136WStr2 =
    `6385	TUT 101	UW U	9999	 	 	263	146	0	0	04:30-05:20
6386	TUT 102	UW U	9999	 	 	446	364	0	0	04:30-05:20
6387	TUT 103	UW U	9999	 	 	344	213	0	0	04:30-05:20
6388	TUT 104	UW U	9999	 	 	387	382	0	0	04:30-05:20`

const math136OTStr =
    `6091	TST 201	UW U	9999	 	 	1400	1105	0	0	07:00-08:50`

export function getMATH136(): Course {
    return new Course("MATH", 136, 0.5, "Linear Algebra 1 (Honours)",
        StringToSections.stringToWeeklySections("MATH 136", math136WStr1, [Days.monday, Days.wednesday, Days.friday])
            .concat(StringToSections.stringToWeeklySections("MATH 136", math136WStr2, [Days.monday])
                .concat(StringToSections.stringToOneTimeSections("MATH 136", math136OTStr, new Date("02/12/2024")))));
}


const math138WStr1 =
    `5945	LEC 001	UW U	1	 	201	120	120	0	0	11:30-12:20
5946	LEC 002	UW U	2	 	201	120	120	0	0	01:30-02:20
5947	LEC 003	UW U	3	 	201	120	99	0	0	12:30-01:20
5948	LEC 004	UW U	4	 	201	120	120	0	0	08:30-09:20
5949	LEC 005	UW U	5	 	201	120	69	0	0	08:30-09:20
5983	LEC 006	UW U	6	 	201	120	91	0	0	02:30-03:20
6013	LEC 007	UW U	7	 	201	120	114	0	0	11:30-12:20
6062	LEC 008	UW U	8	 	201	120	85	0	0	03:30-04:20
6531	LEC 009	UW U	9	 	201	120	120	0	0	09:30-10:20
6733	LEC 010	UW U	10	 	202	100	29	0	0	09:30-10:20
8797	LEC 011	UW U	11	 	201	120	120	0	0	01:30-02:20`

const math138WStr2 =
    `6684	TUT 105	UW U	10	 	 	100	29	0	0	05:30-06:20
6063	TUT 101	UW U	9999	 	 	320	298	0	0	05:30-06:20
6335	TUT 102	UW U	9999	 	 	140	139	0	0	05:30-06:20
6336	TUT 103	UW U	9999	 	 	250	175	0	0	05:30-06:20
6337	TUT 104	UW U	9999	 	 	250	249	0	0	05:30-06:20
6749	TUT 106	UW U	9999	 	 	240	197	0	0	05:30-06:20`

const math138OTStr =
    `6092	TST 201	UW U	9999	 	 	1200	1058	0	0	07:00-08:50`

export function getMATH138(): Course {
    return new Course("MATH", 138, 0.5, "Calculus 2 (Honours)",
        StringToSections.stringToWeeklySections("MATH 138", math138WStr1, [Days.monday, Days.wednesday, Days.friday])
            .concat(StringToSections.stringToWeeklySections("MATH 138", math138WStr2, [Days.wednesday]))
            .concat(StringToSections.stringToOneTimeSections("MATH 138", math138OTStr, new Date("02/26/2024"))));
}


const phys124Wstr1 =
    `7206	LEC 001	UW U	1	 	201	250	220	0	0	11:30-12:50`

const phys124Wstr2 =
    `7207	TUT 101	UW U	9999	 	 	125	103	0	0	05:30-06:50`

const phys124Wstr3 =
    `7254	TUT 102	UW U	9999	 	 	125	117	0	0	04:00-05:20`

const phys124OTstr =
    `7370	TST 201	UW U	9999	 	 	250	220	0	0	06:30-07:50`

export function getPHYS124(): Course {
    return new Course("PHYS", 124, 0.5, "Modern Physics",
        StringToSections.stringToWeeklySections("PHYS 124", phys124Wstr1, [Days.tuesday, Days.thursday])
            .concat(StringToSections.stringToWeeklySections("PHYS 124", phys124Wstr2, [Days.wednesday]))
            .concat(StringToSections.stringToWeeklySections("PHYS 124", phys124Wstr3, [Days.tuesday]))
            .concat(StringToSections.stringToOneTimeSections("PHYS 124", phys124OTstr, new Date("03/05/2024"))));
}


const phys122Wstr1 =
    `7201	LEC 001	UW U	1	 	201	240	176	0	0	11:30-12:50`

const phys122Wstr2 =
    `7202	LEC 002	UW U	2	 	201	280	130	0	0	08:30-09:50`

const phys122Wstr3 =
    `7203	TUT 101	UW U	9999	 	 	265	135	0	0	12:30-02:20F`

const phys122Wstr4 =
    `7205	TUT 103	UW U	9999	 	 	127	84	0	0	04:30-06:20`

const phys122OTstr =
    `8206	TST 201	UW U	9999	 	 	520	306	0	0	06:30-08:20`

export function getPHYS122(): Course {
    return new Course("PHYS", 122, 0.5, "Modern Physics",
        StringToSections.stringToWeeklySections("PHYS 122", phys122Wstr1, [Days.monday, Days.wednesday])
            .concat(StringToSections.stringToWeeklySections("PHYS 122", phys122Wstr2, [Days.tuesday, Days.thursday]))
            .concat(StringToSections.stringToWeeklySections("PHYS 122", phys122Wstr3, [Days.friday]))
            .concat(StringToSections.stringToWeeklySections("PHYS 122", phys122Wstr4, [Days.tuesday]))
            .concat(StringToSections.stringToOneTimeSections("PHYS 122", phys122OTstr, new Date("02/27/2024"))));
}

const tc1WStr =
    `1	LEC 001	UW U	1	 	201	100	100	0	0	10:00-11:20
2	LEC 002	UW U	2	 	201	95	95	0	0	11:30-12:50
3	LEC 003	UW U	3	 	201	95	95	0	0	01:00-02:20
4	LEC 004	UW U	4	 	201	95	95	0	0	02:30-03:50
5	LEC 005	UW U	5	 	201	95	95	0	0	03:00-04:20
6	LEC 006	UW U	6	 	201	95	79	0	0	01:00-02:20
7	LEC 007	UW U	7	 	201	95	78	0	0	02:30-03:50`;

export function getTestCourse1(): Course {
    return new Course("TC", 1, 0.5, "Test course 1",
        StringToSections.stringToWeeklySections("TC 1", tc1WStr, [Days.tuesday, Days.thursday]));
}

const tc2WStr =
    `8	LEC 001	UW U	1	 	201	100	100	0	0	10:00-11:20
9	LEC 002	UW U	2	 	201	95	95	0	0	11:30-12:50
10	LEC 003	UW U	3	 	201	95	95	0	0	01:00-02:20
11	LEC 005	UW U	5	 	201	95	95	0	0	10:00-11:20
12	LEC 006	UW U	6	 	201	95	79	0	0	12:00-01:20
13	LEC 007	UW U	7	 	201	95	78	0	0	01:30-02:50`;

const tc2WStr2 =
    `14	TUT 006	UW U	6	 	201	95	95	0	0	12:00-01:20
15	TUT 007	UW U	7	 	201	95	78	0	0	10:30-12:20
15	TUT 007	UW U	7	 	201	95	78	0	0	10:00-12:00`;

export function getTestCourse2(): Course {
    return new Course("TC", 2, 0.5, "Test course 2",
        StringToSections.stringToWeeklySections("TC 2", tc2WStr, [Days.tuesday, Days.thursday])
        .concat(StringToSections.stringToWeeklySections("TC 2", tc2WStr2, [Days.tuesday, Days.thursday])));
}

const tc3WStr =
    `15	LEC 006	UW U	6	 	201	95	95	0	0	09:30-10:20`;

export function getTestCourse3(): Course {
    return new Course("TC", 3, 0.5, "Test course 3",
        StringToSections.stringToWeeklySections("TC 3", tc3WStr, [Days.tuesday, Days.thursday]));
}