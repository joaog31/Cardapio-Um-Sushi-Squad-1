# Como estender um template na estrutura MVC

Estender um template MVC (Model-View-Controller) envolve expandir sua funcionalidade mantendo a arquitetura original.

<br>

## Tecnologias utilizadas

- Node.js v22.0
- React.js v18.0
- Railway v2.2
- Git v2.49
- Vscode v1.1

<br>

## Estrutura MVC

- Model: Lida com os dados 
- View: Páginas HTML, mostra a parte visual
- Controller: Recebe requisições e envia dados para as views, intermediando entre o model e a view

<br>

## Estrutura do template 

diretório/\
├── models/\
│ ├── categoryModel.js\ \
├───controllers/\
│ └── menuController.js\
├── views/\
│ ├── layout.ejs\
│ ├── menu.ejs
 
<br>

## Boas práticas para extensão

1. Mantenha a separação MVC

- A logica de negocio não fica na view
- Não acessar dados diretamente no controllers

2. Use herança apropriadamente

3. Documente as extensões utilizadas

4. Teste as extensões

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://https://github.com/joaog31/Cardapio-Um-Sushi-Squad-1.git
   cd 

Instale as dependências:

bash
Copiar código
npm install


bash
Copiar código
node app.js
Acesse no navegador:

bash
Copiar código
http://localhost:3000/menu
Funcionalidades
Listagem de categorias e pratos

Templates EJS com layout base compartilhado

<br>

## Licença

Este software é de propriedade de Um Sushi e está licenciado para uso exclusivo do Restaurante Um Sushi. O código não pode ser redistribuído, modificado ou utilizado sem autorização prévia.