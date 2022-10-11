import Menu from "./Menu";
import estilosCabecalho from "./Cabecalho.module.css";

// objeto de estilos css
const estilos = {
  // color: "white",
  // backgroundColor: "black", 
    color: "black"
};

const Cabecalho = () => {
    return(
      // CSS IN JS embutidos no meo do JavaScript

      // CSS Inline (Uma propriedade style e sintaxe de objetos)
        <header style={{backgroundColor: "lightblue"}} className={estilosCabecalho.cabecalho}>
        <h1 style={estilos}>Interface React</h1>
        <Menu/>
      </header>
    )
};

export default Cabecalho;