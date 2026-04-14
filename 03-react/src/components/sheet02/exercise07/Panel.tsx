import './Panel.css';

type Props = {
    children: React.ReactNode;
    as?: 'section' | 'article';
};

function Panel({ children, as = 'section' }: Props) {
    const Component = as;
    return <Component className="panel">{children}</Component>;
}

export default Panel;
