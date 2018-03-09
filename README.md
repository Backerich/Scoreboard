# Scoreboard

Set up Django:
```
> pip3 install Django
> django-admin startproject Scoreboard
> python3 manage.py startapp board
> python3 manage.py runserver
> 
```
Für Datenbanken:
```
> python3 manage.py makemigrations 
> python3 manage.py migrate
```
oder falls migrations auf eine spezielle App wie board
```
> python3 manage.py makemigrations board
> python3 manage.py migrate
```

Superuser erstellen:
```
> python3 manage.py createsuperuser
```
Auf Superuser zugreifen:
http://127.0.0.1:8000/admin/

![alt text](Scoreboard.jpg)
