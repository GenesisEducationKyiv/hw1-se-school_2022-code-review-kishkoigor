#Task for Genesis Software Engineering School

##Build:

```
docker build . -t kishkoigor/gses2-btc-app
```

##Run:

```
docker run \
 -v "$(pwd)"/db:/usr/src/app/db \
 -p 8000:8000 \
 -d kishkoigor/gses2-btc-app
```

##Notes for those, who will revise my task:

- I used pure Node.js without frameworks cause in this task just needed to handle 3 endpoints. For more ambitious plans for this project I would took some slim framework cause it's easier to maintain.
- For storing data I use simple JSON and loading it to RAM on app init. I understand that it may be not the best approach, and I could use line by line reading of file and appending new lines to file, but actually, 100000 of emails in JSON file are just few megabytes, so I disided to keep it simple.
- In my "docker:run" command I'm mounting /db folder from host to container to keep JSON with emails in sync in case of container failure.
- For proper mailer work you need to add smtp config at /mailer/smtp.json. For now ethereal.email test smtp service is used.
