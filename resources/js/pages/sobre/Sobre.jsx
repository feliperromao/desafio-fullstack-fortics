import React from 'react'
import Page from '../../components/commons/Page'

class Refrigerantes extends React.Component {
  render() {
    return (
      <Page>
        <h1>Sobre este projeto</h1>
        <h3>Tecnologias Utilizadas</h3>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Tecnologia</th>
              <th>Objetivo</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PHP 7x</td>
              <td>Linguagem back-end</td>
              <td>Utilizado como linguagem do lado do servidor nessa aplicação</td>
            </tr>
            <tr>
              <td>Laravel 5.8</td>
              <td>Framework PHP</td>
              <td>Framework utlizado para alavancar o processo de desenvolvinento</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>Persistir os dados da aplicação</td>
              <td>Todas as tabelas foram geradas a partir das migrations com o Artisan</td>
            </tr>
            <tr>
              <td>React JS</td>
              <td>Construção do front-end</td>
              <td>Framework front-end utilizado para construir a aplicação de forma rápida e escalável</td>
            </tr>
          </tbody>
        </table>
      </Page>
    )
  }
}

export default Refrigerantes;