/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const formatText = document.getElementById("text-output");

updateText = () => {
  const text = document.getElementById("text-input").value;

  formatText.innerText = text;
};

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
const boldBtn = document.getElementById("bold");

makeBold = () => {
  //CODE GOES HERE
  formatText.classList.value.includes("bold")
    ? formatText.classList.remove("bold")
    : formatText.classList.add("bold");
};

/**
 * Toggle the italic class for the output text
 */
const italicBtn = document.getElementById("italic");

makeItalic = () => {
  formatText.classList.value.includes("italic")
    ? formatText.classList.remove("italic")
    : formatText.classList.add("italic");
};

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
const underlineBtn = document.getElementById("underline");

makeUnderline = () => {
  //CODE GOES HERE
  formatText.classList.value.includes("underline")
    ? formatText.classList.remove("underline")
    : formatText.classList.add("underline");
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
classifyType = (type) => {
  if (type === "left-align") {
    formatText.style.textAlign = "left";
  } else if (type === "center-align") {
    formatText.style.textAlign = "center";
  } else if (type === "right-align") {
    formatText.style.textAlign = "right";
  }
};

alignText = (e) => {
  // CODE GOES HERE
  const btnList = document.getElementsByClassName("align");
  const alignType = e.target.id;
  const iconAlignType = e.target.parentNode.id;

  alignType ? classifyType(alignType) : classifyType(iconAlignType);

  for (let btn of btnList) {
    btn.classList.remove("active");
  }
  e.target.classList.toggle("active");
  e.target.parentNode.classList.toggle("active");
};
