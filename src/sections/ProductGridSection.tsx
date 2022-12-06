import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductsModel'

interface ProductGridSectionType{
  title: string
  items: ProductItem[]
}


const ProductGridSection: React.FC<ProductGridSectionType> = ({ title, items = []}) => {

  return (
<section className="product-grid">
    <h2>{title}</h2>
    <div className="container mt-5">
    <div className="row row-cols-1 row-cols-md-4 g-4">
           {
            items.map(product => <ProductCard key={product.articleNumber} item={product}/> )  
           } 
                        
    </div>
</div>

</section>
  )
}

export default ProductGridSection