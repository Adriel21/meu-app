import Artigo from "../Artigo";
import './Conteudo.css';

const Conteudo = () => {
return (
    <main>
    <section>
      {/* comentário no jsx */}
      <h2 className="subtitulo">Conteúdo do site</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed ab hic modi corporis obcaecati totam sint omnis illo soluta.</p>

     <Artigo/>

     <Artigo/>

     <Artigo/>

    </section>
  </main>
    )
}

export default Conteudo;