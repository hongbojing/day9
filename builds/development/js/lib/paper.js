
//33 paper.circle() creates a circle
//syntax: circle(x,y,radius)

//x is the x position of the circle, y is the y position of the central poist of the circle, and radius is the radius of the circle

var paper33=Raphael("code-left-33",400,400);
var cir_33_1=paper33.circle(200,200,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

//34 paper.ellipse() creates a ellipse
//syntax: ellipse(x,y,rx,ry)

//x is the x position of the circle, y is the y position of the circle, rx is the horizontal radius, and ry is the vertical radius.

var paper34=Raphael("code-left-34",400,400);
var ellipse_34_1=paper34.ellipse(150,100,130,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});


//35 paper.rect() creates a rectangle
//syntax: rect(x,y,width,height,radius(optional))
//x is the x start position of the rectangle's top left point, y is the y position of the top left point, width is the rectangle's width, so is height, and radius is theborder radius of the ractangle, it could be used to create any kinds of shape.

var paper35=Raphael("code-left-35",400,400);
var rect_35_1=paper35.rect(100,50,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});


//36 paper.clear() is used to clear the drawing canvas
//this method doesn't take any parameters, it wipes it all
var paper36=Raphael("code-left-36",400,400);
var rect_36_1=paper36.rect(100,50,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
function clear_36_1(){
  paper36.clear();
}

//37 paper.image() allows us to import images on to the paper. This method takes the following five parameters:
// src : the path of the image
// x   : the x coordinate point where the image should be placed
// y   : the y ..
// width
// height
var paper37=Raphael("code-left-37",400,400);
var img_37_1=paper37.image("http://angularfox.com/images/lakers.jpeg",10,15,280,180);
//And now the imported image is converted into a Raphael object. All the usual transformations can be applied to that image object.
function transform_37_1(){
  img_37_1.animate({
    'transform':'t100,0'
  },1000,'bounce');
}


//paper.setSize() allows the resizing of the Raphael paper object so that you won't run out of space.
//syntax:paper.setSize(width,height);

var paper38=Raphael("code-left-38",400,400);
paper38.setSize(500,600);
//500 and 600 would be the new width and height for the paper38


//paper.set() groups several Raphael objects
//Any action performed on this group will apply too all the elements
//set() just groups them, not create any copies
//deleting a set/group will have NO effect on the element
//sets in Raphael are ordered

//syntax:
//var raphaelSet=paper.set();
//raphaelSet.push(elem1,elem2,elem3,...);

//example
var paper39=Raphael("code-left-39",400,400);
var cir_39_1=paper39.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_39_2=paper39.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_39_1=paper39.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_39_1=paper39.set();
//adding elements to the set using  the push() method
set_39_1.push(cir_39_1,cir_39_2,rect_39_1);

//change the color of the set, this will affect all the elements in the set
function set_changecolor_39_1(){
set_39_1.attr('fill','red');
}













