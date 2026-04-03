import { SectionWrapper, ToolBlock, WhenGrid } from '../UI'

export default function SecCuando() {
  return (
    <SectionWrapper title="¿Cuándo usar cada herramienta?">

      <ToolBlock name="React">
        <WhenGrid
          si={['La UI tiene muchos estados dinámicos','Necesitas reutilizar componentes','SPA o dashboard complejo']}
          no={['Página estática simple','SEO crítico sin SSR','Solo un formulario sencillo']}
        />
      </ToolBlock>

      <ToolBlock name="Vite">
        <WhenGrid
          si={['Nuevo proyecto React, Vue o Svelte','Quieres HMR ultrarrápido','Proyectos modernos (+ES2015)']}
          no={['Proyecto legacy con Webpack','Usas Next.js (tiene su propio bundler)']}
          noLabel="Considera alternativas si..."
        />
      </ToolBlock>

      <ToolBlock name="Tailwind">
        <WhenGrid
          si={['Diseño personalizado sin framework UI','Quieres evitar conflictos de CSS','Consistencia visual en equipo']}
          no={['Prefieres CSS semántico puro','Ya usas Bootstrap o Material UI']}
        />
      </ToolBlock>

      <ToolBlock name="Hooks">
        <WhenGrid
          si={['Necesitas estado local en un componente','Ejecutar código al montar/desmontar','Manejar efectos (APIs, timers)']}
          no={['Solo en funciones de componente','No dentro de ifs ni bucles']}
          noLabel="Reglas a respetar"
        />
      </ToolBlock>

    </SectionWrapper>
  )
}