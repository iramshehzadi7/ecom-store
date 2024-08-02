interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <div className="border p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-xl mt-2">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
      </div>
    )
  }
  
  export default ProductCard
  