class Cell
{
	constructor(type, parent, top, bottom, left, right)
	{
		this.type = type;
		this.parent = parent;
		this.top = top;
		this.bottom = bottom;
		this.left = left;
		this.right = right;

		if (this.parent != undefined)
			this.set_coordinates();
	}

	activate_cell()
	{
		console.log(this.type);
	}

	// Start is on coordinates (0,0)
	set_coordinates()
	{
		if (this.parent == this.top)
		{
			this.x = this.parent.x + 1;
			this.y = this.parent.y;
		}
		if (this.parent == this.bottom)
		{
			this.x = this.parent.x - 1;
			this.y = this.parent.y;
		}
		if (this.parent == this.left)
		{
			this.x = this.parent.x;
			this.y = this.parent.y + 1;
		}
		if (this.parent == this.right)
		{
			this.x = this.parent.x;
			this.y = this.parent.y - 1;
		}
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
				cell.bottom = this;
			break;
			case BOTTOM:
				this.bottom = cell;
				cell.top = this;
			break;
			case LEFT:
				this.left = cell;
				cell.right = this;
			break;
			case RIGHT:
				this.right = cell;
				cell.left = this;
			break;
			default:
				print_error("Wrong position.", position);
		}
	}
}
