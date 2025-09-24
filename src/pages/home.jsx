import memoImg from "../assets/memo.jpeg";
import logoImg from "../assets/logo.jpeg";
import fundoImg from "../assets/fundo.jpeg";

export default function Home() {
  return (
    <div
      className="container home"
      style={{
        backgroundImage: `url(${fundoImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header>
        <h1>Memória Ativa - Aplicativo Estimulador de Memória</h1>
      </header>

      <p>
        O <strong>Memória Ativa</strong> é um aplicativo criado para estimular e
        treinar a memória de cada usuário de forma personalizada. Mais do que um
        app, ele é um companheiro no dia a dia, ajudando você a manter foco,
        organização e bem-estar.
      </p>

      <p>
        Com treinos cognitivos, acompanhamento da evolução e até o apoio de um
        bracelete inteligente, você terá ferramentas simples e eficazes para
        manter sua memória ativa em qualquer fase da vida.
      </p>

      <div className="img-row">
        <img src={logoImg} className="logo-img" alt="Logo Memória Ativa" />
        <img src={memoImg} className="memo-img" alt="Mascote Memo" />
      </div>
    </div>
  );
}
