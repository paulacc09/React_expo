const NAVS = [
  { id: 'qué',    icon: '📖', label: '¿Qué son?',       sub: 'Definición' },
  { id: 'cuando', icon: '🕐', label: '¿Cuándo usar?',   sub: 'Casos de uso' },
  { id: 'como',   icon: '🔧', label: 'Instalación',     sub: 'Paso a paso' },
  { id: 'hooks',  icon: '🪝', label: 'Hooks en acción', sub: 'Demo interactivo' },
  { id: 'app',    icon: '🚀', label: 'App demo',         sub: 'Ejemplo real' },
]

export default function NavGrid({ active, setActive }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
      {NAVS.map(n => (
        <button
          key={n.id}
          onClick={() => setActive(n.id)}
          className={`bg-white border rounded-xl p-3 text-center transition-all hover:-translate-y-0.5 cursor-pointer
            ${active === n.id ? 'border-blue-500 border-2' : 'border-gray-200'}`}
        >
          <div className="text-2xl mb-1">{n.icon}</div>
          <div className="text-xs font-medium text-gray-800">{n.label}</div>
          <div className="text-xs text-gray-400 mt-0.5">{n.sub}</div>
        </button>
      ))}
    </div>
  )
}