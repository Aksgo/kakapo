
# Scripty
## Setup 

### Frontend
Under development
1) Install Dependencies
```
npm install
```
2) Run Frontend
```
npm run start
```

### Backend

1) Server is running on a docker container - pre install docker

2) Currently - Server is running on flask and Redis session is running on docker

3) Pull & Run Redis image - exposing port 6379
```
docker run -d --name redis -p 6379:6379 redis:latest
```
`
4) Put your  <SECRET_KEY> in ```.env``` and add it to ```.gitignore```

5) Install the dependencies
```
pip install -r requirements.txt
```

6) Run the server 
```
python server.py
```
