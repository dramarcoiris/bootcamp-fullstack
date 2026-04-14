import './ModuleCard.css';

type ModuleProps = {
    name: string;
    sessions: number;
    level: string;
    description: string;
};

function ModuleCard({ name, sessions, level, description }: ModuleProps) {
    return (
        <article className="module-card">
            <h2>{name}</h2>
            <p>Sesiones: {sessions}</p>
            <p>Nivel: {level}</p>
            <p>{description}</p>
        </article>
    );
}

export default ModuleCard;
