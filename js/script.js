
// const allCartButtons = document.getElementsByClassName('cart');
// let count = 0;
//  for ( const cartButtons of allCartButtons){
//    cartButtons.addEventListener("click",function(e){
//       count = count +1;
//       document.getElementById('home').innerText = count;

//    });
//  };
//এভাবে না করে নিচের মতো করে করা যায় সহজে। 


const allCartButtons = document.getElementsByClassName('cart');
let count = 0;
for (const cartButtons of allCartButtons) {
   cartButtons.addEventListener("click", function (e) {
      count = count + 1;
      const placeName = e.target.parentNode.childNodes[1].innerText;
      const PlacePrice = e.target.parentNode.childNodes[3].childNodes[1].innerText;

      const slectedContainer = document.getElementById('slected-place-container');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = placeName;
      const p2 = document.createElement('p');
      p2.innerText = PlacePrice;
      li.appendChild(p);
      li.appendChild(p2);
      slectedContainer.appendChild(li);

      const budget = document.getElementById('Total-budget').innerText;
      const convertedBudget = parseInt(budget);
      if (convertedBudget-parseInt(PlacePrice)<0){
         alert('low budget earn more.')
         return;
      }
      document.getElementById('Total-budget').innerText = convertedBudget - parseInt(PlacePrice);

      SetTotal('total-cost', parseInt(PlacePrice));
      SetgrandTotal('grand-total', parseInt(PlacePrice));
      setinnertext("home", count);
   });
};
//reuesable function start for counting
function setinnertext(id, value) {
   document.getElementById(id).innerText = value;
}

function SetTotal(id, value) {
   const totalCost = document.getElementById(id).innerText;
   const convertedTotalCost = parseInt(totalCost);
   const sum = convertedTotalCost + parseInt(value);
   setinnertext('total-cost', sum);
}

function SetgrandTotal(category) {
   const grandCost = document.getElementById('total-cost').innerText;
   const convertedGrandTotalCost = parseInt(grandCost);
   if (category == "bus") {
      setinnertext('grand-total', convertedGrandTotalCost + 100);
   } else if (category == "train") {
      setinnertext('grand-total', convertedGrandTotalCost - 200);
   }
   else if (category == "plan") {
      setinnertext('grand-total', convertedGrandTotalCost + 500);
   }
   else {
      setinnertext('grand-total', convertedGrandTotalCost);
   }
}
//reuesable function end for counting