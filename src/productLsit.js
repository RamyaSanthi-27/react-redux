
const product_list =  [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://m.media-amazon.com/images/I/61IiuWQcVjL._AC_UY218_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61IiuWQcVjL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://m.media-amazon.com/images/I/61IiuWQcVjL._AC_UY218_.jpg"
        ]
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        quantity:1,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpghhhh",
        images: [
            "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpghhhh"
        ]
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        quantity:1,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY218_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY218_.jpg"
        ]
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
            "https://m.media-amazon.com/images/I/814PMi9fq2L._SX679_.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
            "https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    },
    {
        id: 6,
        title: "iPhone 8",
        description: "An apple mobile which is nothing like apple",
        price: 450,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.6,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/813sVzTfvaL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 7,
        title: "iPhone X Pro",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 1099,
        quantity:1,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 35,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/71qGismu6NL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        id: 8,
        title: "Samsung 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 849,
        quantity:1,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
            "https://m.media-amazon.com/images/I/51oW-QOqhaL._AC_UY218_.jpg"
        ]
    },
    {
        id: 9,
        title: "OPPOF19 Pro",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        id: 10,
        title: "Huawei S6",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 399,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    },
    {
        id: 11,
        title: "iPhone 9 Pro",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
         
            "https://m.media-amazon.com/images/I/61+1fT7Tt2L._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
       
        ]
    },
    {
        id: 12,
        title: "iPhone 7",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        quantity:1,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
           
            "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        id: 13,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        quantity:1,
        discountPercentage: 15.46,
        rating: 3,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY218_.jpg"
        ]
    },
    {
        id: 14,
        title: "OPPO 8",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
           
           
            "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        id: 15,
        title: "Huawei I20",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    },
    {
        id: 16,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        quantity:1,
        discountPercentage: 12.96,
        rating: 3,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
           
            "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 17,
        title: "iPhone XR",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        quantity:1,
        discountPercentage: 17.94,
        rating: 3,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
           
            "https://m.media-amazon.com/images/I/71oIjjNm+nL._AC_UY218_.jpg"
        ]
    },
    {
        id: 18,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        quantity:1,
        discountPercentage: 15.46,
        rating: 3,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71x+m2-yb7L._AC_UY218_.jpg"
        ]
    },
    {
        id: 19,
        title: "OPPOF20",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
           
            "https://m.media-amazon.com/images/I/41RCJtU8qvL._AC_UY218_.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        id: 20,
        title: "Huawei 200",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
            
            "https://m.media-amazon.com/images/I/818r371d5hL._AC_UY218_.jpg"
        ]
    },
];



export { product_list};
