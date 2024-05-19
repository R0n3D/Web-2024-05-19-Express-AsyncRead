/** This app gets "songList" from "song-list.js",
 * shows how many songs are there. On click on the button "Show Me!"
 * it shows the whole list of song names, numbered starting
 * from 1 and also it shows the SEARCH buttons.
 * On click on any SEARCH button it searches through the "keywords"
 * of the songs and shows only the songs with the current keyword.
 * Appropriate SEARCH button is being outlined.
 */

/**
 * האפליקציה הזאת מקבלת
 * "songList"
 * מתוך
 * "song-list.js"
 * ואומרת כמה שירים יש ברשימה. על הלחיצה על הכפתור
 * "Show Me!"
 * האפליקציה מציגה את הרשימה המלא של שמות השירים ממוספרים התחל מ-1
 * ואת כפתורי ה-
 * SEARCH.
 * על הלחיצה על אחד כפתורי ה-
 * SEARCH
 * האפליקציה מחפשת את מילת המפתח בתוך מילות המפתח של השירים
 * ומציגה רק את השירים שיש להם מילת מפתח מתאימה.
 * הכפתור ששימש לסריקה מוצג מוקף בקו ה-
 * OUTLINE.
 */
  
/** MISSION 4.
 * Create 9 "const": for the 6 buttons, for the button container "buttons",
 * for the paragraph "total" (will display the number of songs) and 
 * for the future list of the songs <ul> (lines 86 - 97 of "songs.html").
 * 
 * Also create global empty array "allSongs".
 * 
 * /5 points/
 * 
 * צרו
 * 9 const:
 * עבור כל הכפתורים, עבור 
 * DIV
 * שמכיל את הכפתורים, עבור הפסקה בשם
 * "total"
 * שתציג את כמות השירים ועבור הרשימה העתידית של השירים-
 * <ul>
 * (שורות 86 - 97 של
 * "songs.html").
 * 
 * כמוכן צרו מערך ריק גלובלי
 * allSongs.
 * 
 * /5 נקודות/
 */
  
/**
 * MISSION 5:
 * 
 *  Show in the "total" paragraph statement like "5 great songs!"
 *   - with the right number of songs.
 *  
 * /2 points/
 * 
 *  הציגו בפסקת ה-
 * "total"
 * משפט כמו
 * "5 great songs!"
 * עם הכמות הנכונה של השירים
 * 
 * /2 נקודות/
 */

/** MISSION 6:
 * Create a function createSong() - it could be a usual or 
 * an "arrow" function. 
 * 
 * This function should get song name and number as two arguments
 * and create such a list entry:
 * 
 * <li class="song"><span class="song-number">#2</span> Maoz Tzur</li>
 * 
 * Use li.innerHTML on purpose to create 
 * `<span class="song-number">#2</span> Maoz Tzur`.
 * 
 * Add this new <li> to the array allSongs and to the <ul>.
 * 
 * /8 points/
 **/

/*
 * 
 * צרו פונקציה
 * createSong() - 
 * זאת יכולה להיות פונקציה רגילה או פונקצית חץ.
 * 
 * הפונקציה צריכה לקבל את שם השיר ואת המספר הסידורי שלו
 * בתור שני ארגומנטים ולייצר את הכניסה הבאה:
 * 
 * <li class="song"><span class="song-number">#2</span> Maoz Tzur</li>
 * 
 * השתמשו ב-
 * li.innerHTML
 * על מנת ליצור
 * `<span class="song-number">#2</span> Maoz Tzur`
 * 
 * הוסיפו את ה-
 * li
 * החדש למערך
 * allSongs
 * ולרשימה
 * <ul>
 * 
 * /8 נקודות/
 */

