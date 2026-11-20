
import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-transparent border-t border-white/10 py-14 px-6 overflow-hidden">
      <style>{`
        @keyframes spider-sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes spider-drop {
          0% { transform: translateY(-12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .spider-thread-group {
          animation: spider-drop 700ms ease-out both;
        }
        .spider-body {
          transform-origin: top center;
          animation: spider-sway 4.5s ease-in-out infinite;
        }
        .web-leg {
          transform: scaleY(0);
          transform-origin: bottom center;
          transition: transform 300ms ease, opacity 300ms ease;
          opacity: 0;
        }
        .web-node:hover .web-leg {
          transform: scaleY(1);
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .spider-body, .spider-thread-group {
            animation: none;
          }
        }
      `}</style>

      {/* Ambient corner web - decorative, very low opacity */}
      <svg
        className="pointer-events-none absolute -top-4 -left-4 w-24 h-36 sm:-top-6 sm:-left-6 sm:w-44 sm:h-64 lg:w-56 lg:h-80 text-white"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M0 0 L200 90 M0 0 L170 160 M0 0 L120 220 M0 0 L60 270 M0 0 L20 300" />
        <path d="M10 10 Q 60 40 60 110 Q 60 180 10 230" />
        <path d="M35 4 Q 90 55 90 135 Q 90 210 40 265" />
        <path d="M65 0 Q 125 70 125 155 Q 125 235 70 295" />
        <path d="M100 0 Q 160 85 160 175 Q 160 255 100 300" />
      </svg>
      <svg
        className="pointer-events-none absolute -top-4 -right-4 w-24 h-36 sm:-top-6 sm:-right-6 sm:w-44 sm:h-64 lg:w-56 lg:h-80 text-white scale-x-[-1]"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M0 0 L200 90 M0 0 L170 160 M0 0 L120 220 M0 0 L60 270 M0 0 L20 300" />
        <path d="M10 10 Q 60 40 60 110 Q 60 180 10 230" />
        <path d="M35 4 Q 90 55 90 135 Q 90 210 40 265" />
        <path d="M65 0 Q 125 70 125 155 Q 125 235 70 295" />
        <path d="M100 0 Q 160 85 160 175 Q 160 255 100 300" />
      </svg>

      <div className="relative max-w-[90rem] mx-auto flex flex-col items-center px-16 sm:px-28 lg:px-52">

        {/* Social Links - hexagonal web nodes */}
        <div className="flex items-center gap-8 mb-10">

          {/* GitHub */}
          <a
            href="https://github.com/AmmarElshafey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="web-node group relative w-12 h-12 flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-300"
          >
            <HexFrame />
            <Legs />
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative z-10">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ammar-elshafey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="web-node group relative w-12 h-12 flex items-center justify-center text-gray-500 hover:text-[#4a9de0] transition-colors duration-300"
          >
            <HexFrame hoverColor="#0A66C2" />
            <Legs />
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative z-10">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0Z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:ammarsaidelshafey@gmail.com"
            aria-label="Email"
            className="web-node group relative w-12 h-12 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors duration-300"
          >
            <HexFrame hoverColor="#ef4444" />
            <Legs />
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="relative z-10">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201016300271"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="web-node group relative w-12 h-12 flex items-center justify-center text-gray-500 hover:text-[#25D366] transition-colors duration-300"
          >
            <HexFrame hoverColor="#25D366" />
            <Legs />
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="relative z-10">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>

        </div>

        {/* Signature: single thread with a dangling spider, in place of the accent line */}
        <div className="spider-thread-group flex flex-col items-center mb-6" aria-hidden="true">
          <div className="w-px h-6 bg-white/20" />
          <svg className="spider-body w-4 h-4 text-red-500/80" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="12" cy="15" rx="5" ry="6.5" />
            <circle cx="12" cy="7" r="3" />
            <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
              <path d="M8 12 L2 9 M8 14 L1 14 M8 17 L2 20 M16 12 L22 9 M16 14 L23 14 M16 17 L22 20" />
            </g>
          </svg>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs tracking-wide text-gray-600">
          <span>© 2026 Ammar Elshafey</span>
          <span className="hidden sm:block text-red-500/40">•</span>
          <span>Woven with React</span>
        </div>

      </div>
    </footer>
  );
}

/* Two-layer hexagon: outer clipped shape is the border color,
   inner clipped shape (inset) is the page background, giving a
   hex "web-cell" outline without needing an SVG per icon. */
function HexFrame({ hoverColor }) {
  const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
  return (
    <span
      className="absolute inset-0 transition-colors duration-300"
      style={{ clipPath: hexClip, backgroundColor: 'rgba(255,255,255,0.12)' }}
    >
      <span
        className="absolute inset-[1.5px] transition-colors duration-300 group-hover:opacity-90"
        style={{
          clipPath: hexClip,
          backgroundColor: '#000000',
          boxShadow: hoverColor ? undefined : undefined,
        }}
      />
    </span>
  );
}

/* Four thin legs that unfurl from the base of each icon on hover,
   suggesting the node has come alive. */
function Legs() {
  const legs = [-55, -20, 20, 55];
  return (
    <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {legs.map((deg, i) => (
        <span
          key={i}
          className="web-leg absolute left-1/2 top-full w-px h-3 bg-white/30"
          style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
        />
      ))}
    </span>
  );
}