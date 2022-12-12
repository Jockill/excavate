class World
{
	constructor()
	{
		this.cellsAmount = 0;
		this.map = [];
	}

	// Ajoute une case à this.map et crée une rangée dans la table html si nécessaire
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

	// Ajoute une rangée à this.map et crée une rangée dans la table html
	add_row(nthRow)
	{
		let tr = document.createElement("tr");
		// Forcément en dessous car on ne peut pas aller au dessus du spawn
		// Forcément à append car on ne peut pas sauter de rangée
		grid.appendChild(tr);
		this.map[nthRow] = [];
	}

	// Renvoie la cellule aux coordonnées (x,y)
	get_cell(x, y)
	{
		if (this.map[y] != undefined)
			return this.map[y][x];
		return VOID;
	}

	// Crée la cellule (x,y) dans la table html
	// FiX ME : Pb = Append a le meme comportement AppendChild
	spawn_cell(x, y, cell)
	{
		// Trouver le bon <tr> parent
		let parentTr = grid.querySelector(`tr:nth-child(${ y + 1 })`)
		
		// Trouver le bon <td> parent
		let firstX = 0
		if (tr.firstChild != null) 
			firstX = parseInt(get_html_cell_x(tr.firstChild));
		let parentTd = parentTr.querySelector(`td:nth-child(${ Math.abs(firstX) + x + 1 })`)
		if (parentTd == null)
			parentTr.appendChild(cell)		
		else
			parentTd.append(cell)
	}
}
