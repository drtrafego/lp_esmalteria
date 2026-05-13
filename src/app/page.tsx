export default function Home() {
  const versions = [
    {
      href: '/v1',
      num: 'V1',
      name: 'Noir Berry',
      desc: 'Dark luxury. Fundo preto + magenta vibrante + dourado. Glow effects, elegância premium.',
      bg: '#0D0408',
      accent: '#8B1C5A',
      text: '#F5F0F0',
      tag: 'Dark Mode · Luxury',
    },
    {
      href: '/v2',
      num: 'V2',
      name: 'Cream & Wine',
      desc: 'Minimalismo quente. Creme suave + vinho + tipografia oversized. Sofisticado e feminino.',
      bg: '#FDF6F2',
      accent: '#8B1C5A',
      text: '#1A0D13',
      tag: 'Minimal · Elegante',
    },
    {
      href: '/v3',
      num: 'V3',
      name: 'Editorial Bold',
      desc: 'Layout magazine split. Branco + berry + hero assimétrico. Moderno e de alta conversão.',
      bg: '#fff',
      accent: '#8B1C5A',
      text: '#111',
      tag: 'Editorial · Magazine',
    },
  ]

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", minHeight: '100vh', background: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <img src="/Logo.jpg" alt="Esmalteria Unhas Top" style={{ height: 44, borderRadius: 4, marginBottom: 24 }} />
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
          Escolha o layout
        </h1>
        <p style={{ fontSize: 15, color: '#666' }}>3 versões visuais. Abra cada uma para comparar</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 960, width: '100%' }}>
        {versions.map(v => (
          <a
            key={v.href}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: v.bg, borderRadius: 20, padding: '36px 32px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s, box-shadow 0.2s', display: 'block' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 20px 60px rgba(139,28,90,0.3)` }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: '3rem', fontWeight: 700, color: v.accent, lineHeight: 1 }}>{v.num}</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: v.accent, background: `${v.accent}18`, padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase' }}>{v.tag}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 22, fontWeight: 700, color: v.text, marginBottom: 10 }}>{v.name}</h2>
            <p style={{ fontSize: 14, color: v.text === '#111' || v.text === '#1A0D13' ? '#999' : '#8A7A82', lineHeight: 1.65 }}>{v.desc}</p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: v.accent }}>
              Abrir versão
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#333', marginTop: 40 }}>DR.TRAFEGO · Esmalteria Unhas Top · 2025</p>
    </main>
  )
}
