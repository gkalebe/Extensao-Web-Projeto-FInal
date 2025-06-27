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
/meu-projeto-completo/
|-- /client/
|   |-- /config/          # Configurações (banco de dados, variáveis de ambiente)
|   |   |-- database.js
|   |   `-- env.js
|   |
|   |-- /api/
|   |   `-- /v1/            # Boas práticas incluem versionar sua API
|   |       |-- /controllers/ # Lógica que recebe a requisição e envia a resposta
|   |       |   |-- user.controller.js
|   |       |   `-- product.controller.js
|   |       |
|   |       |-- /models/      # Schema e modelo do banco de dados (ex: Mongoose, Sequelize)
|   |       |   |-- User.model.js
|   |       |   `-- Product.model.js
|   |       |
|   |       |-- /routes/      # Definição dos endpoints da API
|   |       |   |-- user.routes.js
|   |       |   |-- product.routes.js
|   |       |   `-- index.js      # Arquivo que une todas as rotas
|   |       |
|   |       `-- /middlewares/ # Funções executadas entre a requisição e o controller
|   |           `-- auth.middleware.js
|   |
|   |-- /services/        # Lógica de negócio complexa, comunicação com outras APIs
|   |   `-- email.service.js
|   |
|   |-- /utils/           # Funções utilitárias (ex: formatar data, gerar hash)
|   |   `-- errorHandler.js
|   |
|   `-- server.js         # Arquivo principal que inicia o servidor Express
|
|-- /public/              # Arquivos estáticos (favicon, index.html, robots.txt)
|   |-- favicon.ico
|   `-- index.html
|
|-- /src/
|   |-- /assets/          # Imagens, fontes, ícones SVG, etc.
|   |   `-- /images/
|   |
|   |-- /components/      # Componentes React reutilizáveis
|   |   |-- /common/      # Componentes genéricos (Button, Input, Modal)
|   |   |   |-- Button.jsx
|   |   |   `-- Input.jsx
|   |   |
|   |   `-- /layout/      # Componentes de estrutura (Header, Footer, Sidebar)
|   |       |-- Header.jsx
|   |       `-- Footer.jsx
|   |
|   |-- /context/         # State Management com React Context API
|   |   `-- AuthContext.jsx
|   |
|   |-- /hooks/           # Custom Hooks (ex: useAuth, useApi)
|   |   `-- useAuth.js
|   |
|   |-- /pages/           # Componentes que representam uma página inteira
|   |   |-- HomePage.jsx
|   |   |-- LoginPage.jsx
|   |   `-- ProfilePage.jsx
|   |
|   |-- /routes/          # Configuração das rotas da aplicação (React Router)
|   |   `-- index.jsx
|   |
|   |-- /services/        # Funções para fazer chamadas à API do backend
|   |   |-- api.js        # Configuração base do Axios ou Fetch
|   |   `-- auth.service.js
|   |
|   |-- /styles/          # Arquivos de estilização globais
|   |   `-- global.css
|   |
|   |-- /utils/           # Funções utilitárias do frontend
|   |   `-- formatters.js
|   |
|   |-- App.jsx           # Componente raiz da aplicação
|   `-- main.jsx          # Ponto de entrada da aplicação React
|
|-- .eslintrc.cjs         # Configuração do linter para qualidade de código
|-- package.json          # Dependências e scripts do frontend
`-- vite.config.js        # Configuração do bundler (Vite)



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
