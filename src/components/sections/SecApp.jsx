import { useState, useEffect } from 'react'
import { SectionWrapper, CodeBlock } from '../UI'

function ContadorDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-gray-50 rounded-xl p-5 mb-4">
      <div className="text-xs text-gray-400 mb-3 font-medium">Demo 1 · useState — Contador</div>
      <div className="font-mono text-5xl font-bold text-center py-6">{count}</div>
      <div className="flex gap-2 justify-center flex-wrap">
        <button onClick={() => setCount(c => c - 1)} className="px-5 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm transition">− Restar</button>
        <button onClick={() => setCount(0)} className="px-5 py-2 rounded-lg border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm transition">↺ Reset</button>
        <button onClick={() => setCount(c => c + 1)} className="px-5 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm transition">+ Sumar</button>
      </div>
      <CodeBlock>{`const [count, setCount] = useState(0);\n<button onClick={() => setCount(c => c + 1)}>+</button>`}</CodeBlock>
    </div>
  )
}

function BusquedaDemo() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('⏳ useEffect esperando input...')

  useEffect(() => {
    if (!query) { setStatus('useEffect esperando input...'); return }
    setStatus('Esperando que dejes de escribir...')
    const timer = setTimeout(() => {
      setStatus(`✓ useEffect disparado → fetch("/api/search?q=${query}")`)
    }, 500)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="bg-gray-50 rounded-xl p-5 mb-4">
      <div className="text-xs text-gray-400 mb-3 font-medium">Demo 2 · useEffect — Búsqueda con debounce</div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Escribe algo para buscar..."
        className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white mb-3 focus:outline-none focus:border-blue-400"
      />
      <div className="font-mono text-xs bg-gray-100 rounded-lg px-4 py-3 text-gray-500">{status}</div>
      <CodeBlock>{`useEffect(() => {\n  const timer = setTimeout(() => {\n    fetch(\`/api/search?q=\${query}\`)\n  }, 500)\n  return () => clearTimeout(timer)\n}, [query])`}</CodeBlock>
    </div>
  )
}

const COLORS = {
  blue:  { tw: 'bg-blue-100 text-blue-700',  cls: 'bg-blue-100 text-blue-700' },
  green: { tw: 'bg-green-100 text-green-700', cls: 'bg-green-100 text-green-700' },
  red:   { tw: 'bg-red-100 text-red-700',    cls: 'bg-red-100 text-red-700' },
  amber: { tw: 'bg-amber-100 text-amber-700', cls: 'bg-amber-100 text-amber-700' },
}

function TailwindDemo() {
  const [color, setColor] = useState('blue')
  const c = COLORS[color]
  return (
    <div className="bg-gray-50 rounded-xl p-5 mb-4">
      <div className="text-xs text-gray-400 mb-3 font-medium">Demo 3 · Tailwind — Clases en vivo</div>
      <div className="flex gap-2 flex-wrap mb-4">
        {Object.keys(COLORS).map(k => (
          <button key={k} onClick={() => setColor(k)} className={`text-xs px-3 py-1 rounded-lg border bg-white hover:bg-gray-50 transition ${color === k ? 'border-gray-400 font-bold' : 'border-gray-200'}`}>{k}</button>
        ))}
      </div>
      <div className={`${c.tw} text-center font-medium text-sm px-4 py-4 rounded-lg transition-all`}>{c.cls}</div>
      <CodeBlock>{`<div className="${c.cls} p-4 rounded-lg">\n  contenido\n</div>`}</CodeBlock>
    </div>
  )
}

export default function SecApp() {
  return (
    <SectionWrapper title="App demo — todos los conceptos en acción">
      <ContadorDemo />
      <BusquedaDemo />
      <TailwindDemo />
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="text-sm font-medium mb-3">Estructura del proyecto</div>
        <CodeBlock>{`mi-proyecto/\n├── src/\n│   ├── components/\n│   │   ├── Hero.jsx\n│   │   ├── NavGrid.jsx\n│   │   
                    ├── UI.jsx\n│   │   └── sections/\n│   │       ├── SecQue.jsx\n│   │       ├── SecCuando.jsx\n│   │       
                    ├── SecComo.jsx\n│   │       ├── SecHooks.jsx\n│   │       └── SecApp.jsx\n│   ├── App.jsx\n│   
                    └── index.css\n├── tailwind.config.js\n├── vite.config.js\n└── package.json`}</CodeBlock>
      </div>
    </SectionWrapper>
  )
}