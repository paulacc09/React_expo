import { useState, useEffect } from 'react'
import { Titulo, Parrafo, Codigo, Divider, Subtitulo } from '../UI'

function ContadorDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="my-6">
      <div className="flex items-center gap-6 mb-4">
        <span className="mono text-5xl font-light text-gray-800 w-16 text-center">{count}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(c => c - 1)}
            className="w-8 h-8 border border-gray-200 rounded text-gray-400 hover:border-gray-400 hover:text-gray-600 transition text-lg leading-none"
          >−</button>
          <button
            onClick={() => setCount(0)}
            className="px-3 h-8 border border-gray-200 rounded text-xs text-gray-400 hover:border-gray-400 hover:text-gray-600 transition"
          >reset</button>
          <button
            onClick={() => setCount(c => c + 1)}
            className="w-8 h-8 border border-gray-200 rounded text-gray-400 hover:border-gray-400 hover:text-gray-600 transition text-lg leading-none"
          >+</button>
        </div>
      </div>
      <Codigo>{`const [count, setCount] = useState(0)
<button onClick={() => setCount(c => c + 1)}>+</button>`}</Codigo>
    </div>
  )
}

function BusquedaDemo() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('esperando input...')

  useEffect(() => {
    if (!query) { setStatus('esperando input...'); return }
    setStatus('esperando que termines de escribir...')
    const t = setTimeout(() => {
      setStatus(`GET /api/search?q=${query}`)
    }, 500)
    return () => clearTimeout(t)
  }, [query])

  return (
    <div className="my-6">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="escribe algo..."
        className="w-full border-b border-gray-200 py-2 text-sm outline-none placeholder-gray-300 focus:border-gray-400 transition bg-transparent mb-4"
      />
      <p className="mono text-xs text-gray-400">{status}</p>
      <Codigo>{`useEffect(() => {
  const t = setTimeout(() => {
    fetch(\`/api/search?q=\${query}\`)
  }, 500)
  return () => clearTimeout(t) // limpieza
}, [query])`}</Codigo>
    </div>
  )
}

const PALETA = [
  { label: 'default',  cls: '' },
  { label: 'slate',    cls: 'bg-slate-100 text-slate-700' },
  { label: 'stone',    cls: 'bg-stone-100 text-stone-700' },
  { label: 'sky',      cls: 'bg-sky-100 text-sky-700' },
  { label: 'teal',     cls: 'bg-teal-100 text-teal-700' },
]

function TailwindDemo() {
  const [sel, setSel] = useState(0)
  const activo = PALETA[sel]

  return (
    <div className="my-6">
      <div className="flex gap-3 mb-5 flex-wrap">
        {PALETA.map((p, i) => (
          <button
            key={i}
            onClick={() => setSel(i)}
            className={`text-xs px-3 py-1.5 rounded border transition
              ${sel === i ? 'border-gray-400 text-gray-700' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className={`text-sm px-5 py-4 rounded-lg border border-gray-100 transition-all mono ${activo.cls || 'text-gray-500'}`}>
        {activo.cls || 'sin clases'}
      </div>

      <Codigo>{`<div className="${activo.cls || ''}">
  contenido
</div>`}</Codigo>
    </div>
  )
}

export default function SecApp() {
  return (
    <div>
      <Titulo>Demo</Titulo>
      <Parrafo>
        Tres ejemplos interactivos que muestran los conceptos en acción.
        El código debajo de cada demo es exactamente lo que lo hace funcionar.
      </Parrafo>

      <Divider />

      <Subtitulo>useState — contador</Subtitulo>
      <Parrafo>El caso más simple: un número que sube y baja.</Parrafo>
      <ContadorDemo />

      <Divider />

      <Subtitulo>useEffect — búsqueda con debounce</Subtitulo>
      <Parrafo>
        Escribe algo. El efecto espera 500ms antes de "hacer el fetch",
        y se cancela si escribes de nuevo antes de que pasen.
      </Parrafo>
      <BusquedaDemo />

      <Divider />

      <Subtitulo>Tailwind — clases dinámicas</Subtitulo>
      <Parrafo>
        El estado de React controla qué clases de Tailwind se aplican.
      </Parrafo>
      <TailwindDemo />
    </div>
  )
}