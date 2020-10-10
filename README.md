# api-rest-nest-js

CRUD REST
 

##### Para criação a controller = ao java (contem os endpoints)  
    nest g controller nome-da-controller
##### Para criação uma service no nestjs = provider (mantamos as regras de negocio aqui)
    nest g provider atividades/shared/atividade.service
##### Para agrupamento das coisas podemos criar um module
##### é utilizado para uma melhor organização das coisas.
##### Neste caso, o nosso app.module.ts só recebe o module atividades assim não é necessario
##### importaro a service e controller no app.module
    nest g module atividades
    
