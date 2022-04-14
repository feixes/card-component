import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils'


export const ComplexTitle = ({ title }) => {
    return (
        <Wrapper >
            <h1>{title}</h1>
            <div className='underline'></div>
            <h2 className='bg-grey title'>Random</h2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h1{
        text-transform: capitalize;
        text-align: center;
    }

    .underline{
        width: 5rem;
        height: .25rem;
        background: var(--primary);
        margin: 0 auto;
    }

    .title{
        text-align: center;
    }
`