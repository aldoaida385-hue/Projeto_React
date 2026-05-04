import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";


function NovaListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  // 1. Cria o estado de carregamento começando como 'true'
  const [carregando, setCarregando] = useState(true);

  async function buscarProdutos() {
    try {
      setCarregando(true); // Garante que está como true ao iniciar a busca
      const resposta = await api.get("/productlistbyremark/home");
      setProdutos(resposta.data);
    } catch (error) {
      alert("Deu ruim");
    } finally {
      // 2. Quando a API termina (dando certo ou errado), paramos de carregar
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  // 3. Renderização Condicional
  if (carregando) {
    return <h3>Carregando produtos... Aguarde! 🚀</h3>;
  }

  return (
    <div>
      <h1>Lista Produtos</h1>
      <Row>
        {produtos.map((produto) => (
          <Col key={produto.id}>
             <p>{produto.title}</p>
             <img src={produto.image} width={180} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export { NovaListaProdutos };