import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransitionModal: () => void;
}

export function Header({onOpenNewTransitionModal}: HeaderProps){

    return (
        <Container>
            <Content>
           <img src={logoImg} alt="Dt Money" />
           <button type="button" onClick={onOpenNewTransitionModal}>
               Nova Transação
           </button>

     

           </Content>
        </Container>
    )

}