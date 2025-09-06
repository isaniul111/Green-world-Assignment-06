const allPlants=()=>{
    const url="https://openapi.programming-hero.com/api/plants";
    fetch(url).then(res=>res.json()).then(data=>{
        data.plants.forEach(el=> {
            displayAllPlants(el);
        });
    });
}
const displayAllPlants=(plants)=>{
    const cardParent=document.getElementById('card-parent');
    const cards=document.createElement('div');
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//      "name": "Mango Tree",
//      "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//      "category": "Fruit Tree",
//      "price": 500
    cards.innerHTML=`
        <div class="h-[380px] bg-white shadow rounded-xl p-4">
              <div class="h-44  rounded-md mb-1"><img class="w-full h-full object-cover rounded-lg" src="${plants.image}" alt=""></div>
              <h3 class="font-semibold text-lg mb-1">${plants.name}</h3>
              <p class="text-[0.62rem] text-gray-600 mb-0">
                ${plants.description}
              </p>
              <div class="mt-auto flex items-center justify-between mb-1">
                <p class="text-green-600 text-sm mt-2 block py-1 px-3 bg-[#DCFCE7] text-[#15803D] rounded-full">
                  ${plants.category}
                </p>
                <p class="font-semibold">৳${plants.price}</p>
              </div>

              <div class="mt-auto flex items-center justify-between">
                <button class="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
    `;
    cardParent.appendChild(cards);
}

allPlants();