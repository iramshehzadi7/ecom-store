import ProductCard from './ProductCard'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
