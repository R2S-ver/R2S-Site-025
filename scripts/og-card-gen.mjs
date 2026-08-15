import sharp from "sharp";

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="52" height="90" patternUnits="userSpaceOnUse">
      <path d="M52 0H0V90" fill="none" stroke="rgba(255,255,255,0.045)" stroke-width="1"/>
      <path d="M26 0L52 45L26 90L0 45Z" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>
    </pattern>
    <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="rgba(255,255,255,0.025)"/>
    </pattern>
    <radialGradient id="glow" cx="0.15" cy="0.1" r="1.1">
      <stop offset="0%" stop-color="#e8943a" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#e8943a" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#07070d" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="0.5" cy="0.5" r="0.9">
      <stop offset="60%" stop-color="#07070d" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.5"/>
    </radialGradient>
    <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#262636"/>
      <stop offset="100%" stop-color="#101018"/>
    </linearGradient>
  </defs>

  <!-- Ground -->
  <rect width="1200" height="630" fill="#07070d"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#scan)"/>
  <rect width="1200" height="630" fill="url(#vignette)"/>

  <!-- Corner brackets — right side mirrored to match left -->
  <g stroke="#e8943a" stroke-width="4" fill="none" opacity="0.85">
    <path d="M50 92V50H92"/>
    <path d="M1150 92V50H1108"/>
    <path d="M50 538V580H92"/>
    <path d="M1150 538V580H1108"/>
  </g>

  <!-- Data tag -->
  <text x="110" y="150" font-family="Consolas, monospace" font-size="24" letter-spacing="6" fill="#e8943a">RrS_STUDIO // PORTFOLIO_DATABASE</text>

  <!-- Title -->
  <text x="105" y="330" font-family="Consolas, monospace" font-weight="bold" font-size="148" letter-spacing="-3" fill="#e8e6e0">RrS STUDIO</text>

  <!-- Tagline -->
  <text x="110" y="388" font-family="Consolas, monospace" font-size="24" letter-spacing="2" fill="#8a8880">INDUSTRIAL DESIGN x EMBEDDED SYSTEMS x CREATIVE MAKING</text>

  <!-- Tri-color stripe -->
  <rect x="110" y="516" width="120" height="10" fill="#e04040"/>
  <rect x="240" y="516" width="120" height="10" fill="#f0c040"/>
  <rect x="370" y="516" width="120" height="10" fill="#3ab8d8"/>

  <!-- Chinese tagline -->
  <text x="110" y="560" font-family="Consolas, monospace" font-size="22" fill="rgba(255,255,255,0.38)">个人网站 // 工业设计 x 嵌入式系统 x 创意制造</text>

  <!-- Cassette deck (right side) -->
  <g transform="translate(778 196)">
    <rect x="0" y="0" width="340" height="238" rx="16" fill="url(#shell)" stroke="#e8943a" stroke-opacity="0.55" stroke-width="2"/>
    <rect x="0" y="0" width="340" height="238" rx="16" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <!-- screws -->
    <g fill="#5a5a64">
      <circle cx="20" cy="20" r="4"/>
      <circle cx="320" cy="20" r="4"/>
      <circle cx="20" cy="218" r="4"/>
      <circle cx="320" cy="218" r="4"/>
    </g>
    <!-- SIDE_A tag -->
    <rect x="248" y="22" width="72" height="30" fill="none" stroke="#e8943a" stroke-opacity="0.8"/>
    <text x="284" y="42" text-anchor="middle" font-family="Consolas, monospace" font-size="15" letter-spacing="3" fill="#e8943a">SIDE_A</text>
    <!-- reel A -->
    <g transform="translate(92 92)">
      <circle r="62" fill="#1a1a22" stroke="rgba(255,255,255,0.25)" stroke-width="2.5"/>
      <g stroke="rgba(255,255,255,0.09)" stroke-width="2">
        <line x1="0" y1="-58" x2="0" y2="58"/>
        <line x1="-58" y1="0" x2="58" y2="0"/>
        <line x1="-41" y1="-41" x2="41" y2="41"/>
        <line x1="-41" y1="41" x2="41" y2="-41"/>
      </g>
      <circle r="18" fill="#0d0d13" stroke="#e8943a" stroke-opacity="0.8" stroke-width="2"/>
      <circle r="6" fill="#e8943a"/>
    </g>
    <!-- reel B -->
    <g transform="translate(248 92)">
      <circle r="62" fill="#1a1a22" stroke="rgba(255,255,255,0.25)" stroke-width="2.5"/>
      <g stroke="rgba(255,255,255,0.09)" stroke-width="2">
        <line x1="0" y1="-58" x2="0" y2="58"/>
        <line x1="-58" y1="0" x2="58" y2="0"/>
        <line x1="-41" y1="-41" x2="41" y2="41"/>
        <line x1="-41" y1="41" x2="41" y2="-41"/>
      </g>
      <circle r="18" fill="#0d0d13" stroke="#e8943a" stroke-opacity="0.8" stroke-width="2"/>
      <circle r="6" fill="#e8943a"/>
    </g>
    <!-- tape window -->
    <rect x="150" y="72" width="100" height="40" fill="#05050a" stroke="rgba(232,148,58,0.5)" stroke-width="1.5"/>
    <g stroke="#3af04f" stroke-width="2" opacity="0.8">
      <line x1="158" y1="84" x2="224" y2="84"/>
      <line x1="158" y1="92" x2="242" y2="92"/>
      <line x1="158" y1="100" x2="206" y2="100"/>
    </g>
    <!-- label strip -->
    <rect x="60" y="182" width="220" height="34" fill="#e8e3da"/>
    <text x="170" y="205" text-anchor="middle" font-family="Consolas, monospace" font-weight="bold" font-size="16" letter-spacing="2" fill="#1a1815">DATA_DECK // v5.5</text>
  </g>

  <!-- URL -->
  <text x="1090" y="600" text-anchor="end" font-family="Consolas, monospace" font-size="22" fill="rgba(232,148,58,0.85)">r2s-site-025.pages.dev</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile("public/og-card.png");

console.log("og-card.png generated");
