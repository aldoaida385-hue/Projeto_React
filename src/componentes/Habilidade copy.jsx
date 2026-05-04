
import "./Habilidade.css";
function Habilidade(props){
    return(
        <div className = "habilidade">
            <h2>Habilidades:</h2>
            <p>{props.children}</p>
        </div>
    )
}
export { Habilidade }