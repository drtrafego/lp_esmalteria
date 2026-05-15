'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const WA_NUMBER = '5579998931545'

function ObrigadoContent() {
  const params = useSearchParams()
  const nome = params.get('nome') || ''
  const tel = params.get('tel') || ''
  const [count, setCount] = useState(5)

  useEffect(() => {
    if (count <= 0) {
      const msg = encodeURIComponent(
        `Oi! Me chamo ${nome} e tenho interesse em agendar um horário. Meu WhatsApp: ${tel}`
      )
      window.location.href = `https://wa.me/${WA_NUMBER}?text=${msg}`
      return
    }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, nome, tel])

  return (
    <main style={{
      minHeight: '100vh',
      background: '#8B1C5A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 24px',
      fontFamily: 'var(--font-inter), sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -120, right: -120, width: 420, height: 420, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: 36 }}>
          ✓
        </div>

        <h1 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: 'clamp(2rem, 6vw, 3.2rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: 18,
        }}>
          {nome ? `Obrigada, ${nome}!` : 'Obrigada!'}
        </h1>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, marginBottom: 44 }}>
          Recebemos suas informações. Em instantes você será direcionada para o nosso WhatsApp para confirmar seu horário.
        </p>

        <div style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.12)',
          border: '1.5px solid rgba(255,255,255,0.22)',
          borderRadius: 20,
          padding: '28px 56px',
          marginBottom: 28,
        }}>
          <span style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
          }}>{count}</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 8, letterSpacing: '0.06em' }}>
            {count === 1 ? 'segundo' : 'segundos'}
          </span>
        </div>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
          Redirecionando para o WhatsApp automaticamente…
        </p>
      </div>
    </main>
  )
}

export default function Obrigado() {
  return (
    <Suspense>
      <ObrigadoContent />
    </Suspense>
  )
}
