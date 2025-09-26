import homeImg from "../assets/home.jpeg";
import guiaImg from "../assets/guia.jpeg";
import fundoImg from "../assets/fundo.jpeg";

export default function Funcionalidades() {
  return (
    <section
      className="page-hero"
    >
      <div className="container">
        <h1>Funcionalidades que fazem a diferença</h1>
        <p>
          O <strong>Memória Ativa</strong> possui recursos práticos que ajudam a
          estimular a memória, manter a atenção e organizar sua rotina de forma
          leve e eficiente.
        </p>

        <div className="features-container">
          <div className="features-list">
            <div className="feature">
              <span className="icon">🎮</span>
              <h3>Jogos e Exercícios</h3>
              <p>Atividades lúdicas e rápidas que treinam memória e foco.</p>
            </div>
            <div className="feature">
              <span className="icon">📖</span>
              <h3>Guia de Conteúdo</h3>
              <p>Dicas simples sobre saúde da memória e envelhecimento.</p>
            </div>
            <div className="feature">
              <span className="icon">🔔</span>
              <h3>Lembretes Inteligentes</h3>
              <p>
                Notificações para compromissos, medicamentos ou tarefas importantes.
              </p>
            </div>
          </div>

          <div className="features-images">
            <img src={homeImg} className="home-img" alt="Tela Home" />
            <img src={guiaImg} className="guia-img" alt="Tela Guia" />
          </div>
        </div>
      </div>
    </section>
  );
}
