import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransectionsContext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModelOpen, setIsnewTransactionModelOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setIsnewTransactionModelOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsnewTransactionModelOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal isOpen={isNewTransactionModelOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionsProvider>
  );
}
