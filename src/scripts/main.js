'use strict';

const populationElements = document.body.querySelectorAll('span.population');

const populationNumbers = [...populationElements]
  .map((el) => +el.textContent.replaceAll(',', ''))
  .filter((el) => !isNaN(el));

const total = populationNumbers.reduce((sum, el) => sum + el, 0);
const average = Math.round(total / populationNumbers.length);

const formatter = new Intl.NumberFormat();

const totalFormatted = formatter.format(total);
const averageFormatted = formatter.format(average);

document.querySelector('span.total-population').textContent = totalFormatted;

document.querySelector('span.average-population').textContent =
  averageFormatted;
