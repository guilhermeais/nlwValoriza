# NLW Valoriza
## NLW Valoriza foi um projeto em NodeJS que desenvolvi na Next Level Week da RocketSeat🚀
<p align="center">
 <a href="#Objetivo">Objetivo</a> •
 <a href="#✍ O que eu aprendi?">O que eu aprendi?</a> • 
</p>

## 🤔 **Objetivo**
O Objetivo dessa aplicação, é entregar uma aplicação que possibilita usuários se elogiarem. No qual os usuários administradores podem criar tags como ***#Inspirador***, e os usuários normais possam enviar e receber elogios usando estas tags...

## ✍ **O que eu aprendi?**
Bom, foi uma semana de muito aprendizado, tudo muito rápido e direto ao ponto. Mas, além de ter fortalecido a bagagem que eu já venho montando ao longo dos dias, vieram vários novos conhecimentos.

Neste projeto, dividimos a api em basicamente 4 camadas principais **Controllers, Entities, Repositories e Services**.
### Entities
Bom, na **Entities**, é onde vamos modelar os dados da nossa aplicação. Por exemplo, na aplicação, temos as Tags que serão incluidas nos elogios que os usuários criarem, essas tags terão algumas informações como: ["ID", "Nome", "Data de Criação", "Data de Atualização"] e pra isso, temos que criar uma entidade para representar essas informações.

### Repositories
Os **Repositories** será responsável por fazer a manipulação no banco de dados, é ele que irá fazer a **Consulta, Inserção, Deleção e Atualização** de dados. (Usamos os repositórios customizados do TypeORM para nos auxiliar)

### Services
Os **Services** é responsável por controlar todas as regras da nossa aplicação, por exemplo, na nossa aplicação nós não vamos permitir que o usuário crie uma tag do mesmo nome, então, precisamos tratar isso, e é na **Service** que fazemos isso.

### Controllers
Os **Controllers** é praticamente a última etapa nas quais os nossos dados passam, é ele que será responsável por pegar as requisições de um usuário, por exemplo, o usuário quer criar uma tag nova, e ai, ele envia os dados desta tag nova e espera um retorno pra saber se ocorreu tudo bem. 
Ele irá enviar os dados, a controller recebe, envia para o <a href="#Service">Service</a> verificar estes dados, e retornar as informações de acordo com a requisição. 
