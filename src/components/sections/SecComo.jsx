import { Titulo, Parrafo, Codigo, Divider, Nota } from '../UI'

export default function SecComo() {
  return (
    <div>
      <Titulo>Instalación</Titulo>
      <Parrafo>
        Guía paso a paso para crear un proyecto con React + Vite + Tailwind desde cero.
        Requisito: tener Node.js 18+ instalado.
      </Parrafo>

      <Divider />

      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Paso 1</p>
      <p className="text-sm font-medium text-gray-800 mb-2">Crear el proyecto con Vite</p>
      <Parrafo>
        El flag <code className="mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">--template react</code> configura
        el proyecto con React y JSX listo para usar.
      </Parrafo>
      <Codigo>{`npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
npm install`}</Codigo>

      <Divider />

      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Paso 2</p>
      <p className="text-sm font-medium text-gray-800 mb-2">Instalar Tailwind y sus dependencias</p>
      <Parrafo>
        PostCSS y Autoprefixer son necesarios para que Tailwind procese y transforme
        el CSS correctamente.
      </Parrafo>
      <Codigo>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</Codigo>

      <Divider />

      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Paso 3</p>
      <p className="text-sm font-medium text-gray-800 mb-2">Configurar tailwind.config.js</p>
      <Parrafo>
        La propiedad <code className="mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">content</code> le
        dice a Tailwind dónde buscar clases para incluirlas en el CSS final.
      </Parrafo>
      <Codigo>{`export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}`}</Codigo>

      <Divider />

      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Paso 4</p>
      <p className="text-sm font-medium text-gray-800 mb-2">Activar Tailwind en index.css</p>
      <Parrafo>
        Reemplaza todo el contenido de <code className="mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">src/index.css</code> con
        las tres directivas de Tailwind.
      </Parrafo>
      <Codigo>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</Codigo>

      <Divider />

      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Paso 5</p>
      <p className="text-sm font-medium text-gray-800 mb-2">Correr el servidor</p>
      <Codigo>{`npm run dev
# → http://localhost:5173`}</Codigo>

      <Nota>
        Los Hooks no se instalan. useState, useEffect y el resto vienen incluidos
        en React desde la versión 16.8. Solo importa lo que necesites:
        import {`{ useState }`} from 'react'
      </Nota>
    </div>
  )
}