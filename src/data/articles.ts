import {
  article02image01,
  article02image02,
  article02image03,
  article03image01,
  article03image02,
  article03image03,
} from "./images";

const article01 = [
  { selector: "sources", text: `` },
  { selector: "h3", text: "Can't Live If Livin' Is without You" },
  {
    selector: "p",
    text: `My Dad once explained how there are certain things one can live without until one acquires them. A microwave is one such thing. Smart phones, another. The older folks among us will remember a fulfilling life sans internet. For me, currying is on this list.`,
  },
  {
    selector: "p",
    text: `The concept is simple: You can call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments.`,
  },
  {
    selector: "p",
    text: `You can choose to call it all at once or simply feed in each argument piecemeal.`,
  },
  {
    selector: "code",
    text: `
    const add = x => y => x + y;\n
    const increment = add(1);\n
    const addTen = add(10);\n
    \n
    increment(2); // 3\n
    addTen(3); // 12
    `,
  },
  {
    selector: "p",
    text: `Here we've made a function add that takes one argument and returns a function. By calling it, the returned function remembers the first argument from then on via the closure. Calling it with both arguments all at once is a bit of a pain, however, so we can use a special helper function called curry to make defining and calling functions like this easier.`,
  },
  {
    selector: "p",
    text: `Let's set up a few curried functions for our enjoyment. From now on, we'll summon our curry function defined in the Appendix A - Essential Function Support.`,
  },
  {
    selector: "code",
    text: `
    const match = curry((what, s) => s.match(what));\n
    const replace = curry((what, replacement, s) => s.replace(what, replacement));\n
    const filter = curry((f, xs) => xs.filter(f));\n
    const map = curry((f, xs) => xs.map(f));\n
    `,
  },
  {
    selector: "p",
    text:
      "The pattern I've followed is a simple, but important one. I've strategically positioned the data we're operating on (String, Array) as the last argument. It will become clear as to why upon use.",
  },
  {
    selector: "p",
    text:
      "(The syntax /r/g is a regular expression that means match every letter 'r'. Read more about regular expressions if you like.)",
  },
  {
    selector: "code",
    text: `
    match(/r/g, 'hello world'); // [ 'r' ]\n
    \n
    const hasLetterR = match(/r/g); // x => x.match(/r/g)\n
    hasLetterR('hello world'); // [ 'r' ]\n
    hasLetterR('just j and s and t etc'); // null\n
    \n
    filter(hasLetterR, ['rock and roll', 'smooth jazz']); // ['rock and roll']\n
    \n
    const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))\n
    removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']); // ['rock and roll', 'drum circle']\n
    \n
    const noVowels = replace(/[aeiou]/ig); // (r,x) => x.replace(/[aeiou]/ig, r)\n
    const censored = noVowels('*'); // x => x.replace(/[aeiou]/ig, '*')\n
    censored('Chocolate Rain'); // 'Ch*c*l*t* R**n'\n
    `,
  },
  {
    selector: "p",
    text:
      "What's demonstrated here is the ability to 'pre-load' a function with an argument or two in order to receive a new function that remembers those arguments.",
  },
  {
    selector: "p",
    text:
      "I encourage you to clone the Mostly Adequate repository (git clone https://github.com/MostlyAdequate/mostly-adequate-guide.git), copy the code above and have a go at it in the REPL. The curry function, as well as actually anything defined in the appendixes, are available in the support/index.js module.",
  },
  {
    selector: "p",
    text: "Alternatively, have a look at a published version on npm:",
  },
  { selector: "code", text: `npm install @mostly-adequate/support` },
  { selector: "h3", text: "More Than a Pun / Special Sauce" },
  {
    selector: "p",
    text:
      "Currying is useful for many things. We can make new functions just by giving our base functions some arguments as seen in hasLetterR, removeStringsWithoutRs, and censored.",
  },
  {
    selector: "p",
    text:
      "We also have the ability to transform any function that works on single elements into a function that works on arrays simply by wrapping it with map:",
  },
  {
    selector: "code",
    text: `
    const getChildren = x => x.childNodes;\n
    const allTheChildren = map(getChildren);
  `,
  },
  {
    selector: "p",
    text:
      "Giving a function fewer arguments than it expects is typically called partial application. Partially applying a function can remove a lot of boiler plate code. Consider what the above allTheChildren function would be with the uncurried map from lodash (note the arguments are in a different order):",
  },
  {
    selector: "code",
    text: `const allTheChildren = elements => map(elements, getChildren);`,
  },
  {
    selector: "p",
    text:
      "We typically don't define functions that work on arrays, because we can just call map(getChildren) inline. Same with sort, filter, and other higher order functions (a higher order function is a function that takes or returns a function).",
  },
  {
    selector: "p",
    text:
      "When we spoke about pure functions, we said they take 1 input to 1 output. Currying does exactly this: each single argument returns a new function expecting the remaining arguments. That, old sport, is 1 input to 1 output.",
  },
  {
    selector: "p",
    text:
      "No matter if the output is another function - it qualifies as pure. We do allow more than one argument at a time, but this is seen as merely removing the extra ()'s for convenience.",
  },
  { selector: "h3", text: "In Summary" },
  {
    selector: "p",
    text:
      "Currying is handy and I very much enjoy working with curried functions on a daily basis. It is a tool for the belt that makes functional programming less verbose and tedious.",
  },
  {
    selector: "p",
    text:
      "We can make new, useful functions on the fly simply by passing in a few arguments and as a bonus, we've retained the mathematical function definition despite multiple arguments.",
  },
  {
    selector: "p",
    text: "Let's acquire another essential tool called compose.",
  },
];

