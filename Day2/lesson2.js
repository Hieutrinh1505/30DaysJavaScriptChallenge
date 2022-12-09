//Level 1 
let a = '30 Days Of JavaScript';
console.log(a);
console.log(a.length);
let b = a.toUpperCase();
console.log(b);
let c = a.toLowerCase();
console.log(c);
let d = a.substr(0,1);
console.log(d);
console.log(a.substr(3,a.length - 3))
console.log(a.includes("Script"))
console.log(a.split());
console.log(a.split(' '));
let e = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(e.split(','));
console.log(a.replace("JavaScript","Python"));
console.log(a.charAt(15));
console.log(a.charCodeAt("J"));
console.log(a.indexOf('a'))
console.log(a.lastIndexOf('a'));

let f = "You cannot end a sentence with because because because is a conjunction";
console.log(f.indexOf("because"));
console.log(f.lastIndexOf("because"));
console.log(f.search("because"));
console.log(a.trim());
console.log(a.startsWith('3'));
console.log(a.endsWith('t'));
console.log(a.match(/a/gi));
console.log("30 Days of".concat(" Javascript"));
console.log(a.repeat(2))
//Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.\
")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)

console.log('10'=== 10)
console.log(parseInt('10') === 10)
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);

console.log('python'.includes('on') === 'jargon'.includes('on'));
console.log("I hope this course is not full of jargon".includes("jargon"))
console.log(Math.random() * 100)
console.log(Math.random() * 51 + 50)
console.log(Math.random() * 255)
let g = 'JavaScript'
console.log(g[Math.floor(Math.random() * 10)]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")
let h = "You cannot end a sentence with because because because is a conjunction";
console.log(h.substr(31,24))
//Level 3
let j = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(j.match(/love/gi))

let p = "You cannot end a sentence with because because because is a conjunction";
console.log(p.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[^\w\s]/gi,''));

let m = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let n = m.match(/\d+/g)
console.log(parseInt(n[0]) * 12 + parseInt(n[1]) + parseInt(n[2]) * 12)