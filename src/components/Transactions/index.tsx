import { useContext } from "react";
import { TransactionsContext } from "../../TransectionsContext";
import { Container } from "./styles";

export function Transactions() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions) => {
            return (
              <tr key={transactions.id}>
                <td>{transactions.title}</td>
                <td className={transactions.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transactions.amount)}
                </td>
                <td>{transactions.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transactions.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}