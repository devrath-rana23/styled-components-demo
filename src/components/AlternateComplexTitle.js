import React from 'react'
import styled from 'styled-components'
import {setBoxBorder} from '../utils'

//className prop provided by styled components
const AlternateComplexTitle = ({className}) => {
  return (
    <div className={className}><h1>Alternate Title</h1><div></div></div>
  )
}

const Wrapper=styled(AlternateComplexTitle)`
color: blue;
div{
  border: ${setBoxBorder({width:1,color:'red', type:'solid'})};
  width: 15rem;
  height: 15rem;
}
`
export default Wrapper