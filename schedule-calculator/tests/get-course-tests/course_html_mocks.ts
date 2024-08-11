/* eslint-disable @typescript-eslint/no-unused-vars */
import { Browser } from 'puppeteer'

export async function getCourseHTMLMock(
    subject: string,
    courseNumber: number,
    catalogNumberSurfix: string = '',
    term: number,
    browser: Browser
) {
    const courseName = `${subject} ${courseNumber}${catalogNumberSurfix}`
    switch (courseName) {
        case 'CS 136L':
            return cs136LHTML
        case 'CS 135':
            return cs135HTML
        case 'MATH 135':
            return math135HTML
        case 'MATH 136':
            return math136HTML
        default:
            return nonExistentCourseHTML
    }
}

export const nonExistentCourseHTML = `
 <html lang="en"><head>
<title>
Returning Query Info
</title>
</head>
<body>
<a href="https://uwaterloo.ca">
<img style="border: 0px" alt="The University of Waterloo" src="/universityofwaterloo_logo.png">
</a>
<h1>Schedule of Classes</h1>
<main>
Before your query can be processed you must be sure to fill in 
the subject field.<p>
Please return to the CIR form and fill in the subject field.
<br>
</p></main></body></html>
`

export const cs136LHTML = `
 <html lang="en"><head>
<title>
Returning Query Info
</title>
</head>
<body>
<a href="https://uwaterloo.ca">
<img style="border: 0px" alt="The University of Waterloo" src="/universityofwaterloo_logo.png">
</a>
<h1>Schedule of Classes</h1>
<main>
<p>See our online resource to assist you with 
<a target="_blank" href="https://uwaterloo.ca/registrar/registering-courses/understanding-schedule-classes#definitions">
understanding how to read the Schedule of Classes results table</a>.
</p>
Your selection was:<br>
Level: Undergraduate , Term: 1249 , Subject: CS , Course Number: 136L<p>


<table border="2">
<tbody><tr>
 <th>Subject</th>
 <th>Catalog#</th>
 <th>Units</th>
 <th>Title</th>
</tr>
<tr><td align="center">CS      </td>
<td align="center">136L</td>
<td align="center">0.25  </td>
<td align="center">Tools &amp; Tech for Software Dev </td>
</tr>
<tr><td colspan="4"><b>Notes:</b> For information on CS course enrollment during the Add/Drop period, see  <a href="https://cs.uwaterloo.ca/computer-science/current-undergraduate-students/majors/cs-course-enrollment" target="_blank"> https://cs.uwaterloo.ca/computer-science/current-undergraduate-students/majors/cs-course-enrollment</a></td></tr>
<tr><td> </td><td colspan="3">
  <table>
    <tbody><tr>
     <th>Class</th>
     <th>Comp Sec</th>
     <th>Camp Loc</th>
     <th>Assoc. Class</th>
     <th>Rel 1</th>
     <th>Rel 2</th>
     <th>Enrl Cap</th>
     <th>Enrl Tot</th>
     <th>Wait Cap</th>
     <th>Wait Tot</th>
     <th>Time Days/Date</th>
     <th>Bldg Room</th>
     <th align="LEFT">Instructor</th>
   </tr>
<tr><td align="center">6946 </td><td align="center">LAB 001 </td><td align="center">UW    U         </td><td align="center">1   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">59  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-04:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6947 </td><td align="center">LAB 002 </td><td align="center">UW    U         </td><td align="center">2   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">59  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-04:20Th<br></td><td align="center"></td></tr>
</tbody></table>
</td></tr>
<tr><td colspan="4"></td></tr>
</tbody></table>



</p></main>
<br>Information last updated: <b>2024/7/27</b><p>
<br>
</p></body></html>
`

