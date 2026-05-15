'use client'

const WA_NUMBER = '5579999999999'
const WA_MSG = encodeURIComponent('Oi! Vi o site de vocês e quero agendar um horário. Podem me ajudar?')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

const WA_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* Componente de logo que corta as bordas pretas do JPG */
function Logo({ height = 40 }: { height?: number }) {
  const ratio = 3.6 // largura/altura aproximada da área útil do logo
  const w = Math.round(height * ratio)
  return (
    <div style={{
      width: w, height, overflow: 'hidden', borderRadius: 6,
      flexShrink: 0,
    }}>
      <img
        src="/Logo.jpg"
        alt="Esmalteria Unhas Top"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          /* crop: remove ~12% top/bottom black padding */
          marginTop: `${-height * 0.15}px`,
          marginBottom: `${-height * 0.15}px`,
          minHeight: `${height * 1.3}px`,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

const services = [
  { name: 'Manicure e Pedicure', desc: 'Esmaltação simples, francesa, gel e decoração. A maior variedade de esmaltes de Aracaju.' },
  { name: 'Alongamento de Unhas', desc: 'Fibra, gel, acrílico. Técnicas variadas com profissionais especializadas.' },
  { name: 'Cabelos', desc: 'Tratamentos, progressiva, coloração, luzes e finalizações.' },
  { name: 'Design de Sobrancelhas', desc: 'Modelagem, henna e design personalizado para o seu rosto.' },
  { name: 'Extensão de Cílios', desc: 'Volume russo, fio a fio e híbrido.' },
  { name: 'Spá dos Pés', desc: 'Esfoliação, hidratação e esmalte, experiência completa.' },
  { name: 'Maquiagem', desc: 'Social, festa e dia a dia.' },
  { name: 'Podologia', desc: 'Cuidados especiais com os pés (exceto unhas infeccionadas).' },
]

const diferenciais = [
  { n: '01', title: 'Atendimento Express', desc: 'Chegou, já está sendo atendida. Espera máxima de 20 minutos, sem hora marcada, sem aquela fila que te faz desistir.' },
  { n: '02', title: '3 serviços ao mesmo tempo', desc: 'Faz as unhas das mãos, dos pés e a sobrancelha em uma visita só. Você sai completa sem perder metade do dia.' },
  { n: '03', title: 'Esterilização em autoclave', desc: 'Segurança que a maioria dos salões não tem. Todos os instrumentos passam por autoclave antes de chegar em você.' },
  { n: '04', title: 'Equipe treinada pessoalmente', desc: 'Cada profissional é treinada pela proprietária desde o primeiro dia. Não é mão de obra avulsa, é time formado.' },
  { n: '05', title: 'Horário estendido', desc: 'Segunda a sábado das 10h às 22h. Domingos e feriados das 14h às 20h. Cabe na sua agenda.' },
  { n: '06', title: 'Formas de pagamento', desc: 'Pix, dinheiro, débito e crédito com parcelamento. Várias bandeiras aceitas.' },
]

export default function V1() {
  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#FDF8F5', color: '#1A0D13', overflowX: 'hidden' }}>

      {/* BOTÃO WA FLUTUANTE */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, background: '#25D366', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s' }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* HERO — imagem de fundo + overlay berry + headline + CTA */}
      <section style={{ background: '#1A0D13', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Foto de fundo semi-transparente */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/img3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, pointerEvents: 'none' }} />
        {/* Overlay berry */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(100,15,50,0.70)', pointerEvents: 'none' }} />
        {/* Círculos decorativos */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780 }}>
          {/* Logo no hero — fundo berry esconde o bg preto do JPG */}
          <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
            <Logo height={52} />
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 100, padding: '6px 18px', fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', marginBottom: 32, textTransform: 'uppercase' }}>
            9 anos no RioMar Shopping, Aracaju
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 28, color: '#fff' }}>
            Manicure, cabelo e<br />
            <em>sobrancelha.</em><br />
            <span style={{ fontSize: '0.7em', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>Tudo numa visita só.</span>
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 44, maxWidth: 520, margin: '0 auto 44px' }}>
            Na Esmalteria Unhas Top, você faz até 3 serviços ao mesmo tempo e sai em menos de 1 hora. No RioMar Shopping, Aracaju.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#8B1C5A', padding: '16px 36px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#FDF0F4'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
            >
              {WA_SVG}
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              style={{ display: 'inline-flex', alignItems: 'center', color: 'rgba(255,255,255,0.9)', padding: '16px 24px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.6)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)' }}
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section style={{ background: '#6A1444', padding: '18px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {['⭐ 4.3 no Google', '9 anos no RioMar', 'Esterilização em Autoclave', 'Atendimento em até 20 min'].map(t => (
            <span key={t} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 14 }}>Serviços</p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#1A0D13', lineHeight: 1.2 }}>
            O que você encontra aqui
          </h2>
          <p style={{ color: '#9B7080', fontSize: 16, marginTop: 14, maxWidth: 480, margin: '14px auto 0', lineHeight: 1.65 }}>
            Tudo que você precisa em um só espaço, sem precisar ir de salão em salão.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, background: '#EDD8E0' }}>
          {services.map(s => (
            <div
              key={s.name}
              style={{ background: '#FDF8F5', padding: '28px 26px', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#F7EAED'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#FDF8F5'}
            >
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 17, fontWeight: 600, color: '#1A0D13', marginBottom: 8 }}>{s.name}</h3>
              <p style={{ fontSize: 13, color: '#9B7080', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '15px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            {WA_SVG}
            Agendar meu horário
          </a>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ background: '#1A0D13', padding: '100px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#C9A084', textTransform: 'uppercase', marginBottom: 14 }}>Por que escolher</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 700, color: '#FDF8F5', lineHeight: 1.15 }}>
              Por que quem vem uma vez sempre volta
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
            {diferenciais.map(d => (
              <div
                key={d.n}
                style={{ background: '#1A0D13', padding: '36px 32px', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#250F1A'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#1A0D13'}
              >
                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: '2.2rem', fontWeight: 700, color: 'rgba(139,28,90,0.4)', display: 'block', marginBottom: 14, lineHeight: 1 }}>{d.n}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#FDF8F5', marginBottom: 10 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: '#7A5868', lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: '100px 32px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 14 }}>Simples assim</p>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 700, color: '#1A0D13', marginBottom: 64, lineHeight: 1.15 }}>
          Em 3 passos, você já está no espaço
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          {[
            { n: '1', title: 'Escolha como prefere chegar', desc: 'Agende pelo WhatsApp ou apareça direto. Sem complicação.' },
            { n: '2', title: 'Seja atendida em até 20 minutos', desc: 'Chegou, foi recebida. Pode aproveitar o RioMar enquanto espera.' },
            { n: '3', title: 'Saia do jeito que você gosta', desc: 'Feito com técnica, capricho e dentro do tempo que você tem.' },
          ].map(s => (
            <div key={s.n}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#8B1C5A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "var(--font-playfair), serif", fontSize: 20, fontWeight: 700, color: '#fff' }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A0D13', marginBottom: 10, lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#9B7080', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '16px 40px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            Agendar agora
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section style={{ background: '#F7EAED', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 14 }}>Localização</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 700, color: '#1A0D13', marginBottom: 18 }}>Fica fácil de encontrar</h2>
            <p style={{ fontSize: 15, color: '#6B4A56', lineHeight: 1.7, marginBottom: 28 }}>
              Dentro do RioMar Shopping Aracaju, Alameda de Serviços, ao lado da lotérica.
            </p>
            <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#8B1C5A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Seg a Sáb</p>
                <p style={{ fontSize: 17, fontWeight: 700, color: '#1A0D13' }}>10h às 22h</p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#8B1C5A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Dom e Feriados</p>
                <p style={{ fontSize: 17, fontWeight: 700, color: '#1A0D13' }}>14h às 20h</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=RioMar+Shopping+Aracaju"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#8B1C5A', color: '#fff', padding: '11px 22px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Como chegar
            </a>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '2px solid #E8C4CF' }}>
            <iframe
              title="Localização Esmalteria Unhas Top"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5!2d-37.0564!3d-10.9302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab16a2da2e5e3%3A0x4c8b7b15fbeec587!2sRioMar%20Shopping%20Aracaju!5e0!3m2!1spt-BR!2sbr!4v1683900000000"
              width="100%"
              height="320"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#8B1C5A', padding: '100px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 22, letterSpacing: '-0.01em' }}>
            Pronta para agendar?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 44 }}>
            Manda uma mensagem e a gente confirma seu horário na hora.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#8B1C5A', padding: '18px 44px', borderRadius: 14, fontSize: 17, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#FDF0F4'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendar pelo WhatsApp
          </a>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 18 }}>Retorno em até 1 hora no horário comercial.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#6A1444', padding: '32px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <Logo height={36} />
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>RioMar Shopping Aracaju · © 2025</p>
      </footer>

    </main>
  )
}
