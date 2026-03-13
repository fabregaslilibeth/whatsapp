(function () {
  'use strict';

  // ---------------------------------------------------------------
  // CONFIGURATION — edit this section only
  // ---------------------------------------------------------------
  var WA_NUMBER = '447411381967';

  var SITE_MAP = {
    'intouchcyber.co.uk':          'Intouch Cyber',
    'intouchcomms.co.uk':          'Intouch Comms',
    'intouchdigital.co.uk':        'Intouch Digital',
    'intouchtech.co.uk':           'Intouch Tech',
    'hackneyitsupport.co.uk':      'Hackney IT Support',
    'camdenitsupport.co.uk':       'Camden IT Support',
    'fulhamitsupport.co.uk':       'Fulham IT Support',
    'southlondonitsupport.co.uk':  'South London IT Support',
    'waterlooitsupport.co.uk':     'Waterloo IT Support',
    'chelseaitsupport.co.uk':      'Chelsea IT Support',
    'hammersmithitsupport.co.uk':  'Hammersmith IT Support',
    'wandsworthitsupport.co.uk':   'Wandsworth IT Support',
    'southwarkitsupport.co.uk':    'Southwark IT Support',
    'lambethitsupport.co.uk':      'Lambeth IT Support',
    'islingtonitsupport.co.uk':    'Islington IT Support',
    'westminsteritsupport.co.uk':  'Westminster IT Support',
    'brixtonitsupport.co.uk':      'Brixton IT Support',
    'westlondonitsupport.co.uk':   'West London IT Support',
    'eastlondonitsupport.co.uk':   'East London IT Support',
    'northlondonitsupport.uk':     'North London IT Support',
    'croydonitsupport.co.uk':      'Croydon IT Support',
    'richmonditsupport.co.uk':     'Richmond IT Support',
    'twickenhamitsupport.co.uk':   'Twickenham IT Support',
    'kensingtonitsupport.co.uk':   'Kensington IT Support',
    'basingstokeitsupport.uk':     'Basingstoke IT Support',
    'readingitsupport.uk':         'Reading IT Support',
    'itsupportsouthampton.uk':     'Southampton IT Support',
    'guildforditsupport.uk':       'Guildford IT Support',
    'farnboroughitsupport.co.uk':  'Farnborough IT Support',
    'windsoritsupport.co.uk':      'Windsor IT Support',
    'hampshireitsupport.uk':       'Hampshire IT Support',
    'maidenheaditsupport.co.uk':   'Maidenhead IT Support',
    'bracknellitsupport.co.uk':    'Bracknell IT Support',
    'sloughitsupport.uk':          'Slough IT Support',
    'aldershotitsupport.co.uk':    'Aldershot IT Support',
    'winchesteritsupport.uk':      'Winchester IT Support',
    'surrey-itsupport.co.uk':      'Surrey IT Support',
    'farnhamitsupport.uk':         'Farnham IT Support',
    'newburyitsupport.co.uk':      'Newbury IT Support',
    'ascotitsupport.co.uk':        'Ascot IT Support',
    'wokinghamitsupport.co.uk':    'Wokingham IT Support',
    'it-supportlondon.uk':         'IT Support London',
    'fleetitsupport.co.uk':        'Fleet IT Support',
    'horshamitsupport.co.uk':      'Horsham IT Support',
    'camberleyitsupport.co.uk':    'Camberley IT Support',
    'kingstonitsupport.co.uk':     'Kingston IT Support',
    'wokingitsupport.co.uk':       'Woking IT Support',
    'crawleyitsupport.co.uk':      'Crawley IT Support',
    'london-itsupport.co.uk':      'London IT Support',
  };

  var DEFAULT_MESSAGE_PREFIX = "Hi, I'm enquiring via ";
  var BUTTON_LABEL           = 'Chat with us';
  var POSITION               = 'bottom-right'; // 'bottom-right' or 'bottom-left'
  // ---------------------------------------------------------------

  function getSourceCode() {
    var hostname = window.location.hostname.replace(/^www\./, '').toLowerCase();
    if (SITE_MAP[hostname]) {
      return SITE_MAP[hostname];
    }
    // Fallback: use the domain itself so you always know the source
    return hostname.toUpperCase().replace(/\.[^.]+$/, '').replace(/-/g, ' ') + '-WS';
  }

  function buildWhatsAppURL() {
    var source  = getSourceCode();
    var message = DEFAULT_MESSAGE_PREFIX + source;
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
  }

  function injectStyles() {
    var css = [
      '#wa-float-btn {',
      '  position: fixed;',
      '  z-index: 99999;',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 10px;',
      '  background: #25D366;',
      '  color: #fff;',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
      '  font-size: 15px;',
      '  font-weight: 600;',
      '  letter-spacing: 0.01em;',
      '  padding: 13px 22px 13px 18px;',
      '  border-radius: 50px;',
      '  box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18);',
      '  cursor: pointer;',
      '  text-decoration: none;',
      '  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;',
      '  bottom: 24px;',
      POSITION === 'bottom-left' ? '  left: 24px;' : '  right: 24px;',
      '}',
      '#wa-float-btn:hover {',
      '  background: #1ebe5d;',
      '  transform: translateY(-2px) scale(1.04);',
      '  box-shadow: 0 8px 28px rgba(37,211,102,0.55), 0 3px 10px rgba(0,0,0,0.2);',
      '}',
      '#wa-float-btn:active {',
      '  transform: translateY(0) scale(0.98);',
      '}',
      '#wa-float-btn svg {',
      '  flex-shrink: 0;',
      '  width: 22px;',
      '  height: 22px;',
      '}',
      '@keyframes wa-pop-in {',
      '  0%   { opacity: 0; transform: translateY(20px) scale(0.85); }',
      '  70%  { transform: translateY(-3px) scale(1.03); }',
      '  100% { opacity: 1; transform: translateY(0) scale(1); }',
      '}',
      '#wa-float-btn { animation: wa-pop-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both; animation-delay: 1.2s; opacity: 0; }',
      '@media (max-width: 480px) {',
      '  #wa-float-btn { padding: 12px 16px; font-size: 14px; bottom: 16px; ' + (POSITION === 'bottom-left' ? 'left: 16px;' : 'right: 16px;') + ' }',
      '}',
    ].join('\n');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function injectButton() {
    if (document.getElementById('wa-float-btn')) return;

    var url = buildWhatsAppURL();

    var btn = document.createElement('a');
    btn.id        = 'wa-float-btn';
    btn.href      = url;
    btn.target    = '_self';
    btn.rel       = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat with us on WhatsApp');

    // WhatsApp SVG icon
    btn.innerHTML =
      '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.2"/>' +
        '<path d="M22.9 9.1A9.7 9.7 0 0 0 16 6.3a9.72 9.72 0 0 0-8.4 14.57L6.3 25.7l4.97-1.3A9.72 9.72 0 0 0 25.7 16a9.7 9.7 0 0 0-2.8-6.9zm-6.9 14.95a8.07 8.07 0 0 1-4.12-1.13l-.3-.17-3.08.8.82-3-.19-.31a8.1 8.1 0 1 1 6.87 3.81zm4.44-6.07c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" fill="white"/>' +
      '</svg>' +
      '<span>' + BUTTON_LABEL + '</span>';

    // Track clicks (fires a custom event for GA4 / GTM if loaded)
    btn.addEventListener('click', function () {
      var source = getSourceCode();
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', {
          source_site:     source,
          page_location:   window.location.href,
          button_position: POSITION,
        });
      }
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event:           'whatsapp_click',
          source_site:     source,
          page_location:   window.location.href,
          button_position: POSITION,
        });
      }
    });

    document.body.appendChild(btn);
  }

  function init() {
    injectStyles();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectButton);
    } else {
      injectButton();
    }
  }

  init();
})();
