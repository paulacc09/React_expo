export default function Hero() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
      <h1 className="font-mono text-3xl md:text-4xl font-bold leading-tight mb-4">
        Stack Moderno<br />
        <span className="text-blue-600">React + Vite + Tailwind + Hooks</span>
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        Trabajo de Actualización Tecnológica · Grupos 2–3 personas
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">⚛ React 18</span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-300">⚡ Vite 5</span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-300">🎨 Tailwind CSS</span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-300">🪝 React Hooks</span>
      </div>
    </div>
  )
}