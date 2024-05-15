FROM python:3

WORKDIR /data

COPY . .

EXPOSE 12345

CMD ["python", "-m", "http.server", "12345" ]