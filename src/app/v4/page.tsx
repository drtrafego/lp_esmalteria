'use client'

import { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '5579999999999'
const WA_MSG = encodeURIComponent('Oi! Vi o site de vocês e quero agendar um horário. Podem me ajudar?')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useCounter(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

function StatCard({ num, suffix = '', label, delay, active }: { num: number; suffix?: string; label: string; delay: string; active: boolean }) {
  const val = useCounter(num, active)
  return (
    <div className={`reveal ${delay}`} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 8 }}>
        {val}{suffix}
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, letterSpacing: '0.06em' }}>{label}</div>
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
  { title: 'Atendimento Express', desc: 'Espera máxima de 20 minutos, sem hora marcada, sem fila.' },
  { title: '3 serviços ao mesmo tempo', desc: 'Unhas das mãos, dos pés e sobrancelha em uma única visita. Sai completa.' },
  { title: 'Esterilização em Autoclave', desc: 'Segurança que a maioria dos salões não tem. Todos os instrumentos esterilizados antes de chegar em você.' },
  { title: 'Equipe treinada pessoalmente', desc: 'Cada profissional formada pela proprietária desde o primeiro dia. Não é mão de obra avulsa: é time formado.' },
  { title: 'Horário estendido', desc: 'Segunda a sábado das 10h às 22h. Domingos e feriados das 14h às 20h.' },
  { title: 'Todo tipo de pagamento', desc: 'Pix, dinheiro, débito e crédito com parcelamento. Várias bandeiras aceitas.' },
]

