import Artigo from "../Artigo";
import estilos from './Conteudo.module.css';

const Conteudo = () => {
return (
    <main>
    <section>
      {/* comentário no jsx */}
      {/* Aplicando css com module.css */}
      <h2 className={estilos.subtitulo}>Conteúdo do site</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed ab hic modi corporis obcaecati totam sint omnis illo soluta.</p>
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