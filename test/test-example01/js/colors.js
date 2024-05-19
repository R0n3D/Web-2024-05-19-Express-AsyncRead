/** The goal of this app is on each click to move over the array "colors" 
 * and to show background colored by the next color + show color name or code
 * in the <span class="color">.
 */

/**
 * המטרה של האפליקציה הזאת היא על כל 
 * "click"
 * לזוז לצבע הבא בתוך המערך
 * "colors",
 * להציג את הצבע ברקע ואת השם שלו בתוך ה-
 * <span class="color">. 
 */

/** The array "colors" is already created. Don't delete nothing but 
 * you could add your own color definitions.
*/

/**
 * המערך
 * "colors"
 * כבר קיים. נא לא למחוק שום דבר, אבל כן אפשר להוסיף
 * עוד הגדרות הצבעים משלכם.
 */

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
/** MISSION 1.
 * Create 2 "const": for the button and for the span (
 * lines 85 and 86 of "colors.html").
 * /5 points/
 * 
 * צרו
 * 2 const:
 * עבור הכפתור ועבור ה-
 * span
 * (שורות 85 ו-86 של
 * "colors.html").
 * 
 * /5 נקודות/
 */

/** MISSION 2:
 * Create a function getNextColor() - it could be a usual or 
 * an "arrow" function. 
 * 
 * This function should check if the current index(location) is the last 
 * index in the array "colors".
 * 
 * If it is, it should make the index to be 0 (start going over the array again).
 * If not, increase the index by 1.
 * 
 * Use for the above check the TERNARY OPERATOR.
 * 
 * The function should use "style" of BODY to color it according 
 * to the new color definition - coming from the "colors" array - using 
 * the new index.
 * 
 * Also it should show the color definition in the <span class="color">;
 * 
 * /25 points/
 * 
 * צרו פונקציה
 * getNextColor() - 
 * זאת יכולה להיות פונקציה רגילה או פונקצית חץ.
 * 
 * הפונקציה צריכה לבדוק אם האינדקס (המיקום) הנוכחי הינו האינדקס
 * האחרון בתוך המערך 
 * "colors".
 * אם הוא אכן אחרון, החזירו אותו להיות אפס, ואם לא, הגדילו אותו ב-1.
 * 
 * עבור הבדיקה הנ"ל השתמשו באופרטור המשולש.
 * 
 * הפונקציה צריכה להשתמש ב-
 * "style"
 * של ה-
 * BODY
 * כדי לצבוע אותו לפי הגדרת הצבע החדשה מהמערך לפי האינדקס החדש.
 * 
 * כמוכן היא צריכה להציג את ההגדרה החדשה של הצבע בתוך ה
 * <span class="color">.
 * 
 * /25 נקודות/
 */

/** MISSION 3.
 * Create listener on the event "click" on the button,
 * and supply it with the function getNextColor.
 * Ensure that the app works.
 * 
 * Check below in the HOME page how the working app screenshots should look.
 *  
 * /7 points/
 * 
 * צרו ליסטנר עבור האירוע 
 * "click"
 * על הכפתור ותביאו לו את הפונקציה
 * getNextColor();
 * ודאו שהאפליקציה עובדת.
 * 
 * תבדקו למטה בעמוד הבית איך האפליקציה העובדת אמורה להיראות.
 *  
 * /7 נקודות/
 */




