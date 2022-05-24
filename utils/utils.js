/*	\param min Borne minimum
	\param max Borne maximum */
function rand_int(min, max)
{ return (Math.floor(((Math.random() + min) * 1000) % max)); }


/* 	\param msg Message à afficher
	\param label label du groupe (optionnel) */
function print_error(msg, obj)
{
	console.groupCollapsed("Error");
	console.trace(msg);
	if (obj != undefined)
	{
		console.log("Faultive variable:");
		console.log(obj);
	}
	console.groupEnd("Error");
}


function start()
{
	let firstRow = document.createElement("tr");
	firstRow.appendChild(create_cell("avaliable"));
	firstRow.appendChild(create_cell("start"));
	firstRow.appendChild(create_cell("avaliable"));

	let secondRow = document.createElement("tr");
	secondRow.appendChild(create_cell("avaliable"));

	grid.appendChild(firstRow);
	grid.appendChild(secondRow);
}

// start();
