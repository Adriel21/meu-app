import Artigo from "../../Artigo";
import estilos from './Conteudo.module.css';

const Conteudo = () => {
return (
    <main>
    <section>
      {/* comentário no jsx */}
      {/* Aplicando css com module.css para que haja separação dos escopos e o estilo não seja aplicado de forma global*/}
      <h2 className={estilos.subtitulo}>Conteúdo do site</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed ab hic modi corporis obcaecati totam sint omnis illo soluta.</p>

      {/* Inserindo mais de uma class com o css modules - o segundo estilo, realizamos o acesso da class css através de colchete e aspas porque existe um hífen, que não harmoniza com a sintaxe de objto */}
      <span className={`${estilos.destaque}  ${estilos["sombra-texto"]}`}>
        texto
      </span>

     <Artigo/>

     <Artigo/>

     <Artigo/>

    </section>
  </main>
    )
}

export default Conteudo;