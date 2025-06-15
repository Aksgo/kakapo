FROM python:3.11-alpine3.18

WORKDIR /app
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY source/ .

CMD ["python", "app.py"]
