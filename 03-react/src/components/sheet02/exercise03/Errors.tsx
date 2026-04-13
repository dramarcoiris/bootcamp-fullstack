export type Props = {
    name: string;
    role: string;
    city: string;
};

function ProfileCard({ name, role, city }: Props) {
    return (
        <section className="profile-card">
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    );
}

function Exercise03() {
    return (
        <main>
            <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid"></ProfileCard>
            <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla"></ProfileCard>
        </main>
    );
}

export default Exercise03;

/* 
· Se ha creado la exportación de tipos para los Props, definidiendo nombre, rol y ciudad.
· Se ha generado la exportación de App, que es la que construye la ProfileCard
· En App() se han especificado los Props en ProfileCard
· Finalmente, para evitar conflictos en la exportación, se ha renombrado la función App() por Exercise03(), 
ya que se visualiza todo en App.tsx y generaba conflictos
*/
