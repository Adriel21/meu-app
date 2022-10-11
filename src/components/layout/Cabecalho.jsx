import styled from "styled-components";
import Menu from "../Menu";

const periodo = "diurno";

// Tagged Template - utilizar crases combinadas com funções - para uso com styled components: ``
const StyledCabecalho = styled.header`
background-color: ${periodo === 'diurno'? "lightblue" : "darkblue"};
text-align: center;
display: flex;
justify-content: space-around;
align-items: center;

h1{
  color: red;
}

p{
  font-weight: bold;
  color: blue;

  &:hover {
    color: red;
    cursor: pointer;
  }
}
`;

const Cabecalho = () => {
    return(
        <StyledCabecalho>
        <h1>Interface React</h1>
        <Menu/>
        <p>Teste</p>
      </StyledCabecalho>
    )
};

export default Cabecalho;