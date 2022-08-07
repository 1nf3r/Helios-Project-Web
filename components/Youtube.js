export const Youtube = ({episode}) => {
    return (
        <iframe
        src={`https://youtube.com/embed/${episode}`}
        width='100%'
        height="232"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        ></iframe>
    )
}