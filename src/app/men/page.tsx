import ProductList from '../../components/ProductList'

const menClothes = [
  { id: 1, name: 'Men Shirt 1', price: 50, image: '/images/clothes/men-shirt1.jpg' },
  { id: 2, name: 'Men Shirt 2', price: 60, image: '/images/clothes/men-shirt2.jpg' },
  { id: 3, name: 'Men Shirt 3', price: 60, image: '/images/clothes/men-shirt3.jpg' },
  // Add more men's clothes
]

const Men: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl">Men's Clothes</h1>
      <ProductList products={menClothes} />
    </div>
  )
}

export default Men