export default function V4() {
  useReveal()

  const statsRef = useRef<HTMLDivElement>(null)
  const [statsActive, setStatsActive] = useState(false)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true) }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: '#060008', color: '#F5F0F0', overflowX: 'hidden' }}>

      {/* WA FLUTUANTE */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="animate-pulse-border"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, background: '#25D366', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.12)'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 32px', overflow: 'hidden' }}>

        {/* Aurora background */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,28,90,0.55) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(139,28,90,0.25) 0%, transparent 60%)', backgroundSize: '200% 200%', animation: 'aurora 8s ease infinite', pointerEvents: 'none' }} />

        {/* Orb esquerdo */}
        <div style={{ position: 'absolute', top: '15%', left: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,28,90,0.35) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'orb 12s ease-in-out infinite', pointerEvents: 'none' }} />

        {/* Orb direito */}
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'orb 15s ease-in-out infinite reverse', pointerEvents: 'none' }} />

        {/* Grade de pontos */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>

          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,28,90,0.2)', border: '1px solid rgba(139,28,90,0.5)', borderRadius: 100, padding: '6px 18px', fontSize: 11, fontWeight: 700, color: '#E8A0C0', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 36 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8A0C0', display: 'inline-block', animation: 'pulseBorder 2s ease-in-out infinite' }} />
            9 anos no RioMar Shopping, Aracaju
          </div>

          <h1 className="animate-fade-up delay-200" style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 700, lineHeight: 1.0, marginBottom: 32, color: '#fff', letterSpacing: '-0.02em' }}>
            Manicure, cabelo<br />
            <em style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C4CF 50%, #8B1C5A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% 200%', animation: 'aurora 4s ease infinite' }}>e sobrancelha.</em><br />
            <span style={{ fontSize: '0.55em', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Tudo numa visita só.</span>
          </h1>

          <p className="animate-fade-up delay-400" style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 52, maxWidth: 520, margin: '0 auto 52px' }}>
            Na Esmalteria Unhas Top, você faz até 3 serviços ao mesmo tempo e sai em menos de 1 hora. No RioMar Shopping, Aracaju.
          </p>

          <div className="animate-fade-up delay-500" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '17px 40px', borderRadius: 14, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 0 40px rgba(139,28,90,0.5)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#A82270'; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 0 60px rgba(139,28,90,0.7)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#8B1C5A'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 0 40px rgba(139,28,90,0.5)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.65)', padding: '17px 28px', borderRadius: 14, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.65)' }}
            >
              Ver serviços
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-in delay-500" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* STATS COM COUNTER */}
      <section ref={statsRef} style={{ padding: '80px 32px', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 48 }}>
          <StatCard num={9}   suffix="+" label="anos de experiência"   delay="d1" active={statsActive} />
          <StatCard num={15}  suffix=""  label="profissionais no espaço" delay="d2" active={statsActive} />
          <StatCard num={20}  suffix="min" label="espera máxima"        delay="d3" active={statsActive} />
          <StatCard num={3}   suffix=""  label="serviços simultâneos"   delay="d4" active={statsActive} />
          <StatCard num={4}   suffix=".3★" label="no Google"            delay="d5" active={statsActive} />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: '110px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16 }}>Serviços</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
              O que você encontra aqui
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
            {services.map((s, i) => (
              <div
                key={s.name}
                className={`reveal d${(i % 4) + 1}`}
                style={{ background: '#060008', padding: '32px 28px', transition: 'background 0.25s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#110018'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#060008'}
              >
                <div style={{ width: 28, height: 2, background: '#8B1C5A', marginBottom: 20, transition: 'width 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.width = '48px'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.width = '28px'}
                />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 17, fontWeight: 600, marginBottom: 10, color: '#F5F0F0' }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 48, textAlign: 'center' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '15px 36px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 0 32px rgba(139,28,90,0.35)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#A82270'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#8B1C5A'; el.style.transform = 'translateY(0)' }}
            >
              Agendar meu horário
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: '110px 32px', background: 'rgba(139,28,90,0.06)', borderTop: '1px solid rgba(139,28,90,0.15)', borderBottom: '1px solid rgba(139,28,90,0.15)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16 }}>Por que escolher</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
              Por que quem vem uma vez sempre volta
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {diferenciais.map((d, i) => (
              <div
                key={d.title}
                className={`reveal d${(i % 3) + 1}`}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(139,28,90,0.12)'; el.style.borderColor = 'rgba(139,28,90,0.4)'; el.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(255,255,255,0.03)'; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)' }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#F5F0F0', marginBottom: 12 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: '110px 32px', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16 }}>Simples assim</p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
            Em 3 passos, você já está no espaço
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 56 }}>
          {[
            { n: '1', t: 'Escolha como prefere chegar', d: 'Agende pelo WhatsApp ou apareça direto. Sem complicação.' },
            { n: '2', t: 'Seja atendida em até 20 minutos', d: 'Chegou, foi recebida. Pode aproveitar o RioMar enquanto espera.' },
            { n: '3', t: 'Saia do jeito que você gosta', d: 'Feito com técnica, capricho e dentro do tempo que você tem.' },
          ].map((s, i) => (
            <div key={s.n} className={`reveal d${i + 1}`}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(139,28,90,0.15)', border: '1px solid rgba(139,28,90,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "var(--font-playfair), serif", fontSize: 20, fontWeight: 700, color: '#E8A0C0' }}>{s.n}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="reveal">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8B1C5A', color: '#fff', padding: '16px 40px', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 0 32px rgba(139,28,90,0.35)' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#A82270'; el.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#8B1C5A'; el.style.transform = 'translateY(0)' }}
          >
            Agendar agora
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section style={{ padding: '80px 32px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56, alignItems: 'center' }}>
          <div className="reveal-left">
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16 }}>Localização</p>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: 20, lineHeight: 1.15 }}>Fica fácil de encontrar</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 32 }}>
              Dentro do RioMar Shopping Aracaju, Alameda de Serviços, ao lado da lotérica.
            </p>
            <div style={{ display: 'flex', gap: 36, marginBottom: 36 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Seg a Sáb</p>
                <p style={{ fontSize: 18, fontWeight: 700 }}>10h às 22h</p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Dom e Feriados</p>
                <p style={{ fontSize: 18, fontWeight: 700 }}>14h às 20h</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=RioMar+Shopping+Aracaju"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E8A0C0', fontSize: 14, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(139,28,90,0.4)', padding: '11px 22px', borderRadius: 8, transition: 'all 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(139,28,90,0.15)'; el.style.borderColor = '#8B1C5A' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(139,28,90,0.4)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Como chegar
            </a>
          </div>
          <div className="reveal" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(139,28,90,0.3)' }}>
            <iframe
              title="Localização Esmalteria Unhas Top"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5!2d-37.0564!3d-10.9302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab16a2da2e5e3%3A0x4c8b7b15fbeec587!2sRioMar%20Shopping%20Aracaju!5e0!3m2!1spt-BR!2sbr!4v1683900000000"
              width="100%"
              height="320"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.5) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ position: 'relative', padding: '120px 32px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,28,90,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
            Pronta para<br />
            <em style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C4CF, #8B1C5A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>agendar?</em>
          </h2>
          <p className="reveal d1" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 48 }}>
            Manda uma mensagem e a gente confirma seu horário na hora.
          </p>
          <div className="reveal d2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#8B1C5A', color: '#fff', padding: '18px 48px', borderRadius: 14, fontSize: 17, fontWeight: 700, textDecoration: 'none', transition: 'all 0.25s', boxShadow: '0 0 60px rgba(139,28,90,0.5)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#A82270'; el.style.transform = 'translateY(-4px) scale(1.02)'; el.style.boxShadow = '0 0 80px rgba(139,28,90,0.7)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#8B1C5A'; el.style.transform = 'translateY(0) scale(1)'; el.style.boxShadow = '0 0 60px rgba(139,28,90,0.5)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Agendar pelo WhatsApp
            </a>
            <p style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Retorno em até 1 hora no horário comercial.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <img src="/Logo.jpg" alt="Esmalteria Unhas Top" style={{ height: 36, borderRadius: 4, opacity: 0.85 }} />
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>RioMar Shopping Aracaju · © 2025</p>
      </footer>

    </main>
  )
}
