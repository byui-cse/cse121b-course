import { setListener, setHtml, alertMessage } from "./ui.js";
import calculateGpa from "./gpa.js";

function submit() {
  const gpa = calculateGpa();
  setHtml("#output", gpa);
  alertMessage(gpa, 3000);
}

setListener("#submitButton", "click", submit);
