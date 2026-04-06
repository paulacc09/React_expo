export function Titulo({ children }) {
  return (
    <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">
      {children}
    </h2>
  )
}

export function Subtitulo({ children }) {
  return (
    <h3 className="text-base font-medium text-gray-900 mt-10 mb-3">
      {children}
    </h3>
  )
}

export function Parrafo({ children }) {
  return (
    <p className="text-sm text-gray-500 leading-relaxed mb-4">
      {children}
    </p>
  )
}

export function Codigo({ children }) {
  return (
    <pre className="mono text-xs bg-gray-50 border border-gray-100 rounded-lg p-5 overflow-x-auto leading-relaxed text-gray-700 my-4 whitespace-pre">
      {children}
    </pre>
  )
}

export function Divider() {
  return <hr className="border-gray-100 my-10" />
}

export function Tag({ children, color = 'gray' }) {
  const colors = {
    gray:   'bg-gray-100 text-gray-600',
    blue:   'bg-blue-50 text-blue-600',
    green:  'bg-green-50 text-green-600',
    red:    'bg-red-50 text-red-600',
  }
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded font-medium ${colors[color]}`}>
      {children}
    </span>
  )
}

export function Nota({ children }) {
  return (
    <div className="border-l-2 border-gray-200 pl-4 my-6">
      <p className="text-sm text-gray-400 leading-relaxed">{children}</p>
    </div>
  )
}