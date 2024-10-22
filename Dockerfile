# Use a imagem oficial do Node.js como base
#FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
#WORKDIR /app

# Copie os arquivos de package.json e package-lock.json da pasta atual (app-calculadora)
#COPY package*.json ./

# Instale as dependências do projeto
#RUN npm install

# Copie todo o código do projeto da pasta atual (app-calculadora) para o diretório de trabalho no contêiner
#COPY . .

# Execute o comando de build do Angular
#RUN npm run build

# Verifique se a pasta de build foi criada corretamente e liste seu conteúdo
#RUN ls -l dist/app-calculadora/browser

# Instale o servidor HTTP do npm para servir os arquivos de build
#RUN npm install -g http-server

# Exponha a porta 8080, que é a porta padrão do http-server
#EXPOSE 4200

# Inicie o servidor HTTP quando o contêiner for iniciado
#CMD ["http-server", "dist/app-calculadora/browser", "-p", "4200"]

# Use a imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json da pasta atual (app-calculadora)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto da pasta atual (app-calculadora) para o diretório de trabalho no contêiner
COPY . .

# Execute o comando de build do Angular
RUN npm run build

# Instale o servidor HTTP do npm para servir os arquivos de build
RUN npm install -g http-server

# Exponha a porta 8080 (não 4200)
EXPOSE 8080

# Inicie o servidor HTTP e use a variável de ambiente PORT definida pelo Heroku
CMD ["sh", "-c", "http-server dist/app-calculadora/browser -p ${PORT:-8080}"]

