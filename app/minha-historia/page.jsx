const instagramUrl = 'https://www.instagram.com/vanessacastrobeautyhair/'
const whatsappUrl = 'https://api.whatsapp.com/send?text=Ol%C3%A1%2C%20Vanessa!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export const metadata = {
  title: 'Minha História | Vanessa Castro Beauty Hair',
  description: 'Conheça a trajetória e a essência por trás da Vanessa Castro Beauty Hair.'
}

export default function MinhaHistoria() {
  return (
    <main className="storyPage">
      <header className="storyNav shell">
        <a className="brand" href="/" aria-label="Voltar para a página inicial"><span>VANESSA CASTRO</span><small>BEAUTY HAIR</small></a>
        <nav className="storyNavLinks" aria-label="Navegação interna"><a href="/">INÍCIO</a><a href="/#resultados">TRABALHOS</a><a href="/#agendar">CONTATO</a></nav>
        <a className="storyNavCta" href="/#agendar">AGENDAR</a>
      </header>

      <section className="storyHero"><div className="storyHeroMedia" /><div className="storyHeroShade" /><div className="shell storyHeroContent"><p className="eyebrow">MINHA HISTÓRIA</p><h1>Por trás de cada<br />transformação,<br /><em>existe uma trajetória.</em></h1><p>Esta página foi criada para contar a história da Vanessa com mais profundidade — sua caminhada, visão de beleza e a forma como o trabalho foi ganhando identidade ao longo do tempo.</p></div></section>

      <section className="storyIntro section shell"><div className="storyNumber">01</div><div className="storyText"><p className="eyebrow dark">O COMEÇO</p><h2>Uma carreira construída<br /><em>transformação por transformação.</em></h2><p>O interesse por beleza se transformou em profissão e, com o tempo, em uma forma própria de enxergar cada cliente. Mais do que executar técnicas, o trabalho passou a buscar resultados que respeitam personalidade, rotina e estilo.</p><p>Este texto é conceitual nesta primeira versão. Depois da apresentação, a história real da Vanessa entra aqui com os marcos, aprendizados e momentos que fizeram parte da sua trajetória.</p></div></section>

      <section className="storyVisual"><div className="shell storyVisualGrid"><div className="storyPhoto storyPhotoLarge" /><div className="storyQuote"><span>VANESSA CASTRO · BEAUTY HAIR</span><blockquote>“A técnica transforma o cabelo. A sensibilidade faz o resultado pertencer à pessoa.”</blockquote></div></div></section>

      <section className="storyIntro section shell"><div className="storyNumber">02</div><div className="storyText"><p className="eyebrow dark">HOJE</p><h2>Beleza com intenção.<br /><em>Resultado com identidade.</em></h2><p>Hoje, Vanessa Castro Beauty Hair representa um atendimento focado em loiros, alisamentos e transformações construídas de forma personalizada.</p><p>A ideia é que cada cliente se reconheça no resultado — com técnica, cuidado e uma experiência pensada nos detalhes.</p><a className="textLink" href="/#resultados">CONHECER OS TRABALHOS →</a></div></section>

      <section className="contact section"><div className="shell contactInner"><p className="eyebrow">VANESSA CASTRO · SÃO CARLOS</p><h2>Agora que você conhece<br /><em>um pouco da história...</em></h2><p>Conheça os trabalhos ou fale diretamente com a Vanessa.</p><div className="contactActions"><a className="button light" href={whatsappUrl} target="_blank" rel="noreferrer">AGENDAR PELO WHATSAPP</a><a className="instagram" href={instagramUrl} target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a></div></div></section>

      <section className="contactDetails"><div className="shell contactGrid"><div className="contactBrand"><div className="brand"><span>VANESSA CASTRO</span><small>BEAUTY HAIR</small></div><p>Beleza, técnica e transformação em uma experiência pensada nos detalhes.</p></div><div className="contactColumn"><span className="contactLabel">INSTAGRAM</span><a href={instagramUrl} target="_blank" rel="noreferrer">@vanessacastrobeautyhair</a></div><div className="contactColumn"><span className="contactLabel">LOCALIZAÇÃO</span><p>São Carlos · SP</p><small>Endereço completo disponível no agendamento.</small></div><div className="contactColumn"><span className="contactLabel">ATENDIMENTO</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp →</a></div></div></section>

      <footer className="footer shell"><p>© 2026 Vanessa Castro Beauty Hair</p><p>Conceito de apresentação · São Carlos, SP</p></footer>

      <a className="whatsappFloat" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Vanessa pelo WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.6 12.6 0 0 0 5.1 22.1L3.4 28.6l6.7-1.7A12.6 12.6 0 1 0 16 3.2Zm0 22.8a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-4 .99 1.05-3.86-.26-.4A10.2 10.2 0 1 1 16 26Zm5.6-7.6c-.3-.16-1.8-.9-2.1-1-.28-.1-.5-.16-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.3-.16-1.29-.47-2.45-1.51-.9-.8-1.52-1.8-1.7-2.1-.17-.3-.02-.47.13-.62.14-.14.3-.36.46-.54.15-.18.2-.3.3-.52.1-.2.05-.4-.03-.55-.08-.16-.7-1.7-.96-2.34-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.55.08-.84.4-.28.31-1.09 1.07-1.09 2.6 0 1.54 1.12 3.02 1.28 3.23.15.2 2.2 3.36 5.33 4.71.75.32 1.33.52 1.78.66.75.24 1.43.2 1.97.13.6-.09 1.8-.74 2.06-1.45.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z"/></svg><span>WhatsApp</span></a>
    </main>
  )
}
