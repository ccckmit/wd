var c = console;

function df(f, x) {
  var dx = 0.001;
  var dy = f(x+dx) - f(x);
  return dy/dx;
}

function square(x) {
  return x*x;
}

c.log('df(x^2,2)='+df(square, 2));
c.log('df(x^2,2)='+df(function(x){ return x*x; }, 2));
c.log('df(sin(x/4),pi/4)='+df(Math.sin, 3.14159/4));

