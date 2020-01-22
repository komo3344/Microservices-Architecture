# Microservices-Architecture

backend: Django

frontend: Vue

DB: sqlite3

# Models  
User
- pk(int)
- username(varchar)
- password(varchar)
- email(varchar)
- is_admin(BOOL)
- is_active(BOOL)
- date_joined(DATETIME)
- last_login(DATETIME)
- is_staff(BOOL)

Todo
- pk
- task(text)
- start_time(DATETIME)
- end_time(DATETIME)
