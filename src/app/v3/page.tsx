'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const services = [
  { name: 'Manicure & Pedicure', tag: 'mais popular' },
  { name: 'Alongamento', tag: 'fibra · gel · acrílico' },
  { name: 'Cabelos', tag: 'cor · luzes · progressiva' },
  { name: 'Sobrancelhas', tag: 'design · henna' },
  { name: 'Extensão de Cílios', tag: 'volume russo · fio a fio' },
  { name: 'Spá dos Pés', tag: 'esfoliação · hidratação' },
  { name: 'Maquiagem', tag: 'social · festa · dia a dia' },
  { name: 'Podologia', tag: 'cuidados especializados' },
]

export default function V3() {
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')

  const gallery = [
    { src: '/img1.jpg', label: 'Manicure', desc: 'Nail art francesa com lacinho' },
    { src: '/img2.jpg', label: 'Unhas', desc: 'Nude com detalhe dourado' },
    { src: '/img3.jpg', label: 'Alongamento', desc: 'Gel bordô stiletto' },
    { src: '/img4.jpg', label: 'Maquiagem', desc: 'Smoky eye completo' },
    { src: '/img5.jpg', label: 'Cílios e Sobrancelhas', desc: 'Extensão fio a fio' },
    { src: '/img6.jpg', label: 'Maquiagem', desc: 'Artístico com glitter' },
    { src: '/img7.jpg', label: 'Cabelos', desc: 'Penteado com tranças' },
  ]
  const [cur, setCur] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % gallery.length), 3800)
    return () => clearInterval(t)
  }, [gallery.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !tel.trim()) return
    router.push(`/obrigado?nome=${encodeURIComponent(nome)}&tel=${encodeURIComponent(tel)}`)
  }

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#fff', color: '#111', overflowX: 'hidden' }}>

      {/* HERO — Editorial Magazine Split */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Left: Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 56px', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
            <div style={{ height: 1, width: 32, background: '#8B1C5A' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase' }}>Esmalteria em Aracaju</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1.05, color: '#111', letterSpacing: '-0.02em', marginBottom: 32 }}>
            Manicure,<br />
            cabelo e<br />
            <em style={{ color: '#8B1C5A' }}>sobrancelha.</em><br />
            Tudo numa<br />
            visita só.
          </h1>

          <p style={{ fontSize: 16, color: '#6B4A56', lineHeight: 1.75, maxWidth: 400, marginBottom: 44 }}>
            Na Esmalteria Unhas Top, você faz até 3 serviços ao mesmo tempo e sai em menos de 1 hora. No RioMar Shopping, Aracaju.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
            <a
              href="#form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '16px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s, transform 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
            >
              Agendar meu horário
            </a>
            <a href="#servicos" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B1C5A', padding: '14px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid #E8C4CF', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#FDF0F4'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#8B1C5A' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E8C4CF' }}
            >
              Ver serviços
            </a>
          </div>
        </div>

        {/* Right: Berry panel with stats */}
        <div style={{ background: '#8B1C5A', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 40 }}>Por que a Unhas Top?</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
              {[
                { num: '9', label: 'anos no RioMar' },
                { num: '15', label: 'profissionais' },
                { num: '20', label: 'min de espera' },
                { num: '3', label: 'serviços juntos' },
              ].map(s => (
                <div key={s.num}>
                  <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: '3.5rem', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Express: sem fila', 'Autoclave garantido', 'Sem hora marcada', 'Até 22h'].map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <div style={{ background: '#111', padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px 20px', justifyItems: 'center', padding: '0 24px' }}>
          {['⭐ 4.3 no Google', '9 anos no RioMar', 'Esterilização em Autoclave', 'Atendimento em até 20 min', 'Desde 2016 em Aracaju'].map(t => (
            <span key={t} style={{ fontSize: 12, fontWeight: 600, color: '#888', textAlign: 'center' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVIÇOS — Lista editorial */}
      <section id="servicos" style={{ padding: '100px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Serviços</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, color: '#111', lineHeight: 1.1, marginBottom: 24 }}>
              O que você<br />encontra aqui
            </h2>
            <p style={{ fontSize: 15, color: '#9B7080', lineHeight: 1.7, marginBottom: 32 }}>
              Tudo que você precisa em um só espaço, sem precisar ir de salão em salão.
            </p>
            <a href="#form" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '14px 28px', borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'}
            >
              Agendar meu horário
            </a>
          </div>

          <div>
            {services.map((s, i) => (
              <div
                key={s.name}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #F0E8ED', cursor: 'default', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '12px'; (e.currentTarget as HTMLDivElement).style.borderBottomColor = '#8B1C5A' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'; (e.currentTarget as HTMLDivElement).style.borderBottomColor = '#F0E8ED' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 13, color: '#D4B8C4', fontWeight: 400 }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 19, fontWeight: 600, color: '#111' }}>{s.name}</h3>
                </div>
                <span style={{ fontSize: 11, color: '#9B7080', fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 16 }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS — Grid alternado */}
      <section style={{ background: '#FDF0F4', padding: '100px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Diferenciais</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#111', lineHeight: 1.1 }}>
              Por que quem vem uma vez<br />sempre volta
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'Atendimento Express', desc: 'Chegou, já está sendo atendida. Espera máxima de 20 minutos, sem hora marcada, sem aquela fila que te faz desistir.', accent: true },
              { title: '3 serviços ao mesmo tempo', desc: 'Faz as unhas das mãos, dos pés e a sobrancelha em uma visita só. Você sai completa sem perder metade do dia.', accent: false },
              { title: 'Esterilização em autoclave', desc: 'Segurança que a maioria dos salões não tem. Todos os instrumentos passam por autoclave antes de chegar em você.', accent: false },
              { title: 'Equipe treinada pessoalmente', desc: 'Cada profissional é treinada pela proprietária desde o primeiro dia. Não é mão de obra avulsa: é time formado.', accent: true },
              { title: 'Horário estendido', desc: 'Segunda a sábado das 10h às 22h. Domingos e feriados das 14h às 20h. Cabe na sua agenda, não na nossa.', accent: false },
              { title: 'Formas de pagamento', desc: 'Pix, dinheiro, débito e crédito com parcelamento. Várias bandeiras aceitas.', accent: false },
            ].map(d => (
              <div
                key={d.title}
                style={{ background: d.accent ? '#8B1C5A' : '#fff', borderRadius: 20, padding: '36px 32px', border: d.accent ? 'none' : '1px solid #F0DDD8', transition: 'transform 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 18, fontWeight: 700, color: d.accent ? '#fff' : '#111', marginBottom: 12, lineHeight: 1.3 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: d.accent ? 'rgba(255,255,255,0.7)' : '#9B7080', lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: '100px 40px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Simples assim</p>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#111', lineHeight: 1.1, marginBottom: 64 }}>
          Em 3 passos, você já está no espaço
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          {[
            { n: '1', t: 'Escolha como prefere chegar', d: 'Agende pelo WhatsApp ou apareça direto. Sem complicação.' },
            { n: '2', t: 'Seja atendida em até 20 minutos', d: 'Chegou, foi recebida. Pode aproveitar o RioMar enquanto espera, a gente avisa.' },
            { n: '3', t: 'Saia do jeito que você gosta', d: 'Feito com técnica, capricho e dentro do tempo que você tem.' },
          ].map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#8B1C5A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "var(--font-playfair), serif", fontSize: 20, fontWeight: 700, color: '#fff' }}>{s.n}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 10, lineHeight: 1.4 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: '#9B7080', lineHeight: 1.65 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <a href="#form" style={{ display: 'inline-block', background: '#8B1C5A', color: '#fff', padding: '15px 40px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            Agendar agora
          </a>
        </div>
      </section>

      {/* GALERIA — Carrossel único (após bloco 3) */}
      <section style={{ overflow: 'hidden', background: '#fff' }}>
        <div style={{ position: 'relative', height: 'clamp(480px, 75vw, 720px)' }}>
          {gallery.map((item, i) => (
            <div
              key={item.src}
              style={{
                position: 'absolute', inset: 0,
                opacity: i === cur ? 1 : 0,
                transition: 'opacity 0.75s ease',
                pointerEvents: i === cur ? 'auto' : 'none',
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,0,10,0.78))', padding: '64px 56px 36px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 6 }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', color: '#fff', fontWeight: 600 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <button
            onClick={() => setCur(c => (c - 1 + gallery.length) % gallery.length)}
            style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 'none', color: '#8B1C5A', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: 10, lineHeight: 1 }}
            aria-label="Anterior"
          >‹</button>
          <button
            onClick={() => setCur(c => (c + 1) % gallery.length)}
            style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 'none', color: '#8B1C5A', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: 10, lineHeight: 1 }}
            aria-label="Próxima"
          >›</button>
        </div>

        <div style={{ padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, borderTop: '1px solid #F0E8ED' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 4 }}>Galeria</p>
            <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#111' }}>Nosso trabalho fala por si</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                style={{ width: i === cur ? 28 : 8, height: 8, borderRadius: 4, background: i === cur ? '#8B1C5A' : '#E8C4CF', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.3s' }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" style={{ background: '#111', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#8B1C5A', textTransform: 'uppercase', marginBottom: 16 }}>Localização</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', marginBottom: 20 }}>Fica fácil de encontrar</h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 32 }}>
              Dentro do RioMar Shopping Aracaju, Alameda de Serviços, ao lado da lotérica.
            </p>
            <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#8B1C5A', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Seg a Sáb</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>10h às 22h</p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#8B1C5A', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Dom e Feriados</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>14h às 20h</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=RioMar+Shopping+Aracaju" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', background: '#8B1C5A', padding: '11px 22px', borderRadius: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#B8346F'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Como chegar
            </a>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
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
      <style>{`#v3-form input::placeholder { color: rgba(255,255,255,0.45); }`}</style>
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
          <form id="v3-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
      <footer style={{ background: '#111', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, borderTop: '1px solid #1F1F1F' }}>
        <img src="/Logo.PNG" alt="Esmalteria Unhas Top" style={{ height: 36, borderRadius: 4 }} />
        <p style={{ fontSize: 12, color: '#555' }}>RioMar Shopping Aracaju · Alameda de Serviços · © 2025</p>
      </footer>

    </main>
  )
}
