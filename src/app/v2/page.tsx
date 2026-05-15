'use client'

import { useEffect } from 'react'

const WA_NUMBER = '5579999999999'
const WA_MSG = encodeURIComponent('Oi! Vi o site de vocês e quero agendar um horário. Podem me ajudar?')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

const services = [
  { name: 'Manicure e Pedicure', desc: 'Esmaltação simples, francesa, gel e decoração. A maior variedade de esmaltes de Aracaju.' },
  { name: 'Alongamento de Unhas', desc: 'Fibra, gel, acrílico. Técnicas variadas com profissionais especializadas.' },
  { name: 'Cabelos', desc: 'Tratamentos, progressiva, coloração, luzes e finalizações.' },
  { name: 'Design de Sobrancelhas', desc: 'Modelagem, henna e design personalizado para o seu rosto.' },
  { name: 'Extensão de Cílios', desc: 'Volume russo, fio a fio e híbrido.' },
  { name: 'Spá dos Pés', desc: 'Esfoliação, hidratação e esmalte, experiência completa.' },
  { name: 'Maquiagem', desc: 'Social, festa e dia a dia.' },
  { name: 'Podologia', desc: 'Cuidados especiais com os pés.' },
]

const diferenciais = [
  { num: '01', title: 'Atendimento Express', desc: 'Espera máxima de 20 minutos, sem hora marcada, sem fila.' },
  { num: '02', title: '3 serviços ao mesmo tempo', desc: 'Unhas, pés e sobrancelha em uma única visita. Sai completa.' },
  { num: '03', title: 'Autoclave garantido', desc: 'Todos os instrumentos esterilizados antes de chegar em você.' },
  { num: '04', title: 'Equipe treinada', desc: 'Cada profissional formada pela proprietária desde o primeiro dia.' },
  { num: '05', title: 'Horário estendido', desc: 'Seg a Sáb 10h às 22h. Dom e feriados 14h às 20h.' },
  { num: '06', title: 'Todo tipo de pagamento', desc: 'Pix, dinheiro, débito e crédito. Várias bandeiras aceitas.' },
]

