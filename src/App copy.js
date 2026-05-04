import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { PrimeiroComponente } from "./componentes/PrimeiroComponente";
import { ComponenteNome } from "./componentes/ComponenteNome";
import { Habilidade } from "./componentes/Habilidade";
import { Experincia } from "./componentes/Experiencia";
import { ComponenteObjetivo } from "./componentes/ComponeteObjetivo";
import "./componentes/ComponenteNome.css";
import "./componentes/Experiencia.css";
import "./componentes/ComponeteObjetivo.css";
import "./componentes/curriculo.css";

function App() {
  return (
    <div className="App">

      <div className="curriculo">
        <h1>CURRÍCULO</h1>
      </div>
      
      <div className="nome">  
        < ComponenteNome />
      </div>     
     
      < Habilidade>
      JavaScript | React | HTML | CSS | Design Gráfico
      </Habilidade>

      <div className="obj">
        < ComponenteObjetivo >
        Busco uma oportunidade para aplicar minhas habilidades em design gráfico e desenvolvimento web, 
        contribuindo para projetos criativos e inovadores, enquanto continuo a aprender e crescer profissionalmente.
        </ ComponenteObjetivo>
      </div>

    <div className="exp"> 
        <h2>Experiência Profissional</h2>
        
      <div className="exp">
        < Experincia cargo = "Designer Gráfico" empresa = "Autonomo" periodo = "2025 - 2026" /> 
      </div>    
      <div className="exp">
        < Experincia cargo = "Auxiliar Administrativo" empresa = "Lotérica Capela" periodo = "2014 - 2023" /> 
      </div>
      <div className="exp">
        < Experincia cargo = "Atuação na linha de produção de pães, auxiliando no preparo, operação de máquinas" empresa = "FBC- Japão" periodo = "2011 - 2014" /> 
      </div>
    </div>
    
      
      
    </div>
  );
}

export default App;
