# Configuração Typescript para Node.js

#### Este projeto serve como exemplo de uma configuração do [Typescript](https://www.typescriptlang.org/) para o [Node.js](https://nodejs.org/en/).
O Node.js não trabalha diretamente com o Typescript. São necessárias algumas configurações para desenvolver com esta linguagem neste ambiente. Este projeto tem esse objetivo, mostrar um exemplo de configuração do Typescript para o Node.js.

Para realizar os próximos passos, utiliza-se o Shell e o Visual Studio Code.

#### Iniciando o projeto com [yarn](https://yarnpkg.com/).
```zsh
$ mkdir nome_projeto && cd nome_projeto
$ yarn init
```
> Siga as instruções do gerenciador para criar o projeto.

#### Configurando o transpiling e o build.
Para configurarmos o transpiling automático do typescript no desenvolvimento e o build para a produção precisamos instalar as seguintes bibliotecas:
```zsh
$ yarn add typescript nodemon sucrase -D
```
> A flag -D indica que os pacotes serão utilizados somente em desenvolvimento.

Para abrir o projeto no vscode digite:
```zsh
$ code .
```
Para teste do ambiente, no vscode crie uma nova pasta na raiz do projeto com o nome 'src'. Esta pasta vai conter todos os códigos Typescript do projeto. Em seguida crie um novo arquivo de nome index.ts. Coloque o código typescript de teste neste arquivo ou use o código de exemplo deste projeto.

**Configurando o transpiling**

 Para configurar o transpiling para o desenvolvimento utilizamos o sucrase e o nodemon. O primeiro passo é criar um arquivo para configurar o nodemon. Assim na raiz do projeto crie um arquivo chamado nodemon.json, com o seguinte conteúdo.

```json
 {
    "watch": ["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/index.ts"
    }
}
```
Este arquivo indica que o nodemon deverá observar todos os arquivos na pasta /src que tenha a extensão .ts. Ao observar uma mudança em algum destes arquivos o nodemon vai usar o sucrase-node para fazer o transpiling do typescript para o javascript e então o node pode executar este código.

Abra então o arquivo package.json e inclua a seguinte instrução após a license.

```json
 {
	// ...
	"scripts": {
    	"dev": "nodemon src/index.ts"
	},
	// ...
}
```
Esta configuração indica que o gerenciador de pacote pode rodar o script de desenvolvimento. Você pode fazer isso com o seguinte comando no seu shell:

```zsh
$ yarn dev
```
Com este comando seu ambiente de desenvolvimento está em funcionamento.
Você pode parar o funcionamento com o comando ctrl + c.

**Configurando o build**

Para configurar o build, ou seja, para construir o código do projeto que vai rodar em produção no Node.js, pode-se utilizar o compilador do typescript. Para gerar o setup de configuração do typescript rodamos o seguinte comando com o shell na raiz do projeto:

```zsh
$ yarn tsc --init
```
Este comando gerou o arquivo tsconfig.json na raiz do seu projeto. Abra este arquivo no vscode para algumas alterações.

```json
 {
	//... 
	{
		//...
		"outDir": "./dist",
		"rootDir": "./src",
		//...
		"removeComments": true,
		//...
	}
	//...
}
```
Altere as linhas indicadas para definir o diretório de destino da construção da aplicação de produção.

Agora crie o script de build logo abaixo de dev em package.json para a execução do gerenciador de pacotes.

```json
 {
	//...
	"scripts": {
		"dev": "nodemon src/index.ts",
		"build": "yarn tsc"
	},
	//...
}
```
Para rodar o build da sua aplicação execute:
```zsh
$ yarn build
```
Este comando vai criar o diretório /dist com sua aplicação compilada para javascript. Que pode ser usada no Node.js em produção.
