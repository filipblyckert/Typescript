import { createContext, useEffect, useState } from 'react'
import { ProductItem, ProductItemType } from '../models/ProductsModel'



export interface ProductContextType{
ProductContext:string
all:number
children: any

}

export interface ProductContext{
    
    product:ProductItem
    all: ProductItem
}

export const ProductContext= createContext<ProductContextType  |  null>(null)

 
const[ products, setProducts] = useState<ProductItemType>({
    
    all: [],
    featuredProducts: []
  
   })
   
   const fetchProducts = async () => {
    let response = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    const json = await response.json();
  
    return {response, json};
  };
  
    useEffect(() => {
      fetchProducts().then(
        data => setProducts( {...data.response, all: data.json} )
      )
    }, [])
  



