# Desafio iMedicina Frontend

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli), versão 15.0.1.

Para instalar o Angular CLI, é preciso instalar o Node.js. A versão usada neste projeto é a mais recente.
Após instalar o Node.js, execute o seguinte comando dentro deste diretório para instalar as dependências do projeto:

`npm install`

## Executando o projeto

Use o comando `ng serve` para iniciar o dev server. Abra o navegador vá para a URL `http://localhost:4200/`. Se alguma alteração for feita no código, o servidor atualizará automaticamente.

## Componentes implementados

Esta aplicação não está finalizada e até o momento contém os seguintes componentes:

### Tela de login
É uma tela simples de login com dois campos e um botão de login.

O campo de nome de usuário está pronto para receber uma string sem limitação de caracteres (tipo ou quantidade), que tem um validador caso não seja preenchido.

O campo senha também é um campo de caracteres sem limitação e que não tem um validador.

O motivo de ter feito a validação nessa forma no primeiro momento foi porque os usuários devem logar com nome de usuário e senha, mas os profissionais precisariam logar apenas com o seus CRMs, sem senha. A implementação de profissionais tendo cadastro completo (long e senha) seria implementada ao final, quando houvesse um servidor de autenticação completamente funcional.

A autenticação está em estado rudimentar, apenas verificando se os dados enviados no formulário de login correspondem as informações no banco de dados.

Ainda sobre a autenticação, foram implementados vários serviços e classes que cuidariam da inteterceptação de requisições, armazenamento e checagem de tokens, mas como não houve uma implementação funcional de servidor de autenticação, esses recursos foram desabilidados. É possível vê-los no diretório `./src/app/auth`.

### Tela de consulta de agendamentos para o paciente

Nesta tela, existe uma tabela (recurso do Agular Material), que carrega todos os agendamentos do paciente, listando nome do profissional, datas e o status desse profissional.

Como melhorias, poderia haver um formulário que filtrasse os resultados por profissional e datas. Além disso, seria usada paginação dos resultados da tabela, assim como o seu lazy loading.

Existia um botão de Buscar, que atualizava os dados da tabela sob demanda, mas tablea fornecida pelo Angular Material é na verdade complexa de se trabalhar. As soluções disponíveis no StackOverflow não funcionaram nesse projeto a respeito de carregamento de resultados.

Por isso, todos os dados disponíveis na base são carregados na tabela assim que a tela é carregada.

## Componentes que não foram implementados
### Tela de criação de novos agendamentos

Deveria haver um botão na tela de visualização de agendamentos do paciente que possibilitasse a criação de um novo agendamento. Essa página não foi feita devido ao tempo, mas ela contaria com um formulário composto por uma Select Box com os profissionais disponíveis, um Date Picker com os dias e outra Select Box com as janelas de horários pré definidas. Finalmente, um botão de salvar o agendamento.

A Select Box teria como opções horários, e ao se selecionar uma opção, faria um levantamento no banco de dados sobre em quais horários o profissioanl selecionado já tem agendamentos e retornando se aquela opção pode ou não ser selecionada.

Essa solução não é ótima, porém atende ao requisito de concorrência de pacientes por profissioanais. O ideal seria listar como opção apenas os horários disponíveis, para poupar tempo do usuário e melhorar a sua experiência. Além disso, seria feita um filtro na listagem dos profissionais, listando apenas os que estivessem disponíveis.

### Tela de visualização de agendamentos do profissional

Essa tela seria semelhante a do paciente, mas listaria os agendamentos para visualização do profissional, após o seu login com o CRM. Porém ela não contaria com um botão de criação.

## Requisitos que não foram implementados

### Consumo de API de seervidor de autenticação
Entre as dependências do projeto, estão algumas que seriam utilizadas para realizar o consumo de uma API de servidor de autenticação. Uma delas é o Auth0.

Como já foi dito, foram criados vários métodos de interação da aplicação com os tokens que seriam gerados pelo servidor de autenticação. Os tokens ficariam salvos como cookies.

O servidor de autenticação que escolhi para isso foi uma implementação do KeyCloak sendo executada dentro de um container Docker, onde poderiam ser feitas todas as implementações de Roles, Authorities, Realms e cadastros de informações dos usuários. Isso possibilitaria inclusive controlar o cadastro de usuários novos. Por isso imaginei essa solução, em vez de usar uma autenticação de um servidor em produção, como o Google, por exemplo.

Nesse caso, a base de usuários ficaria separada do projeto e ficaria sob administração do KeyCloak, e todos os usuários teriam login, senha e "roles", além de seus devidos parâmetros. Os dados expostos para a aplicação também seriam controlados. Por terem "roles", as telas que cada usuário veria dependeria do seu nível de permissão. 

Segue aqui um link do que seria necessário para rodar o KeyCloak localmente: [Get started with Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)

<!-- ## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. -->

## Testes unitários

Foram criados apenas os esqueletos de testes unitários de componentes de telas e serviços, isso feito automaticamente pelos comandos do Angular CLI.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.