import React, { useState, useEffect } from 'react'

export default function App() {
  const userGithub = 'LaMambaKukun'
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedCard, setExpandedCard] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Barra de progreso de lectura interactiva
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const features = [
    {
      id: 'conf-1',
      pillar: 'confidencialidad',
      color: '#00F0FF',
      badge: 'Pilar 01 — Confidencialidad',
      icon: '🔐',
      title: 'Cifrado de Extremo a Extremo',
      summary: 'Protección de datos tanto en reposo como en tránsito.',
      detail: 'Aplica algoritmos simétricos y asimétricos avanzados como AES-256 y TLS 1.3. Asegura que incluso si un paquete de datos es interceptado en la red, sea completamente incomprensible sin la clave privada correspondiente.'
    },
    {
      id: 'conf-2',
      pillar: 'confidencialidad',
      color: '#00F0FF',
      badge: 'Pilar 01 — Confidencialidad',
      icon: '🪪',
      title: 'Autenticación Zero Trust & MFA',
      summary: 'Verificación continua de identidad antes de otorgar acceso.',
      detail: 'Implementa el principio de "nunca confiar, siempre verificar". Requiere Doble Factor de Autenticación (MFA) con tokens temporales (TOTP) o biometría y restringe permisos al mínimo necesario (PoLP).'
    },
    {
      id: 'conf-3',
      pillar: 'confidencialidad',
      color: '#00F0FF',
      badge: 'Pilar 01 — Confidencialidad',
      icon: '👁️',
      title: 'Prevención de Fugas (DLP)',
      summary: 'Monitoreo activo para evitar la exfiltración de información.',
      detail: 'Las soluciones DLP analizan el tráfico saliente y las acciones del endpoint para detectar patrones sensibles (tarjetas de crédito, claves API, datos de clientes) e impedir su copia o envío no autorizado.'
    },
    {
      id: 'int-1',
      pillar: 'integridad',
      color: '#FF007F',
      badge: 'Pilar 02 — Integridad',
      icon: '🧬',
      title: 'Funciones Hash Criptográficas',
      summary: 'Validación de código y archivos mediante huellas digitales.',
      detail: 'Mediante algoritmos como SHA-256, cualquier alteración de un solo bit en un documento o binario cambiará drásticamente el valor hash del archivo, alertando sobre modificaciones o corrupción.'
    },
    {
      id: 'int-2',
      pillar: 'integridad',
      color: '#FF007F',
      badge: 'Pilar 02 — Integridad',
      icon: '✍️',
      title: 'Firmas Digitales & No Repudio',
      summary: 'Garantía de origen auténtico e inalterabilidad de documentos.',
      detail: 'Combina criptografía asimétrica y hashes para asegurar la identidad inequívoca del remitente, impidiendo que este pueda negar la autoría o envío de una transacción digital.'
    },
    {
      id: 'int-3',
      pillar: 'integridad',
      color: '#FF007F',
      badge: 'Pilar 02 — Integridad',
      icon: '📜',
      title: 'Trazabilidad & Logs Inmutables',
      summary: 'Registros de auditoría blindados contra manipulaciones.',
      detail: 'Uso de tecnologías de contabilidad distribuida o servidores de registros centralizados de solo escritura (WORM) para garantizar la auditoría técnica post-incidente.'
    },
    {
      id: 'disp-1',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      badge: 'Pilar 03 — Disponibilidad',
      icon: '☁️',
      title: 'Redundancia & Alta Disponibilidad',
      summary: 'Infraestructura en cluster sin puntos únicos de falla (SPOF).',
      detail: 'Despliegue distribuido en múltiples zonas de disponibilidad cloud, balanceadores de carga de capa 7 y arquitecturas de microservicios con recuperación automática.'
    },
    {
      id: 'disp-2',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      badge: 'Pilar 03 — Disponibilidad',
      icon: '🔄',
      title: 'Respaldos & Planes DRP',
      summary: 'Estrategias de copias de seguridad y recuperación ante desastres.',
      detail: 'Aplicación de la regla de respaldo 3-2-1 (3 copias, 2 medios distintos, 1 fuera de sitio) e integración con métricas estrictas de RTO (Tiempo de Recuperación) y RPO (Punto de Recuperación).'
    },
    {
      id: 'disp-3',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      badge: 'Pilar 03 — Disponibilidad',
      icon: '🛡️',
      title: 'Mitigación Activa de DDoS',
      summary: 'Filtros de tráfico volumétrico en tiempo real.',
      detail: 'Utilización de redes de distribución de contenido (CDN) y depuración de tráfico masivo por hardware para absorber ciberataques de saturación SYN flood o amplificación DNS.'
    }
  ]

  const filteredFeatures = activeFilter === 'all' 
    ? features 
    : features.filter(item => item.pillar === activeFilter)

  return (
    <div style={styles.appWrapper}>
      {/* Barra de lectura superior */}
      <div style={{ ...styles.scrollProgressBar, width: `${scrollProgress}%` }}></div>

      {/* Luces de ambiente Apple TechChic */}
      <div style={styles.ambientCyan}></div>
      <div style={styles.ambientMagenta}></div>

      {/* Hero Principal */}
      <header style={styles.heroSection}>
        <div style={styles.logoPill}>
          <span style={styles.logoDot}></span>
          <span style={styles.logoText}>INFOGRAFÍA INTERACTIVA // APPLE TECHCHIC</span>
        </div>

        <h1 style={styles.heroTitle}>
          La Tríada de la <br />
          <span style={styles.gradientText}>Ciberseguridad</span>
        </h1>

        <p style={styles.heroSubtitle}>
          Haz clic en cualquiera de las tarjetas de la infografía para desplegar el análisis técnico detallado.
        </p>

        {/* Filtros Interactivos */}
        <div style={styles.filterBar}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'all' ? '#00F0FF' : 'rgba(255,255,255,0.12)',
              color: activeFilter === 'all' ? '#00F0FF' : '#86868B',
              backgroundColor: activeFilter === 'all' ? 'rgba(0,240,255,0.1)' : 'rgba(255,255,255,0.03)'
            }}
          >
            ✦ Todos los Pilares
          </button>
          <button
            onClick={() => setActiveFilter('confidencialidad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'confidencialidad' ? '#00F0FF' : 'rgba(255,255,255,0.12)',
              color: activeFilter === 'confidencialidad' ? '#00F0FF' : '#86868B',
              backgroundColor: activeFilter === 'confidencialidad' ? 'rgba(0,240,255,0.1)' : 'rgba(255,255,255,0.03)'
            }}
          >
            🔒 Confidencialidad
          </button>
          <button
            onClick={() => setActiveFilter('integridad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'integridad' ? '#FF007F' : 'rgba(255,255,255,0.12)',
              color: activeFilter === 'integridad' ? '#FF007F' : '#86868B',
              backgroundColor: activeFilter === 'integridad' ? 'rgba(255,0,127,0.1)' : 'rgba(255,255,255,0.03)'
            }}
          >
            🧬 Integridad
          </button>
          <button
            onClick={() => setActiveFilter('disponibilidad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'disponibilidad' ? '#00F0FF' : 'rgba(255,255,255,0.12)',
              color: activeFilter === 'disponibilidad' ? '#00F0FF' : '#86868B',
              backgroundColor: activeFilter === 'disponibilidad' ? 'rgba(0,240,255,0.1)' : 'rgba(255,255,255,0.03)'
            }}
          >
            ☁️ Disponibilidad
          </button>
        </div>
      </header>

      {/* Grid de Tarjetas Interactivas de la Infografía */}
      <main style={styles.mainContainer}>
        <div style={styles.interactiveGrid}>
          {filteredFeatures.map((item) => {
            const isExpanded = expandedCard === item.id
            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                style={{
                  ...styles.interactiveCard,
                  borderColor: isExpanded ? item.color : 'rgba(255, 255, 255, 0.12)',
                  boxShadow: isExpanded ? `0 0 30px ${item.color}40` : '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div style={styles.cardHeaderRow}>
                  <div style={{ ...styles.iconBox, borderColor: item.color }}>
                    {item.icon}
                  </div>
                  <span style={{ ...styles.badgePill, color: item.color, borderColor: `${item.color}60` }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardSummary}>{item.summary}</p>

                {/* Contenido expandible interactivo */}
                {isExpanded && (
                  <div style={styles.expandedContent}>
                    <div style={{ ...styles.divider, backgroundColor: item.color }}></div>
                    <p style={styles.cardDetailText}>{item.detail}</p>
                    <span style={{ ...styles.clickTag, color: item.color }}>
                      ✓ Clic para contraer
                    </span>
                  </div>
                )}

                {!isExpanded && (
                  <span style={styles.expandPrompt}>
                    + Toca para expandir detalle
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </main>

      {/* Conclusión & Acreditación de Autoría en GitHub */}
      <footer style={styles.footerSection}>
        <div style={styles.conclusionCard}>
          <div style={styles.checkBadge}>✓</div>
          <span style={styles.badgeMagenta}>Resumen de Cierre</span>
          <h2 style={styles.conclusionTitle}>Seguridad Digital en Armonía</h2>
          <p style={styles.conclusionSubtitle}>
            La Tríada de la Ciberseguridad no es un producto estático, sino una estrategia interactiva y continua. Mantener el equilibrio entre Confidencialidad, Integridad y Disponibilidad es la clave para la resiliencia en el mundo moderno.
          </p>

          <div style={styles.authorBadge}>
            <span style={styles.authorLabel}>Creado y diseñado por</span>
            <a
              href={`https://github.com/${userGithub}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.authorLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              @{userGithub}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Estilos Ancho Completo (Full Width) Estilo Apple Dark Glass
const styles = {
  appWrapper: {
    backgroundColor: '#000000',
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
    color: '#F5F5F7',
    position: 'relative',
    overflowX: 'hidden',
    paddingBottom: '80px'
  },
  scrollProgressBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #00F0FF, #FF007F)',
    zIndex: 100,
    boxShadow: '0 0 12px #00F0FF'
  },
  ambientCyan: {
    position: 'fixed',
    top: '-10%',
    left: '5%',
    width: '650px',
    height: '650px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  ambientMagenta: {
    position: 'fixed',
    bottom: '-10%',
    right: '5%',
    width: '650px',
    height: '650px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 0, 127, 0.12) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  heroSection: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px 40px 24px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  },
  logoPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '8px 20px',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '24px'
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
  heroTitle: {
    fontSize: '56px',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    lineHeight: '1.08',
    marginBottom: '20px'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.3))'
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#86868B',
    maxWidth: '680px',
    margin: '0 auto 36px auto',
    lineHeight: '1.5'
  },
  filterBar: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  filterBtn: {
    border: '1px solid',
    borderRadius: '100px',
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.2s ease'
  },
  mainContainer: {
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  },
  interactiveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px'
  },
  interactiveCard: {
    background: 'rgba(22, 22, 26, 0.8)',
    border: '1px solid',
    borderRadius: '24px',
    padding: '32px 28px',
    backdropFilter: 'blur(30px)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  iconBox: {
    width: '46px',
    height: '46px',
    borderRadius: '14px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px'
  },
  badgePill: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    border: '1px solid',
    padding: '4px 12px',
    borderRadius: '100px',
    background: 'rgba(255,255,255,0.03)'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#F5F5F7',
    marginBottom: '8px',
    letterSpacing: '-0.01em'
  },
  cardSummary: {
    fontSize: '14px',
    color: '#86868B',
    lineHeight: '1.5'
  },
  expandedContent: {
    marginTop: '16px'
  },
  divider: {
    height: '2px',
    width: '40px',
    borderRadius: '2px',
    marginBottom: '16px'
  },
  cardDetailText: {
    fontSize: '14px',
    color: '#E0E0EC',
    lineHeight: '1.6',
    marginBottom: '12px'
  },
  clickTag: {
    fontSize: '12px',
    fontWeight: '700',
    display: 'inline-block'
  },
  expandPrompt: {
    fontSize: '12px',
    color: '#86868B',
    marginTop: '16px',
    fontWeight: '600'
  },
  footerSection: {
    width: '100%',
    maxWidth: '1200px',
    margin: '80px auto 0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  },
  conclusionCard: {
    background: 'rgba(22, 22, 26, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '32px',
    padding: '52px 36px',
    textAlign: 'center',
    backdropFilter: 'blur(30px)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  checkBadge: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    fontWeight: '900',
    marginBottom: '20px',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)'
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
  conclusionTitle: {
    fontSize: '34px',
    fontWeight: '700',
    marginTop: '16px',
    marginBottom: '12px'
  },
  conclusionSubtitle: {
    fontSize: '17px',
    color: '#86868B',
    maxWidth: '650px',
    lineHeight: '1.6',
    marginBottom: '32px'
  },
  authorBadge: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '14px 28px',
    borderRadius: '100px'
  },
  authorLabel: {
    fontSize: '11px',
    color: '#86868B',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600'
  },
  authorLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '700',
    color: '#00F0FF',
    textDecoration: 'none'
  }
}