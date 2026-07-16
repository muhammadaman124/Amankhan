
   let a = "3"
   let b = num++;
   console.log(b);
   console.log(a);

// POST DECREMENT
   let a = "2"
   let b = num--;
   console.log(b);
   console.log(a);

// PRE INCREMENT
   let a ="3" 
   let b = ++num;
   console.log(b);
   console.log(a);

// PRE DECREMENT
   let a = "2"
   let b = num--;
   console.log(b);
   console.log(a);

// Chapter 07: Eliminating ambiguity

   let totalCost = 1 + 3 *  4;
   console.log(totalCost);

   let totalCost =  8 + (4 * 3);
   console.log(totalCost);

   let totalCost2 =  2 * (4 + 3);
   console.log(totalCost2);

   let resultOfComputation = (2 * 4) * 4 + 2;
   console.log(resultOfComputation);
