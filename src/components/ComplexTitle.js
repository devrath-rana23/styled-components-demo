import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({color}) => {
  return (
    <Wrapper className='title' color={color}><h1>Complex Title</h1>
    <div></div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
color: ${({color})=> color??'green'};
div{
  border: var(--primary-box);
  width: 10rem;
  height: 10rem;
}
`
export default ComplexTitle