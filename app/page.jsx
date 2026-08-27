const portfolio = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=88'
]

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Vanessa Castro Beauty Hair">
          <span>VANESSA CASTRO</span>
          <small>BEAUTY HAIR</small>
        </a>
        <nav className="navLinks" aria-label="Navegação principal">
          <a href="#especialidades">ESPECIALIDADES</a>
          <a href="#resultados">RESULTADOS</a>
          <a href="#agendar">CONTATO</a>
        </nav>
        <a className="navCta" href="#agendar">AGENDAR</a>
      </header>

      <section className="hero" id="top">
        <div className="heroMedia" />
        <div className="heroShade" />
        <div className="heroContent shell">
          <div className="heroBadge">LOIROS · ALISAMENTOS · TRANSFORMAÇÕES</div>
          <p className="eyebrow">SÃO CARLOS · SP</p>
          <h1>Beleza que<br />ganha forma<br /><em>nos detalhes.</em></h1>
          <p className="heroCopy">Um atendimento pensado para transformar o cabelo sem apagar a identidade de quem você é.</p>
          <div className="heroActions">
            <a className="button light" href="#agendar">AGENDAR EXPERIÊNCIA</a>
            <a className="ghostLink" href="#resultados">VER TRANSFORMAÇÕES</a>
          </div>
        </div>
        <div className="heroIndex">VANESSA CASTRO BEAUTY HAIR · 2026</div>
      </section>

      <section className="intro shell section">
        <p className="eyebrow dark">POSICIONAMENTO</p>
        <div className="splitTitle">
          <h2>Seu cabelo não precisa parecer com o de ninguém.<br /><em>Ele precisa parecer com você.</em></h2>
          <div className="introCopy">
            <p>Cada transformação começa com escuta, técnica e uma leitura cuidadosa do que valoriza sua beleza.</p>
            <p>O resultado precisa ser bonito no salão, funcionar na rotina e continuar fazendo sentido depois.</p>
          </div>
        </div>
      </section>

      <section className="services section shell" id="especialidades">
        <div className="sectionHead serviceHead">
          <div>
            <p className="eyebrow dark">ESPECIALIDADES</p>
            <h2>Serviços com intenção,<br /><em>não por padrão.</em></h2>
          </div>
          <p className="sideCopy">A proposta é unir técnica, estética e praticidade para criar resultados personalizados, elegantes e atuais.</p>
        </div>
        <div className="serviceGrid">
          <article><span>01</span><div><h3>Loiros & Mechas</h3><p>Iluminação personalizada, contraste, profundidade e acabamento para um loiro sofisticado e harmônico.</p></div><b>→</b></article>
          <article><span>02</span><div><h3>Alisamentos</h3><p>Fios alinhados, polidos e com movimento, respeitando a estrutura e a saúde do cabelo.</p></div><b>→</b></article>
          <article><span>03</span><div><h3>Transformações</h3><p>Mudanças de cor e imagem construídas com técnica, intenção e atenção aos detalhes.</p></div><b>→</b></article>
        </div>
      </section>

      <section className="portfolio section" id="resultados">
        <div className="shell sectionHead row portfolioHead">
          <div><p className="eyebrow dark">RESULTADOS</p><h2>Transformações que<br /><em>falam por si.</em></h2></div>
          <p className="sideCopy">Uma seleção visual inspirada no universo estético do trabalho da Vanessa. Na versão final, este espaço recebe os resultados reais escolhidos por ela.</p>
        </div>
        <div className="masonry shell">
          {portfolio.map((src, i) => (
            <figure key={src}>
              <img src={src} alt={`Referência visual de transformação ${i + 1}`} loading="lazy" />
              <figcaption>TRANSFORMAÇÃO {String(i + 1).padStart(2,'0')}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="quote section">
        <div className="shell quoteInner">
          <p className="eyebrow">VANESSA CASTRO</p>
          <blockquote>“Técnica para transformar.<br /><em>Sensibilidade para preservar sua essência.</em>”</blockquote>
          <div className="quoteMeta"><span>BEAUTY HAIR</span><p>Atendimento focado em resultado, confiança e uma experiência de beleza verdadeiramente personalizada.</p></div>
        </div>
      </section>

      <section className="experience section shell">
        <div className="experienceCard">
          <div className="experienceMedia"><span>BEAUTY EXPERIENCE</span></div>
          <div className="experienceText">
            <p className="eyebrow dark">A EXPERIÊNCIA</p>
            <h2>Mais do que mudar o cabelo.<br /><em>Sentir-se renovada.</em></h2>
            <p>Da escolha da técnica ao acabamento final, cada etapa é pensada para criar um resultado que valorize sua imagem e faça sentido para você.</p>
            <div className="experiencePoints">
              <span>01 · Diagnóstico</span>
              <span>02 · Estratégia</span>
              <span>03 · Execução</span>
              <span>04 · Finalização</span>
            </div>
            <a className="textLink" href="#agendar">QUERO VIVER ESSA EXPERIÊNCIA →</a>
          </div>
        </div>
      </section>

      <section className="contact section" id="agendar">
        <div className="shell contactInner">
          <p className="eyebrow">ATENDIMENTO EM SÃO CARLOS · SP</p>
          <h2>Pronta para a sua<br /><em>próxima versão?</em></h2>
          <p>Fale com a Vanessa e conte qual transformação você deseja.</p>
          <div className="contactActions">
            <a className="button light" href="https://www.instagram.com/vanessacastrobeautyhair/" target="_blank" rel="noreferrer">FALAR COM VANESSA</a>
            <a className="instagram" href="https://www.instagram.com/vanessacastrobeautyhair/" target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span>VANESSA CASTRO</span><small>BEAUTY HAIR</small></div>
        <p>Conceito de apresentação · São Carlos, SP</p>
      </footer>
    </main>
  )
}