export default function V2() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#FDF6F2', color: '#1A0D13', overflowX: 'hidden' }}>

      {/* WA FLOAT */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, background: '#25D366', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'}
        aria-label="Abrir WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* HERO — Minimalismo Oversized */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          {/* Tag */}
          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F7EAED', border: '1px solid #E8C4CF', borderRadius: 100, padding: '6px 16px', fontSize: 12, fontWeight: 600, color: '#8B1C5A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B1C5A', display: 'inline-block' }} />
            9 anos no RioMar, Aracaju
          </div>

          {/* Headline oversized */}
          <h1 className="animate-fade-up delay-200" style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(3rem, 9vw, 7.5rem)', fontWeight: 700, lineHeight: 0.95, color: '#1A0D13', letterSpacing: '-0.02em', marginBottom: 48 }}>
            Manicure,<br />
            cabelo e<br />
            <span style={{ color: '#8B1C5A', fontStyle: 'italic' }}>sobrancelha.</span><br />
            <span style={{ fontSize: '0.6em', fontWeight: 400, fontStyle: 'italic', color: '#9B7080' }}>Tudo numa visita só.</span>
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div className="animate-fade-up delay-400" style={{ maxWidth: 460 }}>
              <p style={{ fontSize: 18, color: '#6B4A56', lineHeight: 1.7, marginBottom: 36 }}>
                Na Esmalteria Unhas Top, você faz até 3 serviços ao mesmo tempo e sai em menos de 1 hora. No RioMar Shopping, Aracaju.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '16px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s, transform 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Agendar pelo WhatsApp
                </a>
                <a href="#servicos" style={{ display: 'inline-flex', alignItems: 'center', color: '#8B1C5A', fontSize: 15, fontWeight: 600, textDecoration: 'none', padding: '16px 20px', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                >
                  Ver serviços →
                </a>
              </div>
            </div>

            {/* Floating stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { val: '9+', label: 'anos de experiência' },
                { val: '15', label: 'profissionais no espaço' },
                { val: '20min', label: 'espera máxima' },
              ].map((s, i) => (
                <div key={s.val} className={`animate-slide-right delay-${(i + 2) * 100}`} style={{ background: '#fff', border: '1px solid #F0DDD8', borderRadius: 14, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16, minWidth: 200 }}>
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 28, fontWeight: 700, color: '#8B1C5A', lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: 13, color: '#9B7080', lineHeight: 1.3 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div style={{ background: '#8B1C5A', padding: '18px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {['⭐ 4.3 no Google', '9 anos no RioMar', 'Autoclave Garantido', 'Atendimento em até 20 min'].map(t => (
            <span key={t} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* FOTO STRIP — trabalhos de unhas */}
      <div style={{ display: 'flex', height: 220, overflow: 'hidden' }}>
        {['/img1.jpg', '/img2.jpg', '/img3.jpg'].map((src, i) => (
          <div key={i} style={{ flex: 1, overflow: 'hidden' }}>
            <img
              src={src}
              alt="Trabalhos de unhas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s' }}
              onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.07)'}
              onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 12 }}>Serviços</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#1A0D13', lineHeight: 1.1 }}>
              O que você<br />encontra aqui
            </h2>
          </div>
          <p style={{ fontSize: 15, color: '#9B7080', maxWidth: 320, lineHeight: 1.7 }}>
            Tudo que você precisa em um só espaço, sem precisar ir de salão em salão.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1, background: '#F0DDD8' }}>
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`reveal d${(i % 4) + 1}`}
              style={{ background: '#FDF6F2', padding: '32px 28px', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#F7EAED'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#FDF6F2'}
            >
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 17, fontWeight: 600, color: '#1A0D13', marginBottom: 10 }}>{s.name}</h3>
              <p style={{ fontSize: 13, color: '#9B7080', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '15px 40px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'}
          >
            Agendar meu horário
          </a>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ background: '#1A0D13', padding: '100px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16 }}>Por que escolher</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#FDF6F2', lineHeight: 1.1 }}>
              Por que quem vem<br />uma vez sempre volta
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
            {diferenciais.map((d, i) => (
              <div key={d.num} className={`reveal d${(i % 3) + 1}`} style={{ background: '#1A0D13', padding: '36px 32px', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#250E18'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#1A0D13'}
              >
                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: '2.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.3)', display: 'block', marginBottom: 16, lineHeight: 1 }}>{d.num}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#FDF6F2', marginBottom: 10 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: '#7A5A68', lineHeight: 1.65 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA — maquiagem, sobrancelhas e cabelo */}
      <section style={{ padding: '64px 40px', background: '#FDF6F2' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 32 }}>Galeria de trabalhos</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { src: '/img4.jpg', label: 'Maquiagem' },
              { src: '/img5.jpg', label: 'Cílios e Sobrancelhas' },
              { src: '/img7.jpg', label: 'Cabelos' },
            ].map(({ src, label }) => (
              <div key={label} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 360 }}>
                <img
                  src={src}
                  alt={label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(26,13,19,0.82))', padding: '40px 20px 20px' }}>
                  <span style={{ color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: "var(--font-playfair), serif" }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: '100px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Como funciona</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#1A0D13', lineHeight: 1.1, marginBottom: 32 }}>
              Em 3 passos,<br />você já está no espaço
            </h2>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'}
            >
              Agendar agora
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { n: '1', t: 'Escolha como prefere chegar', d: 'Agende pelo WhatsApp ou apareça direto. Sem complicação.' },
              { n: '2', t: 'Seja atendida em até 20 minutos', d: 'Chegou, foi recebida. Pode aproveitar o RioMar enquanto espera.' },
              { n: '3', t: 'Saia do jeito que você gosta', d: 'Feito com técnica, capricho e dentro do tempo que você tem.' },
            ].map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: 20, padding: '28px 0', borderBottom: i < 2 ? '1px solid #F0DDD8' : 'none' }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: '#8B1C5A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff' }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A0D13', marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ fontSize: 13, color: '#9B7080', lineHeight: 1.6 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM ACENTO — maquiagem artística */}
      <div style={{ padding: '0 40px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 280 }}>
          <img src="/img6.jpg" alt="Maquiagem artística" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(253,246,242,0.96) 38%, rgba(253,246,242,0.4) 65%, transparent)' }}>
            <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#8B1C5A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>Maquiagem</p>
              <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 24, color: '#1A0D13', fontWeight: 700, lineHeight: 1.3 }}>
                Do social<br />ao artístico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LOCALIZAÇÃO */}
      <section style={{ background: '#F7EAED', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Localização</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#1A0D13', marginBottom: 20 }}>Fica fácil de encontrar</h2>
            <p style={{ fontSize: 15, color: '#6B4A56', lineHeight: 1.7, marginBottom: 28 }}>Dentro do RioMar Shopping Aracaju, Alameda de Serviços, ao lado da lotérica.</p>
            <div style={{ display: 'flex', gap: 32, marginBottom: 28, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#8B1C5A', marginBottom: 4 }}>SEG A SÁB</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1A0D13' }}>10h às 22h</p>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#8B1C5A', marginBottom: 4 }}>DOM E FERIADOS</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1A0D13' }}>14h às 20h</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=RioMar+Shopping+Aracaju" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#8B1C5A', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Como chegar no Google Maps
            </a>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '2px solid #E8C4CF' }}>
            <iframe
              title="Localização"
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
      <section style={{ background: '#1A0D13', padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 700, color: '#FDF6F2', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Pronta para<br />
            <span style={{ color: '#8B1C5A', fontStyle: 'italic' }}>agendar?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#7A5A68', lineHeight: 1.7, marginBottom: 44 }}>
            Manda uma mensagem e a gente confirma seu horário na hora.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '18px 44px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s, transform 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#B8346F'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendar pelo WhatsApp
          </a>
          <p style={{ fontSize: 13, color: '#5A3A48', marginTop: 16 }}>Retorno em até 1 hora no horário comercial.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#120810', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <img src="/Logo.jpg" alt="Esmalteria Unhas Top" style={{ height: 36, borderRadius: 4 }} />
        <p style={{ fontSize: 13, color: '#5A3A48' }}>RioMar Shopping Aracaju · © 2025</p>
      </footer>

    </main>
  )
}
