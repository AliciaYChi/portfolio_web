function setup() {
createCanvas(600, 600);
noStroke();

}
function draw() {
background( 150, 200, 600); //baground base

//
fill( 255, 255, 255);
ellipse( 100, 120, 15, 15);
ellipse( 130, 120, 15, 15);
ellipse( 160, 120, 15, 15);


// Hair Back
fill(145, 125, 155); // Hair
rect(175, 180, 250, 300);
rect(175, 180, 250, 300);

//Shirt
fill(65, 65, 83); // Hair
ellipse( 300, 400, 120, 180); // Shirt
rect(200, 415, 200, 400);
arc(200, 450, 100, 100, PI, PI+HALF_PI)
arc(400, 450, 100, 100, PI+HALF_PI, 0)
rect(150, 450, 100, 400);
rect(350, 450, 100, 400);

// Skin: Neck 
fill(239, 175, 138); // skintone: Neck
ellipse( 300, 400, 50, 50); // head base: circle

//SKin:
fill(230, 215, 178); // Base Skintone
ellipse( 300, 270, 250, 250); // head base: circle

//Blush
fill(255, 199, 175); // Skin: Blush
ellipse( 240, 335, 80, 60); // Blush: R
ellipse( 360, 335, 80, 60); // Blush: L

//Mouth
fill(243, 151, 123); // skintone: Mouth
arc(300, 340, 80, 80, 4.4, 5.03)

// Hair Bands Side
fill(75, 45, 74); // Hair
arc(265, 235, 220, 220, PI, 5.5 );
arc(385, 235, 100, 190, PI, 0 );
rect(155, 235, 45, 230 );
rect(395, 235, 45, 230 );

// Eyes
fill(255, 255, 255); // Eye: White
ellipse(240, 300, 80, 60); // Main: R
ellipse(360, 300, 80, 60); // Main: L
ellipse(220, 320, 60, 30); // Extra: R
ellipse(380, 320, 60, 30); // Extra: L

//Eyes White Main
fill(102, 66, 45); // Eye: Color
ellipse(240, 300, 60, 45); // Main: R
ellipse(360, 300, 60, 45); // Main: L

//Eye White Center
fill(255, 255, 255); // Color: White
ellipse(240, 300, 45, 30); // Extra: Whites R
ellipse(360, 300, 45, 30); // Extra: Whites L

//Bangs Center
fill(75, 45, 74); // Hair
arc(225, 170, 260, 240, 0, 2); 
arc(395, 155, 140, 240, 1.2, 3 );

//Hair Top
fill(75, 45, 74); // Hair
arc( 298, 240, 285, 260, PI, 0); 

// Eye brow
fill(55, 37, 61); // Color: Purple-black
ellipse(240, 210, 45, 30); // R
ellipse(360, 210, 45, 30); // L
}



