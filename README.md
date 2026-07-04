# 🛒 DSCommerce

Sistema de e-commerce desenvolvido durante o treinamento da **DevSuperior**, com o objetivo de praticar o desenvolvimento de aplicações Full Stack utilizando Java, Spring Boot e React.

## 📖 Sobre o projeto

O **DSCommerce** é uma aplicação de comércio eletrônico que permite aos usuários navegar por um catálogo de produtos, adicionar itens ao carrinho de compras, realizar autenticação e registrar pedidos. O sistema também possui uma área administrativa para gerenciamento de produtos.

O projeto foi desenvolvido com foco na aplicação de boas práticas de arquitetura, APIs REST, autenticação, controle de acesso e integração entre frontend e backend.

---

## ✨ Funcionalidades

### 👤 Área Pública

- Listagem paginada de produtos
- Pesquisa de produtos por nome
- Visualização dos detalhes do produto
- Adição de produtos ao carrinho
- Alteração da quantidade dos itens do carrinho
- Remoção de itens do carrinho
- Login de usuários
- Finalização do pedido

### 🔐 Área Administrativa

- Login de administrador
- Listagem de produtos
- Cadastro de novos produtos
- Edição de produtos
- Exclusão de produtos

---

## 📷 Telas

### Área do Cliente

- Catálogo de produtos
- Detalhes do produto
- Carrinho de compras
- Login
- Confirmação do pedido

### Área Administrativa

- Dashboard
- Listagem de produtos
- Cadastro/Edição de produtos

---

## 🛠 Tecnologias utilizadas

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- OAuth2 / JWT
- Hibernate
- Maven

### Frontend

- React
- TypeScript
- React Router
- Axios
- CSS

### Banco de Dados

- H2 Database
- PostgreSQL

### Ferramentas

- Git
- GitHub
- Postman
- Figma

---

## 🚀 Funcionalidades implementadas

- ✔ Cadastro de produtos
- ✔ Atualização de produtos
- ✔ Exclusão de produtos
- ✔ Pesquisa por nome
- ✔ Paginação
- ✔ Login com autenticação
- ✔ Controle de acesso por perfil
- ✔ Carrinho de compras
- ✔ Registro de pedidos

---

## 📌 Regras de negócio

- Apenas administradores podem gerenciar produtos.
- Usuários autenticados podem finalizar pedidos.
- Usuários não autenticados podem navegar pelo catálogo e utilizar o carrinho.
- O carrinho calcula automaticamente o valor total da compra.

---

## 🔐 Perfis de acesso

### Cliente

- Consultar catálogo
- Visualizar detalhes do produto
- Gerenciar carrinho
- Realizar pedidos

### Administrador

- Todas as permissões do cliente
- Cadastro de produtos
- Atualização de produtos
- Exclusão de produtos

---

## ▶ Como executar o projeto

Este projeto está dividido em dois repositórios:

- **Backend (Spring Boot):** https://github.com/LuizHSDias/Back-End-Ecommerce
- **Frontend (React):** https://github.com/LuizHSDias/DSCommerce

### 1️⃣ Clonar o Backend

```bash
git clone https://github.com/LuizHSDias/Back-End-Ecommerce.git

cd Back-End-Ecommerce

mvn spring-boot:run
```

---

### 2️⃣ Clonar o Frontend

```bash
git clone https://github.com/LuizHSDias/DSCommerce.git

cd DSCommerce

npm install

npm start
```

ou

```bash
yarn

yarn start
```

---

## 🔗 Comunicação entre as aplicações

O frontend consome a API REST disponibilizada pelo backend. Antes de iniciar o frontend, certifique-se de que o backend esteja em execução.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Arquitetura em camadas
- APIs REST
- CRUD completo
- Relacionamentos JPA
- Spring Security
- JWT Authentication
- Controle de acesso por Roles
- Paginação
- Validação de dados
- Integração Frontend x Backend
- Organização de componentes React

---

## 📄 Documento de requisitos

Este projeto foi desenvolvido seguindo o documento de requisitos disponibilizado pela **DevSuperior**, contemplando os principais casos de uso do sistema de e-commerce.

---

## 👨‍💻 Autor

**Luiz Henrique**

---

## 🎓 Créditos

Projeto desenvolvido como parte do treinamento da **DevSuperior**, ministrado pelo professor **Nélio Alves**, com finalidade educacional e prática no desenvolvimento de aplicações Full Stack.