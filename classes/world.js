class World
{
	constructor()
	{
		this.cellsAmount = 0;
		this.map = [];
	}

	add_cell(cell)
	{
		if (!(cell instanceof Cell))
		{
			print_error("Impossible to add non-cell object", cell);
			return -1;
		}

		if (this.map[cell.y] == undefined)
			this.add_row();
		// TODO:
		// trouver le nombre de cases
		// creer le nombre manquant de cases
		// to_grid_element()
		this.map[cell.y][cell.x] = cell;

		this.cellsAmount++;
	}

	add_row()
	{
		let tr = document.createElement("tr");
		grid.appendChild(tr);
		this.map[this.map.length] = [];
	}

	get_cell(x, y)
	{
		if (this.map[y] != undefined)
			return this.map[y][x];
		return VOID;
	}
}
