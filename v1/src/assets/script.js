const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

// Selecting DOM Elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render Facts In List
factsList.innerHTML = '';

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    'https://zizotepfqlxkyqckaduk.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppem90ZXBmcWx4a3lxY2thZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTI4MjgsImV4cCI6MjAzOTgyODgyOH0.jK_khlyG_dCjr6IhsPLeKIeywlKI5VER4bE5SteleWQ',
      },
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppem90ZXBmcWx4a3lxY2thZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTI4MjgsImV4cCI6MjAzOTgyODgyOH0.jK_khlyG_dCjr6IhsPLeKIeywlKI5VER4bE5SteleWQ',
    }
  );
  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((fact) => fact.category === 'technology');

  createFactsLists(data);
}

function createFactsLists(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>  
  </li>`
  );
  const html = htmlArr.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

// factsList.insertAdjacentHTML('afterbegin', '<li>Shaun</li>');

// Toggle Form Visibility
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*

const text = 'lisbon is the capital of portugal';

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log('Upvotes:', totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

parseFloat('24.533ccc');
console.log(parseFloat('24.533ccc'));



function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  // 2022 - 2015
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(1997);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert('This fact is equally interesting and mindblowing');
} else if (votesInteresting > votesMindblowing) {
  console.log('Interesting fact!');
} else if (votesInteresting < votesMindblowing) {
  console.log('Mindblowing fact!!');
}

// falsy values: 0, '', null, undefined
// truthy values: anything else
if (votesMindblowing) {
  console.log('Mindblowing fact!!!');
} else {
  console.log('Not so special');
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? 'The fact is true'
    : 'Might be false, check more sources...';

// alert(message

const text = 'Lisbon us the capital of portugal';
const upperText = text.toUpperCase();
console.log(upperText);

const str = `Did you know: '${text}'. It is ${calcFactAge(
  2023
)} years old. It is probably ${
  totalUpvotes > votesFalse ? 'Correct' : 'False'
}`;

console.log(str);


// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   // 2022 - 2015
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return `impossible year. Year needs to be less or equal ${currentYear}`;
// }

// const age1 = calcFactAge(2015);
// console.log(age1);
// console.log(calcFactAge(2020));
// console.log(calcFactAge(2037));

// // const calcFactAge = year;

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `impossible year. Year needs to be less or equal ${new DataTransfer().getFullYear()}`;
// console.log(calcFactAge2(2015));
// console.log(calcFactAge(2037));

const fact = ['lisbon is the capital of portugal', 2015, true];

console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(text, createdIn);

const newFact = [...fact, 'society'];
console.log(newFact);

const factObj = {
  text: 'Lisbon is the capital of portugal',
  category: 'society',
  createdIn: 2015,
  isCorrect: true,
  createdSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj['text']);

const { category, isCorrect } = factObj;
console.log(category);
console.log(isCorrect);
console.log(factObj.createdSummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(...times10);

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => el.createdIn);
console.log(factAges.join(' - '));

*/
