* {
  box-sizing: border-box;
}

:root {
  --bg: #09111d;
  --bg-elevated: #0f1c2d;
  --panel: #12213b;
  --panel-strong: #182a48;
  --text: #edf5ff;
  --muted: #bac9de;
  --primary: #66d9ff;
  --secondary: #7ef0b0;
  --gold: #ffc857;
  --red: #ff6b6b;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(180deg, #09111d 0%, #0b1322 28%, #0d1727 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: var(--primary);
}

img {
  max-width: 100%;
  display: block;
}

pre {
  margin: 0;
  font-family: Consolas, "Courier New", monospace;
}

button {
  font: inherit;
}

.container {
  width: min(1200px, calc(100% - 30px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(9, 17, 29, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #061421;
  box-shadow: var(--shadow);
}

.main-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
}

.main-nav a {
  color: var(--muted);
  font-size: 0.92rem;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--primary);
}

.hero {
  padding: 72px 0 28px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 26px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(102, 217, 255, 0.1);
  border: 1px solid rgba(102, 217, 255, 0.2);
  color: var(--primary);
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.eyebrow.small {
  font-size: 0.68rem;
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.lead {
  max-width: 700px;
  color: var(--muted);
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.btn {
  display: inline-block;
  padding: 13px 20px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #071923;
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--text);
}

.mini-badges {
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.mini-badges li {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 9px 12px;
  font-size: 0.82rem;
  color: var(--muted);
}

.hero-visual {
  position: relative;
  min-height: 480px;
  display: grid;
  place-items: center;
}

.hero-visual img {
  width: min(100%, 520px);
  filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.3));
}

.floating-card {
  position: absolute;
  background: linear-gradient(180deg, rgba(20, 38, 63, 0.95), rgba(13, 23, 38, 0.96));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 16px;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
  min-width: 150px;
}

.floating-card strong {
  display: block;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  margin: 8px 0 4px;
}

.floating-card small {
  color: var(--muted);
}

.stat-tag {
  display: inline-block;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(126, 240, 176, 0.08);
  border: 1px solid rgba(126, 240, 176, 0.2);
  color: var(--secondary);
  font-size: 0.68rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 700;
}

.stat-one {
  top: 30px;
  right: 14px;
}

.stat-two {
  bottom: 30px;
  left: 12px;
}

.trust-bar {
  padding-top: 12px;
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.trust-strip div {
  display: grid;
  place-items: center;
  color: var(--muted);
  font-weight: 700;
}

.section-space {
  padding: 70px 0 30px;
}

.section-head {
  margin-bottom: 22px;
}

.section-head h2 {
  margin: 12px 0 8px;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.03em;
}

.section-head p {
  margin: 0;
  color: var(--muted);
}

.device-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 22px;
}

.tab-btn {
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s ease;
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(102, 217, 255, 0.18), rgba(126, 240, 176, 0.12));
  border-color: rgba(102, 217, 255, 0.25);
  color: var(--text);
}

.tab-panel {
  display: none;
  animation: fadeIn 0.24s ease;
}

.tab-panel.active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 18px;
}

.info-card {
  background: linear-gradient(180deg, rgba(19, 31, 49, 0.95), rgba(10, 18, 28, 0.98));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
}

.card-icon {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  margin-bottom: 16px;
}

.card-icon img {
  width: 34px;
  height: 34px;
}

.info-card h3 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.chip {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.chip.primary {
  background: rgba(102, 217, 255, 0.1);
  color: var(--primary);
  border: 1px solid rgba(102, 217, 255, 0.2);
}

.chip.green {
  background: rgba(126, 240, 176, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(126, 240, 176, 0.2);
}

.chip.gold {
  background: rgba(255, 200, 87, 0.08);
  color: var(--gold);
  border: 1px solid rgba(255, 200, 87, 0.2);
}

.code {
  margin-top: 10px;
  display: block;
  background: #091724;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 14px 16px;
  color: #ebf5ff;
  font-size: 0.85rem;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
}

.info-card li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--muted);
  margin-bottom: 8px;
}

.info-card li::before {
  content: "✓";
  color: var(--secondary);
  font-weight: 900;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
}

.step {
  background: linear-gradient(180deg, rgba(19, 31, 49, 0.96), rgba(11, 18, 28, 0.97));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.step-number {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(102, 217, 255, 0.12);
  color: var(--primary);
  border: 1px solid rgba(102, 217, 255, 0.3);
  font-weight: 900;
  margin-bottom: 12px;
}

.step h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
}

.step p {
  margin: 0;
  color: var(--muted);
}

.results-table {
  background: linear-gradient(180deg, rgba(17, 29, 44, 0.98), rgba(10, 16, 24, 0.98));
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.results-table table {
  width: 100%;
  border-collapse: collapse;
}

.results-table th,
.results-table td {
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  text-align: left;
  vertical-align: top;
}

.results-table thead th {
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.results-table tbody tr:last-child td {
  border-bottom: none;
}

.status {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 9px;
  font-size: 0.72rem;
  font-weight: 800;
  border: 1px solid transparent;
}

.status.success {
  background: rgba(126, 240, 176, 0.09);
  color: var(--secondary);
  border-color: rgba(126, 240, 176, 0.18);
}

.status.warning {
  background: rgba(255, 200, 87, 0.08);
  color: var(--gold);
  border-color: rgba(255, 200, 87, 0.18);
}

.status.danger {
  background: rgba(255, 107, 107, 0.08);
  color: var(--red);
  border-color: rgba(255, 107, 107, 0.18);
}

.security-grid {
  grid-template-columns: repeat(3, minmax(250px, 1fr));
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 18px;
}

.faq-item {
  background: rgba(18, 33, 59, 0.95);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.faq-item h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
}

.faq-item p {
  margin: 0;
  color: var(--muted);
}

.site-footer {
  padding: 32px 0 80px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  border-top: 1px solid var(--line);
  padding-top: 20px;
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .card-grid {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  .steps-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  .security-grid,
  .faq-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .nav-wrap {
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
  }

  .main-nav {
    justify-content: center;
  }

  .card-grid,
  .steps-grid,
  .security-grid,
  .faq-grid,
  .trust-strip {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .hero {
    padding-top: 48px;
  }
}
