# Kafka Producer with Node.js

This project demonstrates a **Kafka Producer** built using **Node.js** and integrated with **Apache Kafka** via Docker Compose. The producer sends messages to a Kafka topic using the **KafkaJS** library.

## 📌 Features

- 🛠️ TypeScript-based Node.js application.
- 📦 Uses **KafkaJS** for Kafka integration.
- 🐳 Configured with **Docker Compose** for local setup.
- 🖥️ Kafka broker setup using Docker.

## 📁 Project Structure

```bash
.
├── Dockerfile
├── docker-compose.yml
├── src
│   ├── services
│   │   ├── producer.ts
│   │   └── productService.ts
│   ├── routes
│   │   └── productRoute.ts
│   ├── config.ts
│   └── utils.ts
├── images
│   ├── architecture.png
│   └── setup.png
├── app.ts
├── index.ts
├── tsconfig.json
└── README.md
```
## ⚙️ Setup Instructions
  1. **Clone the Repository**
     ```
        git clone https://github.com/tahashabaan/KafkaStreamline.git
        cd KafkaStreamline
     ```
2. **install Dependencies**
    ```
    npm install
   ```
4. **Start Docker Services**
    ```
   docker-compose up --build -d
    ```
5. **start**
    ```
     npm run start:producer
    ```

 



