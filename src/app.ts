import express from "express";
import cors from "cors";
import routes from "./routes/index";

const app = express();

app.use(cors({
  origin: [
    "https://galinho.lovable.app",
    /\.lovable\.app$/,
    /\.replit\.dev$/,
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Galinho API is running" });
});

app.use("/api", routes);

export default app;
