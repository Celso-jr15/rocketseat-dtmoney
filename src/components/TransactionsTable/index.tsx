import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    
    useEffect( () => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[]);
    
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

                    <tr>
                        <td>Dividendos de FIIs</td>
                        <td className="deposito">R$ 1.200,00</td>
                        <td>Investimentos</td>
                        <td>25/03/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">- R$ 1.000,00</td>
                        <td>Casa</td>
                        <td>28/03/2022</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposito">R$ 8.200,00</td>
                        <td>Desenvolvimento</td>
                        <td>01/04/2022</td>
                    </tr>
                    <tr>
                        <td>desenvolvimento de Sistemas</td>
                        <td className="retirada">- R$ 1.200,00</td>
                        <td>Desenvolvimento</td>
                        <td>15/04/2022</td>
                    </tr>

                </tbody>

            </table>

        </Container>
    );
}