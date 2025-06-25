'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductCard } from './product-card'
import { ProductFilters } from './product-filters'
import { Product } from '@/shared/schema'

async function fetchProducts(category?: string): Promise<Product[]> {
  const url = category ? `/api/products?category=${category}` : '/api/products'
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')
  
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProducts(selectedCategory === 'todos' ? undefined : selectedCategory),
  })

  if (error) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">Erro ao carregar produtos. Tente novamente.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white" id="produtos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Bolos Especiais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada bolo é feito com carinho e ingredientes selecionados
          </p>
        </div>

        <ProductFilters 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}