HTTP
=====

TODO
### Códigos
[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods]https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status


### Verbos 
[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)


Requisições HTTP 
================

Um cliente requisita dados e o servidor responde passando os dados solicitados : 

![req-res](https://www.researchgate.net/profile/Kereshmeh_Afsari/publication/311571526/figure/fig3/AS:438170157359106@1481479314691/HTTP-request-response-model.png)


Requisições AJAX ( XMLHttpRequest / fetch)
===========================================

Trouxe a possibildiade de fazer conexões entre um cliente e servidor de forma bidireficonal:

![AJAX](https://cdn.techbeamers.com/wp-content/uploads/2016/05/How-Ajax-Call-Works-in-Selenium-Webdriver.png)


### Pooling
O cliente faz requisições em busca de novos dados regularmente.

## Short Pooling 
Requisições AJAX feitas em intervalos de tempos fixos: 
Requisições feitas com intervalos curtos de tempo para o servidor. 
Gera muita carga e tráfego no servidor.

![Short](https://miro.medium.com/max/2684/1*qTa2OXpHPVKydv1XwuCnvw.png)

## Long Pooling
Para tentar diminuir a carga do shot pooling, foi criado o Long pooling, que mantém a conexão HTTP aberta até o servidor ter dados disponíveis para passar para o cliente, diminui a latência da rede, mas necessita de muito recurso de memória. 

![Long](https://res.cloudinary.com/practicaldev/image/fetch/s--cqzHLKjh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/4jbq91rqm8fx9ynx0mnt.png)


WebSocket
=========
É uma aplicação TCP que escuta uma porta de um servidor que segue um protocolo específico.
Estabelece uma conexão com o navegador e se comunica diretametne com ele.
Define um canal de comunicação full-duplex(comunicação de ambas as partes entre cliente-servidor em tempo real) através de um único socket através da Web.
A conexão é estabelecida uma única vez e a comunicação entre servidor e o navegador se torna contínua
Usado em aplicações que requrem atualização regulares e rápidas a partir de um WebServer (Jogos multiplayer, chat, etc) 

![websocket](https://www.websocket.org/img/websocket-architecture.jpg)


