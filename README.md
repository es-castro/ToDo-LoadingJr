# ToDo-LoadingJr

Um modelo de gerenciamento de tarefas desenvolvido no processo seletivo da Loading Jr.

### 🏃 Passos de inicialização

Instale os pacotes dentro da pasta _backend_

`npm install --save`

Crie o banco de dados

`npm run migrate`

Rode o servidor

`npm run dev`

## 🚀 Rotas da Aplicação

### UsersController

`GET` _users/_

`GET` _users/:user_id_

### TasksController

`POST` _tasks/_

`GET` _tasks/?user_id=:user_id_

`GET` _tasks/:task_id_

`DEL` _tasks/:task_id_
