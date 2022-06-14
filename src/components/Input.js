import "./Input.css"
const input =({label,...rest}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}
export default input