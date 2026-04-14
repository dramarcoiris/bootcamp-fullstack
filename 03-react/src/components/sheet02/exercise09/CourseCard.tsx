type CourseLevel = 'Principiante' | 'Medio' | 'Avanzado';
type ModalityOption = 'Presencial' | 'Online';

type Props = {
    title: string;
    level: CourseLevel;
    durationValue: number;
    durationUnit: string;
    modality: ModalityOption;
    action: string;
};

function CourseCard({ title, level, durationValue, durationUnit, modality, action }: Props) {
    return (
        <article className="course-card">
            <h2>{title}</h2>
            <p>
                <strong>Nivel: </strong>
                {level}
            </p>
            <p>
                <strong>Duración: </strong>
                {durationValue} {durationUnit}
            </p>
            <p>
                <strong>Modalidad: </strong>
                {modality}
            </p>
            <button>{action}</button>
        </article>
    );
}

export default CourseCard;
