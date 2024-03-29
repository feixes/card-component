import React from 'react'
import styled from 'styled-components'

const imageLink = `https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1649713117&userId=usrQMwWEPx18KgLcP&cs=27000be48283e2c1`

const Card = () => {
    return (
        <StyledCard>
            <img src={imageLink} alt="" />
            <footer>
                <h4>product name</h4>
                <p>$15</p>
            </footer>
        </StyledCard>
    )
}

const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    background: var(--white);
    border-radius: 0.25rem;

    img{
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        
        h4{
            text-transform: capitalize;
            color: #222;
            &::before{
                content:'Name: ';
                color:red;
            }
        
        }


        p{
            color: var(--primary);
            font-weight: 700;
        }

        &:hover{
          background: #fff;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;  
        }
    }

    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 3px 3px #222;
        cursor:pointer
    }
 
    @media (min-width: 768px){
        max-width: 600px;
    }


`

export default Card