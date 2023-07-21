import React from 'react'
import notFound from '@/components/Image/notFound.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you &apos;ve found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please search other products or visit our homepage to get what you need.</p>
                            <Link href='/'><button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to home!</button></Link>
                </div>
            </div>
            <div>
                <Image src={notFound} alt='not found' height={600} width={600} />
            </div>
        </div>

  )
}
