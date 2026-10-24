* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f7fb;
  --panel: #ffffff;
  --panel-alt: #f3f5fa;
  --ink: #111827;
  --muted: #6b7280;
  --primary: #111827;
  --primary-soft: #1f2937;
  --accent: #f59e0b;
  --accent-soft: #fff7db;
  --success: #16a34a;
  --danger: #dc2626;
  --line: #e5e7eb;
  --shadow: 0 18px 45px rgba(17, 24, 39, 0.08);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  color: var(--ink);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.site-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 40px;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: 22px;
  backdrop-filter: blur(16px);
  position: sticky;
  top: 12px;
  z-index: 30;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  color: white;
  font-weight: 800;
  background: linear-gradient(135deg, #111827 0%, #374151 100%);
}

.brand-wrap strong {
  display: block;
  font-size: 1.04rem;
}

.brand-wrap small {
  color: var(--muted);
}

.main-nav,
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-button,
.secondary-button,
.cart-button,
.primary-button,
.ghost-button,
.link-button,
.filter-chip,
.action-button,
.badge-button,
.status-select,
.admin-button {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: white;
  color: var(--ink);
  transition: 0.2s ease;
}

.nav-button,
.secondary-button,
.cart-button,
.ghost-button,
.filter-chip,
.admin-button,
.action-button,
.badge-button {
  padding: 10px 14px;
  font-weight: 600;
}

.nav-button.active,
.primary-button,
.action-button {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.primary-button,
.action-button {
  padding: 12px 18px;
  font-weight: 700;
  border-radius: 12px;
}

.secondary-button,
.ghost-button,
.filter-chip,
.admin-button {
  background: #f9fafb;
}

.cart-button {
  position: relative;
  background: #111827;
  color: white;
  border-color: #111827;
}

.cart-counter {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #f59e0b;
  color: #111827;
  font-size: 0.8rem;
  margin-left: 8px;
}

.page-section {
  padding: 40px 0;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: center;
  padding: 28px 0 18px;
}

.hero-copy,
.hero-visual,
.panel,
.catalog-shell,
.product-layout,
.checkout-layout,
.admin-panel,
.contact-panel {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 32px 28px;
}

.hero-kicker {
  display: inline-flex;
  padding: 8px 12px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: #9a5f00;
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  line-height: 1.02;
  margin: 0 0 16px;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0 0 24px;
  font-size: 1.04rem;
  color: var(--muted);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 14px;
}

.metric {
  background: #f9fafb;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px 14px;
}

.metric strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.metric span {
  color: var(--muted);
  font-size: 0.84rem;
}

.hero-visual {
  position: relative;
  padding: 18px;
}

.hero-visual img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  border-radius: 20px;
}

.image-badge {
  position: absolute;
  left: 28px;
  bottom: 28px;
  background: rgba(17, 24, 39, 0.9);
  color: white;
  border-radius: 16px;
  padding: 14px 16px;
  backdrop-filter: blur(8px);
}

.image-badge strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1.1rem;
}

.image-badge span {
  color: rgba(255, 255, 255, 0.8);
}

.featured-grid,
.product-grid,
.admin-grid,
.stats-grid,
.benefit-grid,
.contact-grid {
  display: grid;
  gap: 18px;
}

.featured-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 20px;
}

.product-card,
.benefit-card,
.stat-card,
.info-card,
.order-card,
.client-card,
.coupon-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.product-card {
  padding: 0;
}

.product-card img {
  height: 240px;
  width: 100%;
  object-fit: cover;
}

.product-card-body {
  padding: 16px;
}

.product-card-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}

.product-label {
  display: inline-flex;
  padding: 6px 9px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
  font-size: 0.72rem;
  font-weight: 700;
}

