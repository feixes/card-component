import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils'


export const AlternativeTitle = ({ title }) => {
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
        color: ${colors.primary}
    }

    .underline{
        width: 5rem;
        height: .25rem;
        background: ${colors.secondary};
        margin: 0 auto;
    }

    .title{
        text-align: center;
    }
`