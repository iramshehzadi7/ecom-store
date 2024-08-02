import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/men">Men</Link></li>
        <li><Link href="/women">Women</Link></li>
        <li><Link href="/kids">Kids</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
