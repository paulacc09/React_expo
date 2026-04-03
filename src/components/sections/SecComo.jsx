import { SectionWrapper, CodeBlock } from '../UI'

const steps = [
  {
    num: 1,
    title: 'Crear proyecto con Vite + React',
    code: `npm create vite@latest mi-proyecto -- --template react\ncd mi-proyecto\nnpm install`,
  },
  {
    num: 2,
    title: 'Instalar Tailwind CSS',
    code: `npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`,
  },
  {
    num: 3,
    title: 'Configurar tailwind.config.js',
    code: `export default {\n  content: ["./index.html", "./src/**/*.{js,jsx}"],\n  theme: { extend: {} },\n  plugins: [],\n}`,
  },
  {
    num: 4,
    title: 'Agregar directivas en src/index.css',
    code: `@tailwind base;\n@tailwind components;\n@tailwind utilities;`,
  },
  {
    num: 5,
    title: 'Iniciar servidor de desarrollo',
    code: `npm run dev\n# → http://localhost:5173`,
  },
]

export default function SecComo() {
  return (
    <SectionWrapper title="¿Cómo se instala el stack completo?">
      {steps.map(s => (
        <div key={s.num} className="flex gap-4 mb-5">
          <div className="min-w-[28px] h-7 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1">
            {s.num}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium mb-1">{s.title}</div>
            <CodeBlock>{s.code}</CodeBlock>
          </div>
        </div>
      ))}
      <div className="bg-green-50 border border-green-300 rounded-xl p-4 mt-2">
        <div className="text-sm font-medium text-green-700 mb-1">¡Los Hooks no se instalan!</div>
        <div className="text-sm text-green-800">
          Vienen incluidos en React. Solo importa lo que necesites:{' '}
          <code className="bg-green-100 px-1 rounded">import {'{ useState, useEffect }'} from 'react'</code>
        </div>
      </div>
    </SectionWrapper>
  )
}