type Props = {
    children: React.ReactNode;
};

function Panel({ children }: Props) {
    return <section className="Panel">{children}</section>;
}

export default Panel;
