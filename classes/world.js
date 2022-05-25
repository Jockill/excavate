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
			this.add_row(cell.y);

		// Ajouter la case à la map
		this.map[cell.y][cell.x] = cell;
		this.map[cell.y][cell.x].to_grid_element();
		this.cellsAmount++;

		this.fill_row(cell.x);
	}

	fill_row(y, startX)
	{
		// let rowSize = Object.keys(this.map[cell.y]).length;
		if (startX < 0)
		{
			for (++startX; startX<=0; startX++)
			{
				if (this.map[y][startX] != undefined)
					break;

				// Creer une case vide
				this.map[y][startX] = new Void(this.map[y][startX-1], LEFT);
				this.map[y][startX].to_grid_element();
			}
		}
		else
		{
			for (--startX; startX>=0; startX--)
			{
				if (this.map[y][startX] != undefined)
					break;

				// Creer une case vide
				this.map[y][startX] = new Void(this.map[y][startX+1], RIGHT);
				this.map[y][startX].to_grid_element();
			}
		}
	}

	add_row(nthRow)
	{
		let tr = document.createElement("tr");
		grid.appendChild(tr);
		this.map[nthRow] = [];
	}

	get_cell(x, y)
	{
		if (this.map[y] != undefined)
			return this.map[y][x];
		return VOID;
	}

	spawn_cell(x, y, cell)
	{
		// TODO
	}
}