/** MISSION 7:
 * Create a function start() - it could be a usual or 
 * an "arrow" function. 
 * 
 * This function should:
 * 
 * -- go over the array songList and pass the name and the number of 
 *    each song to the function createSong()
 * 
 * -- to hide button "Show Me!" and to show all the SEARCH buttons
 *    by showing their container and to show the list of all the songs
 *    - use for these classList interface and the class "hide".
 * 
 * /10 points/
 * 
 * צרו פונקציה
 * start() - 
 * זאת יכולה להיות פונקציה רגילה או פונקצית חץ.
 * 
 * הפונקציה צריכה:
 * 
 * -- לעבור על המערך 
 * songList
 * ולהעביר שם ומספר של כל שיר לפונקציה
 * createSong()
 * 
 * -- להסתיר את הכפתור
 * "Show Me!"
 * ולהציג את כל כפתורי החיפוש על ידי הצגת המיכל שלהם
 * וגם להציג את רשימת כל השירים. למטרה זו השתמשו בממשק
 * classList
 * ובקלאס
 * "hide".
 * 
 * /10 נקודות/
 */

/** MISSION 8.
 * Create listener on the event "click" on the button,
 * and supply it with the function start.
 * Ensure that the app works.
 * 
 * Check below in the HOME page how the working app screenshots should look.
 *  
 * /6 points/
 * 
 * צרו ליסטנר עבור האירוע 
 * "click"
 * על הכפתור ותביאו לו את הפונקציה
 * start();
 * ודאו שהאפליקציה עובדת.
 * 
 * תבדקו למטה בעמוד הבית איך האפליקציה העובדת אמורה להיראות.
 *  
 * /6 נקודות/
 */

/** MISSION 9:
 * Create a function search() - it could be a usual or 
 * an "arrow" function. 
 * 
 * This function should:
 * 
 * -- get a string for search as an argument
 * 
 * -- go over the array songList and use includes() function
 *    to check if the given string is found in the keywords of the song.
 * 
 * -- If it is, show the appropriate element from allSongs,
 *    if not - hide it (use ternary operator)
 * 
 * /12 points/
 * 
 * צרו פונקציה
 * search() - 
 * זאת יכולה להיות פונקציה רגילה או פונקצית חץ.
 * 
 * הפונקציה צריכה:
 * 
 * -- לקבל מחרוזת לחיפוש בתור ארגומנט
 * 
 * -- לעבור על המערך 
 * songList
 * ולהשתמש בפונקציה
 * includes()
 * כדי לבדוק אם המחרוזת נמצאת בין מילות המפתח של השיר
 * 
 * -- אם נמצאה - להציג את האלמנט התואם מתוך
 * allSongs,
 * ואם לא - אז להסתיר.
 * 
 * /12 נקודות/
 */

/** MISSION 10:
 * Create a function outline() - it could be a usual or 
 * an "arrow" function. 
 * 
 * This function should:
 * 
 * -- get a button object as an argument
 * 
 * -- remove "outlined" class from all the SEARCH buttons
 * 
 * -- add "outlined" class to the given button
 * 
 * /6 points/
 * 
 * צרו פונקציה
 * outline() - 
 * זאת יכולה להיות פונקציה רגילה או פונקצית חץ.
 * 
 * הפונקציה צריכה:
 * 
 * -- לקבל אובייקט של כפתור בתור ארגומנט
 * 
 * -- להסיר קלאס 
 * "outlined"
 * מכל כפתורי ה-
 * SEARCH
 * 
 * -- להוסיף קלאס
 * "outined"
 * לכפתור שנמסר לפונקציה
 * 
 * /6 נקודות/
 */

/** MISSION 11.
 * Create listeners on the event "click" on the search buttons
 * of Chanukkah, Purim and Rosh-ha-Shana.
 * 
 * Create anonimous arrow callback function inside and call inside it
 * the function search() with holiday name and function outline()
 * with passing to it the current button.
 * 
 * Pass to the search() function or "Chanukkah", or "Rosh-ha-Shana",
 * or "Purim" - no need in toLowerCase().
 * 
 * Ensure that the app works.
 * 
 * Check below in the HOME page how the working app screenshots should look.
 *  
 * /8 points/
 * 
 * צרו ליסטנרים עבור האירוע 
 * "click"
 * על כפתורי החיפוש של פורים, חנוכה וראש השנה.
 * 
 * צרו בתוך הליסטנרים פונקציית
 * callback
 * אנונימית שתקרא לפונקציית
 * search()
 * עם שם החג ולפונקציית
 * outline()
 * ותמסור את העצמה לשם.
 * 
 * העבירו ל-
 *  search() 
 * או
 * "Chanukkah"
 * או
 * "Rosh-ha-Shana",
 * או
 * "Purim"
 * - אין צורך ב-
 * toLowerCase().
 * 
 * תוודעו שהאפליקציה עובדת.
 * 
 * תבדקו למטה בעמוד הבית איך האפליקציה העובדת אמורה להיראות.
 *  
 * /8 נקודות/
 */

