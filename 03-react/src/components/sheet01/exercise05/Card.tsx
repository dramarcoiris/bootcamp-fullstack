type Propiedades = {
    title: string;
    description: string;
};

function Card({ title, description }: Propiedades) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;
