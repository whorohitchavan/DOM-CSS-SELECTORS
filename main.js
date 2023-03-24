const firstH1 = document.querySelector('h1');
console.log(firstH1);

const menuElements = document.querySelectorAll('.menu');
console.log(menuElements);

const autoplayElements = document.querySelectorAll('[autoplay]');
console.log(autoplayElements);

const divAndParagraphElements = document.querySelectorAll('div, p');
console.log(divAndParagraphElements);

const liElements = document.querySelectorAll('ul > li');
console.log(liElements);

const firstAAfterH1 = document.querySelector('h1 + a');
console.log(firstAAfterH1);

const paragraphs = document.querySelectorAll('p');
const firstLines = [];
for (let i = 0; i < paragraphs.length; i++) {
  const text = paragraphs[i].textContent;
  const lines = text.split('\n');
  const firstLine = lines[0].trim();
  firstLines.push(firstLine);
}
console.log(firstLines);
