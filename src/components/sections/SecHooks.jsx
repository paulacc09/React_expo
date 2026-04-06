import { useState } from 'react'
import { Titulo, Parrafo, Codigo, Divider } from '../UI'

const HOOKS = [
  {
    name: 'useState',
    desc: 'Guarda un valor dentro del componente. Cuando cambia, React redibuja el componente automáticamente.',
    code: `const [valor, setValor] = useState(valorInicial)

// valor      → el dato actual
// setValor   → función para actualizarlo
// Al llamar setValor, React re-renderiza el componente`,
  },
  {
    name: 'useEffect',
    desc: 'Ejecuta código después del render. Sirve para llamar APIs, configurar timers o suscribirse a eventos.',
    code: `useEffect(() => {
  // código que corre después del render
  const sub = subscribe(data => setData(data))

  // limpieza: corre antes del próximo efecto
  return () => sub.unsubscribe()

}, [dependencia]) // corre cada vez que dependencia cambia`,
  },
  {
    name: 'useContext',
    desc: 'Consume un contexto sin necesidad de pasar props por cada nivel del árbol de componentes.',
    code: `const tema = useContext(TemaContext)
// Accede al valor del Provider más cercano en el árbol`,
  },
  {
    name: 'useRef',
    desc: 'Crea una referencia que persiste entre renders pero no provoca re-render cuando cambia.',
    code: `const inputRef = useRef(null)

// Acceder al DOM directamente
<input ref={inputRef} />
inputRef.current.focus()

// Guardar valores sin re-render
const timerId = useRef(null)
timerId.current = setTimeout(fn, 1000)`,
  },
  {
    name: 'useMemo',
    desc: 'Memoriza el resultado de un cálculo para no repetirlo en cada render innecesariamente.',
    code: `const total = useMemo(
  () => items.reduce((acc, i) => acc + i.precio, 0),
  [items] // recalcula solo cuando items cambia
)`,
  },
  {
    name: 'useCallback',
    desc: 'Memoriza una función para que no se recree en cada render. Útil al pasarla como prop a componentes hijos.',
    code: `const handleClick = useCallback(() => {
  doSomething(id)
}, [id]) // nueva función solo si id cambia`,
  },
]

export default function SecHooks() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      <Titulo>React Hooks</Titulo>
      <Parrafo>
        Los hooks son la forma moderna de agregar estado y lógica a los componentes
        funcionales. Haz clic en cualquiera para ver el detalle.
      </Parrafo>

      <Divider />

      <div className="divide-y divide-gray-100">
        {HOOKS.map((h, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <div className="flex items-center gap-4">
                <code className="mono text-sm font-medium text-gray-800">{h.name}</code>
                {open !== i && (
                  <span className="text-sm text-gray-400 hidden sm:block">{h.desc.slice(0, 55)}…</span>
                )}
              </div>
              <span className={`text-gray-300 text-xs transition-transform ${open === i ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {open === i && (
              <div className="pb-6">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{h.desc}</p>
                <Codigo>{h.code}</Codigo>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}