# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia o resto do código
COPY . .

# Expõe a porta 3000
EXPOSE 2888

# Comando para iniciar
CMD ["npm", "start"]
