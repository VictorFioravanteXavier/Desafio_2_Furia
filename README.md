# Desafio2Furia

## Descrição do Projeto
Desafio2Furia é uma aplicação web desenvolvida com Angular que possui um sistema de login de usuários, um painel administrativo com análises e um feed de conteúdo para usuários. A plataforma inclui registro de usuários, uma área administrativa com insights de partidas e postagens dos principais fãs, e uma área de usuário com postagens recomendadas.

## Funcionalidades
- Autenticação de usuários com login e registro
- Painel administrativo com:
  - Análises de insights de partidas
  - Visão geral das postagens dos principais fãs
- Área do usuário com:
  - Página inicial
  - Feed de postagens recomendadas

## Instalação e Configuração
1. Clone o repositório
2. Navegue até o diretório do projeto
3. Instale as dependências:

``` 
npm install
```

4. Execute o servidor de desenvolvimento:
```
ng serve
```
5. Abra o navegador e acesse ```http://localhost:4200```

## Como Usar o Projeto
A página de login suporta dois tipos de usuários com as seguintes credenciais:

- Usuário Admin:
  - Email: admin@furia.com
  - Senha: 123
  - Acessa o painel administrativo em ```/admin```

- Usuário Comum:
  - Email: user@furia.com
  - Senha: 123
  - Acessa a área do usuário em ```/user```

## Estrutura do Projeto
- ```src/app/login/```: Módulos e componentes de login e registro
- ```src/app/template/admin-template/```: Componentes do painel administrativo incluindo insights de partidas e postagens dos principais fãs
- ```src/app/user-template/```: Componentes da área do usuário incluindo a página inicial e postagens recomendadas
- ```src/app/shared/```: Módulos e componentes compartilhados utilizados em toda a aplicação
- ```src/environments/```: Arquivos de configuração de ambiente

## Executando, Compilando e Testando
- Para rodar a aplicação localmente:
```ng serve```

- Para compilar a aplicação para produção:
```ng build --prod```

- Para executar os testes:
```ng test```

## Configuração de Ambiente
- Os arquivos de ambiente estão localizados em ```src/environments/```
- Configure os endpoints de API e outras configurações específicas do ambiente aqui

## Dependências
- Framework Angular
- Bootstrap 5 para estilização
- Outras dependências listadas no arquivo ```package.json```

Este README fornece uma visão geral e instruções para começar a trabalhar com o projeto Desafio2Furia.
