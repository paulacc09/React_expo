import { Titulo, Subtitulo, Parrafo, Divider, Nota } from '../UI'

function Tabla({ filas }) {
  return (
    <div className="my-4 border border-gray-100 rounded-lg overflow-hidden">
      {filas.map(([izq, der, header], i) => (
        <div
          key={i}
          className={`grid grid-cols-2 text-sm
            ${header ? 'bg-gray-50 font-medium text-gray-600' : 'border-t border-gray-100'}
          `}
        >
          <div className="px-4 py-3 border-r border-gray-100 text-gray-700">{izq}</div>
          <div className="px-4 py-3 text-gray-500">{der}</div>
        </div>
      ))}
    </div>
  )
}

export default function SecCuando() {
  return (
    <div>
      <Titulo>¿Cuándo usar cada herramienta?</Titulo>
      <Parrafo>
        Ninguna herramienta es la solución a todo. Esta sección explica en qué
        contextos tiene sentido usar cada una y cuándo considerar alternativas.
      </Parrafo>

      <Divider />

      <Subtitulo>React</Subtitulo>
      <Tabla filas={[
        ['Úsalo cuando...', 'Evítalo si...', true],
        ['La UI tiene muchos estados dinámicos', 'Es una página estática simple'],
        ['Necesitas componentes reutilizables', 'El SEO es crítico sin SSR'],
        ['Estás construyendo una SPA o dashboard', 'Solo necesitas un formulario sencillo'],
      ]} />

      <Divider />

      <Subtitulo>Vite</Subtitulo>
      <Tabla filas={[
        ['Úsalo cuando...', 'Considera alternativas si...', true],
        ['Empiezas un proyecto nuevo', 'Ya tienes Webpack configurado'],
        ['Quieres HMR ultrarrápido', 'Usas Next.js (tiene su propio bundler)'],
        ['Proyecto moderno (ES2015+)', 'El equipo domina otra herramienta de build'],
      ]} />

      <Divider />

      <Subtitulo>Tailwind</Subtitulo>
      <Tabla filas={[
        ['Úsalo cuando...', 'Evítalo si...', true],
        ['Quieres diseño personalizado sin framework UI', 'Prefieres CSS semántico puro'],
        ['Quieres evitar conflictos de clases CSS', 'Ya tienes Bootstrap o Material UI'],
        ['Valoras consistencia visual rápida en equipo', 'El equipo no quiere aprender las utilidades'],
      ]} />

      <Divider />

      <Subtitulo>Hooks — cuál usar en cada caso</Subtitulo>
      <Tabla filas={[
        ['Hook', '¿Cuándo usarlo?', true],
        ['useState', 'Cualquier dato que puede cambiar en el componente'],
        ['useEffect', 'Llamar APIs, timers, suscripciones al DOM'],
        ['useContext', 'Compartir datos globales sin prop drilling'],
        ['useRef', 'Acceder al DOM o guardar valores sin re-render'],
        ['useMemo', 'Cálculos costosos que no deben repetirse'],
        ['useCallback', 'Funciones que se pasan como props a hijos'],
      ]} />
    </div>
  )
}