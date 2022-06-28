let catalog = [
    {   
        id:1,
        price: 1000,
        stock: 22,
        title:"Apple",
        image: "apples.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:2,
        price: 1000,
        stock: 2,
        title:"orange",
        image: "Oranges.webp",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:3,
        price: 3000,
        stock: 50,
        title:"Watermelon",
        image: "watermelon.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:4,
        price: 2000,
        stock: 2,
        title:"Pears",
        image: "#",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:5,
        price: 4000,
        stock: 15,
        title:"Cantelope",
        image: "cantalope.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:6,
        price: 800,
        stock: 33,
        title:"Avacado",
        image: "avacado.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:7,
        price: 600,
        stock: 343,
        title:"Plum",
        image: "plums.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:8,
        price: 750,
        stock: 422,
        title:"Peach",
        image: "peaches.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:9,
        price: 6000,
        stock: 15,
        title:"Dragon Fruit",
        image: "dragonfruit.jpg",
        discount: 10,
        category: "Fruit"
    },
];

class DataService{
    getCatalog(){
        return catalog;
    }
};

export default DataService;