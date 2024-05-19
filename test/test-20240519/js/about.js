/** You can see at "HOME" screen, how this app
 * should look in the end
 * 
 * אפשר לראות למטה במסך הבית איך האפליקציה
 * הזאת אמורה להיראות בסוף
 */

/** MISSION 05:
 * 
 * Create 5 "const":
 *  - for the <ul class="list">
 *  - for the 3 buttons("boys","girls","everybody") 
 *  - for the <input type="text" id="search">
 * 
 * Take the selectors from the lines 39-46 of about.html
 * 
 * 3 points
 * 
 * צרו 5
 * "const":
 *  - עבור
 *    <ul class="list">
 *  - עבור 3 כפתורים
 *    ("boys","girls","everybody")
 *  - עבור הקלט
 *    <input type="text" id="search">
 * 
 * קחו את הסלקטורים מהשורות 39-46 של
 * about.html
 * 
 * 3 נקודות
 */


/** MISSION 06:
 * 
 * Create global const allLi and point it to an
 * empty array.
 * 
 * 1 point
 * 
 * צרו
 * const
 * בשם
 * allLi
 * והצביעו איתו למערך ריק
 * 
 * נקודה 1
 */


/** MISSION 07:
 * 
 * Create function (arrow or usual) getRandomFace()
 * that gets array (like boyImg or girlImg in the future missions)
 * as an argument.
 * 
 * - It should generate random idx
 * - and return the appropriate member of the given array
 * 
 * 10 points
 * 
 * צרו פונקציה (רגילה או חץ) בשם
 * getRandomFace()
 * שמקבלת מערך (זה יהיה
 * boyImg
 * או
 * girlImg
 * במשימות הבאות)
 * בתור ארגומנט אחד
 * 
 * - הפונקציה צריכה לייצר אינדקס רנדומלי ולהחזיר
 *   את האיבר הרנדומלי המתאים של המערך הנתון
 * 
 * 10 נקודות
 */

/** MISSION 08:
 * 
 * Create function (arrow or usual) createLi()
 * that gets object (like from the array "persons")
 * as an argument.
 * It should:
 * 
 * - create new <li> element
 * - use "gender" property from the given object to
 *   add class to the element
 * - to set the text with the "personName"
 *   property from the object
 * - to add random face by calling
 *   getRandomFace(girlImg) if it is a girl
 *   or getRandomFace(boyImg) if it is a boy
 * - the example of the result is 
 *   <li class="boy">Lionel 🧔‍♂️</li>
 * - append the new <li> to  <ul class="list">
 * - add the new <li> to the array allLi
 * 
 * 
 * 10 points
 * 
 * צרו פונקציה (רגילה או חץ) בשם
 * createLi(),
 * הפונקציה אמורה לקבל בתור ארגומנט אובייקט
 * (כמו במערך
 * "persons")
 * הפונקציה צריכה 
 * 
 * - לייצור אלאמנט
 *   <li>
 *   חדש
 * - לקחת תכונה
 *   gender
 *   מהאובייקט הנתון ולהשתמש בה בתור קלאס עבור האלמנט החדש
 * - לקחת תכונה
 *   personName
 *   מהאובייקט הנטון ולשתמש בה בתור טקסט עבור האלמנט החדש
 * - להוסיף לטקסט פרצוף אקראי בעזרת
 *   getRandomFace(girlImg)
 *   אם זאת בת, או בעזרת
 *   getRandomFace(boyImg)
 *   אם זה בן
 * - להלן הדוגמא של התוצאה:
 *   <li class="boy">Lionel 🧔‍♂️</li>
 * - צרפו את האלמנט החדש ל
 *  <ul class="list">
 * - הוסיפו אותו גם למערך
 *   allLi
 * 
 * 10 נקודות
 */


/* MISSION 09: - go over all the persons and create <li> elements
                 for each person using the function createLi()

  (10 points)

 * עברו על המערך
    persons
    וצרו אלמנט
    <li>
    עבור כל אחד מהרשימה בעזרת הפונקציה
    createLi()

 *(10
 * נקודות)
 * */




/**  MISSION 10: create 3 functions - "showBoys", "showGirls", 
* "showAll".
* 
* 1. "showBoys" should go over the list "allLi", check if it's className
  contains "boy" or by el.classList.contains("lalala"))
  and if it is, remove the class "hide",
  otherwise - add the class "hide".

  "showGirls" should go over the list "list", check if it's className
  contains "girl"
  (by el.className.indexOf("lalala")
                      or by el.classList.contains("lalala"))
  and if it is, remove the class "hide",
  otherwise - add the class "hide".

  "showAll" should go over the list "list" and just
  remove the class "hide" from each element.

  (10 points)
*/
/**
 * 10
 * תצרו 3 פונקצייות 
 * "showBoys", "showGirls", "showAll".
 * 
 * "showBoys"
 * אמורה לעבור על הרשימה 
 * "list"
 * ולבדוק אם האלמנט מכיל
 * class "boy"
 * (על ידי
 *  el.className.indexOf("lalala")
 * או על ידי
 *  el.classList.contains("lalala")).
 * אם כן, מורידים מהאלמנט את
 * class "hide",
 * אם לא - מוסיפים אותו.
 * 
 *  * "showGirls"
 * אמורה לעבור על הרשימה 
 * "list"
 * ולבדוק אם האלמנט מכיל
 * class "girl"
 * (על ידי
 *  el.className.indexOf("lalala")
 * או על ידי
 *  el.classList.contains("lalala")).
 * אם כן, מורידים מהאלמנט את
 * class "hide",
 * אם לא - מוסיפים אותו.
 * 
 *  * "showAll"
 * אמורה לעבור על הרשימה 
 * "list"
 * וופשוט להוריד מכל האלמנטים את
 * class "hide"
 * 
  * (10
 * נקודות) 
*/





