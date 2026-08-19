# DevTask AI — Product Requirements Document

## 1. Visão do produto

O DevTask AI é uma aplicação web de gerenciamento de tarefas,
desenvolvida como projeto de estudo para praticar desenvolvimento
frontend e o uso de ferramentas de Inteligência Artificial durante
o processo de desenvolvimento.

A aplicação permitirá que o usuário crie, visualize, conclua e
exclua tarefas.

---

## 2. Problema

Pessoas que precisam organizar atividades do dia a dia podem ter
dificuldade para visualizar suas tarefas e acompanhar o que já foi
concluído.

O DevTask AI busca oferecer uma interface simples para centralizar
essas tarefas.

---

## 3. Objetivo

Criar uma aplicação de gerenciamento de tarefas simples,
responsiva e fácil de utilizar.

Além do produto em si, o projeto terá como objetivo estudar:

- desenvolvimento com React e TypeScript;
- organização de um projeto frontend;
- Git e GitHub;
- uso do GitHub Copilot;
- uso de Inteligência Artificial como apoio ao desenvolvimento;
- criação de documentação técnica.

---

## 4. Público-alvo

Pessoas que precisam organizar tarefas pessoais ou profissionais
de forma simples.

---

## 5. Funcionalidades

### 5.1 Criar tarefa

O usuário deverá conseguir criar uma tarefa informando:

- título;
- descrição;
- prioridade.

Uma nova tarefa deverá ser adicionada à lista de tarefas.

### 5.2 Visualizar tarefas

O usuário deverá conseguir visualizar todas as tarefas cadastradas.

Cada tarefa deverá apresentar:

- título;
- descrição;
- prioridade;
- status.

### 5.3 Concluir tarefa

O usuário deverá conseguir alterar o status de uma tarefa para
concluída.

### 5.4 Reabrir tarefa

O usuário deverá conseguir alterar uma tarefa concluída novamente
para pendente.

### 5.5 Excluir tarefa

O usuário deverá conseguir excluir uma tarefa.

A aplicação deverá solicitar confirmação antes da exclusão.

### 5.6 Filtrar tarefas

O usuário deverá conseguir filtrar as tarefas por status:

- todas;
- pendentes;
- concluídas.

---

## 6. Regras de negócio

### RN01 — Título obrigatório

Uma tarefa não poderá ser criada sem título.

### RN02 — Título

O título deverá possuir entre 3 e 100 caracteres.

### RN03 — Status

Uma tarefa poderá possuir apenas um dos seguintes status:

- pendente;
- concluída.

### RN04 — Prioridade

Uma tarefa poderá possuir apenas uma das seguintes prioridades:

- baixa;
- média;
- alta.

### RN05 — Exclusão

Uma tarefa só poderá ser excluída após confirmação do usuário.

---

## 7. Requisitos técnicos

A aplicação deverá utilizar:

- React;
- TypeScript;
- Vite;
- HTML;
- CSS.

O projeto deverá evitar dependências externas desnecessárias.

A aplicação deverá ser responsiva.

O código deverá utilizar tipagem TypeScript adequada.

---

## 8. Persistência

Na primeira versão, as tarefas poderão ser armazenadas no
localStorage do navegador.

Não será necessário criar backend ou banco de dados nesta versão.

---

## 9. Fora do escopo

Não fazem parte da primeira versão:

- autenticação de usuários;
- cadastro de usuários;
- backend;
- banco de dados;
- integração com APIs externas;
- notificações;
- compartilhamento de tarefas;
- aplicativo mobile nativo.

---

## 10. Critérios gerais de sucesso

A primeira versão será considerada concluída quando o usuário
conseguir:

1. criar uma tarefa;
2. visualizar suas tarefas;
3. concluir uma tarefa;
4. reabrir uma tarefa;
5. excluir uma tarefa;
6. filtrar tarefas por status;
7. manter as tarefas após atualizar a página.