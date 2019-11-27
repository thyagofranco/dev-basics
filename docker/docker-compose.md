Exemplo PG + PGadmin
--------------------
https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html


```dockerfile
version: '3'

services:
  postgres-db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: "postgres"
    ports:
      - "5432:5432"
    networks:
      - postgres-network
    volumes:
      - pg-data: /var/lib/postgresql/data
      
  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: "admin@admin"
      PGADMIN_DEFAULT_PASSWORD: "admin"
    ports:
      - "80:80"
    depends_on:
      - postgres-db
    networks:
      - postgres-network

networks: 
  postgres-network:
    driver: bridge

volumes: 
  pg-data:
```                      