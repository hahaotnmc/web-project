import { PrismaClient } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import { useEffect } from "react";
import { Cart, CartWithProduct } from "~/API/carts";
import { getProducts, Product } from "~/API/products";


export  const loader: LoaderFunction = ()=>{
    
    return getProducts();
}






async function handleAddcart(productid: number) {
    
        // Lấy dữ liệu từ localStorage
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const products = JSON.parse((localStorage.getItem('products')) || '[]');

        // Tìm sản phẩm từ danh sách products
        const product = products.products.find((p: { id: any; }) => p.id === productid);
        if (!product) {
            throw new Error('Product not found');
        }
        console.log(product);
        

        // Thêm sản phẩm vào giỏ hàng
        const existingCartItem = cart.find((c:CartWithProduct) => c.productId === productid);

        let updatedCart: CartWithProduct[];
        if (existingCartItem) {
            // Nếu đã có, tăng số lượng
            updatedCart = cart.map((c:CartWithProduct) =>
                c.productId === productid ? { ...c, quantity: c.quantity + 1 } : c
            );
        } else {
            // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
            const newCartItem: CartWithProduct = {
                id: cart.length + 1, // Tạo ID mới, hoặc thay bằng cách sinh ID khác nếu cần
                productId: productid,
                quantity: 1,
                product: product,
            };
            updatedCart = [...cart, newCartItem];
        }


        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Cart updated:', updatedCart);
   
}

export default function ProductList(){
    const products = useLoaderData<Product[]>()
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify({ products }));
      }, []);
    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products?.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-lg shadow-md bg-white overflow-hidden flex flex-col h-full"
                >   
                    <Link to={'./products/'+ product.id}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                        <p className="text-indigo-500 font-bold mt-4">
                            {product.price.toLocaleString()} VND
                        </p>
                    </div>
                    </Link>
    
                    <button 
                    className=" m-2 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition mt-auto"
                    onClick={() => handleAddcart(product.id)}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            ))}
        </div>
    )
    
}