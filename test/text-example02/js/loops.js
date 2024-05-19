/** TRAINING MISSION 01
 * 
 * Create "const" for the "div"s with the classnames
 * "first","second","third" and "fourth"
 * 
 * and "const" for the "buttons" with the id
 * "all","animals","foods","life","not-foods" and "not-plants-insects"
 * 
 * and "const" for the "inputs" with the id 
 * "first-letter" and "word"
 * 
 * in total - 12 "const"
 * 
 * צרו
 * "const"
 * 
 * עבור ה
 * DIVS
 * עם הקלאסים
 * "first","second","third","fourth"
 * 
 * עבור הכפתורים עם ה
 * id
 * "all","animals","foods","life","not-foods","not-plants-insects"
 * 
 * ועבור ה
 * INPUTS
 * עם ה
 * id
 * "first-letter","word"
 * 
 * בסך הכל 12
 * const
 */



/** TRAINING MISSION 02
 * 
 * Create global "const allElements" and point with it
 * to an empty array.
 * 
 * צרו
 * const
 * גלובאלי בשם
 * allElements
 * והצביעו איתו למערך ריק
 **/

/** TRAINING MISSION 03
 *
 * Go over the array ar1 by FOR LOOP
 * and show each member of the array inside DIV FIRST
 * 
 * תעברו עם לולאת 
 * FOR
 * על המערך
 * ar1
 * ותציגו את כל האיברים של המערך בתוך ה
 * DIV FIRST
 *  */



/** TRAINING MISSION 04
 *
 * Create arrow function createItem().
 * This function should get 1 argument - emojee.
 * It should create new <div>,
 * put inside it the emojee,
 * add the <div> the class "item",
 * and append the new <div> to the DIV SECOND.
 * 
 * צרו פונקציית חץ
 * createItem().
 * הפונקציה אמורה לקבל ארגומנט אחד - אימוג'י.
 * היא צריכה לייצור 
 * <DIV>
 * חדש, לשים את האימוג'י לתוכו, להוסיף ל
 * <DIV>
 * קלאס
 * "item",
 * ולצרף את ה
 * <DIV>
 * החדש ל
 * DIV SECOND
 *  *  */

/** TRAINING MISSION 05
 *
 * Go over the array ar1 by FOR LOOP
 * and pass each member of the array 
 * to the function createItem()
 * 
 * תעברו עם לולאת 
 * FOR
 * על המערך
 * ar1
 * ותעבירו כל איבר של המערך לפונקציה
 * createItem()
 *  */



/** TRAINING MISSION 06
 *
 * Create arrow function getRandomColor().
 * This function should create random index for the
 * array "colors", using the formula:
 * let idx = Math.floor(Math.random()*colors.length)
 * and it should return the color from the array "colors",
 * using this index
 * 
 * צרו פונקציית חץ
 * getRandomColor().
 * הפונקציה צריכה לייצור אינדקס רנדומאלי עבור המערך
 * "colors"
 * בעזרת הנוסחא
 * let idx = Math.floor(Math.random()*colors.length)
 * והפונקציה צריכה להחזיר צבע בעל האינדקס הזה
 * מתוך המערך
 * "colors"
 * */


/** TRAINING MISSION 07
 *
 * Create arrow function createItem2().
 * This function should get 1 argument - object
 * (like the objects in the array allItems).
 * It should create new <div>,
 * put inside it the itemName and the emojee from the object,
 * add to the <div> the class "item",
 * add to the <div> random color class by using getRandomColor(),
 * append the new <div> to the DIV THIRD,
 * and add the new <DIV> object to the array allElements.
 * 
 * צרו פונקציית חץ
 * createItem2().
 * הפונקציה אמורה לקבל ארגומנט אחד - אובייקט,
 * כמו אחד האובייקטים מתוך המערך
 * allItems.
 * היא צריכה לייצור 
 * <DIV>
 * חדש, לשים לתוכו את שם הפריט ואת האימוג'י שלו, להוסיף ל
 * <DIV>
 * קלאס
 * "item",
 * להוסיף ל
 * <DIV>
 * קלאס צבע רנדומאלי בעזרת השימוש בפונקציה
 * getRandomColor(),
 * לצרף את ה
 * <DIV>
 * החדש ל
 * DIV THIRD
 * ולהוסיף את האובייקט של האלמנט החדש למערך
 * allElements
 *  */


/** TRAINING MISSION 08
 *
 * Go over the array allItems by FOR LOOP
 * and pass each member of the array 
 * to the function createItem2()
 * 
 * תעברו עם לולאת 
 * FOR
 * על המערך
 * allItems
 * ותעבירו כל איבר של המערך לפונקציה
 * createItem2()
 *  */


/** TRAINING MISSION 09
 *
 * Create arrow or regular function isAnimal().
 * This function should get 1 argument - object
 * (like the objects in the array allItems).
 * It should return "true" if the "type" property
 * of the object equals to "animal",
 * otherwise it should return "false".
 * 
 * צרו פונקציית חץ
 * isAnimal().
 * הפונקציה אמורה לקבל ארגומנט אחד - אובייקט,
 * כמו אחד האובייקטים מתוך המערך
 * allItems.
 * היא צריכה להחזיר 
 * true
 * אם התכונה
 * type
 * של האובייקט שווה ל
 * "animal",
 * אחרת היא צריכה להחזיר
 * false
 * 
 *  */


