import estilos from './Rodape.module.css';

const Rodape = () => {
    return(
        <footer id={estilos.footer}>
          <h2 className={estilos.subtitulo}>Rodapé</h2>
        </footer>
    )
}

export default Rodape;