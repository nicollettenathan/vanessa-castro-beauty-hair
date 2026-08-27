const portfolio = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85'
]

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Vanessa Castro Beauty Hair">
          <span>VANESSA CASTRO</span>
          <small>BEAUTY HAIR</small>
        </a>
        <a className="navCta" href="#agendar">AGENDAR</a>
      </header>

      <section className="hero" id="top">
        <div className="heroMedia" />
        <div className="heroShade" />
        <div className="heroContent shell">
          <p className="eyebrow">SÃO CARLOS · SP</p>
          <h1>Cabelos que<br />traduzem quem<br />você é.</h1>
          <p className="heroCopy">Loiros, mechas e alisamentos com resultado sofisticado, movimento e identidade.</p>
          <a className="button light" href="#agendar">AGENDAR EXPERIÊNCIA</a>
        </div>
      </section>

      <section className="intro shell section">
        <p className="eyebrow dark">BELEZA COM PROPÓSITO</p>
        <div className="splitTitle">
          <h2>Seu cabelo não precisa seguir tendências.<br /><em>Precisa combinar com você.</em></h2>
          <p>Cada transformação começa com escuta, técnica e uma leitura cuidadosa do que valoriza sua beleza. O objetivo é um resultado elegante, atual e possível de manter na rotina.</p>
        </div>
      </section>

      <section className="services section shell" id="especialidades">
        <div className="sectionHead">
          <p className="eyebrow dark">ESPECIALIDADES</p>
          <h2>Experiências pensadas<br />para cada fase.</h2>
        </div>
        <div className="serviceGrid">
          <article><span>01</span><h3>Loiros & Mechas</h3><p>Iluminação personalizada, contraste e profundidade para um loiro elegante e harmônico.</p></article>
          <article><span>02</span><h3>Alisamentos</h3><p>Fios alinhados, polidos e com movimento, respeitando a estrutura e a saúde do cabelo.</p></article>
          <article><span>03</span><h3>Transformações</h3><p>Mudanças de cor e imagem construídas com intenção, técnica e atenção aos detalhes.</p></article>
        </div>
      </section>

      <section className="portfolio section" id="resultados">
        <div className="shell sectionHead row">
          <div><p className="eyebrow dark">RESULTADOS</p><h2>Transformações que<br />falam por si.</h2></div>
          <p className="sideCopy">Uma seleção visual inspirada no universo de beleza e transformação que define o trabalho da Vanessa.</p>
        </div>
        <div className="masonry shell">
          {portfolio.map((src, i) => <img key={src} src={src} alt={`Referência visual de transformação ${i + 1}`} loading="lazy" />)}
        </div>
      </section>

      <section className="quote section">
        <div className="shell quoteInner">
          <p className="eyebrow">VANESSA CASTRO</p>
          <blockquote>“Técnica para transformar.<br />Sensibilidade para preservar sua essência.”</blockquote>
          <p className="quoteText">Um atendimento focado em resultado, confiança e uma experiência de beleza verdadeiramente personalizada.</p>
        </div>
      </section>

      <section className="experience section shell">
        <div className="experienceCard">
          <div className="experienceMedia" />
          <div className="experienceText">
            <p className="eyebrow dark">A EXPERIÊNCIA</p>
            <h2>Mais do que mudar o cabelo.<br /><em>Sentir-se renovada.</em></h2>
            <p>Da escolha da técnica ao acabamento final, cada etapa é pensada para criar um resultado que valorize sua imagem e faça sentido para você.</p>
            <a className="textLink" href="#agendar">QUERO VIVER ESSA EXPERIÊNCIA →</a>
          </div>
        </div>
      </section>

      <section className="contact section" id="agendar">
        <div className="shell contactInner">
          <p className="eyebrow">ATENDIMENTO EM SÃO CARLOS · SP</p>
          <h2>Pronta para a sua<br /><em>próxima versão?</em></h2>
          <p>Fale com a Vanessa e conte qual transformação você deseja.</p>
          <a className="button light" href="https://www.instagram.com/vanessacastrobeautyhair/" target="_blank" rel="noreferrer">FALAR COM VANESSA</a>
          <a className="instagram" href="https://www.instagram.com/vanessacastrobeautyhair/" target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span>VANESSA CASTRO</span><small>BEAUTY HAIR</small></div>
        <p>Conceito de apresentação · São Carlos, SP</p>
      </footer>
    </main>
  )
}
