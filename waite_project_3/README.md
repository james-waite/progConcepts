Quick note:
app-03.js and paths_01.json are the 'current' files for project, all other files are previous sketches/experiements that you may look at but aren't the actual project.

This was a weird and winding project! I started out in app_01.js thinking that would be able to construct complex shapes with vertex() and curveVertex(), but there's a bug in p5 that causes ALL vertices in a shape to become curveVertex() if one is present (there's an open bug report on p5's documentation dating back to 2015!). I also tried incorporating line() within the startShape() but p5 also doesn't like that, either.

Obviously this isn't ideal, so I switched focus to using bezierVertex() to build shapes. My first attempt was just hard-coding all name-value pairs. This worked, but meant the Shape class only accepted data with very specific lenths and number of points. It also couldn't accept multiple contour cut-out paths.

It was at this point, seeing the complicated work of generalizing this function ahead of me, that I started looking into SVG as a potential work-around. Outside of this project, I think I will pursue this route, because SVG already has great documentation and there are several JavaScript libraries that work with animating SVG data. I also found several extentions that might help with exporting and formating SVG data from Adobe Illustrator. These links are pasted below.

Having procrastinated for 6-8 hours researching SVG libraries, I returned focus to generalizing my loadData() and Shape class. And I have to say, I'm pretty proud that I was able to get it working! It now accepts json data with any number of shapes, of any length, with any number of contour paths inside of them! I utilized if...in, the ...spread operator, and a couple destructuring assignments to make it all work. The line-by-line breakdown is in app_03.js so I won't cover it here.

While I didn't have time to get the animation working (I think I'll have to change how the Shape objects get made, because the shapes() array holds each instance of Shape, so they're descrete objects with no connection), that will be the next step!

/\*
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
/\*
