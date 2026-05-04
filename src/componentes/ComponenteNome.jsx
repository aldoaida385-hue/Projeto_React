import { useState } from "react"
import { useEffect } from "react"

function ComponenteNome() {

    const [nome, setNome] = useState("Aldo Aida")
    const [idade, setIdade] = useState("39anos")

    useEffect(() => {
        if(!nome)return
        alert("Nome alterado com Sucesso!")
    }, [nome]);
    
    useEffect(() => {
            if(!idade)return
        alert( "Idade alterado com Sucesso!")
    }, [idade]);
    
 

    return(
       <div>
            <p>Nome:</p>
            <h2>{nome}</h2>
            <p>Idade:</p>
            <h2>{idade}</h2>

        
        <input type = "text" placeholder = " Digite seu Nome" onKeyDown={(enter)=> 
            enter.key === "Enter" ? setNome(enter.target.value) : null
        }/>< br/>
        <input type = "text" placeholder = " Digite sua Idade" onKeyDown={(enter)=>
            enter.key === "Enter" ? setIdade(enter.target.value) : null
        }/>< br/>
        <p></p>
         <button onClick = {() => setNome("João Silva")}>Alterar Nome</button>
         <button onClick = {() => setIdade("20 anos")}>Alterar Idade</button><br />
         <button onClick = {() => setNome("Aldo Aida")}>Resetar Nome</button>
         <button onClick = {() => setIdade("39 anos")}>Resetar Idade</button>
       </div>
    )
}

export { ComponenteNome }