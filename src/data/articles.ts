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

const article02 = [];

const article03 = [];

export { article01, article02, article03 };
