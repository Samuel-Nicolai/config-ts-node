# Configuração Typescript para Node.js

#### Este projeto serve como exemplo de uma configuração do [Typescript](https://www.typescriptlang.org/) para o [Node.js](https://nodejs.org/en/).
O Node.js não trabalha diretamente com o Typescript. São necessárias algumas configurações para desenvolver com esta linguagem neste ambiente. Este projeto tem esse objetivo, mostrar um exemplo de configuração do Typescript para o Node.js.

#### Iniciando o projeto com [yarn](https://yarnpkg.com/).
```zsh
$ mkdir nome_projeto && cd nome_projeto
$ yarn init
```
> Siga as instruções do gerenciador para criar o projeto.

#### Configurando o transpiling e o build.
Para configurarmos os transpiling automático do typescript para o desenvolvimento e build para a produção precisamos instalar as seguintes bibliotecas:
```zsh
$ yarn add typescript nodemon sucrase -D
```
> A flag -D indica que os pacotes serão utilizados somente em desenvolvimento.
> Ao instalar o typescript podemos utilizar o [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) para compilar nosso código para produção.
> Com o [nodemon](https://nodemon.io/) podemos adicionar a funcionalidade que recarrega um arquivo automaticamente ao salvá-lo.
> O [sucrase](https://sucrase.io/) atua como tranpiler muito rápido entre o código typescript e javascript, ideal para o cenário de desenvolvimento.
