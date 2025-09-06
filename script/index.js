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
        <div class="h-[380px] bg-white shadow rounded-xl p-4">
              <div class="h-44  rounded-md mb-1"><img class="w-full h-full object-cover rounded-lg" src="${plant.image}" alt=""></div>
              <h3 class="font-semibold text-lg mb-1">${plant.name}</h3>
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
                <button class="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
    `;
    cardParent.appendChild(cards);
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
                <button id="cate_btn-${el.id}" class="block px-3 py-2 rounded-md hover:bg-green-600 hover:text-white w-full text-left">
                 ${el.category_name}
                </button>
            `;
        innerBtn.setAttribute('onclick', `displayCategory(${el.id})`);
        btnList.appendChild(innerBtn);
        });
    });
}
const displayCategory=(id)=>{
    const url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url).then(res=>res.json()).then(el=>{ 
        displayAllPlants(el.plants);
    });
}

category();
allPlants();