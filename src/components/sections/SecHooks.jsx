import { useState } from 'react'
import { SectionWrapper, CodeBlock } from '../UI'

const HOOKS = [
  {
    name: 'useState',
    brief: 'Gestión de estado local',
    desc: 'Devuelve un valor con estado y una función para actualizarlo. Cuando el estado cambia, React re-renderiza el componente automáticamente.',
    code: `const [nombre, setNombre] = useState("");\n// nombre = valor actual\n// setNombre = función para actualizar`,
  },
  {
    name: 'useEffect',
    brief: 'Efectos secundarios y ciclo de vida',
    desc: 'Ejecuta código después del render. Reemplaza componentDidMount, componentDidUpdate y componentWillUnmount de los componentes de clase.',
    code: `useEffect(() => {\n  fetch("/api/datos").then(r => setData(r));\n  return () => cancelar(); // cleanup\n}, [dependencia]);`,
  },
  {
    name: 'useContext',
    brief: 'Estado global sin prop drilling',
    desc: 'Permite consumir un contexto de React sin pasar props manualmente por cada nivel del árbol.',
    code: `const tema = useContext(TemaContext);\n// Accede al valor del contexto más cercano`,
  },
  {
    name: 'useRef',
    brief: 'Referencias sin re-render',
    desc: 'Devuelve un objeto mutable que persiste entre renders. Útil para acceder al DOM directamente.',
    code: `const inputRef = useRef(null);\ninputRef.current.focus(); // accede al DOM`,
  },
  {
    name: 'useMemo / useCallback',
    brief: 'Optimización de rendimiento',
    desc: 'useMemo memoriza el resultado de un cálculo costoso. useCallback memoriza una función para evitar que se recree en cada render.',
    code: `const resultado = useMemo(() => calcular(a, b), [a, b]);\nconst handler = useCallback(() => doSomething(), [dep]);`,
  },
]

export default function SecHooks() {
  const [open, setOpen] = useState(null)

  return (
    <SectionWrapper title="Hooks principales — clic para ver detalles">
      {HOOKS.map((h, i) => (
        <div key={i} className="border border-gray-200 rounded-xl mb-2 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
          >
            <div>
              <span className="font-mono text-sm font-bold text-blue-700">{h.name}</span>
              <span className="text-xs text-gray-400 ml-3">{h.brief}</span>
            </div>
            <span className={`text-gray-400 text-xs transition-transform inline-block ${open === i ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {open === i && (
            <div className="px-4 py-3 border-t border-gray-100 bg-white">
              <p className="text-sm text-gray-500 leading-relaxed mb-2">{h.desc}</p>
              <CodeBlock>{h.code}</CodeBlock>
            </div>
          )}
        </div>
      ))}
    </SectionWrapper>
  )
}