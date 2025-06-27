# 🌱 VidaU – Plataforma de Desenvolvimento de Hábitos

VidaU é uma aplicação web desenvolvida como parte do Projeto Integrador, com o objetivo de ajudar usuários a criarem, acompanharem e manterem hábitos saudáveis. A solução foca em facilitar o gerenciamento de metas diárias e mensais, utilizando tecnologia moderna e acessível.

---

## 📌 Objetivo do Projeto

Atender a uma **demanda da sociedade** relacionada ao bem-estar e à saúde mental, oferecendo uma ferramenta simples e intuitiva para **criação e acompanhamento de hábitos pessoais**, como meditação, atividade física, leitura e outros.

---

## 🛠️ Tecnologias Utilizadas

### 🔷 Frontend (React)
- React.js
- React Router DOM
- HTML5 + CSS3 + JavaScript

### 🟩 Backend (Node.js)
- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticação
- Bcrypt para hash de senhas
- Dotenv para variáveis de ambiente
- Nodemon (ambiente de desenvolvimento)

---

## 🧱 Estrutura do Projeto

```
/meu-projeto-api
|
|-- /src
|   |-- /config          # Arquivos de configuração (banco de dados, ambiente)
|   |   |-- database.js
|   |   `-- index.js
|   |
|   |-- /controllers     # Lógica de negócio, o que fazer com as requisições
|   |   |-- userController.js
|   |   `-- productController.js
|   |
|   |-- /models          # Definição dos schemas do banco de dados
|   |   |-- User.js
|   |   `-- Product.js
|   |
|   |-- /routes          # Definição das rotas da API (endpoints)
|   |   |-- users.js
|   |   |-- products.js
|   |   `-- index.js
|   |
|   |-- /services        # Lógica de serviço (ex: interagir com APIs externas)
|   |
|   |-- /middlewares     # Funções que rodam antes dos controllers (ex: autenticação)
|   |   `-- auth.js
|   |
|   `-- app.js           # Arquivo principal da aplicação Express
|
|-- /tests               # Testes automatizados
|   |-- /integration
|   `-- /unit
|
|-- .env                 # Variáveis de ambiente (NÃO enviar para o Git)
|-- .eslintrc.json       # Configurações do linter (ESLint)
|-- .gitignore           # Arquivos a serem ignorados pelo Git
|-- package.json         # Dependências e scripts do projeto
`-- README.md            # Documentação do projeto


---

## 🚀 Como Executar Localmente

### Pré-requisitos:
- Node.js v18+
- MongoDB instalado e rodando localmente ou via Atlas

---

### 🔧 Passo a Passo:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/vida-u.git
cd vida-u

# 2. Instale o backend
cd server
npm install

# 3. Crie o arquivo .env na pasta server
touch .env
```

#### Exemplo do `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/vidau
JWT_SECRET=uma_chave_secreta
```

```bash
# 4. Inicie o backend
npm run dev
```

---

```bash
# 5. Em outro terminal, instale e inicie o frontend
cd client
npm install
npm start
```

---

## 🌐 Acesso

- Frontend: http://localhost:3000
- API Backend: http://localhost:5000/api

---

## 🎥 Entregas do Projeto

- ✅ Aplicação Web funcional (MVP)
- ✅ Protótipo em React + Node.js
- ✅ Vídeo demonstrativo de até 10 minutos (em andamento)
- ✅ Relatório e descrição do projeto (em anexo)
- ✅ Código-fonte organizado e modularizado

---

## 👨‍💻 Equipe de Desenvolvimento

- Nome 1 – RM/RA – Função
- Nome 2 – RM/RA – Função
- Nome 3 – RM/RA – Função
- Nome 4 – RM/RA – Função
- Nome 5 – RM/RA – Função
- Nome 6 – RM/RA – Função

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais. Livre para uso, modificação e expansão.
