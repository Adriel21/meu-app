import Menu from "../Menu";

const Cabecalho = () => {
    return(
      // CSS IN JS

      // CSS Inline (Uma propriedade style e sintaxe de objetos)
        <header style={{backgroundColor: "lightblue"}}>
        <h1>Interface React</h1>
        <Menu/>
      </header>
    )
};

export default Cabecalho;