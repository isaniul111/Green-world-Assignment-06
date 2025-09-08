const allPlants=()=>{
    const url="https://openapi.programming-hero.com/api/plants";
    fetch(url).then(res=>res.json()).then(data=>{
         displayAllPlants(data.plants);
    });
}
const displayAllPlants=(plants)=>{
    const cardParent=document.getElementById('card-parent');
    cardParent.innerHTML = '';
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//      "name": "Mango Tree",
//      "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//      "category": "Fruit Tree",
//      "price": 500
    plants.forEach(plant=>{
        const cards=document.createElement('div');
        cards.innerHTML=`
        <div id="word-container" class="h-[380px] bg-white shadow rounded-xl p-4">
              <div class="h-44  rounded-md mb-1"><img class="w-full h-full object-cover rounded-lg" src="${plant.image}" alt=""></div>
              <h3 onclick="boxModal(${plant.id})" class="font-semibold text-lg mb-1">${plant.name}</h3>
              <p class="text-[0.62rem] text-gray-600 mb-0">
                ${plant.description}
              </p>
              <div class="mt-auto flex items-center justify-between mb-2">
                <p class="text-green-600 text-sm mt-2 block py-1 px-3 bg-[#DCFCE7] text-[#15803D] rounded-full">
                  ${plant.category}
                </p>
                <p class="font-semibold">৳${plant.price}</p>
              </div>

              <div class="mt-auto flex items-center justify-between">
                <button onclick="addToCart('${plant.name}',${plant.price})" class="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
    `;
    cardParent.appendChild(cards);
    manageSpinner(false);
    });
}

const category=()=>{
    const btnList=document.getElementById('btn-list');
    const url="https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then(res=>res.json())
    .then(category=>{
        category.categories.forEach(el=>{
            const innerBtn=document.createElement('div');
            innerBtn.innerHTML=`
                <button id="cate-btn-${el.id}" class="block px-3 py-2 rounded-md hover:bg-green-600 hover:text-white w-full text-left btn-category">
                 ${el.category_name}
                </button>
            `;
        innerBtn.setAttribute('onclick', `displayCategory(${el.id})`);
        btnList.appendChild(innerBtn);
        });

    });
}
const displayCategory=(id)=>{
    manageSpinner(true);
    const url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url).then(res=>res.json()).then(el=>{ 
      removeActive();
      const clickBtnActive=document.getElementById(`cate-btn-${id}`);
      clickBtnActive.classList.add('active');
      displayAllPlants(el.plants);
    });
}
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500

const boxModal=(id)=>{
    const url=`https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url).then(res=>res.json()).then(combine=>{
      // console.log(combine.plants);
        const modelBox=document.getElementById("modal-box");
        const boxInModal=document.createElement('div');
        modelBox.innerHTML = "";
        boxInModal.innerHTML=`
          <h3 class="text-2xl font-bold my-2">${combine.plants.name}</h3>
          <div class="w-[450px] h-[300px] mb-1 mx-auto">
            <img class="w-full h-full object-cover rounded-xl" src="${combine.plants.image}" alt="">
          </div>
          <p><span class="text-xl font-semibold my-2">Category :</span >${combine.plants.category}</p>
          <p><span class="text-xl font-semibold my-2">Price :</span >${combine.plants.price}</p>
          <p><span class="text-xl font-semibold my-2">Description :</span >${combine.plants.description}</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        `;
        modelBox.appendChild(boxInModal);
        my_modal.showModal();
      });
}
let cartTotal = 0;

const addToCart = (name, price) => {
  cartTotal += price;
  const cartParent = document.getElementById("cart-parent");

  const cartChild = document.createElement("div");
  cartChild.innerHTML = `
    <div class="space-y-3 text-sm">
      <div class="flex justify-between items-center p-2 bg-[#F0FDF4]">
        <div class="space-y-2">
          <h3 class="text-[0.875rem] font-semibold">${name}</h3>
          <h3 class="text-gray-500">৳${price} x 1</h3>
        </div>
        <div>
          <button class="p-3 remove-btn">x</button>
        </div>
      </div>
    </div>
  `;

  cartParent.appendChild(cartChild);

  cartChild.querySelector(".remove-btn").addEventListener("click", () => {
    cartTotal -= price;
    cartChild.remove();
    countTotal();
  });

  countTotal();
};

const countTotal = () => {
  let totalDivParent = document.getElementById("totalCount");
  if (!totalDivParent) {
    totalDivParent = document.createElement("div");
    totalDivParent.id = "totalCount";
    totalDivParent.className = "mt-3";
    document.getElementById("cart-parent").appendChild(totalDivParent);
  } else {
    totalDivParent.remove();
    document.getElementById("cart-parent").appendChild(totalDivParent);
  }

  totalDivParent.innerHTML = `
    <hr class="my-3 text-gray-400" />
    <div class="flex items-center justify-between font-semibold">
      <span>Total:</span>
      <span>৳${cartTotal}</span>
    </div>
  `;
};
const removeActive=()=>{
  const cateButtion=document.querySelectorAll('.btn-category');
  console.log(cateButtion);
  cateButtion.forEach(btn=>{
    btn.classList.remove('active');
  });
}
const manageSpinner=(status)=>{
  if(status==true){
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('word-container').classList.add('hidden');
  }
  else{
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById('word-container').classList.remove('hidden');
  }
}
category();
allPlants();