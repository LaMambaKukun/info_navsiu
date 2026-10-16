import React, { useState, useEffect } from 'react'

export default function App() {
  const userGithub = 'LaMambaKukun'
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedCard, setExpandedCard] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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
      code: 'CONF_01',
      badge: '[PILAR 01 :: CONFIDENCIALIDAD]',
      icon: '🔐',
      title: 'Cifrado de Extremo a Extremo',
      summary: 'Protección de datos en reposo y en tránsito mediante esquemas criptográficos.',
      detail: 'Implementación de algoritmos simétricos y asimétricos avanzados (AES-256, TLS 1.3). Garantiza la inviolabilidad del paquete de datos ante escuchas o exfiltraciones en la red.'
    },
    {
      id: 'conf-2',
      pillar: 'confidencialidad',
      color: '#00F0FF',
      code: 'CONF_02',
      badge: '[PILAR 01 :: CONFIDENCIALIDAD]',
      icon: '🪪',
      title: 'Autenticación Zero Trust & MFA',
      summary: 'Verificación estricta de identidad bajo el paradigma de menor privilegio.',
      detail: 'Nunca confiar, siempre verificar. Exige tokens dinámicos temporales (TOTP), biometría y restricción contextual de permisos antes de conceder acceso a los activos.'
    },
    {
      id: 'conf-3',
      pillar: 'confidencialidad',
      color: '#00F0FF',
      code: 'CONF_03',
      badge: '[PILAR 01 :: CONFIDENCIALIDAD]',
      icon: '👁️',
      title: 'Prevención de Fugas (DLP)',
      summary: 'Monitoreo activo para evitar la exfiltración de información confidencial.',
      detail: 'Inspección de tráfico saliente y control de endpoints para bloquear la copia o transferencia no autorizada de credenciales, claves API o datos sensibles.'
    },
    {
      id: 'int-1',
      pillar: 'integridad',
      color: '#FF0055',
      code: 'INT_01',
      badge: '[PILAR 02 :: INTEGRIDAD]',
      icon: '🧬',
      title: 'Funciones Hash Criptográficas',
      summary: 'Validación de archivos y binarios mediante huellas SHA-256.',
      detail: 'Cualquier modificación mínima en un solo bit del archivo alterará drásticamente el valor hash del sistema, alertando inmediatamente sobre manipulación o corrupción.'
    },
    {
      id: 'int-2',
      pillar: 'integridad',
      color: '#FF0055',
      code: 'INT_02',
      badge: '[PILAR 02 :: INTEGRIDAD]',
      icon: '✍️',
      title: 'Firmas Digitales & No Repudio',
      summary: 'Garantía de origen auténtico e inalterabilidad de transacciones.',
      detail: 'Uso de pares de claves pública/privada para validar inequívocamente al emisor e impedir que este rechace la autoría de una operación en el sistema.'
    },
    {
      id: 'int-3',
      pillar: 'integridad',
      color: '#FF0055',
      code: 'INT_03',
      badge: '[PILAR 02 :: INTEGRIDAD]',
      icon: '📜',
      title: 'Auditoría & Logs Inmutables',
      summary: 'Registros blindados para análisis forense y trazabilidad.',
      detail: 'Consolidación de eventos en registros de solo lectura (WORM) o esquemas distribuidos para auditorías técnicas irrefutables post-incidente.'
    },
    {
      id: 'disp-1',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      code: 'DISP_01',
      badge: '[PILAR 03 :: DISPONIBILIDAD]',
      icon: '☁️',
      title: 'Redundancia & Clusters Alta Disponibilidad',
      summary: 'Infraestructura tolerante a fallos sin puntos únicos de interrupción.',
      detail: 'Nodos distribuidos en múltiples zonas de disponibilidad, balanceadores de carga de Capa 7 y clusters con autoscaling para absorber picos imprevistos.'
    },
    {
      id: 'disp-2',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      code: 'DISP_02',
      badge: '[PILAR 03 :: DISPONIBILIDAD]',
      icon: '🔄',
      title: 'Respaldos Automatizados & DRP',
      summary: 'Copias de seguridad bajo la regla 3-2-1 y planes de recuperación.',
      detail: 'Almacenamiento de respaldos fuera de sitio con cumplimiento estricto de métricas RTO (Tiempo de Recuperación) y RPO (Punto de Recuperación).'
    },
    {
      id: 'disp-3',
      pillar: 'disponibilidad',
      color: '#00F0FF',
      code: 'DISP_03',
      badge: '[PILAR 03 :: DISPONIBILIDAD]',
      icon: '🛡️',
      title: 'Mitigación Activa de DDoS',
      summary: 'Depuración de tráfico volumétrico en capas de red y aplicación.',
      detail: 'Mitigación en tiempo real mediante CDNs y sistemas scrubbing de hardware para repeler ataques masivos de saturación SYN flood o amplificación DNS.'
    }
  ]

  const filteredFeatures = activeFilter === 'all' 
    ? features 
    : features.filter(item => item.pillar === activeFilter)

  return (
    <div style={styles.appWrapper}>
      {/* Barra de progreso superior Cyberpunk */}
      <div style={{ ...styles.scrollProgressBar, width: `${scrollProgress}%` }}></div>

      {/* Grid de Fondo Cyberpunk */}
      <div style={styles.cyberGrid}></div>

      {/* Header Estilo 8dot8 */}
      <header style={styles.heroSection}>
        <div style={styles.terminalTag}>
          <span style={styles.terminalDot}></span>
          <span>SYSTEM // INFOGRAFÍA_CIBERSEGURIDAD.EXE</span>
        </div>

        <h1 style={styles.heroTitle}>
          LA TRÍADA DE LA <br />
          <span style={styles.glitchText}>CIBERSEGURIDAD</span>
        </h1>

        <div style={styles.accentLine}></div>

        <p style={styles.heroSubtitle}>
          &gt; MODELO DE REFERENCIA INTERNACIONAL: CONFIDENCIALIDAD, INTEGRIDAD Y DISPONIBILIDAD (CIA). SELECCIONA CUALQUIER MÓDULO PARA DESPLEGAR SUS ESPECIFICACIONES TÉCNICAS.
        </p>

        {/* Filtros Cyberpunk */}
        <div style={styles.filterBar}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'all' ? '#FF0055' : 'rgba(255,255,255,0.2)',
              color: activeFilter === 'all' ? '#FF0055' : '#888',
              backgroundColor: activeFilter === 'all' ? '#FF005515' : 'transparent'
            }}
          >
            [ALL_MODULES]
          </button>
          <button
            onClick={() => setActiveFilter('confidencialidad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'confidencialidad' ? '#00F0FF' : 'rgba(255,255,255,0.2)',
              color: activeFilter === 'confidencialidad' ? '#00F0FF' : '#888',
              backgroundColor: activeFilter === 'confidencialidad' ? '#00F0FF15' : 'transparent'
            }}
          >
            01_CONFIDENCIALIDAD
          </button>
          <button
            onClick={() => setActiveFilter('integridad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'integridad' ? '#FF0055' : 'rgba(255,255,255,0.2)',
              color: activeFilter === 'integridad' ? '#FF0055' : '#888',
              backgroundColor: activeFilter === 'integridad' ? '#FF005515' : 'transparent'
            }}
          >
            02_INTEGRIDAD
          </button>
          <button
            onClick={() => setActiveFilter('disponibilidad')}
            style={{
              ...styles.filterBtn,
              borderColor: activeFilter === 'disponibilidad' ? '#00F0FF' : 'rgba(255,255,255,0.2)',
              color: activeFilter === 'disponibilidad' ? '#00F0FF' : '#888',
              backgroundColor: activeFilter === 'disponibilidad' ? '#00F0FF15' : 'transparent'
            }}
          >
            03_DISPONIBILIDAD
          </button>
        </div>
      </header>

      {/* Grid de Tarjetas Cyberpunk / 8dot8 */}
      <main style={styles.mainContainer}>
        <div style={styles.interactiveGrid}>
          {filteredFeatures.map((item) => {
            const isExpanded = expandedCard === item.id
            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                style={{
                  ...styles.cyberCard,
                  borderColor: isExpanded ? item.color : '#22222A',
                  boxShadow: isExpanded ? `0 0 25px ${item.color}50` : 'none'
                }}
              >
                <div style={styles.cardTopRow}>
                  <span style={{ ...styles.cardCode, color: item.color }}>{item.code}</span>
                  <span style={styles.cardBadge}>{item.badge}</span>
                </div>

                <div style={styles.cardHeaderGroup}>
                  <span style={{ ...styles.cardIcon, borderColor: item.color }}>{item.icon}</span>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                </div>

                <p style={styles.cardSummary}>{item.summary}</p>

                {isExpanded && (
                  <div style={styles.expandedBlock}>
                    <div style={{ ...styles.terminalDivider, backgroundColor: item.color }}></div>
                    <p style={styles.cardDetailText}>&gt; {item.detail}</p>
                    <span style={{ ...styles.closeTag, color: item.color }}>
                      [- Ocultar detalle]
                    </span>
                  </div>
                )}

                {!isExpanded && (
                  <span style={{ ...styles.expandPrompt, color: item.color }}>
                    [+ CLICK_TO_EXPAND_SPECS]
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer Conclusión & Autoría en GitHub Estilo 8dot8 */}
      <footer style={styles.footerSection}>
        <div style={styles.conclusionCard}>
          <div style={styles.footerCodeTag}>// SYSTEM_SUMMARY</div>
          <h2 style={styles.conclusionTitle}>CIBERSEGURIDAD EN ARMONÍA</h2>
          <p style={styles.conclusionSubtitle}>
            &gt; La Tríada CIA es la columna vertebral de la defensa en profundidad. Mantener el equilibrio entre sus tres vectores garantiza la continuidad operacional y la resiliencia en entornos de alta amenaza.
          </p>

          <div style={styles.authorBadge}>
            <span style={styles.authorLabel}>[DESARROLLO &amp; DISEÑO]</span>
            <a
              href={`https://github.com/${userGithub}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.authorLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px' }}>
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

// Estilos 8dot8 Ciberpunk / Brutalista
const styles = {
  appWrapper: {
    backgroundColor: '#050505',
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    color: '#FFFFFF',
    position: 'relative',
    overflowX: 'hidden',
    paddingBottom: '80px'
  },
  scrollProgressBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #FF0055, #00F0FF)',
    zIndex: 100,
    boxShadow: '0 0 10px #FF0055'
  },
  cyberGrid: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      linear-gradient(to right, rgba(255, 0, 85, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 240, 255, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
    zIndex: 0
  },
  heroSection: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px 40px 24px',
    position: 'relative',
    zIndex: 1
  },
  terminalTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #FF0055',
    background: '#100008',
    color: '#FF0055',
    padding: '6px 16px',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '24px'
  },
  terminalDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FF0055',
    boxShadow: '0 0 8px #FF0055'
  },
  heroTitle: {
    fontSize: '52px',
    fontWeight: '800',
    letterSpacing: '1px',
    lineHeight: '1.1',
    margin: 0
  },
  glitchText: {
    color: '#00F0FF',
    textShadow: '0 0 20px rgba(0, 240, 255, 0.6)'
  },
  accentLine: {
    width: '100px',
    height: '4px',
    backgroundColor: '#FF0055',
    margin: '24px 0'
  },
  heroSubtitle: {
    fontSize: '14px',
    color: '#AAAAAA',
    maxWidth: '800px',
    lineHeight: '1.7',
    marginBottom: '36px'
  },
  filterBar: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  filterBtn: {
    border: '1px solid',
    padding: '10px 18px',
    fontSize: '12px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease'
  },
  mainContainer: {
    width: '100%',
    maxWidth: '1200px',
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
  cyberCard: {
    background: '#0A0A0E',
    border: '1px solid',
    padding: '28px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  cardCode: {
    fontSize: '14px',
    fontWeight: '700'
  },
  cardBadge: {
    fontSize: '10px',
    color: '#666677'
  },
  cardHeaderGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px'
  },
  cardIcon: {
    fontSize: '20px',
    padding: '6px',
    border: '1px solid',
    background: '#000000'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: 0
  },
  cardSummary: {
    fontSize: '13px',
    color: '#888899',
    lineHeight: '1.6',
    margin: 0
  },
  expandedBlock: {
    marginTop: '16px'
  },
  terminalDivider: {
    height: '2px',
    width: '100%',
    marginBottom: '12px'
  },
  cardDetailText: {
    fontSize: '13px',
    color: '#DDDDDD',
    lineHeight: '1.6',
    marginBottom: '12px'
  },
  closeTag: {
    fontSize: '11px',
    fontWeight: '700'
  },
  expandPrompt: {
    fontSize: '11px',
    fontWeight: '700',
    marginTop: '16px'
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
    background: '#0A0A0E',
    border: '1px solid #FF0055',
    padding: '40px 32px',
    textAlign: 'left'
  },
  footerCodeTag: {
    fontSize: '12px',
    color: '#FF0055',
    fontWeight: '700',
    marginBottom: '12px'
  },
  conclusionTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#FFFFFF',
    margin: '0 0 12px 0'
  },
  conclusionSubtitle: {
    fontSize: '14px',
    color: '#AAAAAA',
    lineHeight: '1.7',
    maxWidth: '800px',
    marginBottom: '28px'
  },
  authorBadge: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '6px',
    border: '1px solid #00F0FF',
    background: '#001015',
    padding: '12px 20px'
  },
  authorLabel: {
    fontSize: '10px',
    color: '#00F0FF',
    fontWeight: '700'
  },
  authorLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '700',
    color: '#FFFFFF',
    textDecoration: 'none'
  }
}