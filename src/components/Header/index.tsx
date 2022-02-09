import { useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionsModal: () => void;
}

export function Header({ onOpenNewTransactionsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="money" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}