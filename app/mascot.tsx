export default function Mascot({ compact = false, label }: { compact?: boolean; label: string }) {
  return (
    <svg className={compact ? "mascot mascot-small" : "mascot"} viewBox={compact ? "70 45 270 215" : "0 0 400 290"} role="img" aria-label={label}>
      <ellipse cx="205" cy="248" rx="85" ry="10" fill="#c2f2ee" />
      <g className="mascot-body">
        <path d="M127 104Q112 64 137 56Q157 51 167 79Q208 62 239 82Q261 47 279 65Q292 80 271 110Q303 156 278 207Q266 237 222 237L166 237Q119 236 113 198Q101 151 127 104Z" fill="#00bfb1" stroke="#00897e" strokeWidth="2" />
        <path d="M116 160Q81 164 85 191" fill="none" stroke="#00bfb1" strokeWidth="15" strokeLinecap="round" />
        <path className="waving-arm" d="M282 158Q320 154 326 123" fill="none" stroke="#00bfb1" strokeWidth="15" strokeLinecap="round" />
        <path d="M165 232L155 249M239 231L251 248" stroke="#00897e" strokeWidth="9" strokeLinecap="round" />
        <g fill="#fff"><ellipse cx="170" cy="139" rx="17" ry="24"/><ellipse cx="218" cy="139" rx="17" ry="24"/></g>
        <g fill="#006961"><ellipse cx="175" cy="141" rx="6" ry="10"/><ellipse cx="223" cy="141" rx="6" ry="10"/></g>
        <path d="M184 171Q199 190 215 170" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="146" cy="166" rx="10" ry="5" fill="#a2eee8"/><ellipse cx="244" cy="166" rx="10" ry="5" fill="#a2eee8"/>
      </g>
      {!compact && <>
        <g transform="rotate(-12 65 60)"><rect x="13" y="42" width="105" height="32" rx="9" fill="#ffe5a8" stroke="#efce82"/><text x="27" y="63" fontFamily="monospace" fontSize="12" fill="#815a00">vet student</text></g>
        <g transform="rotate(10 332 61)"><rect x="296" y="42" width="78" height="36" rx="10" fill="#fff" stroke="#c2f2ee"/><text x="310" y="66" fontFamily="monospace" fontSize="17" fill="#00897e">&lt;/&gt;</text></g>
        <g transform="rotate(-7 64 223)"><rect x="17" y="205" width="88" height="33" rx="16" fill="#fff" stroke="#c2f2ee"/><text x="35" y="227" fontFamily="monospace" fontSize="12" fill="#00897e">AI + ML</text></g>
        <g transform="rotate(9 334 225)"><rect x="292" y="214" width="92" height="30" rx="8" fill="#ede7fa" stroke="#dcd2ef"/><text x="305" y="234" fontFamily="monospace" fontSize="11" fill="#78658e">research</text></g>
        <path d="M345 157V177M335 167H355" stroke="#f6be3e" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 119Q65 104 75 121M69 108L76 121L62 121" fill="none" stroke="#00bfb1" strokeWidth="2" strokeLinecap="round" />
      </>}
    </svg>
  );
}
