import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { getCategories } from '../services';

export default function Categories() {
 const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
    .then((newCat) => setCategories(newCat))
  }, [])

  return (
    <div className='bg-white shadow-xl rounded-lg p-8 mb-8'>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((cat) => (
        <Link key={cat?.slug} href={`/category/${cat?.slug}`}>
          <span className="cursor-pointer mb-3 pb-3 block">
            {cat?.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
