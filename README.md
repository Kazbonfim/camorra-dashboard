# camorra-dashboard
O objetivo deste projeto é gamificar a experiência dos membros em nosso servidor Discord, transformando dados de interação (como tempo de uso e mensagens enviadas) em um sistema de pontuação e ranking. O produto visa aumentar o engajamento e a vida do servidor, criando um ambiente mais dinâmico e competitivo.

***

O projeto consiste em um site, que vai agregar usuários do servidor Camorra no Discord - aplicativo para streaming, e conversas de chat, e voz. De início, os membros poderão se cadastrar livremente, e contar com suas informações de tempo de uso no servidor, bem como:

### Objetivos

- [ ]  Tempo logado
- [ ]  Média de tempo logado
- [ ]  Jogos recentes
- [ ]  Sistema de conquistas com base em critérios
- [ ]  Ranqueamento que utiliza os dados acima

## Para que serve esse documento?

O foco disso aqui, além de explicar para todos os membros o viés do projeto, é definir bem os escopos, e tecnologias utilizadas, para documentar os recursos, e manter o desenvolvimento mais organizado - que aliás, só conta comigo (@Kaz Bonfim) como desenvolvedor-chefe (CTO).

Vamos elaboras os seguintes tópicos:

- **Introdução**: O objetivo do produto.
- **Problema**: Qual problema o produto resolve.
- **Escopo**: O que o produto vai fazer e, mais importante, o que ele **não** vai fazer.
- **Funcionalidades**: Uma lista detalhada das funcionalidades.
- **Tecnologias**: Uma lista de tecnologias, e recursos que serão utilizados durante o desenvolvimento.
- **Métricas de Sucesso**: Como você vai medir o sucesso do produto.

### Introdução

O objetivo deste projeto é **gamificar a experiência dos membros em nosso servidor Discord**, transformando dados de interação (como tempo de uso e mensagens enviadas) em um sistema de pontuação e ranking. O produto visa aumentar o engajamento e a vida do servidor, criando um ambiente mais dinâmico e competitivo.

### Problema

O problema a ser resolvido é a **baixa taxa de engajamento e a falta de mecanismos de fidelização** no servidor principal. Atualmente, os dados de interação dos membros não são utilizados para gerar valor ou incentivar a participação, resultando em uma experiência estática e a perda de interesse ao longo do tempo. O projeto irá resolver isso ao transformar a atividade dos membros em um sistema gamificado, incentivando a competição e a participação contínua.

### Escopo

O **Camorra Dashboard** será uma plataforma web focada em exibir e gerenciar dados de gamificação do nosso servidor Discord. O escopo do produto inclui:

- **Dashboard de Usuário**: Uma interface para cada membro visualizar seu perfil, pontuação, ranking e histórico de atividades gamificadas.
- **Ranking Global**: Uma página que exibe o ranking dos membros do servidor com base na pontuação.
- **Configuração de Pontuação**: Um sistema de backend definir e ajustar as regras de pontuação (ex: pontos por mensagem, por tempo de voz).
- **Sincronização com o Discord**: Integração com a API do Discord para coletar os dados de interação dos usuários.

O que o produto **não** fará neste primeiro momento:

- Sistema de compra ou microtransações.
- Criação de missões ou tarefas personalizadas.
- Integração com outras plataformas além do Discord.

### Funcionalidades

As principais funcionalidades do Dashboard Camorra incluem:

- **Pontuação de Atividade**: O sistema registrará e somará pontos com base em eventos do Discord, como mensagens enviadas, tempo em canais de voz, e reações.
- **Ranking de Membros**: A plataforma exibirá um ranking atualizado com a pontuação dos membros do servidor.
- **Perfil do Usuário**: Cada membro terá um perfil que mostra sua pontuação total, sua posição no ranking e conquistas (badges).

### Tecnologias

Para a construção do **Camorra Dashboard**, a stack tecnológica será focada em JavaScript e TypeScript, garantindo consistência entre o frontend e o backend. As seguintes tecnologias serão utilizadas:

- **Backend**:
    - **Node.js**: Ambiente de execução para o código TypeScript.
    - **TypeScript**: Linguagem principal, oferecendo tipagem estática para um código mais robusto e fácil de manter.
    - **NestJS**: Framework de backend que facilita a criação de APIs escaláveis. Alternativamente, **Express** pode ser usado para projetos mais simples.
    - **Discord API**: Principal integração para coletar dados dos membros.
- **Frontend**:
    - **React** ou **Next.js**: Frameworks para criar a interface de usuário. O Next.js é recomendado para performance e rotas.
    - **Tailwind CSS** ou **Sass**: Ferramentas para estilização da interface.
- **Banco de Dados**:
    - **PostgreSQL**: Banco de dados relacional robusto, ideal para armazenar dados estruturados como informações de usuários e pontuações.
    - **MongoDB**: Alternativa NoSQL, recomendada se a estrutura de dados for flexível e sem muitas relações complexas.
