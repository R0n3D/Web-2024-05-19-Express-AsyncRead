/** TRAINING MISSION 01: 
 * Create 7 "const"s:
 *   - for the "result" div
 *   - for the 6 buttons
 *  (lines 41 - 50)
 * 
 * צרו 7
 * "const":
 *  - עבור ה-
 *    "result" div
 *  - עבור ששת הכפתורים
 *  (שורות 41-50)
 */



/** TRAINING MISSION 02: 
 * Create global variable named "num" and assign it value of 0.
 * 
 * צרו משתנה גלובאלי בשם 
 * "num"
 * ותשימו בתוכו ערך 0
*/


/** TRAINING MISSION 03: 
 * -- Create regular function showNum that displays
 * the variable "num" in the "result" div.
 * -- Run it after that immediately.
 * 
 * -- צרו פונקציה רגילה
 *    showNum
 *    שתציג את הערך של המשתנה
 *    "num"
 *    בתוך
 *    "result" div
 * -- תקראו לפונקציה הזאת מיד אחרי הגדרתה
*/


/** TRAINING MISSION 04: 
 *    Create regular function add2 that 
 *    adds 2 to "num" variable and uses showNum()
 *    function to display the new value
 * 
 *   צרו פונקציה רגילה
 *   add2
 *   שמוסיפה 2 למשתנה
 *   num
 *   ומשתמשת בפונקציה
 *   showNum()
 *   כדי להציג את הערך החדש
*/


/** TRAINING MISSION 05:
 * Add listener to the "+2" button. The listener will fire
 * on "click" event and run the function add2().
 * 
 * הוסיפו ליסטנר לכפתור
 * "+2".
 * הליסטנר צריך להידלק על האירוע
 * "click"
 * ולהריץ את הפונקציה 
 * add2.
 */


/** TRAINING MISSION 06: 
 * -- In the same way like in the mission 04 
 *    create regular functions multiply2() (that 
 *    multiplies "num" by 2) and subtract3() (that subtracts
 *    3 from "num"). 
 *    These functions should use showNum()
 *    function to display the new value of "num".
 * 
 * -- In the same way like in the mission 05
 *    add listeners to the buttons "x2" and "-3"
 *    and use there the functions multiply2 and subtract3.
 * 
 * -- בדומה למשימה 04 צרו פונקציות רגילות
 *   multiply2
 *   (שמכפילה את
 *   num
 *   ב-2)
 *   ואת
 *   subtract3
 *   (שמחסירה 3 מ-
 *    num).
 *   שתי הפונקציות צריכות להשתמש ב
 *   showNum()
 *   כדי להציג את הערך החדש
 * 
 * -- בדומה למשימה 05 צרו ליסטנרים עבור הכפתורים 
 *   "x2"
 *   ו
 *   "-3"
 *   שיתשמשו בפונקציות החדשות
 *   multiply2
 *   ו
 *   subtract3.
*/

/** TRAINING MISSION 07:
 * Add listener to the "reset" button. The listener will fire
 * on "click" event and use anonimous regular function 
 * which will reset the value of "num" to 0 and use 
 * the showNum() function to show the new value.
 * 
 * הוסיפו ליסטנר לכפתור
 * "reset".
 * הליסטנר צריך להידלק על האירוע
 * "click"
 * ולההשתמש בפונקציה אנונימית רגילה שתאתחל את הערך של
 * num
 * ל-0 ותשתמש בפונקציה
 * showNum()
 * כדי להראות את הערך החדש של
 * num.
 */


/** TRAINING MISSION 08:
 * Like in the mission 07 add listeners to the buttons
 * "x3" and "^2". The listeners will fire
 * on "click" event and will use anonimous regular functions 
 * the first of which will multiply "num" by 3 and 
 * the second will rise "num" into power of 2 (reminder: 
 * the power operator is **) 
 * 
 * The both anonimous functions will use 
 * the showNum() function to show the new value of "num".
 * 
 * בדומה למשימה 07 הוסיפו ליסטנרים לכפתורים
 * "x3"
 * ו
 * "^2".
 * הליסטנרים צריכים להידלק על האירוע
 * "click"
 * ולההשתמש בפונקציות אנונימיות רגילות שהראשונה 
 * ביניהן תכפיל את הערך של
 * num
 * ב-3 והשנייה תעלה את 
 * num
 * בחזקה 2
 * (תזכורת: האופרטור של העלאה בחזקה זה 
 * **).
 * 
 * שתי הפונקציות צריכות להשתמש בפונקציית
 * showNum()
 * כדי להראות את הערך החדש של
 * num.
 */



