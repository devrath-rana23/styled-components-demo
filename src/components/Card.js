import styled from 'styled-components'
import { colors, setBoxBorder } from '../utils'
export const Card = () => {
  return (
    <StyledCard>
        <h2>Title</h2>
        <figure>
            <img src="//bold.udemy.com/staticx/udemy/images/v7/logo-ub-inverted.svg" />
        </figure>
        <footer>
            <h4>Product Name</h4>
            <p>10$</p>
        </footer>
        <h4>Product Name</h4>
    </StyledCard>
  )
}

const StyledCard=styled.article`
border:${setBoxBorder({type:'dotted',width:20,color:"brown"})};
width:120rem;
max-width: 300px;
img{
height: 100px;
width:100%
}
footer{
    p{
        color:green
    }
    h4{
        color:${colors.primaryColor};
        &::before{
            content: 'Name: ';
            color:brown
        }
    }
}
h4{
    color:blue;
    &:hover{
        color:black
    }
}
transition: all 0.5s ease-in-out;
&:hover{
    box-shadow: 1px 2px 1rem 1rem red;
}
@media(max-width:600px){
max-width: 100px;
background: violet
}
`
