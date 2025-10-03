import memoImg from "../assets/memo.jpeg";
import logoImg from "../assets/logo.jpeg";

export default function Home() {
  return (
    <section
      className="page-hero"
    >
      <div className="container hero__inner">
        <h1>Memória Ativa - Aplicativo Estimulador de Memória</h1>
        
        <div className="description-container">
          <p>
            O Memória Ativa é um aplicativo criado para estimular e treinar a memória de forma prática e personalizada. Mais do que um app, ele funciona como um companheiro no dia a dia, ajudando a manter foco, organização e bem-estar.
        </p>
        <p>
Com treinos cognitivos baseados em ciência, acompanhamento da evolução e até o apoio de um bracelete inteligente, o usuário conta com ferramentas simples e eficazes para manter a memória ativa em qualquer fase da vida.
</p>
  <p>
Nosso objetivo é oferecer uma solução acessível que contribua para melhorar a concentração, a produtividade e prevenir perdas cognitivas. A justificativa está na crescente necessidade de recursos tecnológicos que apoiem a saúde mental e tornem o cuidado com a memória algo natural e prazeroso.
          </p>
        </div>

        <aside className="img-row">
          <img src={logoImg} className="logo-img" alt="Logo" />
          <img src={memoImg} className="memo-img" alt="Mascote Memo" />
        </aside>
        
        <div className="description-container2">
            <p>
            O Memória Ativa foi desenvolvido para unir ciência e tecnologia em uma experiência prática e acessível. Com uma interface simples e intuitiva, o app traz recursos como jogos cognitivos, diário de memórias, lembretes inteligentes e calendário de tarefas, ajudando a estimular o cérebro, registrar experiências e organizar o dia a dia.
</p>
<p>
Um dos diferenciais é a integração com o bracelete inteligente, que emite luz e vibração para reforçar lembretes importantes. Além disso, o app conta com um guia de conteúdo sobre memória e saúde mental, tornando o cuidado cognitivo algo leve, prazeroso e constante, promovendo bem-estar e autonomia em qualquer fase da vida.
          </p>
        </div>
      </div>
    </section>
  );
}
