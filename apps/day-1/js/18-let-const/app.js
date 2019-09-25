
let a = 10;

console.log('before block a:', a);

// if(true)
// const b = function () 
{
  var a = 200;
  console.log('inside block a:', a);

  a = 400;
  console.log('inside block a:', a);

};

// b();

console.log('after block a:', a);


