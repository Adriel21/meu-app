import estilosCabecalho from "./Cabecalho.module.css";
const Menu = () => {
    return(
        <nav className={estilosCabecalho.nav}>
          <ul>
            <a href="">Home</a>
            <a href="">Produtos</a>
            <a href="">Serviços</a>
          </ul>
        </nav>
    )
};

export default Menu;