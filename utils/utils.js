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

function create_cell(className)
{
	let td = document.createElement("td");
	let span = document.createElement("span");
	span.classList.add(className);

	// TODO: Attacher une instance de cell à la case
	// var cell = new Cell(className);
	// td.addEventListener("click", cell.activate_cell);
	// td.cell = cell;

	td.appendChild(span);
	return td;
}

function start()
{
	let firstRow = document.createElement("tr");
	firstRow.appendChild(create_cell("avaliable"));
	firstRow.appendChild(create_cell("start"));
	firstRow.appendChild(create_cell("avaliable"));

	let secondRow = document.createElement("tr");
	secondRow.appendChild(create_cell("void"));
	secondRow.appendChild(create_cell("avaliable"));
	secondRow.appendChild(create_cell("void"));

	grid.appendChild(firstRow);
	grid.appendChild(secondRow);
}

start();
