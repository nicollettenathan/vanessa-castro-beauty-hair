const portfolio = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=88',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=88'
]

const instagramUrl = 'https://www.instagram.com/vanessacastrobeautyhair/'
const whatsappUrl = 'https://api.whatsapp.com/send?text=Ol%C3%A1%2C%20Vanessa!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Vanessa Castro Beauty Hair">
          <span>VANESSA CASTRO</span>
          <small>BEAUTY HAIR</small>
        </a>
        <nav className="navLinks" aria-label="Navegação principal">
          <a href="#sobre">QUEM SOMOS</a>
          <a href="#resultados">TRABALHOS</a>
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
            <a className="ghostLink" href="#resultados">VER TRABALHOS</a>
          </div>
        </div>
        <div className="heroIndex">VANESSA CASTRO BEAUTY HAIR · 2026</div>
      </section>

      <section className="intro shell section" id="sobre">
        <p className="eyebrow dark">QUEM SOMOS</p>
        <div className="splitTitle">
          <h2>Beleza com técnica, intenção e identidade.<br /><em>Um atendimento que começa na escuta.</em></h2>
          <div className="introCopy">
            <p>Vanessa Castro Beauty Hair nasce da proposta de criar resultados personalizados, respeitando estilo, rotina e a essência de cada cliente.</p>
            <p>Mais do que seguir tendências, o trabalho busca construir transformações elegantes, atuais e possíveis de manter no dia a dia.</p>
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
          <div><p className="eyebrow dark">TRABALHOS</p><h2>Transformações que<br /><em>falam por si.</em></h2></div>
          <p className="sideCopy">Uma seleção visual inspirada no universo estético do trabalho da Vanessa. Na versão final, este espaço recebe os resultados reais escolhidos por ela.</p>
        </div>
        <div className="masonry shell">
          {portfolio.map((src, i) => (
            <figure key={src}>
              <img src={src} alt={`Referência visual de transformação ${i + 1}`} loading="lazy" />
              <figcaption>TRABALHO {String(i + 1).padStart(2,'0')}</figcaption>
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
            <a className="button light" href={whatsappUrl} target="_blank" rel="noreferrer">AGENDAR PELO WHATSAPP</a>
            <a className="instagram" href={instagramUrl} target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a>
          </div>
        </div>
      </section>

      <section className="contactDetails">
        <div className="shell contactGrid">
          <div className="contactBrand">
            <div className="brand"><span>VANESSA CASTRO</span><small>BEAUTY HAIR</small></div>
            <p>Beleza, técnica e transformação em uma experiência pensada nos detalhes.</p>
          </div>
          <div className="contactColumn">
            <span className="contactLabel">INSTAGRAM</span>
            <a href={instagramUrl} target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a>
          </div>
          <div className="contactColumn">
            <span className="contactLabel">LOCALIZAÇÃO</span>
            <p>São Carlos · SP</p>
            <small>Endereço completo disponível no agendamento.</small>
          </div>
          <div className="contactColumn">
            <span className="contactLabel">ATENDIMENTO</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp →</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© 2026 Vanessa Castro Beauty Hair</p>
        <p>Conceito de apresentação · São Carlos, SP</p>
      </footer>

      <a className="whatsappFloat" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Vanessa pelo WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.6 12.6 0 0 0 5.1 22.1L3.4 28.6l6.7-1.7A12.6 12.6 0 1 0 16 3.2Zm0 22.8a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-4 .99 1.05-3.86-.26-.4A10.2 10.2 0 1 1 16 26Zm5.6-7.6c-.3-.16-1.8-.9-2.1-1-.28-.1-.5-.16-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.3-.16-1.29-.47-2.45-1.51-.9-.8-1.52-1.8-1.7-2.1-.17-.3-.02-.47.13-.62.14-.14.3-.36.46-.54.15-.18.2-.3.3-.52.1-.2.05-.4-.03-.55-.08-.16-.7-1.7-.96-2.34-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.55.08-.84.4-.28.31-1.09 1.07-1.09 2.6 0 1.54 1.12 3.02 1.28 3.23.15.2 2.2 3.36 5.33 4.71.75.32 1.33.52 1.78.66.75.24 1.43.2 1.97.13.6-.09 1.8-.74 2.06-1.45.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z"/></svg>
        <span>WhatsApp</span>
      </a>
    </main>
  )
}
