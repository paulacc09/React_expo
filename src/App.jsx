import { useState } from 'react'
import Hero from './components/Hero'
import NavGrid from './components/NavGrid'
import SecQue from './components/sections/SecQue'
import SecCuando from './components/sections/SecCuando'
import SecComo from './components/sections/SecComo'
import SecHooks from './components/sections/SecHooks'
import SecApp from '../components/sections/SecApp'

export default function App() {
  const [active, setActive] = useState('qué')

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <Hero />
        <NavGrid active={active} setActive={setActive} />
        {active === 'qué'    && <SecQue />}
        {active === 'cuando' && <SecCuando />}
        {active === 'como'   && <SecComo />}
        {active === 'hooks'  && <SecHooks />}
        {active === 'app'    && <SecApp />}
      </div>
    </div>
  )
}