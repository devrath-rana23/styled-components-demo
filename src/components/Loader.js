import styled, {keyframes} from 'styled-components';

const spinner=keyframes`
to{
    transform:rotate(360deg)
}
`
const Loader=styled.div`
height:10rem;
width:10rem;
border-radius: 50%;
border:3px solid grey;
border-top-color:violet;
animation: ${spinner} 1s linear infinite;
`;

export default Loader