FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]



# docker build -t jb/mern-kube .
