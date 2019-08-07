
Below is the approach to achieve given assignment:

Q. How to run your solution ?

A. Place UI_assignment_1_19 folder in your system and run (double click on the file) the UI_assignment_1_19.html file inside UI_assignment_1_19 folder. The UI will be visible on your browser.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Approach Summary:

I have provided an ApproachDocument.docx which includes screenshots as well.
I have used HTML5, CSS3 and JS to achieve the functionality. (have not used Angular as I'm learning Angular6 now).
I have used external CSS and embedded JS (not recommended but I used just for this assignment).

I have used html input fields to get the user entered values in qc, qt, vc, vt etc.
For calculations, given formulas are being used to get Total Current Score & Total Target Score.

I have used CSS to align and decorate the front end as per requirement.

And in JS:
used if, if-else conditions to validate input(qc, qt, vc, vt etc) and to check all the error scenarios and alert the user, using JS pre-defined function alert();
used getElementById(); to work with DOM elements to dislay the score on score bars and the desired colors.

On click of Submit and Refresh button, scores() function is being invoked which is calling inputMarks() to take user entered values - qc, qt, vc, vt etc, convert it to number, check for all error and alert user, reset all the input fields and keep score section hidden until the user enters proper/correct values in the input field. Then call calculation() function.

calculate() function will calculate "Current Quant Score and Target Quant Score,Current Verbal Score and Target Verbal Score, Total Current Score & Total Target Score" along with their differences. And on the basis of which one is greater in target or current, say totalTargetScore or totalCurrentScore, it will display (+, -, lower, higher, equal to) on the UI via DOM.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

