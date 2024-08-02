import ProductList from '../../components/ProductList'

const womenClothes = [
  { id: 1, name: 'Women-shirt 1', price: 70, image: '/images/clothes/women-shirt1.jpg' },
  { id: 2, name: 'Women-shirt 2', price: 80, image: '/images/clothes/women-shirt2.jpg' },
  { id: 3, name: 'Women-shirt 3', price: 80, image: '/images/clothes/women-shirt3.jpg' },
  // Add more women's clothes
]

const Women: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl">Women's Clothes</h1>
      <ProductList products={womenClothes} />
    </div>
  )
}

export default Women
