'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !tel.trim()) return
    router.push(`/obrigado?nome=${encodeURIComponent(nome)}&tel=${encodeURIComponent(tel)}`)
  }

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#FDF6F2', color: '#1A0D13', overflowX: 'hidden' }}>

      {/* HERO — Minimalismo Oversized */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F7EAED', border: '1px solid #E8C4CF', borderRadius: 100, padding: '6px 16px', fontSize: 12, fontWeight: 600, color: '#8B1C5A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B1C5A', display: 'inline-block' }} />
            9 anos no RioMar, Aracaju
          </div>

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
                  href="#form"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '16px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s, transform 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  Agendar meu horário
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
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px 20px', justifyItems: 'center' }}>
          {['⭐ 4.3 no Google', '9 anos no RioMar', 'Autoclave Garantido', 'Atendimento em até 20 min'].map(t => (
            <span key={t} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)', textAlign: 'center' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* FOTO STRIP — trabalhos de unhas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', overflow: 'hidden' }}>
        {['/img1.jpg', '/img2.jpg', '/img3.jpg'].map((src, i) => (
          <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
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
          <a href="#form" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '15px 40px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
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
              <div key={label} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '3/4' }}>
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
            <a href="#form" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
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
        <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 'clamp(380px, 45vw, 520px)' }}>
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

      {/* FORMULÁRIO */}
      <style>{`#v2-form input::placeholder { color: rgba(255,255,255,0.45); }`}</style>
      <section id="form" style={{ background: '#8B1C5A', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 14 }}>Agendamento</p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 12 }}>
            Pronta para agendar?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 36 }}>
            Preencha seus dados e entraremos em contato pelo WhatsApp para confirmar seu horário.
          </p>
          <form id="v2-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 16, width: '100%', boxSizing: 'border-box', outline: 'none' }}
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp (com DDD)"
              value={tel}
              onChange={e => setTel(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 16, width: '100%', boxSizing: 'border-box', outline: 'none' }}
            />
            <button
              type="submit"
              style={{ padding: '17px', borderRadius: 12, border: 'none', background: '#fff', color: '#8B1C5A', fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = '1'}
            >
              Quero agendar meu horário
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#120810', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <img src="/Logo.PNG" alt="Esmalteria Unhas Top" style={{ height: 36, borderRadius: 4 }} />
        <p style={{ fontSize: 13, color: '#5A3A48' }}>RioMar Shopping Aracaju · © 2025</p>
      </footer>

    </main>
  )
}
