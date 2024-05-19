const boyImg = ['🥵','🥴','🤠','🤓','👦','🧔‍♂️','👨‍🦳'];
const girlImg = ['🥳','😴','🥺','👧','🙅‍♀️','🙍‍♀️','👱‍♀️','👩‍🦰'];

/* GENERAL: - do not change HTML and CSS, just fill in here
              in JS.
              Pay attention that there are several possible solutions
              for each mission. 
              During the test it's OK to ask the teacher questions to understand
              the missions, or ask for technical help, but is not OK
              to ask how to solve the missions */

/**הוראות כלליות
 * אל תשנו לא את 
 * HTML
 * ולא את
 * CSS,
 * צריך רק למלא את המשימות כאן ב
 * JS.
 * שימו לב שלכל משימה תמיד יש כמה אפשרויות לפתרון.
 * 
 * הבהרה:
 * בזמן המבחן זה בסדר לשאול את המורה כדי להבהיר את המשימות
 * או לבקש עזרה טכנית, אמנם זה לא בסדר לבקש עזרה בפתרון
 */

/* MISSION 1: - create list of <li> items which are located
                inside <div class="list"> - give it name "list"
              - after this uncomment the next command to create 
                array "people" from the list "list"
  (17 points)
*/

/**
 * משימה 1
 * א. תצרו רשימת ה
 * <li>
 *  שנמצאים בתוך
 * <div class="list">
 * ותנו לרשימה הזאת שם 
 * "list"
 * ב. אחרי זה הורידו "הערות" מהפקודה הבאה
 * כדי שהרשימה
 * "list"
 * תהפוך למערך
 * "people"
 * (17
 * נקודות)
 * */

// const people = Array.from(list);



/* MISSION 2: go over the array "people" and filter it 2 times to create 2 new arrays
 "boys" - with the <li> elements which className contains class "boy"
 "girls" - with the <li> elements which className contains class "girl"

 You could check this or by el.className.indexOf("lalala")
                      or by el.classList.contains("lalala")

 (17 points)
*/

/**
 * משימה 2
 * תעברו על המערך 
 * "people"
 * ותסננו אותו פעמים כך שייוצרו 2 מערכים חדשים
 * 1. "boys" -
 * כך ש
 * className
 * של העצמים ברשימה יכיל
 * class "boy"
 * 2. "girls" -
 * כך ש
 * className
 * של העצמים ברשימה יכיל
 * class "girl"
 * 
 * למשל ניתן לבדוק אם ה
 * class
 * נמצא על ידי
 * el.className.indexOf("lalala")
 * או על ידי
 * el.classList.contains("lalala")
 * (17
 * נקודות)
 */



/* MISSION 3: Now go over the elements in "boys" 
and add to innerText of each element random image from boyImg.
The same with "girls".

(17 points)*/

/**
 * משימה 3
 * 
 * תעברו על המערך 
 * "boys"
 * ותוסיפו ל
 * innerText 
 * של כל אלמנט תמונה אקראית מתוך
 * boyImg.
 * תעשו אותו הדבר עבור
 * "girls"
 * 
 * (17
 * נקודות)
 */



/* MISSION 4: create 3 functions - "showBoys", "showGirls", "showAll"

  "showBoys" should go over the list "list", check if it's className
  contains "boy"
  (by el.className.indexOf("lalala")
                      or by el.classList.contains("lalala"))
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

  (17 points)
*/
/**
 * משימה 4
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
  * (17
 * נקודות) 
*/



/**
 * MISSION 5 - accomplish this option or the one after this:
 * MISSION 5 - BONUS
 * 
 * get the list of all the buttons and call it "buttons"
 * 
 * One by one add to each button from the list event listener on "click"
 * (for example: buttons[0].addEventListener(...)) -
 * to the first one - with function "showBoys"
 * to the second one - with function "showGirls"
 * to the third one - with function "showAll"
 * 
 * (17 points)
 */

/**
 * MISSION 5 - 
 * תבצעו את המשימה הזאת או אחת שאחריה:
 * MISSION 5 - BONUS
 * 
 * תצרו רשימה של כל הכפתורים ותקראו לה
 * "buttons".
 * תוסיפו לכל אחד מהכפתורים לפי הסדר את
 * event listener
 * על
 * "click".
 * לראשון - עם הפונקציה
 * "showBoys",
 * לשני - עם הפונקציה
 * "showGirls",
 * לשלישי - עם הפונקציה
 * "showAll"
 * 
 *   * (17
 * נקודות) 
 */



/**
 * MISSION 6
 * 
 * - Get the field "input"
 * 
 * - Create funciton "search" that 
 *    -- gets value from the field "input" and converts it toLowerCase()
 *    -- checks if the lower case of the innerText of the element contains
 *       the string from the input 
 *    -- if contains, removes class "hide" from the element 
 *    -- otherwise - adds it
 * 
 * - Add listener on event "input" to the field "input" to run the funciton "search"
 * (17 points)
 */
/**
 * משימה 6 
 *  
 * - תיצרו משתנה עבור השדה 
 *    "input"
 * 
 * 
 * - תצרו פונקציה
 *   "search"
 *   ש
 *   -- משיגה ערך מתוך השדה
 *    "input"
 *    והופכת אותו ל
 *    lower case
 *   -- בודקת אם 
 *      innerText
 *      של האלמנט כאשר הוא באותיות קטנות
 *      מכיל את המחרוזת מה
 *      "input".
 *   -- אם מכיל, אז מוריגים ממנו 
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
 * *   * (17
 * נקודות) 
 */
 


/* MISSION 7 - bonus:
   create at the hosting at your directory new directory "test"
   and upload there these files, ensure it works
*/
/**
 * משימה  7- בונוס
 * תצרו ב
 * hosting
 * תיקיה בשם
 * "test"
 * ותעלו לשם את הקבצים הללו.
 * תוודאו שעובד
 */





