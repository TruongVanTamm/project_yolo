const product_01_image_01 = require('../images/products/product-01 (1).jpg')
const product_01_image_02 = require('../images/products/product-01 (2).jpg')
// const product_01_image_03 = require('../images/products/product-01 (3).jpg')

const product_02_image_01 = require('../images/products/product-02 (1).jpg')
const product_02_image_02 = require('../images/products/product-02 (2).jpg')

const product_03_image_01 = require('../images/products/product-03 (1).jpg')
const product_03_image_02 = require('../images/products/product-03 (2).jpg')

const product_04_image_01 = require('../images/products/product-04 (1).jpg')
const product_04_image_02 = require('../images/products/product-04 (2).jpg')

const product_05_image_01 = require('../images/products/product-05 (1).jpg')
const product_05_image_02 = require('../images/products/product-05 (2).jpg')

const product_06_image_01 = require('../images/products/product-06 (1).jpg')
const product_06_image_02 = require('../images/products/product-06 (2).jpg')

const product_07_image_01 = require('../images/products/product-07 (1).jpg')
const product_07_image_02 = require('../images/products/product-07 (2).jpg')

const product_08_image_01 = require('../images/products/product-08 (1).jpg')
const product_08_image_02 = require('../images/products/product-08 (2).jpg')

const product_09_image_01 = require('../images/products/product-09 (1).jpg')
const product_09_image_02 = require('../images/products/product-09 (2).jpg')

const product_10_image_01 = require('../images/products/product-10 (1).jpg')
const product_10_image_02 = require('../images/products/product-10 (2).jpg')

const product_11_image_01 = require('../images/products/product-11 (1).jpg')
const product_11_image_02 = require('../images/products/product-11 (2).jpg')

const product_12_image_01 = require('../images/products/product-12 (1).jpg')
const product_12_image_02 = require('../images/products/product-12 (2).jpg')

const products = [
    {
        name: "Áo thun Dinosaur 01",
        price: '189.000 VND',
        old_price: '149.000 VND',
        discount: '22%',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        name: "Áo thun Dinosaur 02",
        price: '159.000 VND',
        old_price: '119.000 VND',
        discount: '28%',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"]
    },
    {
        name: "Áo thun Dinosaur 03",
        price: '190.000 VND',
        old_price: '149.000 VND',
        discount: '10%',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"]
    },
    {
        name: "Áo thun Polo 04",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '20%',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"]
    },
    {
        name: "Áo thun Polo 05",
        price: '164.000 VND',
        old_price: '110.000 VND',
        discount: '28%',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"]
    },
    {
        name: "Áo thun Polo 06",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '22%',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"]
    },
    {
        name: "Áo somi caro 07",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '40%',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"]
    },
    {
        name: "Áo somi dài tay 08",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '22%',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"]
    },
    {
        name: "Áo somi tay dài 09",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '44%',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"]
    },
    {
        name: "Quần jean phong cách 10",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '50%',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"]
    },
    {
        name: "Quần jean 11",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '33%',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        size: ["s", "m", "xl"]
    },
    {
        name: "Quần jean 12",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '40%',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"]
    },
    {
        name: "Áo thun Dinosaur 13",
        price: '189.000 VND',
        old_price: '130.000 VND',
        discount: '40%',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red"],
        slug: "ao-thun-dinosaur-13",
        size: ["s", "m", "xl"]
    },
    {
        name: "Áo thun Dinosaur 14",
        price: '156.000 VND',
        old_price: '100.000 VND',
        discount: '40%',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "blue"],
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"]
    },
    {
        name: "Áo thun Dinosaur 15",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '60%',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["red", "blue"],
        slug: "ao-thun-dinosaur-15",
        size: ["xl"]
    },
    {
        name: "Áo somi dài tay 16",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '10%',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        size: ["m", "xl"]
    },
    {
        name: "Áo somi tay dài 17",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '40%',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        size: ["s", "l", "xl"]
    },
    {
        name: "Quần jean phong cách 18",
        price: '194.000 VND',
        old_price: '150.000 VND',
        discount: '30%',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-18",
        size: ["s", "m", "l", "xl"]
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts,
}

export default productData