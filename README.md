# myblog

This is my personal blog.

## :hammer_and_wrench: Setup
Requires Docker or Node.js

Use Docker
```bash
  docker-compose build
  docker-compose up -d
  # geting into a Docker container's shell
  docker-compose exec web ash
  cd ./usr/src/app/app
  # install dependencies
  yarn install
  # serve with hot reload at localhost:3000
  yarn dev
```

Use Node.js
```bash
  cd app
  # install yarn via npm
  npm install -g yarn
  # install dependencies
  yarn install
  # serve with hot reload at localhost:3000
  yarn dev
```

## :zap: Use of Technology
- Nuxt.js
- Nuxt Content
- Tailwind CSS
- Docker Compose