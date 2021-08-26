export default function Status({ statusCode }) {
    return (<div>
        {(statusCode == 0) ? '' : ''}
        {(statusCode == 1) ? 'grabando...' : ''}
        {(statusCode == 2) ? 'grabado' : ''}
    </div>);
}