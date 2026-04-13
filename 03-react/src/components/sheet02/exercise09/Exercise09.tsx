import CourseCard from './CourseCard';

function CourseCatalog() {
    return (
        <section>
            <h2>Catálogo de cursos</h2>
            <p>Puedes explorar nuestros cursos disponibles del bootcamp</p>
            <div className="course-grid">
                <CourseCard
                    title="React"
                    level="Medio"
                    durationValue={2}
                    durationUnit="semanas"
                    modality="Online"
                    action="Ver curso"
                />

                <CourseCard
                    title="TypeScript"
                    level="Principiante"
                    durationValue={5}
                    durationUnit="días"
                    modality="Presencial"
                    action="Let's go!"
                />

                <CourseCard
                    title="Java"
                    level="Avanzado"
                    durationValue={5}
                    durationUnit="días"
                    modality="Presencial"
                    action="¡Aprender!"
                />

                <CourseCard
                    title="Node.js"
                    level="Medio"
                    durationValue={5}
                    durationUnit="días"
                    modality="Online"
                    action="Ver curso"
                />

                <CourseCard
                    title="SQL"
                    level="Principiante"
                    durationValue={1}
                    durationUnit="mes"
                    modality="Online"
                    action="Empezar"
                />

                <CourseCard
                    title="Git y GitHub"
                    level="Avanzado"
                    durationValue={3}
                    durationUnit="días"
                    modality="Online"
                    action="Aprender"
                />
            </div>
        </section>
    );
}

export default CourseCatalog;
