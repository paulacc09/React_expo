import { Titulo, Subtitulo, Parrafo, Codigo, Divider, Nota } from '../UI'

export default function SecQue() {
  return (
    <div>
      <Titulo>¿Qué es cada herramienta?</Titulo>
      <Parrafo>
        Estas cuatro tecnologías conforman el stack moderno más usado para construir
        aplicaciones web con JavaScript. Cada una tiene un rol específico.
      </Parrafo>

      <Divider />

      <Subtitulo>React</Subtitulo>
      <Parrafo>
        Librería de JavaScript creada por Meta para construir interfaces de usuario.
        La idea central es dividir la UI en <strong className="text-gray-700 font-medium">componentes</strong>: funciones
        reutilizables que devuelven HTML. Usa un DOM virtual para actualizar solo
        lo que cambia, haciéndola muy eficiente.
      </Parrafo>
      <Codigo>{`// Un componente es una función que retorna JSX
function Boton({ texto, onClick }) {
  return (
    <button onClick={onClick}>
      {texto}
    </button>
  )
}`}</Codigo>
      <Nota>React no es un framework completo. Solo maneja la capa de vista (UI). Para routing, estado global o fetching necesitas otras librerías.</Nota>

      <Divider />

      <Subtitulo>Vite</Subtitulo>
      <Parrafo>
        Herramienta de build creada por Evan You en 2020. Se encarga de arrancar
        el servidor de desarrollo y empacar el proyecto para producción. A diferencia
        de Webpack, usa <strong className="text-gray-700 font-medium">ES Modules nativos</strong> del
        navegador, lo que lo hace arrancar en ~300ms en vez de 30-60 segundos.
      </Parrafo>
      <Codigo>{`npm create vite@latest mi-app -- --template react
cd mi-app
npm install
npm run dev   # → listo en ~300ms`}</Codigo>

      <Divider />

      <Subtitulo>Tailwind CSS</Subtitulo>
      <Parrafo>
        Framework CSS de tipo <strong className="text-gray-700 font-medium">utility-first</strong>.
        En vez de escribir clases semánticas en un archivo CSS separado, aplicas
        clases de utilidad directamente en el JSX. El bundle final solo incluye
        las clases que realmente usaste.
      </Parrafo>
      <Codigo>{`// CSS tradicional
.boton {
  background: blue;
  color: white;
  padding: 8px 16px;
}

// Con Tailwind (directo en el JSX)
<button className="bg-blue-600 text-white px-4 py-2">
  Enviar
</button>`}</Codigo>

      <Divider />

      <Subtitulo>React Hooks</Subtitulo>
      <Parrafo>
        Funciones especiales de React (desde la versión 16.8) que permiten usar
        estado y ciclo de vida en componentes funcionales. Siempre empiezan con
        la palabra <code className="mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">use</code>.
        No se instalan: vienen incluidos en React.
      </Parrafo>
      <Codigo>{`import { useState, useEffect } from 'react'

const [contador, setContador] = useState(0)
useEffect(() => { console.log('cambió') }, [contador])`}</Codigo>
    </div>
  )
}