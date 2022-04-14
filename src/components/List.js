import React from 'react'
import styled, { css } from 'styled-components'
import { ComplexTitle } from './ComplexTitle'

const fruits = ['orange', 'apple', 'banana', 'peach']

const Item = styled.li`
    list-style-type:none;
    ${(props) => {
        return props.odd ? css`
            color:white;
            background: red;
            font-size: 1.5rem;
            padding: 1.5rem;
        `
            : css`
            color: #222;
            padding: 1rem;
            `
    }}
`

const List = () => {
    return (
        <ul>
            {fruits.map((item, index) => <Item key={index} odd={(index + 1) % 2 !== 0}>{item}</Item>)}
        </ul>
    )
}

export default List