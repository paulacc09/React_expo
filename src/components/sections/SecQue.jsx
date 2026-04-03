import { SectionWrapper, ToolBlock, CodeBlock } from '../UI'

export default function SecQue() {
  return (
    <SectionWrapper title="¿Qué es cada herramienta?">

      <ToolBlock name="⚛ React">
        <p className="text-sm text-gray-500 leading-relaxed">
          Librería JavaScript de Meta para construir interfaces de usuario mediante{' '}
          <strong className="text-gray-700">componentes reutilizables</strong>. Utiliza un DOM virtual
          para actualizar solo las partes que cambian. No es un framework completo: se encarga
          únicamente de la capa de vista (UI).
        </p>
        <CodeBlock>{`function MiBoton({ texto }) {
  return <button className="btn">{texto}</button>;
}`}</CodeBlock>
      </ToolBlock>

      <ToolBlock name="⚡ Vite">
        <p className="text-sm text-gray-500 leading-relaxed">
          Herramienta de build de nueva generación. A diferencia de Webpack, usa{' '}
          <strong className="text-gray-700">ES Modules nativos del navegador</strong> durante
          el desarrollo, arrancando el servidor en milisegundos.
        </p>
        <CodeBlock>{`# Sin Vite: espera 30-60s
# Con Vite: servidor listo en ~300ms
npm create vite@latest mi-app -- --template react`}</CodeBlock>
      </ToolBlock>

      <ToolBlock name="🎨 Tailwind CSS">
        <p className="text-sm text-gray-500 leading-relaxed">
          Framework CSS <strong className="text-gray-700">utility-first</strong>: aplicas utilidades
          atómicas directamente en el HTML. El bundle final solo incluye las clases que usas.
        </p>
        <CodeBlock>{`<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Enviar
</button>`}</CodeBlock>
      </ToolBlock>

      <ToolBlock name="🪝 React Hooks">
        <p className="text-sm text-gray-500 leading-relaxed">
          Funciones especiales (desde React 16.8) que permiten usar{' '}
          <strong className="text-gray-700">estado y ciclo de vida</strong> en componentes
          funcionales sin clases. Siempre empiezan con la palabra <em>use</em>.
        </p>
        <CodeBlock>{`const [contador, setContador] = useState(0);
useEffect(() => { console.log("cambió"); }, [contador]);`}</CodeBlock>
      </ToolBlock>

    </SectionWrapper>
  )
}