// var bubbleSort = (function(){  //use Module at the end of your var insertName
// var module = {};

// module.
sort = function(array){ //<-- parameter to test in code
var storeArray =[];
var counter = 0;
console.log("array",array);
for(var r = 0; r < array.length; r++){

   for(var i = 0; i <array.length; i++){
    if(array[i] > array[i+1]){
      storeArray.push(array[i]);
      //console.log("store array",storeArray);
      //console.log("array",array);
      array.splice(i,1);
      //console.log("array",array);
     // console.log("store array", storeArray);
      array.splice(i+1,0,storeArray[0]);
      console.log("array",array);
      storeArray.pop();
      counter++;
    }
  }
}console.log("it takes " + counter +" passes to sort.");
//console.log(array);
//console.log(array);
return array;
};

sort([5,1,4,2,8]);




//return module; //this returns the object module so we can access it
//});
//module.exports = bubbleSort; // this exports. use the