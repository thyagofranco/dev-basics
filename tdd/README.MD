TDD - Test Driven Development
=============================
O desenvolvimento guiado por testes é um processo para se desenvolver software que visa o feedback rápido e a validação
do comportamento da aplicação.

Os testes se tornam consequência do processo, pois determina o comportamento esperado da implementação.

É dividido em ciclo que são conhecido como RED , GREEN, REFACTOR: 

RED
===
O teste é criado antes da funcionalidade ser implementada, este teste dever "quebrar", pois a implementação não existe.

GREEN
=====

É implementado o mínimo, apenas adicionado o suficiente para que o teste passe. A lógica ainda não é necessária, apenas que atenda os requisitos do teste. Pode-se implementar dados estáticos (hard coded, TO-DOs , FIX-ME ) para implementação de lógica posterior.

REFACTOR
========

A lógica necessária é adicionada ao código, com o teste validado nos ciclos anteriores, garantirá que a funcionalidade está sendo implementada corretamente.
Nesta fase, devem ser removidos os dados estáticos e ser feita a implementação real para que o teste volte a passar.

Refectored version of the three laws of TDD
==========================================

- Write production code only to make a failing unit test pass.
- Write only enough of a unit test to fail.
- Write only enough production code to make the failing unit test pass.

![TDD](https://i0.wp.com/onebitcode.com/wp-content/uploads/2017/04/09-1.png)


Pirâmida de testes
===================

![Pirâmide de testes ](http://www.tecnisys.com.br/noticias/2019/Imagemnoticia.png/@@images/df9b4fb9-b04f-43c0-92c6-27dad2b1a69c.png)



Tipos de teste
================

### Unit tests (testes unitários)
São de baixo nível, com foco em pequenas partes do software e tendem a ser mais rapidamente executados quando comparados com outros testes, pois testam partes isoladas. O que define uma unidade é o comportamento e a facilidade de ser isolada das suas dependências.

### Integrations tests (Integração)

Servem para verificar se a comunicação entre os componentes de um sistema está correndo conforme o esperado. (EX. Métodos que utilizam várias classes).
Diferentes dos testes de unidade, deve ser testado o comportamento da interação entre as unidades. O teste pode ser em qualquer nível, seja a interação entre camadas, classes ou até mesmo serviços.

### Integration Contract Tests (Integração de contrato)

Ganharam força devido ao crescimento das APIs e dos micro serviços, consiste em verificar que determinada API irá retornar sempre os mesmo dados, mesmo campos, para a aplicação que está consumindo a API.
Garante que os dados que são consumidos de serviço externos continuam compatíveis e funcionando.