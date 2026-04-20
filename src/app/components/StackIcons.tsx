// Brand SVG icons for the stack section

export function IconFigma({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.8056 22.8056 20 27.5 20C32.1944 20 36 23.8056 36 28.5C36 33.1944 32.1944 37 27.5 37C22.8056 37 19 33.1944 19 28.5Z" fill="#1ABCFE"/>
      <path d="M2 28.5C2 23.8056 5.80558 20 10.5 20H19V37H10.5C5.80558 37 2 33.1944 2 28.5Z" fill="#0ACF83"/>
      <path d="M2 10.5C2 5.80558 5.80558 2 10.5 2H19V19H10.5C5.80558 19 2 15.1944 2 10.5Z" fill="#FF7262"/>
      <path d="M19 2H27.5C32.1944 2 36 5.80558 36 10.5C36 15.1944 32.1944 19 27.5 19H19V2Z" fill="#F24E1E"/>
      <path d="M2 46.5C2 41.8056 5.80558 38 10.5 38H19V47.5C19 52.1944 15.1944 56 10.5 56C5.80558 56 2 52.1944 2 47.5V46.5Z" fill="#FF7262"/>
    </svg>
  );
}

export function IconAfterEffects({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="6" fill="#00005B"/>
      <text x="18" y="26" textAnchor="middle" fill="#D291FF" fontFamily="'Adobe Clean', Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5">Ae</text>
    </svg>
  );
}

export function IconHtmlCss({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="18" y="28" textAnchor="middle" fill="#E44D26" fontFamily="monospace" fontSize="20" fontWeight="700">{'<'}</text>
      <text x="18" y="28" textAnchor="middle" fill="#264DE4" fontFamily="monospace" fontSize="20" fontWeight="700" dx="1">/</text>
    </svg>
  );
}

export function IconHtmlCssProper({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="48" textAnchor="middle" fill="#E44D26" fontFamily="'JetBrains Mono', monospace" fontSize="48" fontWeight="700">{'</>'}</text>
    </svg>
  );
}

export function IconJira({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jira-grad" x1="16" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2684FF"/>
          <stop offset="100%" stopColor="#0052CC"/>
        </linearGradient>
      </defs>
      <path d="M30.04 15.19L16.96 2.11 16 1.15 6.93 10.22 2.96 14.19a1.11 1.11 0 000 1.56l8.31 8.31L16 28.85l9.07-9.07.14-.14 4.83-4.83a1.11 1.11 0 000-1.62zM16 20.14l-4.14-4.14L16 11.86l4.14 4.14L16 20.14z" fill="url(#jira-grad)"/>
    </svg>
  );
}

export function IconConfluence({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cf-grad1" x1="0" y1="1" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
        <linearGradient id="cf-grad2" x1="1" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M1.5 22.6c-.3.5-.7 1.2-.9 1.6a.9.9 0 00.3 1.2l5.3 3c.4.2.9.1 1.2-.3.2-.3.5-.9.9-1.5 1.3-2 2.6-1.8 4.9-.7l5.4 2.6c.5.2 1 0 1.2-.5l2.2-5.6a.9.9 0 00-.5-1.2c-1-.4-3-1.4-4.8-2.3C11 16.5 5.3 16.9 1.5 22.6z" fill="url(#cf-grad1)"/>
      <path d="M30.5 9.4c.3-.5.7-1.2.9-1.6a.9.9 0 00-.3-1.2l-5.3-3c-.4-.2-.9-.1-1.2.3-.2.3-.5.9-.9 1.5-1.3 2-2.6 1.8-4.9.7L13.4 3.5a.9.9 0 00-1.2.5L10 9.6a.9.9 0 00.5 1.2c1 .4 3 1.4 4.8 2.3 5.7 2.7 11.4 2.3 15.2-3.7z" fill="url(#cf-grad2)"/>
    </svg>
  );
}

export function IconFramer({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H24V12H12L0 0Z" fill="white"/>
      <path d="M0 12H12L24 24H0V12Z" fill="white" fillOpacity="0.7"/>
      <path d="M0 24H12V36L0 24Z" fill="white" fillOpacity="0.4"/>
    </svg>
  );
}

export function IconSketch({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 95,32 50,95 5,32" fill="#FDB300"/>
      <polygon points="50,5 72,32 50,95" fill="#EA6C00"/>
      <polygon points="50,5 28,32 50,95" fill="#FDAD00"/>
      <polygon points="5,32 28,32 50,95" fill="#FDD231"/>
      <polygon points="95,32 72,32 50,95" fill="#FDAD00"/>
      <polygon points="5,32 28,32 50,5" fill="#FDD231"/>
      <polygon points="95,32 72,32 50,5" fill="#FDAD00"/>
      <polygon points="28,32 72,32 50,5" fill="#FEEEB7"/>
      <polygon points="28,32 72,32 50,95" fill="#FDB300"/>
    </svg>
  );
}

export function IconClaude({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.15 5.48L22.9 14.13 18.65 5.48C16.42 1.01 9.91-.79 5.61 2.25 1.31 5.29-.53 11.04 1.7 15.51l4.25 8.65-4.25 8.65C-.53 37.28 1.31 43.03 5.61 46.07c4.3 3.04 10.81 1.24 13.04-3.23l4.25-8.65 4.25 8.65c2.23 4.47 8.74 6.27 13.04 3.23 4.3-3.04 6.14-8.79 3.91-13.26L39.85 24.16l4.25-8.65c2.23-4.47.39-10.22-3.91-13.26-4.3-3.04-10.81-1.24-13.04 3.23z" fill="#D97757"/>
    </svg>
  );
}

export function IconMidjourney({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sailboat hull */}
      <path d="M40 110 Q120 125 200 110 L175 95 Q120 105 65 95 Z" fill="white"/>
      {/* Main sail */}
      <path d="M115 20 L115 95 L55 95 Z" fill="white"/>
      {/* Second sail */}
      <path d="M125 35 L125 95 L185 95 Z" fill="white" fillOpacity="0.75"/>
      {/* Mast */}
      <line x1="115" y1="20" x2="115" y2="95" stroke="white" strokeWidth="3"/>
    </svg>
  );
}

// Icon lookup map
export const STACK_ICONS: Record<string, React.ReactNode> = {
  'figma':         <IconFigma />,
  'after effects': <IconAfterEffects />,
  'html / css':    (
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: '#E44D26', letterSpacing: '-0.03em', lineHeight: 1 }}>
      {'<'}
      <span style={{ color: '#264DE4' }}>/</span>
      <span style={{ color: '#E44D26' }}>{'>'}</span>
    </span>
  ),
  'jira':          <IconJira />,
  'confluence':    <IconConfluence />,
  'claude':        <IconClaude />,
  'midjourney':    <IconMidjourney />,
};