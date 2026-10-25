* {
  box-sizing: border-box;
}

:root {
  --bg: #08121d;
  --bg-elevated: #0d1a2d;
  --panel: #12213b;
  --panel-strong: #182b49;
  --text: #edf5ff;
  --muted: #bac9de;
  --primary: #66d9ff;
  --secondary: #7ef0b0;
  --gold: #ffc857;
  --red: #ff6b6b;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(180deg, #09111d 0%, #0a1525 30%, #0c1624 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

button {
  font: inherit;
}

.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 12% 18%, rgba(102, 217, 255, 0.14), transparent 20%),
    radial-gradient(circle at 80% 28%, rgba(126, 240, 176, 0.12), transparent 22%),
    radial-gradient(circle at 50% 82%, rgba(255, 200, 87, 0.08), transparent 24%);
  z-index: -1;
}

.container {
  width: min(1200px, calc(100% - 30px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(9, 17, 29, 0.72);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.12rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--text);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #071923;
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
  padding: 72px 0 30px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(102, 217, 255, 0.1);
  border: 1px solid rgba(102, 217, 255, 0.25);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow.small {
  font-size: 0.68rem;
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 700px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.btn {
  display: inline-block;
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #081823;
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--text);
}

.mini-badges {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
}

.mini-badges li {
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  position: relative;
  min-height: 500px;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.7;
}

.orb-one {
  width: 240px;
  height: 240px;
  background: rgba(102, 217, 255, 0.12);
  top: 40px;
  right: 20px;
}

.orb-two {
  width: 200px;
  height: 200px;
  background: rgba(126, 240, 176, 0.1);
  bottom: 10px;
  left: 15px;
}

.device-panel {
  position: relative;
  width: min(100%, 500px);
  background: linear-gradient(180deg, rgba(23, 43, 70, 0.96), rgba(12, 19, 30, 0.98));
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
  z-index: 2;
  overflow: hidden;
}

.device-panel-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5c5c; }
.dot.yellow { background: #ffc857; }
.dot.green { background: #7ef0b0; }

.panel-body {
  padding: 22px 22px 16px;
}

.panel-kpi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  color: var(--muted);
}

.panel-kpi strong {
  font-size: 2rem;
  color: var(--text);
}

.panel-bars {
  display: grid;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-bars span {
  display: block;
  width: var(--w);
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  box-shadow: 0 0 18px rgba(102, 217, 255, 0.25);
}

.panel-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  gap: 12px;
}

.panel-metrics div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.panel-metrics strong {
  font-size: 1.2rem;
}

.panel-metrics small {
  color: var(--muted);
}

.floating-card {
  position: absolute;
  z-index: 3;
  background: linear-gradient(180deg, rgba(19, 31, 49, 0.92), rgba(12, 19, 28, 0.96));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 12px 15px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
}

.floating-card strong {
  display: block;
  font-size: 1.5rem;
  margin: 8px 0 4px;
}

.floating-card small {
  color: var(--muted);
}

.stat-tag {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(126, 240, 176, 0.09);
  border: 1px solid rgba(126, 240, 176, 0.2);
  color: var(--secondary);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stat-one {
  top: 35px;
  right: 18px;
}

.stat-two {
  bottom: 30px;
  left: 12px;
}

.trust-bar {
  padding-top: 8px;
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(110px, 1fr));
  gap: 12px;
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
  padding: 72px 0 26px;
}

.section-head {
  margin-bottom: 22px;
}

.section-head h2 {
  margin: 12px 0 8px;
  font-size: clamp(2rem, 3vw, 2.9rem);
  letter-spacing: -0.03em;
}

.section-head p {
  margin: 0;
  color: var(--muted);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
}

.feature-card,
.info-card,
.step,
.testimonial,
.faq-item {
  background: linear-gradient(180deg, rgba(18, 33, 59, 0.96), rgba(10, 17, 28, 0.98));
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.feature-card {
  padding: 22px 18px;
}

.icon-wrap {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  margin-bottom: 14px;
}

.icon-wrap img {
  width: 34px;
  height: 34px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.showcase-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  align-items: center;
}

.showcase-copy h2 {
  margin: 12px 0 10px;
  font-size: clamp(2rem, 3vw, 2.6rem);
}

.showcase-copy p {
  color: var(--muted);
  margin: 0;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
}

.check-list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--muted);
  margin-bottom: 10px;
}

.check-list li::before {
  content: "✓";
  color: var(--secondary);
  font-weight: 900;
}

.video-card {
  position: relative;
  min-height: 360px;
  border-radius: 26px;
  overflow: hidden;
  background:
    linear-gradient(120deg, rgba(17, 30, 47, 0.7), rgba(11, 21, 32, 0.8)),
    radial-gradient(circle at 18% 22%, rgba(102, 217, 255, 0.26), transparent 20%),
    linear-gradient(135deg, #112843 0%, #0a1320 100%);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.video-card::before {
  content: "";
  position: absolute;
  inset: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.02);
}

.video-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.play-btn {
  width: 92px;
  height: 92px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #071923;
  font-size: 2rem;
  box-shadow: 0 0 0 18px rgba(102, 217, 255, 0.12), 0 22px 30px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.video-meta {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(9, 17, 29, 0.6);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 16px;
}

.video-meta span {
  color: var(--muted);
}

.video-meta strong {
  color: var(--text);
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
  font-weight: 800;
  transition: all 0.2s ease;
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(102, 217, 255, 0.18), rgba(126, 240, 176, 0.12));
  border-color: rgba(102, 217, 255, 0.3);
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
  padding: 20px;
}

.card-icon {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  margin-bottom: 14px;
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
  display: block;
  margin-top: 10px;
  background: #091724;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
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
  align-items: flex-start;
  gap: 10px;
  color: var(--muted);
  margin-bottom: 8px;
}

.info-card li::before {
  content: "✓";
  color: var(--secondary);
  font-weight: 900;
}

.command-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 18px;
  align-items: start;
}

