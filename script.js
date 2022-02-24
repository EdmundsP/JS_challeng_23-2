/**
 * Funckija kas tiek izsaukta pie teksta
 * rakstīšanas jebkurā no input elementiem
 */
 function func1() {
    this.setAttribute("value", this.value);
  }
  
  const next = document.querySelector(".next");
  const previus = document.querySelector(".prev");
  
  let slide = document.querySelector(".slide, .first");
  
  next.onclick = function (event) {
    slide.setAttribute("data-set", "set");
  };
  previus.onclick = function (event) {
    slide.setAttribute("data-set", "");
  };
  
  document.querySelector("input").oninput = function func1() {
    slide.setAttribute("data-value", this.value);
  };
  
  /*
  document.querySelector(["data-slide_nr,  + 1 + "]).style.background = "red";
  
  let slide_1 = document.querySelector(“[data-slide_nr=” + 1 + “]”)
   window.onkeyup = function (event) {
      slide.setAttribute("data-value", "").value =
        slide.setAttribute("data-value", "").value + event.key;
      slide.setAttribute("data-value", event.key);
    };
  let firstname = document
    .querySelector("input")
    .getAttribute("name", "firstname");
  let lastname = document.querySelector("input").getAttribute("name", "lastname");
   slide
      .getAttribute("data-slide_nr", "1")
  = firstname.cloneNode();
  slide.getAttribute('data-slide_nr', '1')
  slide.setAttribute("data-value", "edmunds");
   window.onkeyup = setAttribute("data-value", "true");
  
    slide.getAttribute("data-slide_nr", "1")
      .setAttribute("data-value", "edmunds");
  };
   slide
      .getAttribute("data-slide_nr", "1")
      .setAttribute("data-value", "") = firstname.value;
  */