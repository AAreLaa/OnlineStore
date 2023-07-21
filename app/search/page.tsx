"use client"

import React from 'react'
import { useSearchParams } from "next/navigation";
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/api';
import wait from '@/components/Image/wait.gif';
import Image from 'next/image';
import { Product } from '@/types/types';
import ProductCard from '@/components/ProductCard';
import ProductNotFound from '@/components/ProductNotFound';

export default function Search() {

    const searchParams = useSearchParams();
    let search = searchParams.toString();
    search = search.slice(0, search.length - 1);

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

    return (
        <div className="container mx-auto antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <div className='flex flex-wrap items-stretch-mx-4'>
                {data
                    .filter((product: Product) => product.title.toLowerCase().includes(search.toLowerCase()))
                    .map((product: Product) => {
                        return <ProductCard product={product} key={product.id} />;
                    })}
            </div>
            {
        data
        .filter((product:Product) => product.title.toLowerCase().includes(search.toLowerCase())).length===0?<ProductNotFound/>:''
      }
        </div>
    )
}
