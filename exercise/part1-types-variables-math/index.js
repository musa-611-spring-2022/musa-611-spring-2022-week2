/* =====================

# Exercise: Types, Variables, Math

## Introduction

Change variables a through e below so that resultTask1 through resultTask5
evaluate as true. When you are finished, check your browser's console
log to test the results.

===================== */

const a = 32;
const resultTask1 = (a > 30);

const b = 'h';
const resultTask2 = (typeof b === 'string');

const c = 1;
const dataTask3 = ['peach', 'plum', 'pear'];
const resultTask3 = (dataTask3[c] === 'plum');

const d = 10;
const resultTask4 = (d === 'cassiopeia'.length);

const e = 8;
const resultTask5 = (e % 5 === 3);

/* =====================

Tests (all should report success)

===================== */

const taskResults = [
  resultTask1,
  resultTask2,
  resultTask3,
  resultTask4,
  resultTask5,
];
function reportTaskSuccess(taskNumber) {
  const taskIdx = taskNumber - 1;
  const taskSuccess = taskResults[taskIdx];

  if (taskSuccess) {
    console.log(`Task ${taskNumber} success!`);
  } else {
    console.log(`Task ${taskNumber} failure!`);
  }
}

reportTaskSuccess(1);
reportTaskSuccess(2);
reportTaskSuccess(3);
reportTaskSuccess(4);
reportTaskSuccess(5);
