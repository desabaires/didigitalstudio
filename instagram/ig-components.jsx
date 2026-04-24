/* eslint-disable */
// DI Digital Studio — Instagram Kit components

/* ============ POSTS (1080 x 1350) ============ */

// POST 1 — Manifesto / Intro / brand statement
function PostManifesto() {
  return (
    <div className="ig-frame ig-post ig-grid-bg">
      <div className="ig-glow-violet" style={{ top: -200, left: -200 }}></div>
      <div className="ig-glow-cyan" style={{ bottom: -200, right: -200 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={56} />
          <span className="ig-brand-text">DI <span>Digital Studio</span></span>
        </div>
        <span className="ig-handle">@di.digitalstudio</span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 260 }}>
        <div className="ig-eyebrow" style={{ marginBottom: 40 }}>Manifiesto · 01</div>
        <h1 style={{ fontSize: 108, fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.035em", textWrap: "pretty" }}>
          Entendemos tu negocio <span className="ig-gradient-text">desde&nbsp;adentro</span>.
        </h1>
        <p style={{ fontSize: 28, color: "#a1a1aa", lineHeight: 1.5, marginTop: 40, maxWidth: 820 }}>
          Y construimos el software que necesita. Sin templates. Sin features que no usás.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>// software · saas · ia</span>
        <div className="ig-swipe">
          deslizá
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
}

// POST 2 — Servicio destacado: Software a medida
function PostServiceSoftware() {
  return (
    <div className="ig-frame ig-post ig-grid-bg">
      <div className="ig-glow-violet" style={{ top: -250, right: -200 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
        <span className="ig-handle" style={{ fontSize: 16, color: "#71717a" }}>01 / 06 · Servicios</span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 220 }}>
        <div style={{ fontFamily: "var(--di-mono)", fontSize: 140, fontWeight: 500, color: "rgba(34,211,238,0.18)", lineHeight: 1, letterSpacing: "-0.02em" }}>01</div>
        <h2 style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.035em", marginTop: -40 }}>
          Software<br /><span className="ig-gradient-text">a medida.</span>
        </h2>
        <p style={{ fontSize: 26, color: "#d4d4d8", lineHeight: 1.55, marginTop: 40, maxWidth: 820 }}>
          Construimos el sistema que tu operación necesita. Sin templates, sin features que no usás.
        </p>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, bottom: 140, display: "flex", flexDirection: "column", gap: 14 }}>
        {["Código propio, documentado y tuyo", "Arquitectura escalable desde el día uno", "Tests, CI/CD y monitoreo incluidos"].map((t) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, fontFamily: "var(--di-mono)", color: "#e5e5e7" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 12px #22d3ee", flexShrink: 0 }}></span>
            {t}
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <span className="ig-handle" style={{ color: "#22d3ee" }}>/01</span>
      </div>
    </div>
  );
}

// POST 3 — Tip técnico (carrusel "did you know")
function PostTechTip() {
  return (
    <div className="ig-frame ig-post" style={{ background: "#0d0d14" }}>
      <div className="ig-glow-cyan" style={{ top: -150, left: -150, opacity: 0.6 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
        <span className="ig-handle" style={{ fontSize: 16, color: "#71717a" }}>TIP #07</span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 240 }}>
        <div className="ig-eyebrow" style={{ marginBottom: 32 }}>Tip Técnico</div>
        <h2 style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Automatizar <span className="ig-gradient-text">no es</span> reemplazar personas.
        </h2>
        <p style={{ fontSize: 26, color: "#a1a1aa", lineHeight: 1.55, marginTop: 32, maxWidth: 820 }}>
          Es sacarles las tareas que les hacen perder el tiempo para que hagan las que importan.
        </p>
      </div>

      {/* Code-like block */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 180, background: "#07070b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 32, fontFamily: "var(--di-mono)", fontSize: 20, lineHeight: 1.7 }}>
        <div style={{ color: "#71717a", marginBottom: 10 }}>// tareas a automatizar</div>
        <div style={{ color: "#a78bfa" }}>const <span style={{ color: "#22d3ee" }}>repetitivas</span> = [</div>
        <div style={{ paddingLeft: 28, color: "#e5e5e7" }}>'carga de datos',</div>
        <div style={{ paddingLeft: 28, color: "#e5e5e7" }}>'reportes semanales',</div>
        <div style={{ paddingLeft: 28, color: "#e5e5e7" }}>'alertas y seguimientos',</div>
        <div style={{ color: "#a78bfa" }}>]</div>
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <div className="ig-swipe">
          seguí
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
}

// POST 4 — Lanzamiento / Launch
function PostLaunch() {
  return (
    <div className="ig-frame ig-post" style={{ background: "linear-gradient(135deg, #0a0a14 0%, #07070b 100%)" }}>
      <div className="ig-glow-violet" style={{ top: -100, left: -200, opacity: 0.7 }}></div>
      <div className="ig-glow-cyan" style={{ bottom: -200, right: -100, opacity: 0.6 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
        <span style={{ padding: "10px 18px", border: "1px solid #ec4899", borderRadius: 100, fontFamily: "var(--di-mono)", fontSize: 16, color: "#ec4899", letterSpacing: "0.1em" }}>
          ● NUEVO
        </span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 260, textAlign: "center" }}>
        <div className="ig-eyebrow" style={{ justifyContent: "center", marginBottom: 48 }}>
          <span>Lanzamiento</span>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, top: 400, textAlign: "center" }}>
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          <DILogoMark size={200} animated />
          <div style={{ fontSize: 140, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
            <span className="ig-gradient-text">Nombre</span>
          </div>
          <div style={{ fontSize: 32, color: "#a1a1aa", fontFamily: "var(--di-mono)" }}>/ del producto</div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, bottom: 220, textAlign: "center" }}>
        <p style={{ fontSize: 26, color: "#d4d4d8", lineHeight: 1.55, maxWidth: 820, margin: "0 auto" }}>
          Una línea clara que explique qué hace tu producto y a quién ayuda.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>diseñado y construido por DI</span>
        <div className="ig-swipe" style={{ background: "linear-gradient(135deg, #7c3aed, #22d3ee)", border: "none" }}>
          conocelo
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
}

// POST 5 — Servicio: IA
function PostServiceAI() {
  return (
    <div className="ig-frame ig-post ig-grid-bg">
      <div className="ig-glow-cyan" style={{ top: -200, right: -150 }}></div>
      <div className="ig-glow-violet" style={{ bottom: -200, left: -150, opacity: 0.8 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
        <span className="ig-handle" style={{ fontSize: 16, color: "#71717a" }}>05 / 06 · Servicios</span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 220 }}>
        <div style={{ fontFamily: "var(--di-mono)", fontSize: 140, fontWeight: 500, color: "rgba(236,72,153,0.22)", lineHeight: 1 }}>05</div>
        <h2 style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.035em", marginTop: -40 }}>
          Integraciones<br /><span className="ig-gradient-text">con IA.</span>
        </h2>
        <p style={{ fontSize: 26, color: "#d4d4d8", lineHeight: 1.55, marginTop: 40, maxWidth: 820 }}>
          Agentes, copilots y flujos con LLMs aplicados a tu negocio. Features reales en producción — no demos.
        </p>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, bottom: 140, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { k: "LLMs", v: "OpenAI · Claude · open-source" },
          { k: "RAG", v: "sobre tus propios datos" },
          { k: "Agentes", v: "custom con herramientas" },
          { k: "Fine-tune", v: "cuando realmente aporta" },
        ].map((t) => (
          <div key={t.k} style={{ padding: 20, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ fontFamily: "var(--di-mono)", fontSize: 16, color: "#22d3ee", marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.k}</div>
            <div style={{ fontFamily: "var(--di-mono)", fontSize: 18, color: "#e5e5e7" }}>{t.v}</div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <span className="ig-handle" style={{ color: "#22d3ee" }}>/05</span>
      </div>
    </div>
  );
}

// POST 6 — Quote / testimonio de marca
function PostQuote() {
  return (
    <div className="ig-frame ig-post" style={{ background: "#07070b" }}>
      <div className="ig-glow-violet" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.35 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
      </div>

      <div style={{ position: "absolute", left: 96, right: 96, top: 380 }}>
        <div style={{ fontFamily: "var(--di-mono)", fontSize: 200, lineHeight: 0.7, color: "#22d3ee" }}>“</div>
        <p style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: 20 }}>
          El mejor código es el que no hay que escribir <span className="ig-gradient-text">dos veces</span>.
        </p>
      </div>

      <div style={{ position: "absolute", left: 96, right: 96, bottom: 140, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontFamily: "var(--di-mono)", fontSize: 20, color: "#a1a1aa", letterSpacing: "0.08em" }}>// principio de casa</div>
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <span className="ig-handle" style={{ color: "#71717a" }}>#005</span>
      </div>
    </div>
  );
}

// POST 7 — Proceso (carrusel)
function PostProcess() {
  const steps = [
    { n: "01", t: "Descubrimiento", d: "Entendemos tu negocio" },
    { n: "02", t: "Diseño", d: "Prototipos + arquitectura" },
    { n: "03", t: "Desarrollo", d: "Sprints con demos semanales" },
    { n: "04", t: "Soporte", d: "Monitoreo + mejora continua" },
  ];
  return (
    <div className="ig-frame ig-post ig-grid-bg">
      <div className="ig-glow-violet" style={{ top: -200, left: -200 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
        <span className="ig-handle" style={{ fontSize: 16, color: "#71717a" }}>nuestro proceso</span>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 200 }}>
        <div className="ig-eyebrow" style={{ marginBottom: 28 }}>Proceso</div>
        <h2 style={{ fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.035em" }}>
          4 etapas.<br /><span className="ig-gradient-text">Cero sorpresas.</span>
        </h2>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 640, display: "flex", flexDirection: "column", gap: 18 }}>
        {steps.map((s) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 24, padding: "22px 26px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#101018", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--di-mono)", fontSize: 20, color: "#22d3ee", flexShrink: 0 }}>
              {s.n}
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 20, color: "#a1a1aa" }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <div className="ig-swipe">
          ¡trabajemos!
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
}

// POST 8 — CTA final / contact
function PostCTA() {
  return (
    <div className="ig-frame ig-post" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(34,211,238,0.08), #07070b)" }}>
      <div className="ig-glow-violet" style={{ top: -100, right: -100 }}></div>

      <div style={{ position: "absolute", top: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="ig-brandbar">
          <DILogoMark size={48} />
          <span className="ig-brand-text" style={{ fontSize: 20 }}>DI <span>Digital Studio</span></span>
        </div>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 280 }}>
        <div className="ig-eyebrow" style={{ marginBottom: 36 }}>Contacto</div>
        <h2 style={{ fontSize: 124, fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
          ¿Tenés<br />una idea?<br /><span className="ig-gradient-text">Hablemos.</span>
        </h2>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, bottom: 180, display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { k: "Email", v: "desa.baires@gmail.com" },
          { k: "WhatsApp", v: "+54 9 358 424 8863" },
          { k: "Web", v: "didigital.studio" },
        ].map((t) => (
          <div key={t.k} style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 24px", background: "rgba(7,7,11,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14 }}>
            <div style={{ fontFamily: "var(--di-mono)", fontSize: 16, color: "#22d3ee", width: 140, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.k}</div>
            <div style={{ fontSize: 22, color: "#f5f5f7", fontWeight: 500 }}>{t.v}</div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ig-handle" style={{ color: "#71717a" }}>@di.digitalstudio</span>
        <span className="ig-handle" style={{ color: "#71717a" }}>respuesta &lt; 24 hs</span>
      </div>
    </div>
  );
}

/* ============ HIGHLIGHT COVERS (1080 x 1080, se recorta en círculo) ============ */

function HighlightCover({ label, icon, accent = "#22d3ee" }) {
  return (
    <div className="ig-frame ig-highlight" style={{ background: "#07070b", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${accent}22, transparent 65%)` }}></div>
      <div style={{ position: "absolute", inset: 140, border: `1px solid ${accent}66`, borderRadius: "50%" }}></div>
      <div style={{ position: "absolute", inset: 240, border: `1px solid ${accent}33`, borderRadius: "50%" }}></div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div style={{ color: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {icon}
        </div>
        <div style={{ fontFamily: "var(--di-mono)", fontSize: 54, color: "#f5f5f7", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
          {label}
        </div>
      </div>
    </div>
  );
}

function HighlightServicios() {
  return (
    <HighlightCover label="Servicios" accent="#a78bfa" icon={
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    }/>
  );
}
function HighlightProceso() {
  return (
    <HighlightCover label="Proceso" accent="#22d3ee" icon={
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><polyline points="12 7 12 12 15 14"/>
      </svg>
    }/>
  );
}
function HighlightCasos() {
  return (
    <HighlightCover label="Casos" accent="#ec4899" icon={
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    }/>
  );
}
function HighlightIA() {
  return (
    <HighlightCover label="IA · Tips" accent="#67e8f9" icon={
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    }/>
  );
}
function HighlightContacto() {
  return (
    <HighlightCover label="Contacto" accent="#a78bfa" icon={
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    }/>
  );
}

window.PostManifesto = PostManifesto;
window.PostServiceSoftware = PostServiceSoftware;
window.PostTechTip = PostTechTip;
window.PostLaunch = PostLaunch;
window.PostServiceAI = PostServiceAI;
window.PostQuote = PostQuote;
window.PostProcess = PostProcess;
window.PostCTA = PostCTA;

window.HighlightServicios = HighlightServicios;
window.HighlightProceso = HighlightProceso;
window.HighlightCasos = HighlightCasos;
window.HighlightIA = HighlightIA;
window.HighlightContacto = HighlightContacto;
