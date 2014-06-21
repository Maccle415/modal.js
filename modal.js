Modal = (function()
{
	//base variables
	var id;
	var modalId;
	var element;
	var elementModal;
	var elementClick;
	var screenWidth = window.innerWidth;
	var screenHeight = window.innerHeight;

	//create modal from id
	createFrom = function(idBackground, idModal, idToOpen, clickToClose)
	{
		//set this id
		id = idBackground;
		modalId = idModal;

		//create a base
		element = document.getElementById(idBackground);
		elementModal = document.getElementById(idModal);
		elementClick = document.getElementById(idToOpen);

		//set up elements
		element.style.display = "none";//remove from view
		elementClick.onclick = function ()
		{
			if((element.className).indexOf("modal_open") > -1)
			{
				//open the modal
				close();
			}
			else 
			{
				open();
			}
		}

	}

	open = function ()
	{
		//open the modal
		element.style.display = "block";
		element.className += " modal_open";

		//elementModal set the css to center it
		center();
		
		document.getElementById(element.id).onclick = function (e)
		{
			//check the what has been clicked
			var clickedId = e.target.id;
			
			if(clickedId === element.id)
			{
				close();
			}
		};
	}

	close = function() 
	{
		//close the modal
		element.className = (element.className).replace(" modal_open", "");
		element.style.display = "none";
	}

	center = function()
	{
		//element size
		var elementModalWidth = elementModal.offsetWidth;
		var elementModalHeight = elementModal.offsetHeight;

		//get the padding for the element
		var top = (screenHeight - elementModalHeight) / 2;
		var left = (screenWidth - elementModalWidth) / 2;

		elementModal.style.position = "absolute";
		elementModal.style.top = top + "px";
		elementModal.style.left = left + "px";
	}

	return this;
	
}());