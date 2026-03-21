// 全域設定：集中管理 TTS 與 GAS 代理伺服器網址。
// 若未提供，會回退到預設值，以避免舊版程式出錯。
(function initPdfViewerConfig() {
  const defaults = {
    TTS_BASE_URL: 'https://readctts-tts.hf.space',
    GAS_PROXY_URL:
      'https://script.google.com/macros/s/AKfycbxaF-qVcQ_am_ON8EGkEb6RWCFy_ERk6YB967ktKOjl0x6eTTiMCW_7EWD-GKVpvkBOWA/exec',
  };

  if (typeof window === 'undefined') return;

  const existing = window.PDF_VIEWER_CONFIG || {};
  window.PDF_VIEWER_CONFIG = {
    ...defaults,
    ...existing,
  };
})();