export const cs135HTML = `
 <html lang="en"><head>
<title>
Returning Query Info
</title>
</head>
<body>
<a href="https://uwaterloo.ca">
<img style="border: 0px" alt="The University of Waterloo" src="/universityofwaterloo_logo.png">
</a>
<h1>Schedule of Classes</h1>
<main>
<p>See our online resource to assist you with 
<a target="_blank" href="https://uwaterloo.ca/registrar/registering-courses/understanding-schedule-classes#definitions">
understanding how to read the Schedule of Classes results table</a>.
</p>
Your selection was:<br>
Level: Undergraduate , Term: 1249 , Subject: CS , Course Number: 135<p>


<table border="2">
<tbody><tr>
 <th>Subject</th>
 <th>Catalog#</th>
 <th>Units</th>
 <th>Title</th>
</tr>
<tr><td align="center">CS      </td>
<td align="center">135</td>
<td align="center">0.5   </td>
<td align="center">Designing Functional Programs </td>
</tr>
<tr><td colspan="4"><b>Notes:</b> Choose TUT section for Related 1. For information on CS course enrollment during the Add/Drop period, see  <a href="https://cs.uwaterloo.ca/computer-science/current-undergraduate-students/majors/cs-course-enrollment" target="_blank"> https://cs.uwaterloo.ca/computer-science/current-undergraduate-students/majors/cs-course-enrollment</a></td></tr>
<tr><td> </td><td colspan="3">
  <table>
    <tbody><tr>
     <th>Class</th>
     <th>Comp Sec</th>
     <th>Camp Loc</th>
     <th>Assoc. Class</th>
     <th>Rel 1</th>
     <th>Rel 2</th>
     <th>Enrl Cap</th>
     <th>Enrl Tot</th>
     <th>Wait Cap</th>
     <th>Wait Tot</th>
     <th>Time Days/Date</th>
     <th>Bldg Room</th>
     <th align="LEFT">Instructor</th>
   </tr>
<tr><td align="center">6344 </td><td align="center">LEC 001 </td><td align="center">UW    U         </td><td align="center">1   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">80  </td><td align="center">0   </td><td align="center">0   </td><td align="center">08:30-09:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: 1A AFM students               </i></td><td align="CENTER">10</td><td align="center">2</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">80</td><td align="center">78</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6371 </td><td align="center">LEC 002 </td><td align="center">UW    U         </td><td align="center">2   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">74  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:00-11:20TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">71</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6336 </td><td align="center">LEC 003 </td><td align="center">UW    U         </td><td align="center">3   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">87  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">84</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6337 </td><td align="center">LEC 004 </td><td align="center">UW    U         </td><td align="center">4   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">89  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:00-02:20TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">88</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6345 </td><td align="center">LEC 005 </td><td align="center">UW    U         </td><td align="center">5   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">81  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:00-11:20TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">81</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6346 </td><td align="center">LEC 006 </td><td align="center">UW    U         </td><td align="center">6   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">62  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">62</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6372 </td><td align="center">LEC 007 </td><td align="center">UW    U         </td><td align="center">7   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">89  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:00-02:20TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">88</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6379 </td><td align="center">LEC 008 </td><td align="center">UW    U         </td><td align="center">8   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">82  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">82</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6380 </td><td align="center">LEC 009 </td><td align="center">UW    U         </td><td align="center">9   </td><td>&nbsp;</td><td align="center">201 </td><td align="center">80  </td><td align="center">66  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:00-11:20TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">80</td><td align="center">65</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6800 </td><td align="center">LEC 010 </td><td align="center">UW    U         </td><td align="center">10  </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">70  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">70</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">7001 </td><td align="center">LEC 011 </td><td align="center">UW    U         </td><td align="center">11  </td><td>&nbsp;</td><td align="center">201 </td><td align="center">85  </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">85</td><td align="center">0</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">8639 </td><td align="center">LEC 012 </td><td align="center">UW    U         </td><td align="center">12  </td><td>&nbsp;</td><td align="center">201 </td><td align="center">90  </td><td align="center">71  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:50TTh<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Year 1 students               </i></td><td align="CENTER">90</td><td align="center">71</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6967 </td><td align="center">TUT 101 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">59  </td><td align="center">0   </td><td align="center">0   </td><td align="center">08:30-09:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6968 </td><td align="center">TUT 102 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">47  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6969 </td><td align="center">TUT 103 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">47  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6970 </td><td align="center">TUT 104 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">51  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6971 </td><td align="center">TUT 105 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">12:30-01:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6972 </td><td align="center">TUT 106 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">41  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6973 </td><td align="center">TUT 107 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">53  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6974 </td><td align="center">TUT 108 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">38  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6975 </td><td align="center">TUT 109 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">40  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6976 </td><td align="center">TUT 110 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6977 </td><td align="center">TUT 111 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">49  </td><td align="center">0   </td><td align="center">0   </td><td align="center">12:30-01:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6978 </td><td align="center">TUT 112 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6979 </td><td align="center">TUT 113 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">61  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6980 </td><td align="center">TUT 114 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">51  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20F<br></td><td align="center"></td></tr>
<tr><td align="center">7002 </td><td align="center">TUT 115 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">7003 </td><td align="center">TUT 116 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20F<br></td><td align="center"></td></tr>
<tr><td align="center">7004 </td><td align="center">TUT 117 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">60  </td><td align="center">42  </td><td align="center">0   </td><td align="center">0   </td><td align="center">12:30-01:20F<br></td><td align="center"></td></tr>
<tr><td align="center">7007 </td><td align="center">TUT 118 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">55  </td><td align="center">38  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6827 </td><td align="center">TST 201 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">980 </td><td align="center">851 </td><td align="center">0   </td><td align="center">0   </td><td align="center">07:00-08:50M<br>10/28-10/28</td><td align="center"></td></tr>
</tbody></table>
</td></tr>
<tr><td colspan="4"></td></tr>
</tbody></table>



</p></main>
<br>Information last updated: <b>2024/7/27</b><p>
<br>
</p></body></html>
`
export const math135HTML = `
 <html lang="en"><head>
<title>
Returning Query Info
</title>
</head>
<body>
<a href="https://uwaterloo.ca">
<img style="border: 0px" alt="The University of Waterloo" src="/universityofwaterloo_logo.png">
</a>
<h1>Schedule of Classes</h1>
<main>
<p>See our online resource to assist you with 
<a target="_blank" href="https://uwaterloo.ca/registrar/registering-courses/understanding-schedule-classes#definitions">
understanding how to read the Schedule of Classes results table</a>.
</p>
Your selection was:<br>
Level: Undergraduate , Term: 1249 , Subject: MATH , Course Number: 135<p>


<table border="2">
<tbody><tr>
 <th>Subject</th>
 <th>Catalog#</th>
 <th>Units</th>
 <th>Title</th>
</tr>
<tr><td align="center">MATH    </td>
<td align="center">135</td>
<td align="center">0.5   </td>
<td align="center">Algebra (Honours)             </td>
</tr>
<tr><td> </td><td colspan="3">
  <table>
    <tbody><tr>
     <th>Class</th>
     <th>Comp Sec</th>
     <th>Camp Loc</th>
     <th>Assoc. Class</th>
     <th>Rel 1</th>
     <th>Rel 2</th>
     <th>Enrl Cap</th>
     <th>Enrl Tot</th>
     <th>Wait Cap</th>
     <th>Wait Tot</th>
     <th>Time Days/Date</th>
     <th>Bldg Room</th>
     <th align="LEFT">Instructor</th>
   </tr>
<tr><td align="center">6192 </td><td align="center">LEC 001 </td><td align="center">UW    U         </td><td align="center">1   </td><td align="center">101 </td><td align="center">201 </td><td align="center">60  </td><td align="center">51  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6536 </td><td align="center">LEC 002 </td><td align="center">UW    U         </td><td align="center">1   </td><td align="center">101 </td><td align="center">201 </td><td align="center">60  </td><td align="center">53  </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9336 </td><td align="center">TUT 101 </td><td align="center">UW    U         </td><td align="center">1   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">120 </td><td align="center">104 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6549 </td><td align="center">LEC 003 </td><td align="center">UW    U         </td><td align="center">2   </td><td align="center">102 </td><td align="center">201 </td><td align="center">60  </td><td align="center">53  </td><td align="center">0   </td><td align="center">0   </td><td align="center">03:30-04:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6554 </td><td align="center">LEC 004 </td><td align="center">UW    U         </td><td align="center">2   </td><td align="center">102 </td><td align="center">201 </td><td align="center">60  </td><td align="center">57  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6555 </td><td align="center">LEC 005 </td><td align="center">UW    U         </td><td align="center">2   </td><td align="center">102 </td><td align="center">201 </td><td align="center">60  </td><td align="center">53  </td><td align="center">0   </td><td align="center">0   </td><td align="center">12:30-01:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9337 </td><td align="center">TUT 102 </td><td align="center">UW    U         </td><td align="center">2   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">180 </td><td align="center">163 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6553 </td><td align="center">LEC 006 </td><td align="center">UW    U         </td><td align="center">3   </td><td align="center">103 </td><td align="center">201 </td><td align="center">60  </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6556 </td><td align="center">LEC 007 </td><td align="center">UW    U         </td><td align="center">3   </td><td align="center">103 </td><td align="center">201 </td><td align="center">60  </td><td align="center">58  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9338 </td><td align="center">TUT 103 </td><td align="center">UW    U         </td><td align="center">3   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">120 </td><td align="center">118 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6551 </td><td align="center">LEC 008 </td><td align="center">UW    U         </td><td align="center">4   </td><td align="center">104 </td><td align="center">201 </td><td align="center">60  </td><td align="center">55  </td><td align="center">0   </td><td align="center">0   </td><td align="center">08:30-09:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6552 </td><td align="center">LEC 009 </td><td align="center">UW    U         </td><td align="center">4   </td><td align="center">104 </td><td align="center">201 </td><td align="center">60  </td><td align="center">52  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6561 </td><td align="center">LEC 010 </td><td align="center">UW    U         </td><td align="center">4   </td><td align="center">104 </td><td align="center">201 </td><td align="center">60  </td><td align="center">54  </td><td align="center">0   </td><td align="center">0   </td><td align="center">09:30-10:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6856 </td><td align="center">LEC 011 </td><td align="center">UW    U         </td><td align="center">4   </td><td align="center">104 </td><td align="center">201 </td><td align="center">70  </td><td align="center">71  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20MWF<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Software Eng students         </i></td><td align="CENTER">70</td><td align="center">71</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6857 </td><td align="center">LEC 012 </td><td align="center">UW    U         </td><td align="center">4   </td><td align="center">104 </td><td align="center">201 </td><td align="center">70  </td><td align="center">72  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20MWF<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Software Eng students         </i></td><td align="CENTER">70</td><td align="center">72</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">9339 </td><td align="center">TUT 104 </td><td align="center">UW    U         </td><td align="center">4   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">320 </td><td align="center">304 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6195 </td><td align="center">LEC 013 </td><td align="center">UW    U         </td><td align="center">5   </td><td align="center">105 </td><td align="center">201 </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">6557 </td><td align="center">LEC 014 </td><td align="center">UW    U         </td><td align="center">5   </td><td align="center">105 </td><td align="center">201 </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">6560 </td><td align="center">LEC 015 </td><td align="center">UW    U         </td><td align="center">5   </td><td align="center">105 </td><td align="center">201 </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">9340 </td><td align="center">TUT 105 </td><td align="center">UW    U         </td><td align="center">5   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">180 </td><td align="center">0   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td colspan="2" align="center">Cancelled Section</td></tr>
<tr><td align="center">6558 </td><td align="center">LEC 016 </td><td align="center">UW    U         </td><td align="center">6   </td><td align="center">106 </td><td align="center">201 </td><td align="center">60  </td><td align="center">59  </td><td align="center">0   </td><td align="center">0   </td><td align="center">03:30-04:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6562 </td><td align="center">LEC 017 </td><td align="center">UW    U         </td><td align="center">6   </td><td align="center">106 </td><td align="center">201 </td><td align="center">60  </td><td align="center">54  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6852 </td><td align="center">LEC 018 </td><td align="center">UW    U         </td><td align="center">6   </td><td align="center">106 </td><td align="center">201 </td><td align="center">60  </td><td align="center">56  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6853 </td><td align="center">LEC 019 </td><td align="center">UW    U         </td><td align="center">6   </td><td align="center">106 </td><td align="center">201 </td><td align="center">60  </td><td align="center">56  </td><td align="center">0   </td><td align="center">0   </td><td align="center">12:30-01:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6854 </td><td align="center">LEC 020 </td><td align="center">UW    U         </td><td align="center">6   </td><td align="center">106 </td><td align="center">201 </td><td align="center">60  </td><td align="center">60  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9341 </td><td align="center">TUT 106 </td><td align="center">UW    U         </td><td align="center">6   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">300 </td><td align="center">285 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6191 </td><td align="center">LEC 021 </td><td align="center">UW    U         </td><td align="center">7   </td><td align="center">107 </td><td align="center">201 </td><td align="center">60  </td><td align="center">18  </td><td align="center">0   </td><td align="center">0   </td><td align="center">08:30-09:20MWF<br></td><td align="center"></td></tr>
<tr><td colspan="6" align="left"><i>Reserve: Not in Yr 1  Math             </i></td><td align="CENTER">30</td><td align="center">18</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td colspan="6" align="left"><i>Reserve: MATH BASE students            </i></td><td align="CENTER">30</td><td align="center">0</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td align="center">6193 </td><td align="center">LEC 022 </td><td align="center">UW    U         </td><td align="center">7   </td><td align="center">107 </td><td align="center">201 </td><td align="center">60  </td><td align="center">59  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6417 </td><td align="center">LEC 023 </td><td align="center">UW    U         </td><td align="center">7   </td><td align="center">107 </td><td align="center">201 </td><td align="center">60  </td><td align="center">53  </td><td align="center">0   </td><td align="center">0   </td><td align="center">01:30-02:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6550 </td><td align="center">LEC 024 </td><td align="center">UW    U         </td><td align="center">7   </td><td align="center">107 </td><td align="center">201 </td><td align="center">60  </td><td align="center">55  </td><td align="center">0   </td><td align="center">0   </td><td align="center">04:30-05:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6855 </td><td align="center">LEC 025 </td><td align="center">UW    U         </td><td align="center">7   </td><td align="center">107 </td><td align="center">201 </td><td align="center">60  </td><td align="center">57  </td><td align="center">0   </td><td align="center">0   </td><td align="center">03:30-04:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9342 </td><td align="center">TUT 107 </td><td align="center">UW    U         </td><td align="center">7   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">300 </td><td align="center">242 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6194 </td><td align="center">LEC 026 </td><td align="center">UW    U         </td><td align="center">8   </td><td align="center">108 </td><td align="center">201 </td><td align="center">60  </td><td align="center">52  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6559 </td><td align="center">LEC 027 </td><td align="center">UW    U         </td><td align="center">8   </td><td align="center">108 </td><td align="center">201 </td><td align="center">60  </td><td align="center">52  </td><td align="center">0   </td><td align="center">0   </td><td align="center">04:30-05:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">9343 </td><td align="center">TUT 108 </td><td align="center">UW    U         </td><td align="center">8   </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">120 </td><td align="center">104 </td><td align="center">0   </td><td align="center">0   </td><td align="center">05:30-06:20T<br></td><td align="center"></td></tr>
<tr><td align="center">6835 </td><td align="center">TST 201 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">1460</td><td align="center">1320</td><td align="center">0   </td><td align="center">0   </td><td align="center">07:00-08:50M<br>10/07-10/07</td><td align="center"></td></tr>
</tbody></table>
</td></tr>
<tr><td colspan="4"></td></tr>
</tbody></table>



</p></main>
<br>Information last updated: <b>2024/7/27</b><p>
<br>
</p></body></html>
`

