import Image from 'next/image'
import React from 'react'
import { Product } from '@/types/types'
import Link from 'next/link'
import Rating from './Rating'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <Link href={"/" + product.id} className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full">
        <div className="relative pb-72 overflow-hidden">
          <Image className="absolute inset-0 h-full w-full object-contain" src={product.image} fill sizes='900'  alt=""/>
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Brand New</span>
          <h2 className="mt-2 mb-2 font-bold">{product.title}</h2>
          <p className="text-sm">{`${product.description}`.slice(0, 100)}{`${product.description}`.length > 100 ? "..." : ""}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">$</span>&nbsp;<span className="font-bold text-xl">{product.price}</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-900 ">
          <span className="flex items-center mb-1 font-semibold">
            <i className="far fa-clock fa-fw mr-1 text-black"></i> Category
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-4"></i>{product.category[0].toUpperCase() + product.category.slice(1)}
          </span>        
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600"><Rating product={product}/><span className="ml-2">{product.rating.rate}/5.0{" ("+product.rating.count+" reviews)"}</span></div>
      </Link>
      </div>
  )
}
