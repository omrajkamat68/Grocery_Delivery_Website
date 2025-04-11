import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

// Add Product
export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData)

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await connectCloudinary.uploader.upload(item.path,
                    {resource_type: 'image'}
                )
                return result.secure_url
            })
        )

        await Product.create({...productData, image:imagesUrl})

        res.json({success: true, message: "Product Added"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Get Product
export const Productlist = async (req, res) => {
    
}

// Get single Product
export const productById = async (req, res) => {
    
}

// Change product inStock
export const changeStock = async (req, res) => {
    
}