/**
 * MISSION 11 
 * 
 * One by one add to each button from the list 
 * event listener on "click"
 * 
 * to the "boys" - with function "showBoys"
 * to the "girls" - with function "showGirls"
 * to the "everyone" - with function "showAll"
 * 
 * (8 points)
 */

/**
 * MISSION 11 
 * 
 * תוסיפו לכל אחד מהכפתורים  ליסטנרים על האירוע
 * "click".
 * לכפתור
 * "boys" -
 *  ליסטנר עם הפונקציה
 * "showBoys",
 * לכפתור 
 * "girls" -
 * ליסטנר עם הפונקציה
 * "showGirls",
 * לכפתור
 * "everyone" -
 * ליסטנר עם הפונקציה
 * "showAll"
 * 
 *   * (8
 * נקודות) 
 */


/**
 * MISSION 12

 * 
 * - Create funciton "search" that 
 *    -- gets value from the field "input" and converts it toLowerCase()
 *    -- goes over the array "persons"
 *     -- checks if the lower case of the personName of
 *        each object contains
 *       the string from the input 
 * 
 *    -- if contains, removes class "hide" from the appropriate
 *       element (with the same i as the object)
 *    -- otherwise - adds it
 * 
 * - Add listener on event "input" to the field "input" 
 *    to run the funciton "search"
 * 
 * - Ensure that everything works
 * 
 * 5 points
 */
/**
 * משימה 12
 *  
 * - תצרו פונקציה
 *   "search"
 *   ש
 *   -- משיגה ערך מתוך השדה
 *    "input"
 *    והופכת אותו ל
 *    lower case
 *   -- עוברת על המערך 
 *      persons
 *   -- בודקת אם 
 *      personName
 *      של האובייקט כאשר הוא באותיות קטנות
 *      מכיל את המחרוזת מה
 *      "input".
 *   -- אם מכיל, מסירים מהאלמנט התואם 
 *      (אותו i)
 *        במערך
 *      persons
 *      את
 *      class "hide"
 *   -- אחרת - מוסיפים
 * 
 * - תוסיפו לשדה
 *   'input'
 *   את
 *   event listener
 *   על האירוע
 *   "input"
 *   שיריץ את
 *   "search"
 * 
 * - ודאו שהכל עובד
 * 
 * 5 נקודות
 */
 
/* MISSION 13:
   There is a class "outlined" in about.css.
   Use it for the buttons and the input field to
   outline the current choice

   5 points
*/
/**
 * משימה  13:
   בתוך הקובץ 
   about.css
   מוגדר קלאס
   outlined.
   השתמשו בו עבור הכפתורים ושדה הקלט
   כדי להדגיש את הבחירה שנעשתה כרגע

   5 נקודות
*/

/* MISSION 14:
   create at the hosting at your directory new directory "test"
   and upload there these files, ensure it works

   3 points
*/
/**
 * משימה  14:
 * תצרו ב
 * hosting
 * תיקיה בשם
 * "test"
 * ותעלו לשם את הקבצים הללו.
 * תוודאו שעובד
 * 
 * 3 נקודות
 */

/* MISSION 15 - bonus:
   Remove class "hide" from "Number of Random Persons"
   label in about.html.
   Use it's input to tell how many random persons 
   you want to see - and show this number of random persons

  10 points

   הסירו קלאס
   "hide"
   מהכיתוב
   "Number of Random Persons"
   בתוך הקובץ
   about.html.
   השתמשו בשדה הקלט שמתגלה כדי להגיד כמה אנשים 
   אקראיים אנחנו רוצים להציג - ותציגו את הכמות הזאת
   של אנשים אקראיים

   10 נקודות
*/
/* MISSION 16 - bonus:
   Remove class "hide" from "shuffle faces"
   button in about.html.
   Use the button to remove a face from each <li>
   and to supply it with new random face.

   10 points

   הסירו קלאס
   "hide"
   מהכפתור
   "shuffle faces"
   בתוך הקובץ
   about.html.
   השתמשו בכפתור כדי להסיר פרצוף מכל
   <li>
   ולספק לו פרצוף אקראי חדש

   10 נקודות
*/
/* MISSION 17 - very challenging challenge:
   Remove class "hide" from "shuffle all"
   button in about.html.
   Use the button to clear the innerHTML of <ul>,
   to point allLi array to [] again (so the array
    should not be "const"),
   to shuffle (change order) of the objects
   in the array "persons" and to show all the new <li>
   in accordance with the new order.

   10 points

   הסירו קלאס
   "hide"
   מהכפתור
   "shuffle all"
   בתוך הקובץ
   about.html.
   השתמשו בכפתור כדי לרוקן את
   innerHTML
   של
   <ul>,
   להצביע שוב עם 
   allLi
   למערך ריק (זה אומר ש
    allLi
    לא צריך להיות
    const),
    לערבב את האובייקטים בתוך 
    persons,
    ולהציג את כל ה
   <li>
   לפי הסדר החדש

   10 נקודות
*/





