FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

#Lockfile ke according production dependencies install karna
#npm ci --omit=dev se nodemon jaise development dependencies install nahi honge.
RUN npm ci --omit=dev

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
