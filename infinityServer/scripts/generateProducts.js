import fs from "fs";
import path from "path";

const categories = [
    "mens",
    "womens",
    "kids",
    "footwear",
    "accessories",
    "streetwear"
];

const taglines = {
    mens: "Classic Style for Every Gentleman",
    womens: "Elegance for Every Woman",
    kids: "Comfort & Fun for Kids",
    footwear: "Walk with Confidence",
    accessories: "Complete Your Look",
    streetwear: "Urban Fashion Collection"
};

let products = [];
let id = 1;

categories.forEach((category) => {

    const folder = path.join("public", "images", category);

    if (!fs.existsSync(folder)) {
        console.log(`❌ Folder not found: ${folder}`);
        return;
    }

    const files = fs.readdirSync(folder);

    files.forEach(file => {

        // Skip hidden/non-image files
        if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;

        const fileName = path.parse(file).name;

        const title = fileName
            .replace(/([A-Z])/g, " $1")
            .replace(/[-_]/g, " ")
            .trim();

        products.push({
            id: `p${id++}`,

            section: category,

            url: `/images/${category}/${file}`,

            title,

            price: {
                mrp: 9999,
                cost: 8999
            },

            quantity: 5,

            description: `Premium ${title}`,

            discount: "10% Off",

            tagline: taglines[category]
        });
    });
});

fs.writeFileSync(
    "./constant/products.js",
    `export const products = ${JSON.stringify(products, null, 4)};`
);

console.log(`${products.length} products generated successfully.`);