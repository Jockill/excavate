/** COLOR **/
const RED = 1;
const BLACK = 2;
const WHITE = 3;

/** CARDS FAMILY **/
const SPADE = 1;
const CLUB = 2;
const HEART = 3;
const DIAMOND = 4;

/** DIRECTIONS **/
const TOP = 1;
const BOTTOM = 2;
const LEFT = 3;
const RIGHT = 4;

/** CELLS TYPE **/
const YGGDRASIL = -420;
const WALL = -1;
const START = 0;
const BUILDING = 1;
const TRAP = 2;
const REMNANT = 3;
const EMPTY = 4;
const VOID = 5;


/**** DOM ELEMENTS ****/
const grid = document.querySelector("table");

const world = new World();
