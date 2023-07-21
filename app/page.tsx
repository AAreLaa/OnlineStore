'use client'

import { useQuery } from '@tanstack/react-query';
import wait from '../components/Image/wait.gif'
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/api/api';
import { Product } from '@/types/types';

export default function Home() {
  
  const { isLoading, isError, data } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  })

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
          <Image src={wait} width={200} height={200} alt="loading" />
        </div>
  }

  if (isError) {
    return <span>Error</span>
  }
console.log(data)
  return (
    <div className="container mx-auto antialiased bg-gray-200 text-gray-900 font-sans p-6">
    <div className='flex flex-wrap items-stretch-mx-4'>
      {data.map((product: Product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
    </div>
    </div>

  )
}
