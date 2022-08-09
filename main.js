//The $ sign makes clear it's using jQuery.
//Syntax goes $(selector).action();
//Selector finds/selects an HTML element.

function pageHeight()  {
	var headerHeight = $("header").outerHeight();
	//Outerheight gets the height (including padding/border/margin) for the first element that matches the selector.
	//Sets a variable that gets the height from the header.

	var footerHeight = $("footer").outerHeight();
	//Sets a variable that gets the height from the footer.

	var remainHeight = headerHeight + footerHeight;
	//Sets a variable that is the sum of both the header and footer.

	$("main").css("min-height", "calc(100vh - " + remainHeight + "px)");
	//.css can be used to set a style property for the selected element. 
	//When setting the style, select the property you wish to change, followed by the value it should get.
	//Changes the min-height of 'main' to be 100vh minus the height of the footer and header.
}

$(window).on("load resize orientationchange", function () {
	pageHeight();
});
//The 'window' selector represents an open window in the browser.
//The .on action attaches one or more event handlers to the selected element.
//The function within the .on action specifies that it needs a function to run.
//Runs the pageHeight function when the page gets loaded, resized or if the orientation (portrait or landscape) is changed. 





const validateEmail = (email) => {
   //Is a function expression, function is stored in variable.
   //The (email) is another variable (this is the id from input in HTML).
  
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
  //Checks if the string (stored in the email variable) matches the regular expression.
  //Returns the result (does it match, or does it not match? true or false)



const validate = () => {

  const result = document.getElementById('invalidSubmit');
  //Sets the variable 'result' (this is the id from the span that will show on invalid input).

  const email = document.getElementById('email').value;
  //Sets the variable 'email' and makes it so that it will return the submitted input from the form.

  result.innerHTML = '';
  //Unsets the value of the span.
  


  if (email == '') {
  	result.innerHTML = 'this field can not be empty';
  	//Adds a string. 

  	result.style.display="block";
  	
  	//Sets the display of the span to block, making it visbible.
  } else if (validateEmail(email)) {
  //If the input matches the regular expression.
  
  result.style.display="none";
  //Sets the display of the span to 'none', making it invisible.
  }

    else {
     result.innerHTML = email + ' is not valid';
     //Takes the value from email and adds string 'is not valid'. 

     result.style.display="block"; 
     //Sets the display of the span to block, making it visbible.
  }
  return false;
  //Makes it so the form does not submit when the email isn't formatted correctly.
}


const signupButton = document.getElementById("signupButton");
  //Sets variable for submit button of form.

signupButton.addEventListener("click", validate);
//Makes it run the function 'validate' when submit button is clicked.
