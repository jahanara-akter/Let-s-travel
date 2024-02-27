
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

      const totalCost = document.getElementById('total-cost').innerText;
      const convertedTotalCost = parseInt(totalCost);
      document.getElementById('total-cost').innerText = convertedTotalCost + parseInt(PlacePrice);
      setinnertext("home", count);
   });
};
//reuesable function start for counting
function setinnertext(id, value) {
   document.getElementById(id).innerText = value;
}
//reuesable function end for counting