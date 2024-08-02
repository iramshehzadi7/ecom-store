import ProductList from '../../components/ProductList'

const kidsClothes = [
  { id: 1, name: 'kids Shirt 1', price: 50, image: '/images/clothes/kids-shirt1.jpg' },
  { id: 2, name: 'kids Shirt 2', price: 60, image: '/images/clothes/kids-shirt2.jpg' },
  { id: 3, name: 'kids Shirt 3', price: 60, image: '/images/clothes/kids-shirt3.jpg' },
  // Add more men's clothes
]

const kids: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl">kids Clothes</h1>
      <ProductList products={kidsClothes} />
    </div>
  )
}

export default kids

