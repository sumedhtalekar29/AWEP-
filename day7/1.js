function helloWorld(fn) {
    fn();
  }
  
  helloWorld(function () {
  
    console.log("Callback using Annonymous");
  });
  
  helloWorld(() => {
    
    console.log("Callback using Arrow functions");
  });
  
  let callbckFn = function () {
   
    console.log("Callback using annynomus; via variable");
  };
  helloWorld(callbckFn);
  
 
  let arrwFn = () => {
    
    console.log("Callback using Arrow; via variable");
  };
  helloWorld(arrwFn);