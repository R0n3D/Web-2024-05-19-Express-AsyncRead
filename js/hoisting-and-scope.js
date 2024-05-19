// HOISTING
// מנוע 
// JS
// קורא את התוכנית פעמיים. בפעם הראשונה הוא מוצא את כל ההצהרות של
// var and function
// ובקריאה השנייה + ביצוע מעלה אותם למעלה. לכן הם תמיד מוכרים

console.log(a) // undefined and not ERROR, as var gets to be HOISTED

var a = "I am var 'a'"
console.log(a)

//console.log(b) // ERROR - as let is not being HOISTED
let b = "I am let 'b'"

console.log(c())

function c () {

    function f() {
        console.log('I am function "f", my SCOPE is function "c"')
    }
    f()

    function q() {
        console.log('I am function "q()", I see function "f()"')
    }

    return `I am function 'c'. I was HOISTED`
}

// console.log(d()) // ERROR

const d = () =>  {
    let g = `I am "g" and I am inside ARROW FUNCTION "d"`
    console.log(g)
    function h() {
        console.log(`I am function h() and I know g=${g}`)
    }
    h()
    return `I am ARROW function 'd'. I was not HOISTED`
}

// SCOPE - איפה אני מוגדר ומי מכיר אותי

// Global SCOPE - defined in the outmost level of the program.
// Can be used in any block of the program.


function e() {
    let b = '123'

    console.log(`a = ${a}
    b=${b},
    c=${c()},
    d=${d()}`)

    // console.log(g) // ERROR: the scope of "g" is "d()"

    console.log(`My own b = ${b}`)

}

e()

// f() // ERROR - the SCOPE of f() is "c" function, so in
//  the GLOBAL SCOPE f() is undefined

console.log(`The GLOBAL b still says "${b}"`)


for (var i=0; i < 3; i++) {

    console.log(`I am var "i" INSIDE THE LOOP, and I'm ${i}`)
    
}

console.log(`I am var "i" OUT OF THE LOOP, and I'm ${i}`)

for (let j=0; j < 3; j++) {

    console.log(`I am let "j" INSIDE THE LOOP, and I'm ${j}`)
    
}

console.log(`I am let "j" OUT OF THE LOOP, and I'm ${j}`)

// FOR var - scope could be only GLOBAL or FUNCTION

// FOR let (or const) - scope could be also any command block 
//   like "for","while","if"