const article02 = [
  { selector: "h3", text: "Oh to Be Pure Again" },
  {
    selector: "p",
    text: "One thing we need to get straight is the idea of a pure function.",
  },
  {
    selector: "p",
    text:
      "A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.",
  },
  {
    selector: "p",
    text:
      "Take slice and splice. They are two functions that do the exact same thing - in a vastly different way, mind you, but the same thing nonetheless. We say slice is pure because it returns the same output per input every time, guaranteed. splice, however, will chew up its array and spit it back out forever changed which is an observable effect.",
  },
  {
    selector: "code",
    text: `
    const xs = [1,2,3,4,5];\n
    \n
    // pure\n
    xs.slice(0,3); // [1,2,3]\n
    \n
    xs.slice(0,3); // [1,2,3]\n
    \n
    xs.slice(0,3); // [1,2,3]\n
    \n
    \n
    // impure\n
    xs.splice(0,3); // [1,2,3]\n
    \n
    xs.splice(0,3); // [4,5]\n
    \n
    xs.splice(0,3); // []\n
  `,
  },
  {
    selector: "p",
    text:
      "In functional programming, we dislike unwieldy functions like splice that mutate data. This will never do as we're striving for reliable functions that return the same result every time, not functions that leave a mess in their wake like splice.",
  },
  { selector: "p", text: "Let's look at another example." },
  {
    selector: "code",
    text: `
    // impure\n
    let minimum = 21;\n
    const checkAge = age => age >= minimum;\n
    \n
    // pure\n
    const checkAge = (age) => {\n
      const minimum = 21;\n
      return age >= minimum;\n
    };\n
  `,
  },
  {
    selector: "p",
    text:
      "In the impure portion, checkAge depends on the mutable variable minimum to determine the result. In other words, it depends on system state which is disappointing because it increases the cognitive load by introducing an external environment.",
  },
  {
    selector: "p",
    text:
      "It might not seem like a lot in this example, but this reliance upon state is one of the largest contributors to system complexity. This checkAge may return different results depending on factors external to input, which not only disqualifies it from being pure, but also puts our minds through the wringer each time we're reasoning about the software.",
  },
  {
    selector: "p",
    text:
      "Its pure form, on the other hand, is completely self sufficient. We can also make minimum immutable, which preserves the purity as the state will never change. To do this, we must create an object to freeze.",
  },
  {
    selector: "code",
    text: `const immutableState = Object.freeze({ minimum: 21 });`,
  },
  { selector: "h3", text: "Side Effects May Include..." },
  {
    selector: "p",
    text:
      "Let's look more at these 'side effects' to improve our intuition. So what is this undoubtedly nefarious side effect mentioned in the definition of pure function? We'll be referring to effect as anything that occurs in our computation other than the calculation of a result.",
  },
  {
    selector: "p",
    text:
      "There's nothing intrinsically bad about effects and we'll be using them all over the place in the chapters to come. It's that side part that bears the negative connotation. Water alone is not an inherent larvae incubator, it's the stagnant part that yields the swarms, and I assure you, side effects are a similar breeding ground in your own programs.",
  },
  {
    selector: "p",
    text:
      "A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.",
  },
  { selector: "p", text: "Side effects may include, but are not limited to" },
  {
    selector: "p",
    text: " - changing the file system",
  },
  {
    selector: "p",
    text: " - inserting a record into a database",
  },
  {
    selector: "p",
    text: " - making an http call",
  },
  {
    selector: "p",
    text: " - mutations",
  },
  {
    selector: "p",
    text: " - printing to the screen / logging",
  },
  {
    selector: "p",
    text: " - obtaining user input",
  },
  {
    selector: "p",
    text: " - querying the DOM",
  },
  {
    selector: "p",
    text: " - accessing system state",
  },
  {
    selector: "p",
    text:
      "And the list goes on and on. Any interaction with the world outside of a function is a side effect, which is a fact that may prompt you to suspect the practicality of programming without them. The philosophy of functional programming postulates that side effects are a primary cause of incorrect behavior.",
  },
  {
    selector: "p",
    text:
      "It is not that we're forbidden to use them, rather we want to contain them and run them in a controlled way. We'll learn how to do this when we get to functors and monads in later chapters, but for now, let's try to keep these insidious functions separate from our pure ones.",
  },
  {
    selector: "p",
    text:
      "Side effects disqualify a function from being pure. And it makes sense: pure functions, by definition, must always return the same output given the same input, which is not possible to guarantee when dealing with matters outside our local function.",
  },
  {
    selector: "p",
    text:
      "Let's take a closer look at why we insist on the same output per input. Pop your collars, we're going to look at some 8th grade math.",
  },
  { selector: "h3", text: "8th Grade Math" },
  { selector: "p", text: "From mathisfun.com:" },
  {
    selector: "p",
    text:
      "A function is a special relationship between values: Each of its input values gives back exactly one output value.",
  },
  {
    selector: "p",
    text:
      "In other words, it's just a relation between two values: the input and the output. Though each input has exactly one output, that output doesn't necessarily have to be unique per input. Below shows a diagram of a perfectly valid function from x to y;",
  },
  { selector: "img", text: article02image01 },
  {
    selector: "p",
    text:
      "To contrast, the following diagram shows a relation that is not a function since the input value 5 points to several outputs:",
  },
  { selector: "img", text: article02image02 },
  {
    selector: "p",
    text:
      "Functions can be described as a set of pairs with the position (input, output): [(1,2), (3,6), (5,10)] (It appears this function doubles its input).",
  },
  { selector: "p", text: "Or perhaps a table:" },
  {
    selector: "p",
    text: "Input	Output",
  },
  { selector: "p", text: ">>> 1 >>> 2" },
  { selector: "p", text: ">>> 2 >>> 4" },
  { selector: "p", text: ">>> 3 >>> 6" },
  {
    selector: "p",
    text: "Or even as a graph with x as the input and y as the output:",
  },
  { selector: "img", text: article02image03 },
  {
    selector: "p",
    text:
      "There's no need for implementation details if the input dictates the output. Since functions are simply mappings of input to output, one could simply jot down object literals and run them with [] instead of ().",
  },
  {
    selector: "code",
    text: `
  const toLowerCase = {\n
    A: 'a',\n
    B: 'b',\n
    C: 'c',\n
    D: 'd',\n
    E: 'e',\n
    F: 'f',\n
  };\n
  toLowerCase['C']; // 'c'\n
  \n
  const isPrime = {\n
    1: false,\n
    2: true,\n
    3: true,\n
    4: false,\n
    5: true,\n
    6: false,\n
  };\n
  isPrime[3]; // true\n
  `,
  },
  {
    selector: "p",
    text:
      "Of course, you might want to calculate instead of hand writing things out, but this illustrates a different way to think about functions. (You may be thinking 'what about functions with multiple arguments?'. Indeed, that presents a bit of an inconvenience when thinking in terms of mathematics. For now, we can bundle them up in an array or just think of the arguments object as the input. When we learn about currying, we'll see how we can directly model the mathematical definition of a function.)",
  },
  {
    selector: "p",
    text:
      "Here comes the dramatic reveal: Pure functions are mathematical functions and they're what functional programming is all about. Programming with these little angels can provide huge benefits. Let's look at some reasons why we're willing to go to great lengths to preserve purity.",
  },
  { selector: "h3", text: "The Case for Purity" },
  { selector: "p", text: "Cacheable" },
  {
    selector: "p",
    text:
      "For starters, pure functions can always be cached by input. This is typically done using a technique called memoization:",
  },
  {
    selector: "code",
    text: `
  const squareNumber = memoize(x => x * x);\n
    \n
  squareNumber(4); // 16\n
    \n
  squareNumber(4); // 16, returns cache for input 4\n
    \n
  squareNumber(5); // 25\n
    \n
  squareNumber(5); // 25, returns cache for input 5\n
  `,
  },
  {
    selector: "p",
    text:
      "Here is a simplified implementation, though there are plenty of more robust versions available.",
  },
  {
    selector: "code",
    text: `
  const memoize = (f) => {\n
    const cache = {};\n
    \n
    return (...args) => {\n
      const argStr = JSON.stringify(args);\n
      cache[argStr] = cache[argStr] || f(...args);\n
      return cache[argStr];\n
    };\n
  };\n
  `,
  },
  {
    selector: "p",
    text:
      "Something to note is that you can transform some impure functions into pure ones by delaying evaluation:",
  },
  {
    selector: "code",
    text: `const pureHttpCall = memoize((url, params) => () => $.getJSON(url, params));`,
  },
  {
    selector: "p",
    text:
      "The interesting thing here is that we don't actually make the http call - we instead return a function that will do so when called. This function is pure because it will always return the same output given the same input: the function that will make the particular http call given the url and params.",
  },
  {
    selector: "p",
    text:
      "Our memoize function works just fine, though it doesn't cache the results of the http call, rather it caches the generated function.",
  },
  {
    selector: "p",
    text:
      "This is not very useful yet, but we'll soon learn some tricks that will make it so. The takeaway is that we can cache every function no matter how destructive they seem.",
  },
  { selector: "p", text: "Portable / Self-documenting" },
  {
    selector: "p",
    text:
      "Pure functions are completely self contained. Everything the function needs is handed to it on a silver platter. Ponder this for a moment... How might this be beneficial? For starters, a function's dependencies are explicit and therefore easier to see and understand - no funny business going on under the hood.",
  },
  {
    selector: "code",
    text: `
  // impure
  const signUp = (attrs) => {
    const user = saveUser(attrs);
    welcomeUser(user);
  };

  // pure
  const signUp = (Db, Email, attrs) => () => {
    const user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
  `,
  },
  {
    selector: "p",
    text:
      "The example here demonstrates that the pure function must be honest about its dependencies and, as such, tell us exactly what it's up to. Just from its signature, we know that it will use a Db, Email, and attrs which should be telling to say the least.",
  },
  {
    selector: "p",
    text:
      "We'll learn how to make functions like this pure without merely deferring evaluation, but the point should be clear that the pure form is much more informative than its sneaky impure counterpart which is up to who knows what.",
  },
  {
    selector: "p",
    text:
      "Something else to notice is that we're forced to 'inject' dependencies, or pass them in as arguments, which makes our app much more flexible because we've parameterized our database or mail client or what have you (don't worry, we'll see a way to make this less tedious than it sounds). Should we choose to use a different Db we need only to call our function with it. Should we find ourselves writing a new application in which we'd like to reuse this reliable function, we simply give this function whatever Db and Email we have at the time.",
  },
  {
    selector: "p",
    text:
      "In a JavaScript setting, portability could mean serializing and sending functions over a socket. It could mean running all our app code in web workers. Portability is a powerful trait.",
  },
  {
    selector: "p",
    text:
      "Contrary to 'typical' methods and procedures in imperative programming rooted deep in their environment via state, dependencies, and available effects, pure functions can be run anywhere our hearts desire.",
  },
  {
    selector: "p",
    text:
      "When was the last time you copied a method into a new app? One of my favorite quotes comes from Erlang creator, Joe Armstrong: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana... and the entire jungle'.",
  },
  { selector: "p", text: "Testable" },
  {
    selector: "p",
    text:
      "Next, we come to realize pure functions make testing much easier. We don't have to mock a 'real' payment gateway or setup and assert the state of the world after each test. We simply give the function input and assert output.",
  },
  {
    selector: "p",
    text:
      "In fact, we find the functional community pioneering new test tools that can blast our functions with generated input and assert that properties hold on the output. It's beyond the scope of this book, but I strongly encourage you to search for and try Quickcheck - a testing tool that is tailored for a purely functional environment.",
  },
  { selector: "p", text: "Reasonable" },
  {
    selector: "p",
    text:
      "Many believe the biggest win when working with pure functions is referential transparency. A spot of code is referentially transparent when it can be substituted for its evaluated value without changing the behavior of the program.",
  },
  {
    selector: "p",
    text:
      "Since pure functions don't have side effects, they can only influence the behavior of a program through their output values. Furthermore, since their output values can reliably be calculated using only their input values, pure functions will always preserve referential transparency. Let's see an example.",
  },
  {
    selector: "code",
    text: `
    const { Map } = require('immutable');

    // Aliases: p = player, a = attacker, t = target
    const jobe = Map({ name: 'Jobe', hp: 20, team: 'red' });
    const michael = Map({ name: 'Michael', hp: 20, team: 'green' });
    const decrementHP = p => p.set('hp', p.get('hp') - 1);
    const isSameTeam = (p1, p2) => p1.get('team') === p2.get('team');
    const punch = (a, t) => (isSameTeam(a, t) ? t : decrementHP(t));
  
    punch(jobe, michael); // Map({name:'Michael', hp:19, team: 'green'})`,
  },
  {
    selector: "p",
    text:
      "decrementHP, isSameTeam and punch are all pure and therefore referentially transparent. We can use a technique called equational reasoning wherein one substitutes 'equals for equals' to reason about code. It's a bit like manually evaluating the code without taking into account the quirks of programmatic evaluation. Using referential transparency, let's play with this code a bit.",
  },
  { selector: "p", text: "First we'll inline the function isSameTeam." },
  {
    selector: "code",
    text: `
    const punch = (a, t) => (a.get('team') === t.get('team') ? t : decrementHP(t));
  `,
  },
  {
    selector: "p",
    text:
      "Since our data is immutable, we can simply replace the teams with their actual value",
  },
  {
    selector: "code",
    text: `
    const punch = (a, t) => ('red' === 'green' ? t : decrementHP(t));
  `,
  },
  {
    selector: "p",
    text:
      "We see that it is false in this case so we can remove the entire if branch",
  },
  {
    selector: "code",
    text: `
    const punch = (a, t) => decrementHP(t);
  `,
  },
  {
    selector: "p",
    text:
      "And if we inline decrementHP, we see that, in this case, punch becomes a call to decrement the hp by 1.",
  },
  {
    selector: "code",
    text: `
    const punch = (a, t) => t.set('hp', t.get('hp') - 1);
  `,
  },
  {
    selector: "p",
    text:
      "This ability to reason about code is terrific for refactoring and understanding code in general. In fact, we used this technique to refactor our flock of seagulls program. We used equational reasoning to harness the properties of addition and multiplication. Indeed, we'll be using these techniques throughout the book.",
  },
  { selector: "p", text: "Parallel Code" },
  {
    selector: "p",
    text:
      "Finally, and here's the coup de grâce, we can run any pure function in parallel since it does not need access to shared memory and it cannot, by definition, have a race condition due to some side effect.",
  },
  {
    selector: "p",
    text:
      "This is very much possible in a server side js environment with threads as well as in the browser with web workers though current culture seems to avoid it due to complexity when dealing with impure functions.",
  },
  { selector: "h3", text: "In Summary" },
  {
    selector: "p",
    text:
      "We've seen what pure functions are and why we, as functional programmers, believe they are the cat's evening wear. From this point on, we'll strive to write all our functions in a pure way. We'll require some extra tools to help us do so, but in the meantime, we'll try to separate the impure functions from the rest of the pure code.",
  },
  {
    selector: "p",
    text:
      "Writing programs with pure functions is a tad laborious without some extra tools in our belt. We have to juggle data by passing arguments all over the place, we're forbidden to use state, not to mention effects. How does one go about writing these masochistic programs? Let's acquire a new tool called curry.",
  },
];

