var sortNumber = function (number) {
   number.sort(function (a, b) {
       if (a == b) {
           return 0;
       }
       return a < b ? -1 : 1;
   });
};
varnumber = [19,3,81,124,21];
sortNumber(number);
console.log(number);
