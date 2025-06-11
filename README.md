
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

1) Access Server
```
cd ./server
```
2) Install Docker to run redis image

3) Currently - Server is running on flask and Redis session is running on docker

4) Pull & Run Redis image - exposing port 6379
```
docker run -d --name redis -p 6379:6379 redis:latest
```

5) Put your  <SECRET_KEY> in ```.env``` and add it to ```.gitignore```

6) Install the dependencies
```
pip install -r requirements.txt
```

7) Run the server 
```
python server.py
```
