import Artigo from "../Artigo";

const Conteudo = () => {
    // 1) Crie um array com o nome de 3 cursos

    const cursos = ["JS Avançado", "React", "Node.Js"];

    // 2) Dentro das chamadas dos artigos passe como uma nova prop chamada curso o nome de cada curso. O primeiro artigo deve mostrar o nome do primeiro curso, o segundo artigo o nome do segundo curso e o terceiro o nome do terceiro curso

    return(
        <main>
            <section>
                Conteúdo do site...
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
                 inventore, sapiente impedit numquam maxime quia voluptates, et at modi
                harum recusandae? Inventore illo consectetur, quisquam distinctio
             commodi voluptate fugit.
                </p>
            </section>
        </main>
    )
}