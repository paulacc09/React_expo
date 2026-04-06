import { useState } from 'react'
import Nav from './components/Nav'
import SecQue from './components/sections/SecQue'
import SecCuando from './components/sections/SecCuando'
import SecComo from './components/sections/SecComo'
import SecHooks from './components/sections/SecHooks'
import SecApp from './components/sections/SecApp'

export default function App() {
  const [active, setActive] = useState('que')

  const secciones = {
    que: <SecQue />,
    cuando: <SecCuando />,
    como: <SecComo />,
    hooks: <SecHooks />,
    app: <SecApp />,
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100 px-8 py-5 flex items-center justify-between">
        <div>
          <span className="text-sm font-medium tracking-widest uppercase text-gray-400">Actualización Tecnológica</span>
          <h1 className="text-lg font-medium mt-0.5">React · Vite · Tailwind · Hooks</h1>
        </div>
        <span className="text-xs text-gray-300 mono">2024</span>
      </header>

      <Nav active={active} setActive={setActive} />

      <main className="max-w-2xl mx-auto px-8 py-16">
        {secciones[active]}
      </main>
    </div>
  )
}