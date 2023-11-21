## To Run in Docker

```bash
$ docker-compose up
```

## To Check Database Table in Docker

```bash
1. $ docker ps       // Check the container ID
2. $ docer exec -it <container_id> bash   // Enter the container
3. $ psql -U postgres -d postgres        // Access to postgreSQL database
4. $ \dt                                // Check database tables
```
