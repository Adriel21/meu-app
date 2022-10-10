import Menu from "../Menu";

// objeto de estilos css
const estilos = {
  color: "white",
  backgroundColor: "black", 
};

const Cabecalho = () => {
    return(
      // CSS IN JS embutidos no meo do JavaScript

      // CSS Inline (Uma propriedade style e sintaxe de objetos)
        <header style={{backgroundColor: "lightblue"}}>
        <h1 style={estilos}>Interface React</h1>
        <Menu/>
      </header>
    )
};

export default Cabecalho;