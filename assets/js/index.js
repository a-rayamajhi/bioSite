// Sincere apology
// Had to add this snippet to make toggler work

var toggler = document.getElementById("toggler"),
  tabs = document.getElementById("tab-sections"),
  navs = toggler.getElementsByClassName("nav-component-2");

for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", toggleCallback);
}

function toggleCallback() {
  var current = document.getElementsByClassName("active-comp"),
    inactiveTab = tabs.getElementsByClassName("tab-hide"),
    forAttr = current[0].getAttribute("for"),
    thisFor = this.getAttribute("for"),
    hideSection = document.getElementById(forAttr),
    toBeActiveSection = document.getElementById(thisFor);

  if (thisFor != forAttr) {
    current[0].className = current[0].className.replace(" active-comp", "");
    this.className += " active-comp";

    hideSection.className += " tab-hide";
    toBeActiveSection.className = toBeActiveSection.className.replace(
      " tab-hide",
      ""
    );
  }
}
