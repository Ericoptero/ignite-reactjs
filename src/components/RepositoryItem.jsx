export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>Forms in React</p>

            <a href="#" target="_blank">Acessar repositório</a>
        </li>
    );
}