import memoImg from "../assets/memo.jpeg";
import logoImg from "../assets/logo.jpeg";
import fundoImg from "../assets/fundo.jpeg";
import homeImg from "../assets/home.jpeg";
import guiaImg from "../assets/guia.jpeg";

export default function Home() {
  return (
    <div
      className="container"
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
        Nosso projeto é o MemóriaAtiva, um aplicativo criado para estimular e treinar a memória de cada usuário de forma personalizada. Ele avalia o nível de memória e atenção de cada pessoa e oferece uma assistência extra por meio de um bracelete, que ajuda nas tarefas do dia a dia e no treinamento sensorial para melhorar a memória.
      </p>
      <p>
        O MemóriaAtiva também fornece informações sobre diferentes tipos de perda de memória e como eles podem afetar a rotina diária. Além disso, o aplicativo oferece atividades para estimular a mente e apresenta estatísticas detalhadas, permitindo que o usuário acompanhe seu progresso ao longo do tempo.
      </p>

      <div className="img-row">
        <img src={logoImg} className="logo-img" alt="Imagem Logo" />
        <img src={memoImg} className="memo-img" alt="Imagem Memo" />
      </div>

      <main>
        <section>
          <h2>Por que criamos o Memória Ativa</h2>
          <p>
            Com o tempo, é comum perceber mudanças na forma como lidamos com tarefas do dia a dia. 
            Esquecer compromissos, perder o foco, deixar algo pela metade ou esquecer objetos simples 
            pode ser sinal de que a memória e a atenção precisam de mais cuidado.
          </p>
          <p>
            Essas dificuldades não acontecem só com pessoas idosas. Hoje em dia, até jovens têm passado por isso 
            por causa do estresse, da correria e do excesso de informações. Isso pode atrapalhar no trabalho, 
            nos estudos, nas relações e até na autoestima.
          </p>
          <p>
            Pensando nisso, criamos o <strong>Memória Ativa</strong>: um aplicativo feito para ajudar pessoas com 
            dificuldades de memória e concentração. Simples de usar e com resultados reais no dia a dia.
          </p>
        </section>

        <section>
          <h2>Como o Memória Ativa pode ajudar você</h2>
          <div className="features-container">
            
            <div className="features-list">

              <div className="feature">
                <div className="feature-header">
                  <span className="icon">🧠</span>
                  <h3>Exercícios personalizados</h3>
                </div>
                <p>Uma avaliação inicial cria um plano de atividades do seu jeito, no seu ritmo.</p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <span className="icon">🎮</span>
                  <h3>Atividades que treinam a mente</h3>
                </div>
                <p>Jogos e exercícios leves que estimulam atenção, memória e raciocínio.</p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <span className="icon">🔔</span>
                  <h3>Lembretes e ajuda na rotina</h3>
                </div>
                <p>Avisos para compromissos, tarefas, horários de remédio e muito mais.</p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <span className="icon">⌚</span>
                  <h3>Bracelete inteligente</h3>
                </div>
                <p>Vibra e envia alertas no momento certo, mesmo longe do celular.</p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <span className="icon">📊</span>
                  <h3>Acompanhamento do progresso</h3>
                </div>
                <p>Veja como sua memória e atenção evoluem com o tempo.</p>
              </div>
            </div>

            <div className="features-images">
              <img src={homeImg} className="home-img" alt="Imagem Home" />
              <img src={guiaImg} className="guia-img" alt="Imagem Guia" />
            </div>

          </div>
        </section>

        <section>
          <h2>Quem pode usar o Memória Ativa?</h2>
          <ul>
            <li>Quem está esquecendo coisas com frequência;</li>
            <li>Quem tem dificuldade de manter a atenção;</li>
            <li>Quem está desorganizado por distrações;</li>
            <li>Quem sente a mente mais cansada;</li>
            <li>Quem quer cuidar da saúde mental e da memória.</li>
          </ul>
          <p>
            Se você se identificou com alguma dessas situações — ou conhece alguém que está passando por isso — 
            o <strong>Memória Ativa</strong> pode ser um ótimo aliado.
          </p>
        </section>

        <section>
          <h2>Por que usar o Memória Ativa?</h2>
          <p>
            Porque ele funciona de verdade para quem precisa de apoio com memória e atenção.
          </p>
          <p>
            Simples, fácil de usar e feito para o dia a dia de pessoas reais. 
            Você não precisa entender de tecnologia — basta ter vontade de melhorar e dar o primeiro passo.
          </p>
        </section>

        <section>
          <h2>Comece agora com o Memória Ativa</h2>
          <ol>
            <li>✅ Baixe o aplicativo</li>
            <li>✅ Faça sua avaliação</li>
            <li>✅ Comece seu plano personalizado</li>
            <li>✅ Use o bracelete (se quiser)</li>
            <li>✅ Veja sua evolução dia após dia</li>
          </ol>
          <p>
            Acesse agora o aplicativo <strong>Memória Ativa</strong> e descubra como cuidar da mente de forma simples, prática e eficaz.
          </p>
        </section>
      </main>
    </div>
  );
}
