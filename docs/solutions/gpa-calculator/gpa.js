import { qs } from "./ui.js";
let grades = [];

function setGrades() {
  const gradeString = qs("#grades").value;

  grades = gradeString.split(",");
  grades = grades.map((grade) => grade.trim().toUpperCase());
  console.log(grades);
}

function lookupGrade(grade) {
  let points = 0;
  //   if( grade === 'A') {
  //       points = 4;
  //   } else if( grade === 'B') {
  //       points = 3;
  //   }
  switch (grade) {
    case "A":
      points = 4;
      break;
    case "A-":
      points = 3.7;
      break;
    case "B":
      points = 3;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
  }
  return points;
}

export default function calculateGpa() {
  setGrades();
  let gradePoints = grades.map((grade) => lookupGrade(grade));
  const gpa =
    gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa;
}
