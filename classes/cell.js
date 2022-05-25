class Cell
{
	constructor(parent, parentPosition)
	{
		if 	(parent != YGGDRASIL &&
			(parent == undefined || parentPosition == undefined ||
			(TOP > parentPosition || parentPosition > RIGHT)))
		{
			print_error("Impossible to create new cell", {parent: parent, parentPosition: parentPosition});
			return -1;
		}

		this.parent = parent;
		this.parentPosition = parentPosition;

		this.set_coordinates();
		world.add_cell(this);
		this.find_neibourgh();
		// this.to_grid_element();
	}

	create_avaliable()
	{
		// TODO: Dispo uniquement si la case est un escalier
		if (this.top == VOID)
			this.top = new Avaliable(this, BOTTOM);
		if (this.bottom == VOID)
			this.bottom = new Avaliable(this, TOP);
		if (this.left == VOID)
			this.left = new Avaliable(this, RIGHT);
		if (this.right == VOID)
			this.right = new Avaliable(this, LEFT);
	}

	find_neibourgh()
	{
		this.top = world.get_cell(this.x, this.y-1);
		this.bottom = world.get_cell(this.x, this.y+1);
		this.left = world.get_cell(this.x-1, this.y);
		this.right = world.get_cell(this.x+1, this.y);
	}

	// Start is on coordinates (0,0)
	set_coordinates()
	{
		if (this.parentPosition == TOP)
		{
			this.x = this.parent.x;
			this.y = this.parent.y + 1;
		}
		if (this.parentPosition == BOTTOM)
		{
			this.x = this.parent.x;
			this.y = this.parent.y - 1;
		}
		if (this.parentPosition == LEFT)
		{
			this.x = this.parent.x + 1;
			this.y = this.parent.y;
		}
		if (this.parentPosition == RIGHT)
		{
			this.x = this.parent.x - 1;
			this.y = this.parent.y;
		}
	}

	to_grid_element()
	{
		let td = document.createElement("td");
		let span = document.createElement("span");
		span.classList.add(this.type);

		span.cell = this;
		span.addEventListener("click", function() { this.activate_cell() });

		td.appendChild(span);
		return td;
	}

	// Chaine cette cellule à une autre
	attach_cell(position, cell)
	{
		if (!(cell instanceof Cell))
		{
			print_error("Cell impossible to attach.", cell);
			return -1;
		}

		switch (position) {
			case TOP:
				this.top = cell;
			break;
			case BOTTOM:
				this.bottom = cell;
			break;
			case LEFT:
				this.left = cell;
			break;
			case RIGHT:
				this.right = cell;
			break;
			default:
				print_error("Wrong position.", position);
		}
	}
}
