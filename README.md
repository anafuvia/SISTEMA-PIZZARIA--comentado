 SISTEMA DE PIZZARIA🍕
 
 
 ✏️  Descrição

Esse projeto é um sistema de pizzaria feito para gerenciar clientes, pedidos e usuários. A ideia foi criar algo simples, mas que funcionasse de verdade, usando Node.js no backend e um banco de dados SQLite.

Com ele, dá pra cadastrar clientes, criar pedidos e fazer login no sistema.

🚀 Tecnologias utilizadas

Usamos as seguintes tecnologias:

Node.js
Express
SQLite (sql.js)
JWT (para login)
bcryptjs (para senha)
dotenv
cors
HTML, CSS e JavaScript


⚙️ Pré-requisitos

Antes de rodar o projeto, precisa ter:

Node.js instalado
npm instalado
Express instalado
sql.js instalado
jsonwebtoken instalado
 bcryptjs instalado
cors instalado
dotenv instalado
SQLite3 Editor instalado



▶️ Como rodar o projeto

1-Clonar o repositório no cmd:
git clone https://github.com/seu-usuario/sistema-pizzaria.git

2-cd sistema-pizzaria

Instalar as dependências:
Node.js 
npm
Express 
sql.js 
jsonwebtoken
cors
dotenv 
SQLite3 Editor 

3-Criar o arquivo .env:
PORT=3000
JWT_SECRET=qualquer_chave

4-Rodar o seed (criar banco):
node seed.js

5-Iniciar o servidor:
node index.js


Por ultimo é só abrir no navegador:
http://localhost:3000


 📁    ESTRUTURA DAS PASTAS EXPLICADAS

📁 SISTEMA-PIZZARIA
arquivos principais




 .env.example
modelo de configurações do sistema.

.gitignore
define o que não vai para o git.

README.md
explica o projeto.

package.json
bibliotecas e comandos do node.

package-lock.json
controle de versões das bibliotecas.

index.js
inicia o servidor (arquivo principal).

seed.js
cria dados iniciais no banco.

pizzaria.db
banco de dados do sistema.

📁 PUBLIC/

index.html
tela do sistema.

script.js
ações da interface (cliques, envio de dados).

style.css
aparência (cores e layout).

📁 SRC/
📁 DATABASE/

sqlite.js
conexão com o banco.

📁 MIDDLEWARES/

auth.js
verifica se o usuário está logado.

📁 MODELS/

cliente.js → clientes
pedido.js → pedidos
pizza.js → pizzas
usuario.js → login

👉 funções: criar, buscar, atualizar, deletar

📁 ROUTES/

index.js
define as rotas (ex: /login, /pedidos)


 credenciais de teste

👉 usadas para acessar o sistema sem precisar criar conta

usuário (admin):
email:admin@pizzaria.com

usuário comum:
email: cliente@pizzaria.com
senha: 123456



desafios encontrados durante a engenharia reversa e como foram solucionados

1. estrutura do projeto
problema: difícil entender as pastas.
solução: analisar cada pasta separadamente.

2. fluxo do sistema
problema: não saber como os dados circulam.
solução: seguir o caminho (tela → backend → banco).

3. bibliotecas
problema: não saber pra que servem.
solução: olhar o package.json e pesquisar.

4. banco de dados
problema: entender o sqlite.
solução: analisar o sqlite.js.

5. login (autenticação)
problema: jwt confuso.
solução: estudar o auth.js.

6. rotas
problema: não saber o que cada rota faz.
solução: testar e analisar o routes/index.js.

7. documentação
problema: pouca explicação.
solução: ler o código e fazer resumos.



------------------- // ---------------------------


possíveis melhorias futuras

1. melhorar a interface
deixar o visual mais moderno e fácil de usar.

2. validação de dados
evitar erros, validando campos (ex: email, senha, pedidos).

3. sistema de permissões
diferenciar melhor admin e cliente.

4. melhorar segurança
proteger melhor login e dados (ex: senha criptografada).

5. organizar melhor o código
separar ainda mais funções para facilitar manutenção.

6. adicionar mais funcionalidades
ex: histórico de pedidos, status em tempo real, pagamento online.
