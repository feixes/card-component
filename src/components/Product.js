import styled, { css } from 'styled-components'

import React from 'react'

const Wrapper = styled.article`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    align-items: center;
    padding: .75rem;
    margin: 10px auto;
    background: white;
    /* border: solid 2px red; */

    &:first-of-type{
        margin-top: 40px;
    }

    p{
        ${({ price }) => {
        return price < 50 ? css`
                color: green;
            `
            : price > 400 ? css`
                color: red;
            `
                : css`
                color: black;
        ` }}
    }

    p::before{
        content:'$'
    }


`

const Product = (props) => {
    return (
        <Wrapper price={props.price}>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
        </Wrapper>
    )
}

export default Product