/** MISSION 12.
 * Create listener on the event "click" on the button of All.
 * 
 * Create anonimous arrow callback function inside and inside it
 * 
 * -- Go over the array allSongs and show each song
 * 
 * -- Call the function outline() with passing to it the current button.
 * 
 * Ensure that the app works.
 * 
 * Check below in the HOME page how the working app screenshots should look.
 *  
 * /6 points/
 * 
 * צרו ליסטנרים עבור האירוע 
 * "click"
 * על הכפתור של כל השירים.
 * 
 * צרו בתוך הליסטנר פונקציית
 * callback
 * אנונימית
 * -- שתעבור על כל המערך
 * allSongs
 * ותציג את כל השירים
 * 
 * -- ותקרא לפונקציית
 * outline()
 * ותמסור את העצמה לשם.
 * 
 * תוודעו שהאפליקציה עובדת.
 * 
 * תבדקו למטה בעמוד הבית איך האפליקציה העובדת אמורה להיראות.
 *  
 * /6 נקודות/
 */
  
/** MISSION 13.
 * Create function getRandomSong().
 * This function gets random index of the array allSongs 
 * and removes class "hide" from the song with this index. 
 *  
 * /6 points/
 * 
 * צרו פונקציה 
 * getRandomSong().
 * 
 * הפונקציה מחשבת אינדקס רנדומלי עבור המערך 
 * allSongs 
 * ומסירה קלאס
 * "hide"
 * מהשיר עם אותו האינדקס.
 *  
 * /6 נקודות/
 */

/** MISSION 14.
 * Create function getFiveRandom().
 * This function goes over the array allSongs and hides all the songs. 
 * 
 * After that it loops 5 times and calls getRandom();
 * 
 * After that it calls outline() and passes "Five Random" button to it.
 * 
 * Add listener to the "five random" button - the listener
 * will use the function getFiveRandom()
 *
 * Pay attention that the random numbers could repeat, so it is possible,
 * that you'll get less than 5 random songs, it's OK. 
 *  
 * /8 points/
 * 
 * צרו פונקציה 
 * getFiveRandom().
 * 
 * הפונקציה עוברת על המערך 
 * allSongs 
 * ומסתירה את כל השירים.
 * 
 * אחרי זה היא עושה 5 סבבים של לולאה וקוראת ל
 * getRandom().
 * 
 * אחרי זה היא קוראת ל-
 * outline()
 * ומוסרת את הכפתור של
 * Five Random.
 * 
 * הוסיפו ליסטנר לכפתור ה
 * FIVE RANDOM.
 * הליסטנר אמור להשתמש בפונקציה
 * getFiveRandom().
 *  
 * שימו לב שהמספרים הרנדומליים יכולים לחזור על עצמם
 * אז לא בהכרח ייצאו 5 שירים, אלא פחות. זה בסדר.
 *  
 * /8 נקודות/
 */

/** MISSION 15 - BONUS - CHALLENGE!!!!!
 * Now the function getFiveRandom() could show less than 5 songs.
 * Make it to show exactly 5 songs 
 *  
 * /20 points/
 * 
 * כרגע הפונקציה 
 * getFiveRandom()
 * יכולה להציג פחות מ-5 שירים.
 * 
 * תעשו שינויים כך שהיא תציג בדיוק 5 שירים.
 * 
 * /20 נקודות/
 */