export const math136HTML = `
 <html lang="en"><head>
<title>
Returning Query Info
</title>
</head>
<body>
<a href="https://uwaterloo.ca">
<img style="border: 0px" alt="The University of Waterloo" src="/universityofwaterloo_logo.png">
</a>
<h1>Schedule of Classes</h1>
<main>
<p>See our online resource to assist you with 
<a target="_blank" href="https://uwaterloo.ca/registrar/registering-courses/understanding-schedule-classes#definitions">
understanding how to read the Schedule of Classes results table</a>.
</p>
Your selection was:<br>
Level: Undergraduate , Term: 1249 , Subject: MATH , Course Number: 136<p>


<table border="2">
<tbody><tr>
 <th>Subject</th>
 <th>Catalog#</th>
 <th>Units</th>
 <th>Title</th>
</tr>
<tr><td align="center">MATH    </td>
<td align="center">136</td>
<td align="center">0.5   </td>
<td align="center">Linear Algebra 1 (Honours)    </td>
</tr>
<tr><td> </td><td colspan="3">
  <table>
    <tbody><tr>
     <th>Class</th>
     <th>Comp Sec</th>
     <th>Camp Loc</th>
     <th>Assoc. Class</th>
     <th>Rel 1</th>
     <th>Rel 2</th>
     <th>Enrl Cap</th>
     <th>Enrl Tot</th>
     <th>Wait Cap</th>
     <th>Wait Tot</th>
     <th>Time Days/Date</th>
     <th>Bldg Room</th>
     <th align="LEFT">Instructor</th>
   </tr>
<tr><td align="center">6858 </td><td align="center">LEC 001 </td><td align="center">UW    U         </td><td align="center">1   </td><td align="center">101 </td><td align="center">201 </td><td align="center">90  </td><td align="center">54  </td><td align="center">0   </td><td align="center">0   </td><td align="center">10:30-11:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6859 </td><td align="center">LEC 002 </td><td align="center">UW    U         </td><td align="center">2   </td><td align="center">101 </td><td align="center">201 </td><td align="center">90  </td><td align="center">62  </td><td align="center">0   </td><td align="center">0   </td><td align="center">11:30-12:20MWF<br></td><td align="center"></td></tr>
<tr><td align="center">6683 </td><td align="center">LEC 081 </td><td align="center">ONLN  ONLINE    </td><td align="center">81  </td><td>&nbsp;</td><td>&nbsp;</td><td align="center">120 </td><td align="center">8   </td><td align="center">0   </td><td align="center">0   </td><td align="center"></td><td align="center"></td></tr>
<tr><td align="center">6860 </td><td align="center">TUT 101 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">180 </td><td align="center">116 </td><td align="center">0   </td><td align="center">0   </td><td align="center">02:30-03:20F<br></td><td align="center"></td></tr>
<tr><td align="center">6861 </td><td align="center">TST 201 </td><td align="center">UW    U         </td><td align="center">9999</td><td>&nbsp;</td><td>&nbsp;</td><td align="center">180 </td><td align="center">116 </td><td align="center">0   </td><td align="center">0   </td><td align="center">07:00-08:50M<br>10/07-10/07</td><td align="center"></td></tr>
</tbody></table>
</td></tr>
<tr><td colspan="4"></td></tr>
</tbody></table>



</p></main>
<br>Information last updated: <b>2024/7/27</b><p>
<br>
</p></body></html>
`