/** TRAINING MISSION 10
 *
 * Create arrow or regular function searchByType().
 * This function should get 1 argument - function
 * (like isAnimal()).
 * It should go over the array allItems and
 * run the given function - if the given function returns
 * "true", it should show appropriate <div> from the
 * array allElements (by removing the class 'hide'),
 * if it returns "false", the appropriate <div> should
 * be hidden.
 * 
 * צרו פונקציית חץ
 * searchByType().
 * הפונקציה אמורה לקבל ארגומנט אחד - פונקציה שמחזירה
 * true
 * או
 * false
 * כמו פונקציה
 * isAnimal.
 * הפונקציה 
 * searchByType()
 * צריכה לעבור על המערך
 * allItems
 * ולהריץ עבור כל אובייקט שבמערך את פונקציית הארגומנט.
 * אם פונקציית הארגומנט מחזירה
 * true,
 * צריך להציג את האלאמנט המתאים מהמערך המקביל 
 * allElements
 * (להסיר קלאס
 * hide),
 * אחרת - צריך להסתיר אותו
 * (להוסיף קלאס
 * 'hide')
 * 
 *  */


/** TRAINING MISSION 11
 * 
 * Add listener to the button "animals",
 * use the next anonimous arrow function:
 * () => { searchByType(isAnimal) }
 * 
 * הוסיפו ליסטנר לכפתור
 * animals,
 * השתמשו בפונקציה הבאה
 * () => { searchByType(isAnimal) }
 * 
 */


/** TRAINING MISSION 12
 *
 * Create arrow or regular function isFood().
 * This function should get 1 argument - object
 * (like the objects in the array allItems).
 * It should return "true" if the "type" property
 * of the object equals to "food" or to "dessert",
 * otherwise it should return "false".
 * 
 * צרו פונקציית חץ
 * isFood().
 * הפונקציה אמורה לקבל ארגומנט אחד - אובייקט,
 * כמו אחד האובייקטים מתוך המערך
 * allItems.
 * היא צריכה להחזיר 
 * true
 * אם התכונה
 * type
 * של האובייקט שווה ל
 * "food"
 * או ל
 * "dessert",
 * אחרת היא צריכה להחזיר
 * false
 * 
 *  */


/** TRAINING MISSION 13
 * 
 * Add listener to the button "foods",
 * use the next anonimous arrow function:
 * () => { searchByType(isFood) }
 * 
 * הוסיפו ליסטנר לכפתור
 * foods,
 * השתמשו בפונקציה הבאה
 * () => { searchByType(isFood) }
 * 
 */


/** TRAINING MISSION 14
 * 
 * Create appropriate functions and listeners
 * for the buttons "life forms","not foods",
 * "not plants, not insects"
 */


/** TRAINING MISSION 15
 * 
 * Add listener to the button "foods",
 * use the next anonimous arrow function:
 * it should go over the array allElements
 * and show each element
 * 
 * הוסיפו ליסטנר לכפתור
 * foods,
 * השתמשו בפונקציית חץ אנונימית. היא צריכה לעבור
 * על כל האיברים של המערך
 * allElements
 * ולהציג כל אחד מהם.
 * * 
 */


/** TRAINING MISSION 16
 *
 * Add listener to the "first-letter" input.
 * It should use anonymous function .
 * This function should get the letter from the input.
 * It should go over the array allItems
 * and compare the first letter of the itemName property
 * of each object to the given letter.
 * If it is equal, show the appropriate element
 * from allElements array.
 * Otherwise hide it.
 * 
 * הוסיפו ליסטנר ל
 * FIRST-LETTER INPUT.
 * הוא צריך להשתמש בפונקציה אנונימית.
 * הפונקציה צריכה לקלוט אותו מתוך ה
 * INPUT.
 * היא צריכה לעבור על איברי המערך
 * allItems
 * ולבדוק אם האות הראשונה של התכונה
 * itemName
 * מתחילה באות שניתנה.
 * אם כן, הציגו את האלמנט, אחרת הסתירו אותו.

 * 
 *  */

/** TRAINING MISSION 17
 *
 * Add listener to the "word" input.
 * It should use anonymous function on the event "input".
 * This function should get the word from the input.
 * It should go over the array allItems
 * and check if the itemName property
 * of each object contains the given word
 * (use function includes()).
 * If contains, show the appropriate element
 * from allElements array.
 * Otherwise hide it.
 * Should work for upper and lower cases.
 * Try looking for the words "apple","red","dog"
 * 
 * הוסיפו ליסטנר ל
 * WORD INPUT.
 * הוא צריך להשתמש בפונקציה אנונימית על האירוע
 * "input".
 * הפונקציה צריכה לקלוט אותו מתוך ה
 * INPUT.
 * היא צריכה לעבור על איברי המערך
 * allItems
 * ולבדוק אם התכונה
 * itemName
 * מכילה את המחרוזת שניתנה.
 * (השתמשו בפונקציה
 * includes())
 * אם כן, הציגו את האלמנט, אחרת הסתירו אותו.
    אמור לעבוד גם עבור אותיות גדולות וגם קטנות.
    נסו לחפש את המילים
    "apple","red", "dog"
 * 
 *  */


/** TRAINING MISSION 18
 * 
 * Add 2-3 buttons or inputs and invent more searches.
 * 
 * הוסיפו 2-3 כפתורים או
 * INPUTS
 * והמציאו עוד סוגים של חיפוש
 */
/** TRAINING MISSION 19 - simple challenge
 * 
 * Add button "Change Colors".
 * The click on the button should refresh the colors 
 * of the items.
 * 
 * הוסיפו כפתור
 * "Change Colors".
 * הלחיצה על הכפתור אמורה לגרום לחידוש הצבעים
 * של הפריטים
 */
/** TRAINING MISSION 20 - simple challenge
 * 
 * Create your own array of objects.
 * Use FOURTH DIV to show the items.
 * 
 * תצרו מערך אובייקטים משלכם,
 * השתמשו ב
 * FOURTH DIV
 * כדי להציג אותם
 */