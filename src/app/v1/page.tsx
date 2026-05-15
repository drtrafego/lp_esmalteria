'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Logo({ height = 40 }: { height?: number }) {
  const ratio = 3.6
  const w = Math.round(height * ratio)
  return (
    <div style={{ width: w, height, overflow: 'hidden', borderRadius: 6, flexShrink: 0 }}>
      <img
        src="/Logo.PNG"
        alt="Esmalteria Unhas Top"
        style={{
          width: '100%', height: 'auto', display: 'block',
          marginTop: `${-height * 0.15}px`,
          marginBottom: `${-height * 0.15}px`,
          minHeight: `${height * 1.3}px`,
          objectFit: 'cover', objectPosition: 'center',
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
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !tel.trim()) return
    router.push(`/obrigado?nome=${encodeURIComponent(nome)}&tel=${encodeURIComponent(tel)}`)
  }

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#FDF8F5', color: '#1A0D13', overflowX: 'hidden' }}>

      {/* HERO — foto de fundo + overlay berry */}
      <section style={{ background: '#1A0D13', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Foto de fundo */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/img3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55, pointerEvents: 'none' }} />
        {/* Overlay com gradiente berry */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(50,5,25,0.72) 0%, rgba(139,28,90,0.58) 50%, rgba(50,5,25,0.80) 100%)', pointerEvents: 'none' }} />
        {/* Círculos decorativos */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780 }}>
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
              href="#form"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#8B1C5A', padding: '16px 36px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#FDF0F4'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
            >
              Agendar meu horário
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
      <section style={{ background: '#6A1444', padding: '16px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px 20px', justifyItems: 'center' }}>
          {['⭐ 4.3 no Google', '9 anos no RioMar', 'Autoclave Garantido', 'Espera: até 20 min'].map(t => (
            <span key={t} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.82)', textAlign: 'center' }}>{t}</span>
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
            href="#form"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '15px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6A1444'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#8B1C5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
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
            { n: '1', title: 'Preencha o formulário', desc: 'Deixe seu nome e WhatsApp. Leva menos de 30 segundos.' },
            { n: '2', title: 'Confirme pelo WhatsApp', desc: 'Nossa equipe entra em contato e confirma seu horário na hora.' },
            { n: '3', title: 'Saia do jeito que você gosta', desc: 'Feito com técnica, capricho e dentro do tempo que você tem.' },
          ].map(s => (
            <div key={s.n}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#8B1C5A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "var(--font-playfair), serif", fontSize: 20, fontWeight: 700, color: '#fff' }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A0D13', marginBottom: 10, lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#9B7080', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
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
            <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
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

      {/* FORMULÁRIO */}
      <section id="form" style={{ background: '#8B1C5A', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 16 }}>Agendamento</p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.1 }}>
            Garanta seu horário agora
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 36, lineHeight: 1.6 }}>
            Preencha abaixo e entraremos em contato em até 1 hora.
          </p>
          <style>{`
            #v1-form input::placeholder { color: rgba(255,255,255,0.45); }
            #v1-form input:focus { border-color: rgba(255,255,255,0.65) !important; outline: none; }
          `}</style>
          <form id="v1-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 16, width: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp (com DDD)"
              value={tel}
              onChange={e => setTel(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 16, width: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
            />
            <button
              type="submit"
              style={{ padding: '17px', borderRadius: 12, border: 'none', background: '#fff', color: '#8B1C5A', fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', marginTop: 4 }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#FDF0F4'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#fff'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}
            >
              Quero agendar meu horário
            </button>
          </form>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>
            Suas informações são sigilosas e não serão compartilhadas.
          </p>
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