.command-sidebar {
  display: grid;
  gap: 10px;
  background: rgba(18, 33, 59, 0.96);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px;
  box-shadow: var(--shadow);
}

.sidebar-btn {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--muted);
  padding: 12px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 800;
}

.sidebar-btn.active {
  background: linear-gradient(135deg, rgba(102, 217, 255, 0.18), rgba(126, 240, 176, 0.12));
  color: var(--text);
  border-color: rgba(102, 217, 255, 0.25);
}

.command-content {
  background: rgba(18, 33, 59, 0.96);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 14px;
}

.command-panel {
  display: none;
}

.command-panel.active {
  display: grid;
  gap: 10px;
}

.command-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--text);
}

.command-row span {
  flex: 1;
  color: var(--text);
  word-break: break-word;
}

.command-row button {
  background: rgba(102, 217, 255, 0.12);
  border: 1px solid rgba(102, 217, 255, 0.2);
  color: var(--primary);
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 22px;
}

.stat-box {
  background: linear-gradient(180deg, rgba(18, 33, 59, 0.96), rgba(11, 18, 28, 0.96));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  box-shadow: var(--shadow);
}

.stat-box strong {
  display: block;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  margin-bottom: 8px;
}

.stat-box span {
  color: var(--muted);
}

.results-table {
  background: linear-gradient(180deg, rgba(17, 29, 44, 0.98), rgba(10, 18, 28, 0.98));
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
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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
  background: rgba(126, 240, 176, 0.08);
  color: var(--secondary);
  border-color: rgba(126, 240, 176, 0.18);
}

.status.warning {
  background: rgba(255, 200, 87, 0.08);
  color: var(--gold);
  border-color: rgba(255, 200, 87, 0.18);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(230px, 1fr));
  gap: 18px;
}

.testimonial {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 18px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #061521;
  font-weight: 900;
}

.testimonial h3 {
  margin: 0 0 8px;
}

.testimonial p {
  margin: 0;
  color: var(--muted);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 18px;
}

.faq-item {
  padding: 18px;
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
  padding: 30px 0 72px;
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
  .hero-grid,
  .showcase-grid,
  .command-layout {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .card-grid,
  .testimonial-grid,
  .stats-grid,
  .faq-grid,
  .trust-strip {
    grid-template-columns: 1fr 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .nav-wrap {
    flex-direction: column;
    justify-content: center;
    padding: 14px 0;
  }

  .main-nav {
    justify-content: center;
  }

  .feature-grid,
  .card-grid,
  .testimonial-grid,
  .stats-grid,
  .faq-grid,
  .trust-strip,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .video-card {
    min-height: 280px;
  }
}
