"use client"

import React, { useState } from 'react'
import { Params } from '@/types/types'
import { getSingleProduct } from '@/api/api';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import wait from '@/components/Image/wait.gif';
import Rating from '@/components/Rating';

export default function ProductDetails({ params }: { params: Params }) {

    const [alert, setAlert] = useState<boolean>(false);

    const manageAlert = () => {
        setAlert(true);
        setTimeout(() => { setAlert(false); }, 2000);
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: ['details'],
        queryFn: () => getSingleProduct(params.id),
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
        <div>
            {alert ? <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p className="font-bold text-center">Added to the Cart</p>
            </div> : ''}
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-gray-200 md:h-screen sm:h-full">
                <div className="xl:w-2/6 lg:w-2/5 w-80 ">
                    <Image className="w-full" alt="Product image" src={data.image} width={700} height={100} />
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                        >
                            {data.title}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Category</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-black">{data.category[0].toUpperCase() + data.category.slice(1)}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between ">
                        <p className="text-base leading-4 text-gray-800">Price</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-black mr-3  border-red-600 border-b-2" >$ {data.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-base leading-4 mt-4 pb-1 text-red-600 border-red-600 border-b-2">Product Details</p>
                        <p className="text-base leading-4 mt-2 text-gray-600">{data.description}</p>
                        <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Rating: 
                            <div className="px-2 text-xs">
                                <div className="p-2 text-xs text-gray-600"><Rating product={data} /><span className="ml-2">{data.rating.rate}/5.0{" (" + data.rating.count + " reviews)"}</span></div>
                            </div>
                        </p>
                        <div className="bg-grey-lighter py-3 justify-between transition hover:bg-grey-light">
                            <button onClick={manageAlert}
                                className="px-6 py-2 bg-gray-900 text-white transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-red-300 border-2 border-gray-200 focus:outline-none">Add
                                to cart</button>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
