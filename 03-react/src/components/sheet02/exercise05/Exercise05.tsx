import ModuleCard from './ModuleCard';

function Exercise05() {
    return (
        <section>
            <h1>Módulos del bootcamp</h1>
            <ModuleCard name="React" sessions={8} level="Intermedio" description="Componentes, props y childrens" />
            <ModuleCard name="JavaSript" sessions={6} level="Básico" description="Fundamentos del lenguaje" />
            <ModuleCard name="Node.js" sessions={5} level="Avanzado" description="Backend con Express" />
            <ModuleCard
                name="TypeScript"
                sessions={10}
                level="Avanzado"
                description="Tipado estático, interfaces y desarrollo más seguro en proyectos React"
            />
            <ModuleCard
                name="Git y Control de Versiones"
                sessions={3}
                level="Básico"
                description="Gestión de repositorios, trabajo en equipo y flujo de versiones con Git"
            />
        </section>
    );
}

export default Exercise05;