const article03 = [
  { selector: "h3", text: "Functional Husbandry" },
  { selector: "p", text: "Here's compose:" },
  {
    selector: "code",
    text: `
    const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
  `,
  },
  {
    selector: "p",
    text:
      "... Don't be scared! This is the level-9000-super-Saiyan-form of compose. For the sake of reasoning, let's drop the variadic implementation and consider a simpler form that can compose two functions together. Once you get your head around that, you can push the abstraction further and consider it simply works for any number of functions (we could even prove that)! Here's a more friendly compose for you my dear readers:",
  },
  { selector: "code", text: `const compose2 = (f, g) => x => f(g(x));` },
  {
    selector: "p",
    text:
      "f and g are functions and x is the value being 'piped' through them.",
  },
  {
    selector: "p",
    text:
      "Composition feels like function husbandry. You, breeder of functions, select two with traits you'd like to combine and mash them together to spawn a brand new one. Usage is as follows:",
  },
  {
    selector: "code",
    text: `
  const toUpperCase = x => x.toUpperCase();
  const exclaim = x => \`\${x}!\`;
  const shout = compose(exclaim, toUpperCase);

  shout('send in the clowns'); // "SEND IN THE CLOWNS!"
  `,
  },
  {
    selector: "p",
    text:
      "The composition of two functions returns a new function. This makes perfect sense: composing two units of some type (in this case function) should yield a new unit of that very type. You don't plug two legos together and get a lincoln log. There is a theory here, some underlying law that we will discover in due time.",
  },
  {
    selector: "p",
    text:
      "In our definition of compose, the g will run before the f, creating a right to left flow of data. This is much more readable than nesting a bunch of function calls. Without compose, the above would read:",
  },
  { selector: "code", text: `const shout = x => exclaim(toUpperCase(x));` },
  {
    selector: "p",
    text:
      "Instead of inside to outside, we run right to left, which I suppose is a step in the left direction (boo!). Let's look at an example where sequence matters:",
  },
  {
    selector: "code",
    text: `
  const head = x => x[0];
  const reverse = reduce((acc, x) => [x, ...acc], []);
  const last = compose(head, reverse);

  last(['jumpkick', 'roundhouse', 'uppercut']); // 'uppercut'
  `,
  },
  {
    selector: "p",
    text:
      "reverse will turn the list around while head grabs the initial item. This results in an effective, albeit inefficient, last function. The sequence of functions in the composition should be apparent here. We could define a left to right version, however, we mirror the mathematical version much more closely as it stands. That's right, composition is straight from the math books. In fact, perhaps it's time to look at a property that holds for any composition.",
  },
  {
    selector: "code",
    text: `
  // associativity
  compose(f, compose(g, h)) === compose(compose(f, g), h);
  `,
  },
  {
    selector: "p",
    text:
      "Composition is associative, meaning it doesn't matter how you group two of them. So, should we choose to uppercase the string, we can write:",
  },
  {
    selector: "code",
    text: `
  compose(toUpperCase, compose(head, reverse));
  // or
  compose(compose(toUpperCase, head), reverse);
  `,
  },
  {
    selector: "p",
    text:
      "Since it doesn't matter how we group our calls to compose, the result will be the same. That allows us to write a variadic compose and use it as follows:",
  },
  {
    selector: "code",
    text: `
  // previously we'd have to write two composes, but since it's associative, 
  // we can give compose as many fn's as we like and let it decide how to group them.
  const arg = ['jumpkick', 'roundhouse', 'uppercut'];
  const lastUpper = compose(toUpperCase, head, reverse);
  const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

  lastUpper(arg); // 'UPPERCUT'
  loudLastUpper(arg); // 'UPPERCUT!'
  `,
  },
  {
    selector: "p",
    text:
      "Applying the associative property gives us this flexibility and peace of mind that the result will be equivalent. The slightly more complicated variadic definition is included with the support libraries for this book and is the normal definition you'll find in libraries like lodash, underscore, and ramda.",
  },
  {
    selector: "p",
    text:
      "One pleasant benefit of associativity is that any group of functions can be extracted and bundled together in their very own composition. Let's play with refactoring our previous example:",
  },
  {
    selector: "code",
    text: `
  const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

  // -- or ---------------------------------------------------------------

  const last = compose(head, reverse);
  const loudLastUpper = compose(exclaim, toUpperCase, last);

  // -- or ---------------------------------------------------------------

  const last = compose(head, reverse);
  const angry = compose(exclaim, toUpperCase);
  const loudLastUpper = compose(angry, last);

  // more variations...
  `,
  },
  {
    selector: "p",
    text:
      "There's no right or wrong answers - we're just plugging our legos together in whatever way we please. Usually it's best to group things in a reusable way like last and angry. If familiar with Fowler's 'Refactoring', one might recognize this process as 'extract function'...except without all the object state to worry about.",
  },
  { selector: "h3", text: "Pointfree" },
  {
    selector: "p",
    text:
      "Pointfree style means never having to say your data. Excuse me. It means functions that never mention the data upon which they operate. First class functions, currying, and composition all play well together to create this style.",
  },
  {
    selector: "p",
    text:
      "Hint: Pointfree versions of replace & toLowerCase are defined in the Appendix C - Pointfree Utilities. Do not hesitate to have a peek!",
  },
  {
    selector: "code",
    text: `
  // not pointfree because we mention the data: word
  const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

  // pointfree
  const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
  `,
  },
  {
    selector: "p",
    text:
      "See how we partially applied replace? What we're doing is piping our data through each function of 1 argument. Currying allows us to prepare each function to just take its data, operate on it, and pass it along. Something else to notice is how we don't need the data to construct our function in the pointfree version, whereas in the pointful one, we must have our word available before anything else.",
  },
  { selector: "p", text: "Let's look at another example." },
  {
    selector: "code",
    text: `
  // not pointfree because we mention the data: name
  const initials = name => name.split(' ').map(compose(toUpperCase, head)).join('. ');

  // pointfree
  // NOTE: we use 'intercalate' from the appendix instead of 'join' introduced in Chapter 09!
  const initials = compose(intercalate('. '), map(compose(toUpperCase, head)), split(' '));

  initials('hunter stockton thompson'); // 'H. S. T'
  `,
  },
  {
    selector: "p",
    text:
      "Pointfree code can again, help us remove needless names and keep us concise and generic. Pointfree is a good litmus test for functional code as it lets us know we've got small functions that take input to output. One can't compose a while loop, for instance. Be warned, however, pointfree is a double-edged sword and can sometimes obfuscate intention. Not all functional code is pointfree and that is O.K. We'll shoot for it where we can and stick with normal functions otherwise.",
  },
  { selector: "h3", text: "Debugging" },
  {
    selector: "p",
    text:
      "A common mistake is to compose something like map, a function of two arguments, without first partially applying it.",
  },
  {
    selector: "code",
    text: `
  // wrong - we end up giving angry an array and we partially applied map with who knows what.
  const latin = compose(map, angry, reverse);

  latin(['frog', 'eyes']); // error

  // right - each function expects 1 argument.
  const latin = compose(map(angry), reverse);

  latin(['frog', 'eyes']); // ['EYES!', 'FROG!'])s
  `,
  },
  {
    selector: "p",
    text:
      "If you are having trouble debugging a composition, we can use this helpful, but impure trace function to see what's going on.",
  },
  {
    selector: "code",
    text: `
  const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
  });
  
  const dasherize = compose(
    intercalate('-'),
    toLower,
    split(' '),
    replace(/\s{2,}/ig, ' '),
  );
  
  dasherize('The world is a vampire');
  // TypeError: Cannot read property 'apply' of undefined
  `,
  },
  { selector: "p", text: "Something is wrong here, let's trace" },
  {
    selector: "code",
    text: `
  const dasherize = compose(
    intercalate('-'),
    toLower,
    trace('after split'),
    split(' '),
    replace(/\s{2,}/ig, ' '),
  );
  
  dasherize('The world is a vampire');
  // after split [ 'The', 'world', 'is', 'a', 'vampire' ]
  `,
  },
  {
    selector: "p",
    text: "Ah! We need to map this toLower since it's working on an array.",
  },
  {
    selector: "code",
    text: `
  const dasherize = compose(
    intercalate('-'),
    map(toLower),
    split(' '),
    replace(/\s{2,}/ig, ' '),
  );
  
  dasherize('The world is a vampire'); // 'the-world-is-a-vampire'
  `,
  },
  {
    selector: "p",
    text:
      "The trace function allows us to view the data at a certain point for debugging purposes. Languages like Haskell and PureScript have similar functions for ease of development.",
  },
  {
    selector: "p",
    text:
      "Composition will be our tool for constructing programs and, as luck would have it, is backed by a powerful theory that ensures things will work out for us. Let's examine this theory.",
  },
  { selector: "h3", text: "Category Theory" },
  {
    selector: "p",
    text:
      "Category theory is an abstract branch of mathematics that can formalize concepts from several different branches such as set theory, type theory, group theory, logic, and more. It primarily deals with objects, morphisms, and transformations, which mirrors programming quite closely. Here is a chart of the same concepts as viewed from each separate theory.",
  },
  { selector: "img", text: article03image01 },
  {
    selector: "p",
    text:
      "Sorry, I didn't mean to frighten you. I don't expect you to be intimately familiar with all these concepts. My point is to show you how much duplication we have so you can see why category theory aims to unify these things.",
  },
  {
    selector: "p",
    text:
      "In category theory, we have something called... a category. It is defined as a collection with the following components:",
  },
  { selector: "p", text: " - A collection of objects" },
  { selector: "p", text: " - A collection of morphisms" },
  { selector: "p", text: " - A notion of composition on the morphisms" },
  { selector: "p", text: " - A distinguished morphism called identity" },
  {
    selector: "p",
    text:
      "Category theory is abstract enough to model many things, but let's apply this to types and functions, which is what we care about at the moment.",
  },
  {
    selector: "p",
    text:
      "A collection of objects The objects will be data types. For instance, String, Boolean, Number, Object, etc. We often view data types as sets of all the possible values. One could look at Boolean as the set of [true, false] and Number as the set of all possible numeric values. Treating types as sets is useful because we can use set theory to work with them.",
  },
  {
    selector: "p",
    text:
      "A collection of morphisms The morphisms will be our standard every day pure functions.",
  },
  {
    selector: "p",
    text:
      "A notion of composition on the morphisms This, as you may have guessed, is our brand new toy - compose. We've discussed that our compose function is associative which is no coincidence as it is a property that must hold for any composition in category theory.",
  },
  { selector: "p", text: "Here is an image demonstrating composition:" },
  { selector: "img", text: article03image02 },
  { selector: "img", text: article03image03 },
  { selector: "p", text: "Here is a concrete example in code:" },
  {
    selector: "code",
    text: `
  const g = x => x.length;
  const f = x => x === 4;
  const isFourLetterWord = compose(f, g);
  `,
  },
  {
    selector: "p",
    text:
      "A distinguished morphism called identity Let's introduce a useful function called id. This function simply takes some input and spits it back at you. Take a look:",
  },
  { selector: "code", text: `const id = x => x;` },
  {
    selector: "p",
    text:
      "You might ask yourself 'What in the bloody hell is that useful for?'. We'll make extensive use of this function in the following chapters, but for now think of it as a function that can stand in for our value - a function masquerading as every day data.",
  },
  {
    selector: "p",
    text:
      "id must play nicely with compose. Here is a property that always holds for every unary (unary: a one-argument function) function f:",
  },
  {
    selector: "code",
    text: `
  // identity
  compose(id, f) === compose(f, id) === f;
  // true
  `,
  },
  {
    selector: "p",
    text:
      "Hey, it's just like the identity property on numbers! If that's not immediately clear, take some time with it. Understand the futility. We'll be seeing id used all over the place soon, but for now we see it's a function that acts as a stand in for a given value. This is quite useful when writing pointfree code.",
  },
  {
    selector: "p",
    text:
      "So there you have it, a category of types and functions. If this is your first introduction, I imagine you're still a little fuzzy on what a category is and why it's useful. We will build upon this knowledge throughout the book. As of right now, in this chapter, on this line, you can at least see it as providing us with some wisdom regarding composition - namely, the associativity and identity properties.",
  },
  {
    selector: "p",
    text:
      "What are some other categories, you ask? Well, we can define one for directed graphs with nodes being objects, edges being morphisms, and composition just being path concatenation. We can define with Numbers as objects and >= as morphisms (actually any partial or total order can be a category). There are heaps of categories, but for the purposes of this book, we'll only concern ourselves with the one defined above. We have sufficiently skimmed the surface and must move on.",
  },
  { selector: "h3", text: "In Summary" },
  {
    selector: "p",
    text:
      "Composition connects our functions together like a series of pipes. Data will flow through our application as it must - pure functions are input to output after all, so breaking this chain would disregard output, rendering our software useless.",
  },
  {
    selector: "p",
    text:
      "We hold composition as a design principle above all others. This is because it keeps our app simple and reasonable. Category theory will play a big part in app architecture, modelling side effects, and ensuring correctness.",
  },
  {
    selector: "p",
    text:
      "We are now at a point where it would serve us well to see some of this in practice. Let's make an example application.",
  },
];

export { article01, article02, article03 };
