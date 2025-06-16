
# Kakapo 🦜
## Setup 
Open the repository
```
cd kakapo
```
### Frontend
Under development
1) access client
```
cd ./client
```
2) Install Dependencies
```
npm install
```
3) Run Frontend
```
npm run start
```

### Backend

1) Access server directory
```
cd ./server
```
2) Install Docker and start the Docker Engine

The backend is served completely using docker. postgres database is used to store user data and redis is used for server side session management.

3) Build the image for flask server
```
docker build -t kakapo-server .
```

4) Put your  <SECRET_KEY>, <POSTGRES_USER>, <POSTGRES_PASSWORD> in ```.env``` and do not forget to add file to ```.gitignore```

The secret key will be used by flask server and postgres_user and postgres_password are the password you want to have for your postgres database.

5) Run the services
```
docker compose up -d
```

6) View your tables at ```http://localhost:8080/```
