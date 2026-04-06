const ITEMS = [
  { id: 'que',    label: '¿Qué son?' },
  { id: 'cuando', label: '¿Cuándo usar?' },
  { id: 'como',   label: 'Instalación' },
  { id: 'hooks',  label: 'Hooks' },
  { id: 'app',    label: 'Demo' },
]

export default function Nav({ active, setActive }) {
  return (
    <nav className="border-b border-gray-100 px-8">
      <div className="max-w-2xl mx-auto flex gap-0">
        {ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`px-4 py-3 text-sm transition-colors border-b-2 -mb-px
              ${active === item.id
                ? 'border-gray-900 text-gray-900 font-medium'
                : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}