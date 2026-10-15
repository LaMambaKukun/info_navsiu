import React from 'react'

export default function App() {
  const userGithub = 'LaMambaKukun'

  return (
    <div style={styles.appWrapper}>
      {/* Luces de fondo estilo Apple / TechChic */}
      <div style={styles.ambientCyan}></div>
      <div style={styles.ambientMagenta}></div>
      <div style={styles.ambientCenter}></div>

      {/* Hero Header */}
      <header style={styles.heroSection}>
        <div style={styles.logoPill}>
          <span style={styles.logoDot}></span>
          <span style={styles.logoText}>INFOGRAFÍA INTERACTIVA // TECHCHIC</span>
        </div>

        <span style={styles.badgeCyan}>Modelos de Ciberseguridad</span>

        <h1 style={styles.heroTitle}>
          La Tríada de la <br />
          <span style={styles.gradientText}>Ciberseguridad</span>
        </h1>

        <p style={styles.heroSubtitle}>
          El modelo fundamental diseñado para proteger, auditar y resguardar los activos de información en la era digital: <strong>Confidencialidad</strong>, <strong>Integridad</strong> y <strong>Disponibilidad</strong>.
        </p>

        {/* C.I.A. Triad Pills */}
        <div style={styles.triadPillGroup}>
          <a href="#confidencialidad" style={{ ...styles.triadGlassItem, borderColor: 'rgba(0, 240, 255, 0.5)' }}>
            <span style={{ color: '#00F0FF', fontWeight: '800' }}>C</span> Confidencialidad
          </a>
          <a href="#integridad" style={{ ...styles.triadGlassItem, borderColor: 'rgba(255, 0, 127, 0.5)' }}>
            <span style={{ color: '#FF007F', fontWeight: '800' }}>I</span> Integridad
          </a>
          <a href="#disponibilidad" style={{ ...styles.triadGlassItem, borderColor: 'rgba(0, 240, 255, 0.5)' }}>
            <span style={{ color: '#00F0FF', fontWeight: '800' }}>A</span> Disponibilidad
          </a>
        </div>
      </header>

      {/* Sección 1: ¿Qué es la Tríada CIA? */}
      <section style={styles.sectionContainer}>
        <div style={styles.sectionHeader}>
          <span style={styles.badgeMagenta}>Fundamento Esencial</span>
          <h2 style={styles.sectionTitle}>¿Qué es el Modelo CIA?</h2>
          <p style={styles.sectionDescription}>
            Un marco conceptual de referencia mundial. Un fallo o brecha en cualquiera de estos tres pilares compromete la resiliencia y estabilidad de todo el sistema informático.
          </p>
        </div>

        <div style={styles.gridTwoColumns}>
          <div style={{ ...styles.appleCard, borderLeft: '4px solid #00F0FF' }}>
            <div style={styles.cardHeaderRow}>
              <span style={{ fontSize: '24px' }}>⚡</span>
              <h3 style={{ ...styles.cardTitle, color: '#00F0FF' }}>Enfoque Holístico</h3>
            </div>
            <p style={styles.cardBody}>
              Ninguno de los pilares actúa por separado. Un sistema seguro requiere equilibrar la privacidad del dato con la fluidez del acceso de los usuarios legítimos.
            </p>
          </div>

          <div style={{ ...styles.appleCard, borderLeft: '4px solid #FF007F' }}>
            <div style={styles.cardHeaderRow}>
              <span style={{ fontSize: '24px' }}>🛡️</span>
              <h3 style={{ ...styles.cardTitle, color: '#FF007F' }}>Gestión de Riesgos</h3>
            </div>
            <p style={styles.cardBody}>
              Permite a los ingenieros y analistas clasificar amenazas, mitigar vulnerabilidades y evaluar el impacto de posibles ataques informáticos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Confidencialidad */}
      <section id="confidencialidad" style={styles.sectionContainer}>
        <div style={styles.pillarHeader}>
          <div>
            <span style={styles.badgeCyan}>Pilar 01</span>
            <h2 style={{ ...styles.sectionTitle, color: '#00F0FF', textShadow: '0 0 25px rgba(0, 240, 255, 0.3)' }}>
              Confidencialidad
            </h2>
          </div>
          <p style={styles.pillarSubtitle}>
            Garantizar que la información sea accesible únicamente por usuarios, procesos o sistemas debidamente autorizados.
          </p>
        </div>

        <div style={styles.gridThreeColumns}>
          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>🔐</div>
            <h3 style={styles.cardTitle}>Cifrado de Extremo a Extremo</h3>
            <p style={styles.cardBody}>
              Protección de datos tanto en reposo como en tránsito con algoritmos robustos como AES-256 y TLS 1.3.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>🪪</div>
            <h3 style={styles.cardTitle}>Autenticación Zero Trust</h3>
            <p style={styles.cardBody}>
              Verificación continua de identidad mediante Múltiple Factor de Autenticación (MFA) y principios de menor privilegio.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>👁️</div>
            <h3 style={styles.cardTitle}>Prevención de Fugas (DLP)</h3>
            <p style={styles.cardBody}>
              Supervisión activa de datos sensibles para evitar la exfiltración o divulgación no autorizada.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Integridad */}
      <section id="integridad" style={styles.sectionContainer}>
        <div style={styles.pillarHeader}>
          <div>
            <span style={styles.badgeMagenta}>Pilar 02</span>
            <h2 style={{ ...styles.sectionTitle, color: '#FF007F', textShadow: '0 0 25px rgba(255, 0, 127, 0.3)' }}>
              Integridad
            </h2>
          </div>
          <p style={styles.pillarSubtitle}>
            Asegurar que la información se mantenga exacta, completa, auténtica y libre de modificaciones malintencionadas.
          </p>
        </div>

        <div style={styles.gridThreeColumns}>
          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#FF007F' }}>🧬</div>
            <h3 style={styles.cardTitle}>Funciones Hash</h3>
            <p style={styles.cardBody}>
              Generación de huellas digitales mediante SHA-256 para verificar si un archivo o paquete ha sido alterado.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#FF007F' }}>✍️</div>
            <h3 style={styles.cardTitle}>Firmas Digitales</h3>
            <p style={styles.cardBody}>
              Mecanismos criptográficos que garantizan la autenticidad del emisor y aseguran el principio de no repudio.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#FF007F' }}>📜</div>
            <h3 style={styles.cardTitle}>Auditoría & Logs</h3>
            <p style={styles.cardBody}>
              Registros inmutables y trazabilidad de cambios en bases de datos y sistemas críticos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: Disponibilidad */}
      <section id="disponibilidad" style={styles.sectionContainer}>
        <div style={styles.pillarHeader}>
          <div>
            <span style={styles.badgeCyan}>Pilar 03</span>
            <h2 style={{ ...styles.sectionTitle, color: '#00F0FF', textShadow: '0 0 25px rgba(0, 240, 255, 0.3)' }}>
              Disponibilidad
            </h2>
          </div>
          <p style={styles.pillarSubtitle}>
            Garantizar el acceso oportuno, estable y confiable a las plataformas y datos cuando los usuarios lo requieran.
          </p>
        </div>

        <div style={styles.gridThreeColumns}>
          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>☁️</div>
            <h3 style={styles.cardTitle}>Redundancia & Clusters</h3>
            <p style={styles.cardBody}>
              Sistemas duplicados y balanceo de carga para evitar puntos únicos de fallo (SPOF) en la infraestructura.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>🔄</div>
            <h3 style={styles.cardTitle}>Backups Automatizados</h3>
            <p style={styles.cardBody}>
              Copias de seguridad periódicas y planes de recuperación ante desastres (DRP) probados.
            </p>
          </div>

          <div style={styles.appleCardFeature}>
            <div style={{ ...styles.featureIconBox, borderColor: '#00F0FF' }}>🛡️</div>
            <h3 style={styles.cardTitle}>Mitigación DDoS</h3>
            <p style={styles.cardBody}>
              Filtros avanzados contra ataques masivos de denegación de servicio distribuidos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 5: Conclusión & Autoría */}
      <footer style={styles.footerSection}>
        <div style={styles.conclusionBox}>
          <div style={styles.checkBadge}>✓</div>
          <span style={styles.badgeMagenta}>Resumen Final</span>
          <h2 style={styles.conclusionTitle}>Seguridad Digital en Armonía</h2>
          <p style={styles.conclusionText}>
            La Tríada de la Ciberseguridad no es un producto, sino una estrategia continua. Mantener el equilibrio entre Confidencialidad, Integridad y Disponibilidad es la clave para la resiliencia en el mundo moderno.
          </p>

          {/* Créditos de Autoría GitHub */}
          <div style={styles.authorBadge}>
            <span style={styles.authorLabel}>Creado y diseñado por</span>
            <a
              href={`https://github.com/${userGithub}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.authorLink}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
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

// Estilos Infografía Vertical (Estilo Apple Pro)
const styles = {
  appWrapper: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
    color: '#F5F5F7',
    position: 'relative',
    overflowX: 'hidden',
    paddingBottom: '80px'
  },
  ambientCyan: {
    position: 'fixed',
    top: '-15%',
    left: '10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  ambientMagenta: {
    position: 'fixed',
    bottom: '-10%',
    right: '10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 0, 127, 0.12) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  ambientCenter: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  heroSection: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '100px 24px 60px 24px',
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
    marginBottom: '28px'
  },
  logoDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#00F0FF',
    boxShadow: '0 0 10px #00F0FF'
  },
  logoText: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#86868B',
    letterSpacing: '1.2px'
  },
  heroTitle: {
    fontSize: '60px',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    lineHeight: '1.08',
    marginTop: '20px',
    marginBottom: '24px'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.3))'
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#A1A1A6',
    maxWidth: '720px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  triadPillGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  triadGlassItem: {
    background: 'rgba(22, 22, 26, 0.8)',
    border: '1px solid',
    borderRadius: '100px',
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#F5F5F7',
    textDecoration: 'none',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    transition: 'transform 0.2s ease'
  },
  sectionContainer: {
    maxWidth: '1000px',
    margin: '0 auto 80px auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  },
  sectionHeader: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    marginTop: '12px',
    marginBottom: '12px'
  },
  sectionDescription: {
    fontSize: '18px',
    color: '#86868B',
    maxWidth: '750px',
    lineHeight: '1.6'
  },
  pillarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '36px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  pillarSubtitle: {
    fontSize: '16px',
    color: '#86868B',
    maxWidth: '440px',
    lineHeight: '1.5'
  },
  gridTwoColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px'
  },
  gridThreeColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px'
  },
  appleCard: {
    background: 'rgba(22, 22, 26, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '32px',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
  },
  appleCardFeature: {
    background: 'rgba(22, 22, 26, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '32px 28px',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#F5F5F7',
    marginBottom: '10px'
  },
  cardBody: {
    fontSize: '15px',
    color: '#86868B',
    lineHeight: '1.6'
  },
  featureIconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    marginBottom: '20px'
  },
  badgeCyan: {
    background: 'rgba(0, 240, 255, 0.1)',
    border: '1px solid rgba(0, 240, 255, 0.4)',
    color: '#00F0FF',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'inline-block'
  },
  badgeMagenta: {
    background: 'rgba(255, 0, 127, 0.1)',
    border: '1px solid rgba(255, 0, 127, 0.4)',
    color: '#FF007F',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'inline-block'
  },
  footerSection: {
    maxWidth: '1000px',
    margin: '100px auto 0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  },
  conclusionBox: {
    background: 'rgba(22, 22, 26, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '32px',
    padding: '56px 40px',
    textAlign: 'center',
    backdropFilter: 'blur(30px)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  checkBadge: {
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
    marginBottom: '20px',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)'
  },
  conclusionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginTop: '16px',
    marginBottom: '16px'
  },
  conclusionText: {
    fontSize: '18px',
    color: '#86868B',
    maxWidth: '650px',
    lineHeight: '1.6',
    marginBottom: '36px'
  },
  authorBadge: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '16px 28px',
    borderRadius: '100px'
  },
  authorLabel: {
    fontSize: '12px',
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