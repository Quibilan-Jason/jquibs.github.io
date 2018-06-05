//this function applies a theme
function applyTheme(theme) {

  //apply the theme
  document.getElementById("myPage").className=theme;

  //store the theme into local storage
  localStorage.setItem("theme", theme);
}

//these functions will use the applyTheme function
function applyDayTheme() {
  applyTheme("day");
}

function applyNightTheme() {
  applyTheme("night");
}

//this function adds the event listeners fot the buttons
function addButtonsListeners() {
  document.getElementById("b1").addEventListener("click", applyDayTheme);
  document.getElementById("b2").addEventListener("click", applyNightTheme);
}

//this function will
function initiate() {
  //test if the browser supports Local Storage API
  if(typeof(localStorage)===undefined)
    alert("Bruh, this browser not going to execute app properly!");
  else {
    //if no theme is stored in local storage, dfault theme will be day
    if(localStorage.getItem("theme")===null)
      applyDayTheme();
    else
      applyTheme(localStorage.getItem("theme"));
    }
    //add listeners to the buttons
    addButtonsListeners();
}

//call the initiate function
initiate();
