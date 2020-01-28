const pies = [
    {   
        name: "Dutch Apple Pie",
        price: 1000,
        isWarm: false,
        isOrganic: true,
        crust: "Extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "https://o.aolcdn.com/images/dims?thumbnail=1044%2C503&quality=85&image_uri=https%3A%2F%2Fs3.amazonaws.com%2Fimages.comet.aol.com%2Ffood%2Frecipe%2Fmedia%2FTaste-of-Home-Dutch-apple-pie.jpg&client=amp-blogside-v2&signature=1c4fba787e8da45dd9b18cc83e8423647657f666",
        drinkPairing: "Whiskey",
        instructor: "Zoe"
     },
     {   
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "Under baked",
        iceCream: "Vegan Chocolate",
        isAvailable: false,
        imageUrl: "https://www.cookingclassy.com/wp-content/uploads/2019/11/dutch-apple-pie-4-500x500.jpg",
        drinkPairing: "All Wines",
        instructor: "Mary"
     },
     {   
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "Yeah!",
        iceCream: "Nope",
        isAvailable: true,
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/04/ce/d4/26/ah-pizz.jpg",
        drinkPairing: "High Life",
        instructor: "Luke"
     },
     {   
        name: "Berry Pie",
        price: 1,
        isWarm: false,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "Nope",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/ff20043a-d6bf-4014-8e0e-4762427021cf.jpg",
        drinkPairing: "Water",
        instructor: "Zoe"
     },
     {   
        name: "Chocolate Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "Graham",
        iceCream: "Mint",
        isAvailable: true,
        imageUrl: "https://thepioneerwoman.com/wp-content/uploads/2014/10/chocolatepie1.jpg?fit=630%2C419",
        drinkPairing: "Gin",
        instructor: "Mary"
     },
     {   
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "Crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://wi-images.condecdn.net/image/DLmJlLb7r62/crop/3240/f/gettyimages-875606854.jpg",
        drinkPairing: "Milk",
        instructor: "Luke"
     },
     {   
        name: "Cherry Pie",
        price: 10,
        isWarm: true,
        isOrganic: false,
        crust: "None",
        iceCream: "Cookie Dough",
        isAvailable: false,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/a3d4c2c6-1e35-4ae7-9f3b-23479f9a5f15.jpg",
        drinkPairing: "Coke",
        instructor: "Jose"
     },
     {   
        name: "Peacan Pie",
        price: 200,
        isWarm: true,
        isOrganic: true,
        crust: "Burnt",
        iceCream: "Salted Caramel",
        isAvailable: true,
        imageUrl: "https://cdn.apartmenttherapy.info/image/upload/v1572034322/k/Photo/Recipes/2019-11-how-to-pecan-pie/2019-10-21_Kitchn88235_HT-Pecan-Pie.jpg",
        drinkPairing: "Sprite",
        instructor: "Jose"
     }
];

const printToDom = (divId, textToPrint) => {
    const selecetedDiv = document.getElementById(divId);
    selecetedDiv.innerHTML = textToPrint;
};

const pieBuilder = (monkeybuttArray) => {
    let domString = '';
    for (let i = 0; i < monkeybuttArray.length; i++){
        domString += '<div class="pies">';
        domString += `<header><p>${monkeybuttArray[i].name}</p></header>`;
        domString += `<img src="${monkeybuttArray[i].imageUrl}">`;
        domString += `<p class="price">Price: $${monkeybuttArray[i].price}</p>`;
        domString += `<p>Warm: ${monkeybuttArray[i].isWarm}</p>`;
        domString += `<p>Organic: ${monkeybuttArray[i].isOrganic}</p>`;
        domString += `<p>Crust: ${monkeybuttArray[i].crust}</p>`;
        domString += `<p>Ice Cream: ${monkeybuttArray[i].iceCream}</p>`;
        domString += `<p>Instructor: ${monkeybuttArray[i].instructor}</p>`;
        domString += `<p>Drinking Pair: ${monkeybuttArray[i].drinkPairing}</p>`;
        if (monkeybuttArray[i].isAvailable === true) {
            domString += `<p class="available">Available: ${monkeybuttArray[i].isAvailable}</p>`;
        } else {
            domString += `<p class="notAvailable">Available: ${monkeybuttArray[i].isAvailable}</p>`;    
        }
        domString += '</div>';
    }
    printToDom('pie-cards', domString);
};

const findMyPies = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'All'){
        pieBuilder(pies);
    } else {
        const myPies = [];
        for (let i = 0; i < pies.length; i++){
            if (pies[i].instructor === buttonId){
                myPies.push(pies[i]);
            }
        }
        pieBuilder(myPies);
    }  
};


pieBuilder(pies);
document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Jose').addEventListener('click', findMyPies);
document.getElementById('All').addEventListener('click', findMyPies);