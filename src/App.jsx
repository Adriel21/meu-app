import Cabecalho from "./components/layout/Cabecalho";
import Conteudo from "./components/layout/Conteudo";
import Rodape from "./components/layout/Rodape";
import 'bootstrap/dist/css/bootstrap.min.css';


// As funções que vão funcionar como componentes e, arquivos também, devem começar com letra maíuscula

// As funções só retornam uma coisa, no caso de funções de componentes, um componente
const App = () => {
  return(
    // fragment - serve para envolver todo o conteúdo - <>
    <> 
   <Cabecalho/>

   <Conteudo/>

   <Rodape/> 
    
    </>
  )
}

export default App;
