import styled, { css } from 'styled-components'

import Product from './Product'
import { ComplexTitle } from './ComplexTitle'

import React from 'react'

const products = [
    { id: 1, name: 'Chair', price: 30 },
    { id: 2, name: 'Bed', price: 150 },
    { id: 3, name: 'Couch', price: 550 },
]



const Products = () => {
    return (
        <div>
            <ComplexTitle title='all products' />
            {products.map(product => {
                return <Product key={product.id} {...product} />
            })}
        </div>
    )
}

export default Products