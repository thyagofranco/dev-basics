Docker run
-----------
- Roda uma instancia de postgres 

$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

- Rodar uma instancia de postgres entrando no terminal interativo rodando o binário psql

$ docker run -it --rm --network some-network postgres psql -h some-postgres -U postgres

Obter Shell no container Docker em execução
------------------------------------------

- docker exec -i -t nginx-container /bin/bash

