import { createContext } from 'react'



export interface ProductContextType{
ProductContext:string
all:number
}


export const ProductContext= createContext<ProductContextType  |  null>(null)

