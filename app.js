
function animatedForm() {
  //to get all the arrows in our form
  const arrows = document.querySelectorAll(".fa-arrow-circle-down");

  // arrows.forEach(arrows =>{}) This is a syntax to run a function for each arrow. we're gonna attach an event listener for each arrow to check if information recieved from user is correct or not to move on to the next level
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      //how to get current input from current box.
      const input = arrow.previousElementSibling;
      //    console.log(input);  to check
      const parent = arrow.parentElement;
      //console.log(parent)  //retireve the whole field

      //next form to come up will be
      const nextForm = parent.nextElementSibling;
      // console.log(nextForm)
      //check validation
      // @ts-ignore
      if (input.type === "text" && validateUser(input)) {
        console.log("everything looks great !");
        nextSlide(parent, nextForm); //checcking if both instances are true by checking input type and length (validate) //we call the next slide if evrything is validated
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      //get rid of annimation
      parent.addEventListener('animationEnd', ()=>{
        parent.style.animation = '';
      });
    });
  });
}

//for our user validation

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("not enough characters");
    error("rgb(189, 87, 87"); // we activate our error function which is created below
  } else {
    error("rgb(87, 189, 130)");
    return true; //true is set up in the if statement above
  }
}

//now we create a validate function for our next slide: email
function validateEmail(email) {
  const validation = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)"); //note this isnt really an error. was named the same just so we can add the colors
    return true;
  } else {
    error("rgb(189, 87, 87");
  }
}

//this is our next slide:.  note  //nextfrom const declared up above
function nextSlide(parent, nextForm) {
  parent.classList.add("innactive"); //add the innactive
  parent.classList.remove("active"); //remove the innactive
  nextForm.classList.add("active"); //this transitions in after the previous line transitions out
}
//lets create what happens when there's an error from validation
function error(color) {
  document.body.style.backgroundColor = color;
}
animatedForm(); //activate/call the function

