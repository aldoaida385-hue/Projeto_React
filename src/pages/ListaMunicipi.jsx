import { useState, useEffect } from "react";
import apiMunicipios from "../_service/apiMunicipios";
import { Col, Row, Container } from "react-bootstrap"; // Adicionei Container para alinhar

function ListaEstadosMunicipios() {
  const [estados, setEstados] = useState([]);
  const [municipios, setmunicipios] = useState([]);

  async function buscarEstado() {
    try {
      const resposta = await apiMunicipios.get("/estados");
      setEstados(resposta.data);
    } catch (error) {
      alert("Sem sucesso para buscar os estados");
    }
  }

  async function buscarMunicipios() {
    try {
      // Por enquanto fixo no Maranhão
      const resposta = await apiMunicipios.get("/estados/MA/municipios");
      setmunicipios(resposta.data);
    } catch (error) {
      alert("Sem sucesso para buscar os municipios");
    }
  }

  useEffect(() => {
    buscarEstado(); // Ponto e vírgula ou apenas nova linha
    buscarMunicipios();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Estados</h1>
          <ul>
            {estados.map((estado) => (
              <li key={estado.id}><strong>{estado.nome}</strong></li>
            ))}
          </ul>
        </Col>

        <Col>
          <h1>Municípios (MA)</h1>
          <ul>
            {municipios.map((municipio) => (
              <li key={municipio.id}>
                <strong>{municipio.nome}</strong><br />
                <span>{municipio.microrregiao?.nome || municipio.mesorregiao?.nome || "Região não Encontrado"} </span>
              </li>            
            ))}
          </ul>
        
        </Col>
      </Row>
    </Container>
  );
}

export { ListaEstadosMunicipios };