import React, { useState } from 'react'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 'cover',
      badge: 'Modelos de Seguridad Digital',
      badgeColor: 'cyan',
      title: 'La Tríada de la Ciberseguridad',
      highlightTitle: 'Ciberseguridad',
      subtitle: 'Estrategia fundamental para proteger los activos de información: Confidencialidad, Integridad y Disponibilidad.',
      tagline: 'Presentación Ejecutiva TechChic',
      type: 'cover'
    },
    {
      id: 'intro',
      badge: 'Fundamento Esencial',
      badgeColor: 'magenta',
      title: '¿Qué es la Tríada CIA?',
      description: 'La Tríada CIA es un modelo estándar diseñado para guiar las políticas y estrategias de seguridad de la información en organizaciones modernas.',
      type: 'intro',
      cards: [
        {
          icon: '⚡',
          color: '#00F0FF',
          title: 'Enfoque Holístico',
          text: 'Ninguno de los tres pilares funciona de manera aislada. La protección requiere un equilibrio dinámico y continuo.'
        },
        {
          icon: '🛡️',
          color: '#FF007F',
          title: 'Gestión de Riesgos',
          text: 'Cualquier incidente o brecha de seguridad representa una vulneración directa a uno o más de estos ejes centrales.'
        }
      ]
    },
    {
      id: 'confidentiality',
      badge: 'Pilar 01',
      badgeColor: 'cyan',
      title: 'Confidencialidad',
      subtitle: 'Garantizar que los datos y la información sean accesibles únicamente por el personal o sistemas debidamente autorizados.',
      type: 'pillar',
      glowColor: '#00F0FF',
      cards: [
        {
          icon: '🔐',
          title: 'Cifrado Robusto',
          text: 'Protección de datos en tránsito (TLS/SSL) y en reposo mediante algoritmos avanzados como AES-256.'
        },
        {
          icon: '👤',
          title: 'Autenticación MFA',
          text: 'Uso de doble factor de autenticación para verificar con certeza la identidad de los usuarios.'
        },
        {
          icon: '🪪',
          title: 'Control de Acceso',
          text: 'Aplicación del principio de mínimo privilegio para limitar permisos estrictamente necesarios.'
        }
      ]
    },
    {
      id: 'integrity',
      badge: 'Pilar 02',
      badgeColor: 'magenta',
      title: 'Integridad',
      subtitle: 'Asegurar que la información se mantenga exacta, completa y libre de modificaciones no autorizadas o malintencionadas.',
      type: 'pillar',
      glowColor: '#FF007F',
      cards: [
        {
          icon: '🧬',
          title: 'Funciones Hash',
          text: 'Verificación de archivos mediante algoritmos criptográficos como SHA-256 para detectar alteración.'
        },
        {
          icon: '✍️',
          title: 'Firmas Digitales',
          text: 'Garantizan la autenticidad del origen y aseguran el no repudio de transacciones y documentos.'
        },
        {
          icon: '🔄',
          title: 'Control de Versiones',
          text: 'Auditorías y registros (logs) inmutables para rastrear cualquier cambio en bases de datos.'
        }
      ]
    },
    {
      id: 'availability',
      badge: 'Pilar 03',
      badgeColor: 'cyan',
      title: 'Disponibilidad',
      subtitle: 'Garantizar el acceso oportuno y confiable a los sistemas, datos y aplicaciones para usuarios autorizados cuando lo requieran.',
      type: 'pillar',
      glowColor: '#00F0FF',
      cards: [
        {
          icon: '🖥️',
          title: 'Redundancia',
          text: 'Sistemas duplicados y clusters de servidores para eliminar puntos únicos de falla (SPOF).'
        },
        {
          icon: '☁️',
          title: 'Respaldos (Backups)',
          text: 'Copias de seguridad periódicas, automatizadas y probadas almacenadas en ubicaciones seguras.'
        },
        {
          icon: '🛡️',
          title: 'Protección DDoS',
          text: 'Mitigación activa de ataques masivos que buscan saturar y dejar fuera de servicio la red.'
        }
      ]
    },
    {
      id: 'summary',
      badge: 'Resumen Ejecutivo',
      badgeColor: 'magenta',
      title: 'Seguridad Integral en Equilibrio',
      subtitle: 'La correcta aplicación de la Tríada de la Ciberseguridad garantiza la resiliencia operativa, la continuidad del negocio y la confianza digital.',
      type: 'summary'
    }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const slide = slides[currentSlide]

  return (
    <div style={styles.appWrapper}>
      {/* Dynamic Background Effects */}
      <div style={styles.gridOverlay}></div>
      <div style={styles.cyanGlowBlob}></div>
      <div style={styles.magentaGlowBlob}></div>

      {/* Main Slide Card Container */}
      <main style={styles.slideCard}>
        {/* Top Header Controls */}
        <header style={styles.slideHeader}>
          <div style={styles.brandBadge}>
            <span style={styles.brandDot}></span>
            <span style={styles.brandText}>TECHCHIC // INFOGRAFÍA</span>
          </div>
          <div style={styles.slideCounter}>
            0{currentSlide + 1} <span style={{ color: '#555566' }}>/</span> 0{slides.length}
          </div>
        </header>

        {/* SLIDE TYPE: COVER */}
        {slide.type === 'cover' && (
          <div style={styles.coverLayout}>
            {/* 3D Visual Hero */}
            <div style={styles.hero3dGroup}>
              <div style={{ ...styles.heroBox, ...styles.heroBoxCyan }}>
                <span style={{ fontSize: '32px' }}>🔒</span>
              </div>
              <div style={{ ...styles.heroBox, ...styles.heroBoxCenter }}>
                <span style={{ fontSize: '42px' }}>🛡️</span>
              </div>
              <div style={{ ...styles.heroBox, ...styles.heroBoxMagenta }}>
                <span style={{ fontSize: '32px' }}>🖥️</span>
              </div>
            </div>

            <span style={slide.badgeColor === 'cyan' ? styles.badgeCyan : styles.badgeMagenta}>
              {slide.badge}
            </span>

            <h1 style={styles.coverTitle}>
              La Tríada de la <span style={styles.cyanTextGlow}>{slide.highlightTitle}</span>
            </h1>

            <p style={styles.coverSubtitle}>{slide.subtitle}</p>

            <div style={styles.taglineBox}>
              <span style={styles.taglineDot}></span>
              <span style={styles.taglineText}>{slide.tagline}</span>
            </div>
          </div>
        )}

        {/* SLIDE TYPE: INTRO */}
        {slide.type === 'intro' && (
          <div style={styles.contentLayout}>
            <div style={styles.sectionHeader}>
              <span style={styles.badgeMagenta}>{slide.badge}</span>
              <h2 style={styles.sectionTitle}>{slide.title}</h2>
              <div style={styles.accentBar}></div>
            </div>

            <div style={styles.introGrid}>
              <div style={styles.introTextCol}>
                <p style={styles.bodyParagraph}>{slide.description}</p>
                {slide.cards.map((c, i) => (
                  <div key={i} style={{ ...styles.card3d, borderLeft: `4px solid ${c.color}`, marginBottom: '16px' }}>
                    <h3 style={{ ...styles.cardTitleSmall, color: c.color }}>
                      <span style={{ marginRight: '8px' }}>{c.icon}</span> {c.title}
                    </h3>
                    <p style={styles.cardTextSmall}>{c.text}</p>
                  </div>
                ))}
              </div>

              {/* Graphic Representation */}
              <div style={styles.introVisualCol}>
                <div style={styles.triangleContainer}>
                  <svg width="260" height="220" viewBox="0 0 260 220" style={{ overflow: 'visible' }}>
                    <polygon
                      points="130,20 240,190 20,190"
                      style={{
                        fill: 'rgba(0, 240, 255, 0.03)',
                        stroke: 'url(#triGrad)',
                        strokeWidth: '4',
                        filter: 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.4))'
                      }}
                    />
                    <defs>
                      <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#FF007F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={styles.triLabelTop}>CONFIDENCIALIDAD</div>
                  <div style={styles.triLabelRight}>INTEGRIDAD</div>
                  <div style={styles.triLabelLeft}>DISPONIBILIDAD</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE TYPE: PILLAR */}
        {slide.type === 'pillar' && (
          <div style={styles.contentLayout}>
            <div style={styles.sectionHeaderRow}>
              <div>
                <span style={slide.badgeColor === 'cyan' ? styles.badgeCyan : styles.badgeMagenta}>
                  {slide.badge}
                </span>
                <h2 style={{ ...styles.sectionTitle, color: slide.glowColor, textShadow: `0 0 20px ${slide.glowColor}80` }}>
                  {slide.title}
                </h2>
              </div>
              <p style={styles.pillarSubtitle}>{slide.subtitle}</p>
            </div>

            <div style={styles.cardsRow}>
              {slide.cards.map((c, i) => (
                <div key={i} style={styles.card3dCol}>
                  <div style={{ ...styles.iconBadge, borderColor: slide.glowColor }}>
                    <span>{c.icon}</span>
                  </div>
                  <h3 style={styles.cardColTitle}>{c.title}</h3>
                  <p style={styles.cardColText}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE: SUMMARY */}
        {slide.type === 'summary' && (
          <div style={styles.coverLayout}>
            <div style={styles.summaryCheckIcon}>✓</div>
            <span style={styles.badgeMagenta}>{slide.badge}</span>
            <h2 style={styles.coverTitle}>{slide.title}</h2>
            <p style={styles.coverSubtitle}>{slide.subtitle}</p>
            <div style={{ ...styles.card3d, padding: '16px 36px', borderColor: '#00F0FF', marginTop: '12px' }}>
              <span style={{ color: '#00F0FF', fontWeight: '700', fontSize: '18px' }}>
                ¿Preguntas o Comentarios?
              </span>
            </div>
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <footer style={styles.slideFooter}>
          <div style={styles.dotsGroup}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  ...styles.dotBtn,
                  backgroundColor: currentSlide === idx ? '#00F0FF' : 'rgba(255,255,255,0.2)',
                  boxShadow: currentSlide === idx ? '0 0 10px #00F0FF' : 'none',
                  width: currentSlide === idx ? '28px' : '10px'
                }}
              />
            ))}
          </div>

          <div style={styles.navButtons}>
            <button onClick={prevSlide} style={styles.btnNav}>
              ← Anterior
            </button>
            <button onClick={nextSlide} style={{ ...styles.btnNav, ...styles.btnNavPrimary }}>
              Siguiente →
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

// TechChic Inline Styles Object
const styles = {
  appWrapper: {
    backgroundColor: '#050508',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden'
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '32px 32px',
    pointerEvents: 'none'
  },
  cyanGlowBlob: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'rgba(0, 240, 255, 0.08)',
    filter: 'blur(90px)',
    pointerEvents: 'none'
  },
  magentaGlowBlob: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'rgba(255, 0, 127, 0.08)',
    filter: 'blur(90px)',
    pointerEvents: 'none'
  },
  slideCard: {
    width: '100%',
    maxWidth: '1100px',
    minHeight: '620px',
    backgroundColor: 'rgba(10, 10, 14, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '36px 48px',
    position: 'relative',
    zIndex: 2
  },
  slideHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  brandBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,255,255,0.04)',
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.08)'
  },
  brandDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#00F0FF',
    boxShadow: '0 0 8px #00F0FF'
  },
  brandText: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#A0A0B0',
    letterSpacing: '1px'
  },
  slideCounter: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#00F0FF',
    letterSpacing: '1px'
  },
  coverLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto 0'
  },
  hero3dGroup: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '28px'
  },
  heroBox: {
    width: '70px',
    height: '70px',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid'
  },
  heroBoxCyan: {
    background: 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(0,240,255,0.05))',
    borderColor: '#00F0FF',
    transform: 'rotate(-10deg)',
    boxShadow: '0 0 25px rgba(0,240,255,0.3)'
  },
  heroBoxCenter: {
    width: '85px',
    height: '85px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))',
    borderColor: '#FFFFFF',
    transform: 'scale(1.1)',
    boxShadow: '0 0 30px rgba(255,255,255,0.2)'
  },
  heroBoxMagenta: {
    background: 'linear-gradient(135deg, rgba(255,0,127,0.2), rgba(255,0,127,0.05))',
    borderColor: '#FF007F',
    transform: 'rotate(10deg)',
    boxShadow: '0 0 25px rgba(255,0,127,0.3)'
  },
  badgeCyan: {
    background: 'rgba(0, 240, 255, 0.1)',
    border: '1px solid #00F0FF',
    color: '#00F0FF',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    display: 'inline-block'
  },
  badgeMagenta: {
    background: 'rgba(255, 0, 127, 0.1)',
    border: '1px solid #FF007F',
    color: '#FF007F',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    display: 'inline-block'
  },
  coverTitle: {
    fontSize: '44px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '16px',
    maxWidth: '800px'
  },
  cyanTextGlow: {
    color: '#00F0FF',
    textShadow: '0 0 20px rgba(0, 240, 255, 0.6)'
  },
  coverSubtitle: {
    fontSize: '18px',
    color: '#A0A0B0',
    maxWidth: '620px',
    lineHeight: '1.6',
    marginBottom: '28px'
  },
  taglineBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(255,255,255,0.04)',
    padding: '8px 20px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  taglineDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FF007F',
    boxShadow: '0 0 8px #FF007F'
  },
  taglineText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#E0E0EC'
  },
  contentLayout: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center'
  },
  sectionHeader: {
    marginBottom: '24px'
  },
  sectionHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '28px'
  },
  sectionTitle: {
    fontSize: '34px',
    fontWeight: '800',
    marginTop: '6px'
  },
  accentBar: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #00F0FF 0%, #FF007F 100%)',
    borderRadius: '2px',
    marginTop: '12px'
  },
  introGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '32px',
    alignItems: 'center'
  },
  introTextCol: {},
  bodyParagraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#E0E0EC',
    marginBottom: '24px'
  },
  card3d: {
    background: 'rgba(18, 18, 26, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '20px 24px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
  },
  cardTitleSmall: {
    fontSize: '17px',
    fontWeight: '700',
    marginBottom: '6px'
  },
  cardTextSmall: {
    fontSize: '14px',
    color: '#A0A0B0',
    lineHeight: '1.5'
  },
  introVisualCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangleContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  triLabelTop: {
    position: 'absolute',
    top: '0',
    fontSize: '12px',
    fontWeight: '800',
    color: '#00F0FF'
  },
  triLabelRight: {
    position: 'absolute',
    bottom: '10px',
    right: '-10px',
    fontSize: '12px',
    fontWeight: '800',
    color: '#FF007F'
  },
  triLabelLeft: {
    position: 'absolute',
    bottom: '10px',
    left: '-10px',
    fontSize: '12px',
    fontWeight: '800',
    color: '#FFFFFF'
  },
  pillarSubtitle: {
    fontSize: '15px',
    color: '#A0A0B0',
    maxWidth: '420px',
    textAlign: 'right',
    lineHeight: '1.5'
  },
  cardsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  },
  card3dCol: {
    background: 'rgba(18, 18, 26, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '28px 22px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  iconBadge: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    marginBottom: '18px'
  },
  cardColTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#FFFFFF'
  },
  cardColText: {
    fontSize: '14px',
    color: '#A0A0B0',
    lineHeight: '1.5'
  },
  summaryCheckIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00F0FF, #FF007F)',
    color: '#0A0A0E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    fontWeight: '900',
    marginBottom: '20px',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)'
  },
  slideFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  },
  dotsGroup: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  dotBtn: {
    height: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  navButtons: {
    display: 'flex',
    gap: '12px'
  },
  btnNav: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  btnNavPrimary: {
    background: 'linear-gradient(90deg, rgba(0,240,255,0.2), rgba(255,0,127,0.2))',
    borderColor: '#00F0FF',
    color: '#00F0FF'
  }
}
