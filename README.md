modal.js
========

Simple way to make a modal that leaves all the design up to you.


How to use
---------
Create a normal html file.
Create a background element and a modal element. These need to have an id.
Create an element for the click event that will open run the modal.js function.
Include the modal.js file
Include your javascript file that will call the function on modal.
In your javascript file add this line and replace the arguments as needed.
	
	Modal.createFrom(backgroundElementId, modalPopupId, buttonId);
	

If that is too confusing(which it will be because I am completely useless at explaining things)
just look at the index.html and the app.js files, these files will show you how to make the popup work.