# 🍔 Hamburgueria Artesanal — Customização de Pedidos

Aplicação **Full Stack** de uma hamburgueria artesanal, desenvolvida com foco na **customização de pedidos**, permitindo que o cliente monte seu próprio hambúrguer, escolha adicionais, acompanhamentos e bebidas, além de visualizar o valor do pedido de forma dinâmica.

O projeto está sendo desenvolvido em conjunto, com **Frontend e Backend separados**, permitindo uma divisão clara de responsabilidades e facilitando a manutenção e evolução da aplicação.

---

## 🚀 Sobre o Projeto

A proposta é criar uma experiência semelhante a uma plataforma real de pedidos online, permitindo que o cliente personalize seu pedido de acordo com suas preferências.

O sistema contará com uma interface moderna e responsiva no **Frontend** e uma **API REST no Backend**, responsável pelo processamento das informações, regras de negócio e comunicação com o banco de dados.

Entre as possibilidades de customização estão:

- 🍞 Tipo de pão
- 🥩 Tipo de carne
- 🔥 Ponto da carne
- 🧀 Tipo de queijo
- 🥓 Quantidade de bacon
- 🥬 Saladas
- 🥫 Molhos
- 🍟 Acompanhamentos
- 🥤 Bebidas
- 💰 Cálculo dinâmico do pedido
- 📦 Resumo da comanda
- 🚚 Informações de entrega
- 💳 Forma de pagamento

---

## 🎯 Objetivos

O projeto tem como objetivo desenvolver uma aplicação Full Stack aplicando conceitos e boas práticas de desenvolvimento de software.

Entre os principais objetivos estão:

- Desenvolvimento de uma API REST
- Desenvolvimento de uma interface utilizando React
- Utilização de TypeScript no Frontend e Backend
- Integração entre Frontend e Backend
- Validação de dados
- Aplicação de regras de negócio
- Persistência de dados
- Organização e arquitetura de código
- Controle de versão com Git
- Desenvolvimento colaborativo
- Aplicação de boas práticas de desenvolvimento

---

## 🏗️ Arquitetura do Projeto

O projeto é dividido em duas aplicações independentes: **Frontend** e **Backend**.

```text
hamburgueria/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md