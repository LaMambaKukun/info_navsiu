import React, { useState } from 'react'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 'cover',
      badge: 'Ciberseguridad Pro',
      badgeColor: 'cyan',
      title: 'La Tríada de la Ciberseguridad',
      highlightTitle: 'Tríada CIA',
      subtitle: 'El estándar de oro diseñado para proteger, auditar y resguardar los activos de información en la era digital.',
      tagline: 'Diseño Pro // Estilo Apple TechChic',
      type: 'cover'
    },
    {
      id: 'intro',
      badge: 'Modelo Fundacional',
      badgeColor: 'magenta',
      title: '¿Qué es el Modelo CIA?',
      description: 'La Tríada CIA establece un marco conceptual compuesto por tres pilares interconectados. Un fallo en cualquiera de ellos compromete la seguridad completa del sistema.',
      type: 'intro',
      cards: [
        {
          icon: '✦',
          color: '#00F0FF',
          title: 'Protección Integral',
          text: 'Combina barreras de red, cifrado de hardware y controles de software.'
        },
        {
          icon: '🛡️',
          color: '#FF007F',
          title: 'Resiliencia de Negocio',
          text: 'Mantiene la continuidad de las operaciones ante incidentes o ciberataques.'
        }
      ]
    },
    {
      id: 'confidentiality',
      badge: 'Pilar 01',
      badgeColor: 'cyan',
      title: 'Confidencialidad',
      subtitle: 'Garantizar que los datos sean accesibles únicamente por usuarios y procesos debidamente autenticados.',
      type: 'pillar',
      glowColor: '#00F0FF',
      cards: [
        {
          icon: '🔒',
          title: 'Cifrado de Extremo a Extremo',
          text: 'Protección de datos en reposo y en tránsito con esquemas criptográficos AES-256.'
        },
        {
          icon: '🪪',
          title: 'Autenticación Zero Trust',
          text: 'Verificación continua de identidad y permisos mínimos por usuario.'
        },
        {
          icon: '👁️',
          title: 'Prevención de Fugas (DLP)',
          text: 'Monitoreo activo para evitar la exfiltración de información sensible.'
        }
      ]
    },
    {
      id: 'integrity',
      badge: 'Pilar 02',
      badgeColor: 'magenta',
      title: 'Integridad',
      subtitle: 'Asegurar que la información se mantenga exacta, completa y libre de alteraciones no autorizadas.',
      type: 'pillar',
      glowColor: '#FF007F',
      cards: [
        {
          icon: '🧬',
          title: 'Firmas & Hashes',
          text: 'Validación con algoritmos SHA-256 para verificar la autenticidad de los archivos.'
        },
        {
          icon: '✍️',
          title: 'Control de Cambios',
          text: 'Registros de auditoría (Audit Logs) inmutables para rastrear modificaciones.'
        },
        {
          icon: '⚡',
          title: 'No Repudio',
          text: 'Mecanismos que impiden denegar la autoría de una transacción realizada.'
        }
      ]
    },
    {
      id: 'availability',
      badge: 'Pilar 03',
      badgeColor: 'cyan',
      title: 'Disponibilidad',
      subtitle: 'Garantizar el acceso fluido y sin interrupciones a los datos cuando los usuarios lo requieran.',
      type: 'pillar',
      glowColor: '#00F0FF',
      cards: [
        {
          icon: '☁️',
          title: 'Redundancia & Clusters',
          text: 'Infraestructura de alta disponibilidad sin puntos únicos de fallo (SPOF).'
        },
        {
          icon: '🔄',
          title: 'Respaldos Automatizados',
          text: 'Backups frecuentes con recuperación rápida ante desastres (Disaster Recovery).'
        },
        {
          icon: '🛡️',
          title: 'Mitigación DDoS',
          text: 'Filtros de tráfico para absorber ataques masivos de denegación de servicio.'
        }
      ]
    },
    {
      id: 'summary',
      badge: 'Conclusión',
      badgeColor: 'magenta',
      title: 'Seguridad Digital en Armonía',
      subtitle: 'El equilibrio entre Confidencialidad, Integridad y Disponibilidad define el estándar de excelencia en seguridad informática.',
      type: 'summary'
    }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const slide = slides[currentSlide]

  return (
    <div style={styles.appWrapper}>
      {/* Dynamic Background Glows */}
      <div style={styles.ambientCyan}></div>
      <div style={styles.ambientMagenta}></div>

      {/* Main Glassmorphism Card Container */}
      <main style={styles.appleContainer}>
        {/* Navigation Bar */}
        <header style={styles.headerBar}>
          <div style={styles.logoPill}>
            <span style={styles.logoDot}></span>
            <span style={styles.logoText}>INFO_NAVSIU // APPLE TECHCHIC</span>
          </div>
          <div style={styles.slideCounter}>
            0{currentSlide + 1} <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span> 0{slides.length}
          </div>
        </header>

        {/* COVER SLIDE */}
        {slide.type === 'cover' && (
          <div style={styles.coverView}>
            <span style={slide.badgeColor === 'cyan' ? styles.badgeCyan : styles.badgeMagenta}>
              {slide.badge}
            </span>
            <h1 style={styles.appleHeroTitle}>
              {slide.title}
            </h1>
            <p style={styles.appleHeroSubtitle}>{slide.subtitle}</p>

            {/* 3D Glass Pill Elements */}
            <div style={styles.triadPillGroup}>
              <div style={{ ...styles.triadGlassItem, borderColor: '#00F0FF' }}>
                <span style={{ color: '#00F0FF', fontWeight: '800' }}>C</span> Confidencialidad
              </div>
              <div style={{ ...styles.triadGlassItem, borderColor: '#FF007F' }}>
                <span style={{ color: '#FF007F', fontWeight: '800' }}>I</span> Integridad
              </div>
              <div style={{ ...styles.triadGlassItem, borderColor: '#00F0FF' }}>
                <span style={{ color: '#00F0FF', fontWeight: '800' }}>A</span> Disponibilidad
              </div>
            </div>
          </div>
        )}

        {/* INTRO SLIDE */}
        {slide.type === 'intro' && (
          <div style={styles.contentView}>
            <div style={styles.badgeRow}>
              <span style={styles.badgeMagenta}>{slide.badge}</span>
            </div>
            <h2 style={styles.sectionHeading}>{slide.title}</h2>
            <p style={styles.sectionParagraph}>{slide.description}</p>

            <div style={styles.introCardsGrid}>
              {slide.cards.map((c, i) => (
                <div key={i} style={{ ...styles.appleCard, borderTop: `2px solid ${c.color}` }}>
                  <span style={{ ...styles.cardIcon, color: c.color }}>{c.icon}</span>
                  <h3 style={styles.cardHeader}>{c.title}</h3>
                  <p style={styles.cardDescription}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PILLAR SLIDES */}
        {slide.type === 'pillar' && (
          <div style={styles.contentView}>
            <div style={styles.pillarHeaderRow}>
              <div>
                <span style={slide.badgeColor === 'cyan' ? styles.badgeCyan : styles.badgeMagenta}>
                  {slide.badge}
                </span>
                <h2 style={{ ...styles.sectionHeading, color: slide.glowColor }}>
                  {slide.title}
                </h2>
              </div>
              <p style={styles.pillarSubText}>{slide.subtitle}</p>
            </div>

            <div style={styles.pillarGrid}>
              {slide.cards.map((c, i) => (
                <div key={i} style={styles.appleCardFeature}>
                  <div style={{ ...styles.featureIconBadge, borderColor: slide.glowColor }}>
                    <span>{c.icon}</span>
                  </div>
                  <h3 style={styles.cardHeader}>{c.title}</h3>
                  <p style={styles.cardDescription}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUMMARY SLIDE */}
        {slide.type === 'summary' && (
          <div style={styles.coverView}>
            <div style={styles.appleCheckBadge}>✓</div>
            <span style={styles.badgeMagenta}>{slide.badge}</span>
            <h2 style={styles.appleHeroTitle}>{slide.title}</h2>
            <p style={styles.appleHeroSubtitle}>{slide.subtitle}</p>
          </div>
        )}

        {/* Footer Navigation */}
        <footer style={styles.footerBar}>
          <div style={styles.indicatorGroup}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  ...styles.indicatorDot,
                  backgroundColor: currentSlide === idx ? '#00F0FF' : 'rgba(255,255,255,0.2)',
                  width: currentSlide === idx ? '32px' : '8px'
                }}
              />
            ))}
          </div>

          <div style={styles.navGroup}>
            <button onClick={prevSlide} style={styles.appleBtnSecondary}>
              Anterior
            </button>
            <button onClick={nextSlide} style={styles.appleBtnPrimary}>
              Siguiente
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

// Apple-inspired Dark Glassmorphism Styles
const styles = {
  appWrapper: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
    color: '#F5F5F7',
    position: 'relative',
    overflow: 'hidden'
  },
  ambientCyan: {
    position: 'absolute',
    top: '-10%',
    left: '20%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  ambientMagenta: {
    position: 'absolute',
    bottom: '-10%',
    right: '20%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 0, 127, 0.15) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  appleContainer: {
    width: '100%',
    maxWidth: '1000px',
    minHeight: '600px',
    backgroundColor: 'rgba(22, 22, 26, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '30px',
    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px 52px',
    position: 'relative',
    zIndex: 2
  },
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '8px 16px',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.08)'
  },
  logoDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#00F0FF',
    boxShadow: '0 0 10px #00F0FF'
  },
  logoText: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#86868B',
    letterSpacing: '1.2px'
  },
  slideCounter: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#00F0FF',
    letterSpacing: '1px'
  },
  coverView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto 0'
  },
  appleHeroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
    marginTop: '16px',
    marginBottom: '16px',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1A6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  appleHeroSubtitle: {
    fontSize: '19px',
    color: '#86868B',
    maxWidth: '640px',
    lineHeight: '1.5',
    fontWeight: '400',
    marginBottom: '32px'
  },
  triadPillGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  triadGlassItem: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid',
    borderRadius: '100px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#F5F5F7',
    backdropFilter: 'blur(10px)'
  },
  contentView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto 0'
  },
  badgeRow: {
    marginBottom: '12px'
  },
  badgeCyan: {
    background: 'rgba(0, 240, 255, 0.1)',
    border: '1px solid rgba(0, 240, 255, 0.4)',
    color: '#00F0FF',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  badgeMagenta: {
    background: 'rgba(255, 0, 127, 0.1)',
    border: '1px solid rgba(255, 0, 127, 0.4)',
    color: '#FF007F',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  sectionHeading: {
    fontSize: '38px',
    fontWeight: '700',
    letterSpacing: '-0.01em',
    marginBottom: '12px'
  },
  sectionParagraph: {
    fontSize: '17px',
    color: '#86868B',
    maxWidth: '700px',
    lineHeight: '1.6',
    marginBottom: '32px'
  },
  introCardsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  appleCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '28px',
    backdropFilter: 'blur(10px)'
  },
  cardIcon: {
    fontSize: '24px',
    display: 'block',
    marginBottom: '12px'
  },
  cardHeader: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#F5F5F7'
  },
  cardDescription: {
    fontSize: '14px',
    color: '#86868B',
    lineHeight: '1.5'
  },
  pillarHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '32px'
  },
  pillarSubText: {
    fontSize: '15px',
    color: '#86868B',
    maxWidth: '400px',
    textAlign: 'right',
    lineHeight: '1.5'
  },
  pillarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  },
  appleCardFeature: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '22px',
    padding: '28px 22px',
    display: 'flex',
    flexDirection: 'column'
  },
  featureIconBadge: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginBottom: '20px'
  },
  appleCheckBadge: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: '900',
    marginBottom: '24px',
    boxShadow: '0 0 40px rgba(0, 240, 255, 0.4)'
  },
  footerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  },
  indicatorGroup: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  indicatorDot: {
    height: '8px',
    borderRadius: '100px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
  },
  navGroup: {
    display: 'flex',
    gap: '12px'
  },
  appleBtnSecondary: {
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    color: '#F5F5F7',
    padding: '10px 22px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  appleBtnPrimary: {
    background: '#F5F5F7',
    border: 'none',
    color: '#000000',
    padding: '10px 24px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer'
  }
}