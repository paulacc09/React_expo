export function SectionWrapper({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4 animate-fadeIn">
      <h2 className="font-mono text-lg font-bold mb-5 pb-4 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  )
}

export function ToolBlock({ name, children }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 mb-4">
      <div className="font-mono text-sm font-bold mb-2">{name}</div>
      {children}
    </div>
  )
}

export function CodeBlock({ children }) {
  return (
    <pre className="font-mono text-xs bg-gray-100 border border-gray-200 rounded-lg p-4 mt-3 overflow-x-auto leading-relaxed whitespace-pre">
      {children}
    </pre>
  )
}

export function WhenGrid({ si = [], no = [], siLabel = 'Úsalo cuando...', noLabel = 'Evítalo si...' }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div className="bg-green-50 border border-green-300 rounded-lg p-3">
        <div className="text-xs font-medium text-green-700 mb-2">✓ {siLabel}</div>
        {si.map((item, i) => <div key={i} className="text-xs text-gray-600 mb-1">{item}</div>)}
      </div>
      <div className="bg-red-50 border border-red-300 rounded-lg p-3">
        <div className="text-xs font-medium text-red-700 mb-2">✗ {noLabel}</div>
        {no.map((item, i) => <div key={i} className="text-xs text-gray-600 mb-1">{item}</div>)}
      </div>
    </div>
  )
}