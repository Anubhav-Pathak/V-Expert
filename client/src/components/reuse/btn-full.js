const Button = (props) => {
    return (
        <div>
            <a href="/" className={`btn btn-full-${props.color}`}>
                {props.value}
            </a>
        </div>
    )
}
export default Button;