/** TRAINING MISSION 09:
 * -- Create arrow function changeViolet().
 *    This function should check if "result"
 *    div contains the class "violet".
 *    If it is - it should remove the class,
 *    if not - it should add the class.
 * 
 * -- Create additional listener on the button "+2".
 *    The listener will fire on "click" event
 *    and will run the function changeViolet
 * 
 *  -- צרו פונקציית חץ
 *     changeViolet().
 *     הפונקציה צריכה לבדוק אם ה
 *     "result" div
 *     מכיל את הקלאס 
 *     "violet".
 *     אם כן, מסירים את הקלאס, אחרת, מוסיפים את הקלאס
 * -- הוסיפו ליסטנר נוסף לכפתור
 *    "+2".
 *    הליסטנר ייתעורר על האירוע
 *    "click"
 *    ויפעיל את הפונקציה
 *    changeViolet
 */


/** TRAINING MISSION 10:
 * -- Create arrow function changeViolet2().
 *    This function should check if document.body
 *    contains the class "violet".
 *    If it is - it should remove the class,
 *    if not - it should add the class.
 * 
 * -- Create additional listener on the button "x2".
 *    The listener will fire on "click" event
 *    and will run the function changeViolet2
 * 
 *  -- צרו פונקציית חץ
 *     changeViolet2().
 *     הפונקציה צריכה לבדוק אם ה
 *     document.body
 *     מכיל את הקלאס 
 *     "violet".
 *     אם כן, מסירים את הקלאס, אחרת, מוסיפים את הקלאס
 * -- הוסיפו ליסטנר נוסף לכפתור
 *    "x2".
 *    הליסטנר ייתעורר על האירוע
 *    "click"
 *    ויפעיל את הפונקציה
 *    changeViolet2
 */



/** TRAINING MISSION 11:
 * -- Create additional listener on the button "-3".
 *    The listener will fire on "click" event
 *    and will anonymous arrow function
 * 
 * -- This function should check if the "+2" button
 *    contains the class "aqua".
 *    If it is - it should replace "aqua" by "violet",
 *    if not - it should replace "violet" by "aqua".
 * 
 * -- הוסיפו ליסטנר נוסף לכפתור
 *    "-3".
 *    הליסטנר ייתעורר על האירוע
 *    "click"
 *    ויפעיל פונקציית חץ אנונימית
 * 
 *  -- הפונקציה צריכה לבדוק אם הכפתור
 *     "+2"
 *     מכיל את הקלאס 
 *     "aqua".
 *     אם כן, מחליפים את הקלאס
 *     "aqua"
 *     בקלאס
 *     "violet",
 *     אחרת, מחליפים את הקלאס
 *     "violet"
 *     בקלאס
 *     "aqua".
 */


/** TRAINING MISSION 12:
 * -- Create additional listener on the button "reset".
 *    The listener will fire on "click" event
 *    and will anonymous arrow function
 * 
 * -- This function should check if the "x2" button
 *    contains the class "violet".
 *    If it is - it should replace "violet" by "aqua",
 *    if not - it should replace "aqua" by "violet".
 * 
 * -- הוסיפו ליסטנר נוסף לכפתור
 *    "reset".
 *    הליסטנר ייתעורר על האירוע
 *    "click"
 *    ויפעיל פונקציית חץ אנונימית
 * 
 *  -- הפונקציה צריכה לבדוק אם הכפתור
 *     "x2"
 *     מכיל את הקלאס 
 *     "violet".
 *     אם כן, מחליפים את הקלאס
 *     "violet"
 *     בקלאס
 *     "aqua",
 *     אחרת, מחליפים את הקלאס
 *     "aqua"
 *     בקלאס
 *     "violet".
 */


