// some failed attempts at figuring out easing...
function linearTween(t, b, c, d) {
  console.log((c * t) / d + b);
  return (c * t) / d + b;
}

function easeInQuad(t, b, c, d) {
  t /= d;
  console.log(c * t * t + b);
  return c * t * t + b;
}

function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
}

function easeInOutQuad(t, b, c, d) {
  let ct = t % 1000;
  ct /= d / 2;
  if (ct < 0.5) {
    console.log((c / 2) * ct * ct + b);
    return (c / 2) * ct * ct + b;
  }
  ct--;
  console.log((-c / 2) * (ct * (ct - 2) - 1) + b);
  return (-c / 2) * (ct * (ct - 2) - 1) + b;
}

function easyEase(count, delTime, lerpAm, dur) {
  count /= dur - delTime;
  return lerpAm * count;
}

/*
  t: current time
  b: start value
  c: change in value
  d: duration
  
  quadratic easing functions references:
  https://gizma.com/easing/#quad3
  https://gist.github.com/gre/1650294
  https://cubic-bezier.com/
  https://www.independent-software.com/determining-coordinates-on-a-html-canvas-bezier-curve.html
  */
