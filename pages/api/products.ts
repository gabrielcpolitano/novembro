import { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/shared/schema'

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate Premium',
    description: 'Delicioso bolo de chocolate com cobertura ganache e morangos frescos',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    category: 'chocolate',
    inStock: true
  },
  {
    id: '2',
    name: 'Bolo Red Velvet',
    description: 'Clássico bolo red velvet com cream cheese e frutas vermelhas',
    price: 52.90,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&h=300&fit=crop',
    category: 'chocolate',
    inStock: true
  },
  {
    id: '3',
    name: 'Bolo de Morango',
    description: 'Bolo fofinho recheado com morangos frescos e chantilly',
    price: 38.50,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    category: 'frutas',
    inStock: true
  },
  {
    id: '4',
    name: 'Bolo de Casamento 3 Andares',
    description: 'Elegante bolo de casamento com decoração personalizada',
    price: 180.00,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
    category: 'casamento',
    inStock: true
  },
  {
    id: '5',
    name: 'Bolo de Aniversário Personalizado',
    description: 'Bolo temático para aniversário com decoração personalizada',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'aniversario',
    inStock: true
  },
  {
    id: '6',
    name: 'Bolo Naked Cake',
    description: 'Tendência naked cake com frutas frescas e flores comestíveis',
    price: 55.80,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    category: 'gourmet',
    inStock: true
  },
  {
    id: '7',
    name: 'Bolo de Limão Siciliano',
    description: 'Refrescante bolo de limão siciliano com cobertura de merengue',
    price: 42.30,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    category: 'frutas',
    inStock: true
  },
  {
    id: '8',
    name: 'Bolo Floresta Negra',
    description: 'Tradicional bolo alemão com cerejas, chantilly e raspas de chocolate',
    price: 48.90,
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
    category: 'gourmet',
    inStock: true
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { category } = req.query
    
    let filteredProducts = sampleProducts
    
    if (category && category !== 'todos') {
      filteredProducts = sampleProducts.filter(product => product.category === category)
    }
    
    res.status(200).json(filteredProducts)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}