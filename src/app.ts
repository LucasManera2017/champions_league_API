import express from "express";
import router from "./routes";
import cors from "cors";


function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  const corsOption = {
    origin: "http://localhost:3333",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }

  app.use(cors(corsOption));

  return app;
}

export default createApp;
