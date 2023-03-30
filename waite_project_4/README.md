Quick note:
The drawShapes.js is code written for Project 3, just extracted into a standalone function rather than as a method for the Shape Class. While the prior project utilized a Shape class to draw multiple shapes, when tackling the animation part, I simplified this step to just one shape, so using a Class wasn't really needed. I will add it back in the next step, because I'll need multiple shapes to each be transforming independently, which the Class will be great for. Just wanted to mention why there was a Class in the previous project but not this one!

This is an extention of the generalized bezier drawing function, which now accepts multiple shape objects from JSON as 'states' of a shape's animation. I use the lerp function and two nested for() loops to read through both arrays, and for each value, create a third lerped value based on the current lerpValue variable. This variable to controlled via the animController() function, which also handles the change of 'states' and make sure the correct shapes are being lerped from and into, and then back around to the begining (e.g. 0 --> 1 --> 2 --> 0...). Then, the newly created lerpArr[] is looped over via the previous project's drawShapes() function. For how much math is being done, it is so far surprisingly performant, but I'm sure there's a more economical way of figureing this our. I've also cleaned up the code by separating functions out into their own files, hopefully making it easier to navigate the logic of the program. I was gonna have to do that eventually, anyways!

//
SVG/p5.bezier Resources:
https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html
https://github.com/peilingjiang/p5.bezier
https://www.npmjs.com/package/p5.js-svg
https://svgjs.dev/docs/3.0/
http://runemadsen.github.io/rune.js/
https://gist.github.com/caiodv/3eb073a9babf37e6e572

Adobe Illustrator SVG Export Resources:
https://www.hotdoor.com/
https://www.cvalley.com/products/xtreampath2/
//
