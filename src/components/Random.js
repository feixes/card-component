import React from 'react'
import styled from 'styled-components'

export const Random = () => {
    return (
        <Wrapper>
            <div className='underline'></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    .underline{
        width: 15rem;
        height: .65rem;
        background: red;
        margin: 5rem auto;
    }
`