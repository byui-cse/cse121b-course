import { qs, setListener, alertMessage, buildElements } from "./ui.js";
import gpaCalculator from "./gpa.js";

// build semester drop down based off of transcript data.
const semesters = gpaCalculator.getSemesterInfo();
buildElements.select(semesters, "#semester");

// event handler callback for our submit button
function submit() {
  // get select element so we can see which option was selected.
  const selectEl = qs("#semester");
  // how do we know which option was selected?
  console.dir(selectEl);
  // calculate the gpa
  gpaCalculator.calculateGpa();
  // get the gpa info from our module for the specified semester
  const gpa = gpaCalculator.getGpaInfo(selectEl.value);
  // display our data in a table.
  buildElements.gpaTable(gpa, "#output");
}

setListener("#submitButton", "click", submit);
