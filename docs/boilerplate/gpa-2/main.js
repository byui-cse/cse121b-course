import { qs, setListener, alertMessage, buildElements } from "./ui.js";
import gpaCalculator from "./gpa.js";

// build semester drop down based off of transcript data.

// event handler callback for our submit button
function submit() {
  // get select element so we can see which option was selected.
  const selectEl = qs("#semester");
  // how do we know which option was selected?
  console.dir(selectEl);
  // calculate the gpa

  // get the gpa info from our module for the specified semester

  // display our data in a table.
}

setListener("#submitButton", "click", submit);
