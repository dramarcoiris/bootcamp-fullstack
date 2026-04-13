export type Props = {
    title: string;
    description: string;
    text?: string;
    image?: string;
    alt?: string;
};

function Card({ title, description, text, image, alt }: Props) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <p>{text}</p>
            <img src={image} alt={alt} />
        </div>
    );
}

export default Card;
