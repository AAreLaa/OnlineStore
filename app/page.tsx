'use client'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import wait from '../components/Image/wait.gif'
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  
  const fetchProduct=async()=> {
    const response = await axios.get('https://fakestoreapi.com/products/');
      const data = await response.data;
      return data;
  }
  
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
  })

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
          Wait for a moment
          <Image src={wait} width={200} height={200} alt="loading" />
        </div>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
console.log(data)
  return (
    <div className="container mx-auto antialiased bg-gray-200 text-gray-900 font-sans p-6">
    <div className='flex flex-wrap -mx-4'>
      {data.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
    </div>
    </div>

  )
}
