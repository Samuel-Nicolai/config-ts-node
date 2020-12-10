# Configuração Typescript para Node.js
----
#### Este projeto serve como exemplo de uma configuração do Typescript para o Node.js.
O Node.js não trabalha diretamente com o Typescript. São necessárias algumas configurações para desenvolver com esta linguagem neste ambiente. Este projeto tem esse objetivo, mostrar uma possível configuração do Typescript para o Node.js.

#### Iniciando o projeto com [yarn](https://yarnpkg.com/).
```zsh
$ mkdir nome_projeto && cd nome_projeto
$ yarn init
```
> Siga as instruções do gerenciador para criar o projeto.

#### Obtendo o [typescript](https://www.typescriptlang.org/) e as ferramentas para utiliza-lo no [nodejs](https://nodejs.org/en/).
```zsh
$ yarn add typescript nodemon sucrase -D
```
> A flag -D indica que os pacotes serão utilizados somente em desenvolvimento.
> Ao instalar o typescript podemos utilizar o [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) para compilar nosso código para produção.
> Com o [nodemon](https://nodemon.io/) podemos adicionar a funcionalidade que recarrega um arquivo automaticamente ao salvá-lo.
> O [sucrase](https://sucrase.io/) atua como tranpiler muito rápido entre o código typescript e javascript, ideal para o cenário de desenvolvimento.