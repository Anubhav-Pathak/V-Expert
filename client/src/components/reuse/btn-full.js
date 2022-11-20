export default (props) => {
    return (
        <div>
            <a className={`btn btn-full-${props.color}`}>
                {props.value}
            </a>
        </div>
    )
}