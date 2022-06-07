import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model, 
  },


  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposito',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-06-06 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'retirada',
          category: 'Casa',
          amount: 2200,
          createdAt: new Date('2022-06-01 09:00:00'),
        },
      ],
    })
  },


  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
