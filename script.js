/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const textarea = document.getElementById("text-input");
const formatText = document.getElementById("text-output");
document.addEventListener("keydown", updateText);

function updateText() {
  const text = textarea.value;

  formatText.innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
const boldBtn = document.getElementById("bold");
boldBtn.addEventListener("click", makeBold);

function makeBold() {
  //CODE GOES HERE
  formatText.classList.add("bold");
}

/**
 * Toggle the italic class for the output text
 */
const italicBtn = document.getElementById("italic");
italicBtn.addEventListener("click", makeItalic);

function makeItalic() {
  formatText.classList.add("italic");
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
const underlineBtn = document.getElementById("underline");
underlineBtn.addEventListener("click", makeUnderline);

function makeUnderline() {
  //CODE GOES HERE
  formatText.classList.add("underline");
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
}
