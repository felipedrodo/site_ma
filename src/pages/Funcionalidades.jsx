import homeImg from "../assets/home.jpeg";
import guiaImg from "../assets/guia.jpeg";
import fundoImg from "../assets/fundo.jpeg";

export default function Funcionalidades() {
  return (
    <div
      className="container funcionalidades"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="content">
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
              <p>
                Atividades lúdicas e rápidas que treinam sua memória, foco e
                concentração, adaptadas ao seu ritmo.
              </p>
            </div>

            <div className="feature">
              <span className="icon">📖</span>
              <h3>Guia de Conteúdo</h3>
              <p>
                Informações e dicas simples sobre saúde da memória,
                envelhecimento e como manter a mente ativa no dia a dia.
              </p>
            </div>

            <div className="feature">
              <span className="icon">🔔</span>
              <h3>Lembretes Inteligentes</h3>
              <p>
                Notificações fáceis de configurar para não esquecer compromissos,
                medicamentos ou tarefas importantes.
              </p>
            </div>
          </div>

          <div className="features-images">
            <img src={homeImg} className="home-img" alt="Tela do App Home" />
            <img src={guiaImg} className="guia-img" alt="Tela do Guia" />
          </div>
        </div>
      </div>
    </div>
  );
}
