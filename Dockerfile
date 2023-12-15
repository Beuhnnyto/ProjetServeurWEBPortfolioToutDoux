FROM caddy:2.4.5-alpine

WORKDIR /srv

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY portfolio/build /srv/portfolio/build
COPY todo /srv/todo

EXPOSE 80 443

CMD ["caddy", "run"]