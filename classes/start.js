class Start extends Cell
{
	constructor()
	{
		super(YGGDRASIL, null);
		this.type = "start";
		this.create_avaliable();
	}

	set_coordinates()
	{
		this.x = 0;
		this.y = 0;
	}

	find_neibourgh()
	{
		this.top = WALL;
		this.bottom = VOID;
		this.left = VOID;
		this.right = VOID;
	}
}
