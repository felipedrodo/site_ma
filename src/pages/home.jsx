import memoImg from "../assets/memo.jpeg";
import logoImg from "../assets/logo.jpeg";
import fundoImg from "../assets/fundo.jpeg";

export default function Home() {
  return (
    <section
      className="page-hero"
    >
      <div className="container hero__inner">
        <div>
          <h1>Memória Ativa - Aplicativo Estimulador de Memória</h1>
          <p>
            O <strong>Memória Ativa</strong> é um aplicativo criado para estimular e
            treinar a memória de forma personalizada. Mais do que um app, ele é
            um companheiro no dia a dia, ajudando a manter foco, organização e
            bem-estar.
          </p>
          <p>
            Com treinos cognitivos, acompanhamento da evolução e até o apoio de
            um bracelete inteligente, você terá ferramentas simples e eficazes
            para manter sua memória ativa em qualquer fase da vida.
          </p>
        </div>

        <aside className="img-row">
          <img src={logoImg} className="logo-img" alt="Logo" />
          <img src={memoImg} className="memo-img" alt="Mascote Memo" />
        </aside>
      </div>
    </section>
  );
}