.product-card h3,
.product-detail h1,
.admin-card h3,
.contact-card h3 {
  margin: 0;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.price {
  font-size: 1.2rem;
  font-weight: 800;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.benefit-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.benefit-card,
.stat-card,
.info-card {
  padding: 22px 18px;
}

.benefit-card h3,
.info-card h3,
.stat-card h3 {
  margin: 0 0 10px;
}

.benefit-card p,
.info-card p,
.stat-card p,
.empty-state p,
.contact-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.catalog-shell {
  padding: 20px;
}

.catalog-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 22px;
}

.filter-panel {
  background: var(--panel-alt);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 20px;
}

.filter-panel h3 {
  margin-top: 0;
}

.search-input,
.field,
.select-field,
.textarea-field {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: white;
  padding: 12px 14px;
  outline: none;
}

.search-wrap,
.form-group,
.filter-group {
  margin-bottom: 18px;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-chip {
  min-width: 84px;
}

.filter-chip.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-card:hover,
.order-card:hover,
.client-card:hover,
.coupon-card:hover,
.info-card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

.product-detail {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
  padding: 16px 0;
}

.product-gallery img {
  border-radius: 24px;
  width: 100%;
  height: 560px;
  object-fit: cover;
  border: 1px solid rgba(229, 231, 235, 0.9);
}

.product-info {
  padding: 10px 0;
}

.product-info .label-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.product-info h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  margin: 0 0 14px;
}

.product-info p {
  color: var(--muted);
  line-height: 1.7;
}

.price-line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;
}

.price-line .price {
  font-size: 2rem;
}

.variant-group {
  margin: 18px 0;
}

.variant-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.badge-button {
  padding: 10px 12px;
  background: #f9fafb;
}

.badge-button.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.cart-layout,
.checkout-layout,
.admin-layout,
.contact-grid {
  display: grid;
  gap: 22px;
}

.cart-layout {
  grid-template-columns: 1.2fr 0.8fr;
  margin-top: 18px;
}

.cart-items,
.summary-card,
.form-card,
.admin-panel,
.contact-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.cart-items {
  padding: 16px;
}

.cart-item {
  display: grid;
  grid-template-columns: 92px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.cart-item:last-child {
  border-bottom: 0;
}

.cart-item img {
  width: 92px;
  height: 92px;
  object-fit: cover;
  border-radius: 14px;
}

.cart-item h4 {
  margin: 0 0 6px;
}

.item-meta {
  color: var(--muted);
  font-size: 0.86rem;
}

.item-qty {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.qty-button {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: white;
  font-weight: 700;
}

.summary-card,
.form-card,
.contact-card {
  padding: 20px;
}

.summary-row,
.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 10px 0;
}

.total-row {
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  font-weight: 800;
  font-size: 1.1rem;
}

.checkout-layout {
  grid-template-columns: 1.1fr 0.9fr;
  margin-top: 18px;
}

.form-card form,
.contact-card form {
  display: grid;
  gap: 14px;
}

.inline-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.input-label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-weight: 600;
}

.admin-layout {
  grid-template-columns: 220px 1fr;
  margin-top: 18px;
}

.admin-menu {
  display: grid;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.admin-menu button {
  width: 100%;
  text-align: left;
}

.admin-panel {
  padding: 18px;
}

.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 20px;
}

.table-wrap {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.data-table th,
.data-table td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.status-pill {
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.75rem;
}

.status-pagado {
  background: #dcfce7;
  color: #166534;
}

.status-pendiente {
  background: #fef3c7;
  color: #92400e;
}

.status-enviado {
  background: #dbeafe;
  color: #1d4ed8;
}

.status-cancelado {
  background: #fee2e2;
  color: #991b1b;
}

.contact-grid {
  grid-template-columns: 1fr 1fr;
  margin-top: 18px;
}

.contact-card {
  min-height: 260px;
}

.empty-state {
  padding: 34px 18px;
  text-align: center;
}

.inline-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

@media (max-width: 980px) {
  .hero,
  .catalog-layout,
  .cart-layout,
  .checkout-layout,
  .admin-layout,
  .contact-grid,
  .product-detail {
    grid-template-columns: 1fr;
  }

  .featured-grid,
  .product-grid,
  .stats-grid,
  .benefit-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-header {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .site-shell {
    padding: 14px 12px 24px;
  }

  .main-nav,
  .header-actions {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-copy,
  .hero-visual,
  .catalog-shell,
  .summary-card,
  .form-card,
  .contact-card,
  .admin-panel {
    padding: 16px;
  }

  .featured-grid,
  .product-grid,
  .stats-grid,
  .benefit-grid,
  .inline-grid {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 70px 1fr;
  }

  .cart-item .item-price {
    grid-column: 2;
  }
}
