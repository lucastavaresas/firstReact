import { Container } from "./styles";
import incomeImg from "../../assets/incoming.svg";
import outcomeImg from "../../assets/outcoming.svg";
import total from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransectionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income File" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Income File" />
        </header>
        <strong>-R$ 1000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total File" />
        </header>
        <strong>R$ 0</strong>
      </div>
    </Container>
  );
}
