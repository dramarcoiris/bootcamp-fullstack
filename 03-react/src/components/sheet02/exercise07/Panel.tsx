type Props = {
    children: React.ReactNode;
};

function Panel({ children }: Props) {
    return <section>{children}</section>;
}

export default Panel;
