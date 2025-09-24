import fundoImg from "../assets/fundo.jpeg";
export default function Sobre() {
  return (
    <div
          className="container"
          style={{
            backgroundImage: `url(${fundoImg})`,
          }}
        >
    <div >
      <h1>Sobre Nós</h1>
      <p>
        Somos um grupo apaixonado por tecnologia e inovação, que acredita no poder
        da ciência para melhorar a vida das pessoas.
      </p>
      <p>
        O projeto <strong>Memória Ativa</strong> nasceu da vontade de criar uma
        ferramenta prática e eficaz para ajudar na saúde mental e no cuidado da
        memória, seja para jovens ou idosos.
      </p>
      <p>
        Nosso objetivo é tornar o dia a dia mais organizado, leve e saudável,
        usando tecnologia como aliada.
      </p>
    </div>
    </div>
  );
}
