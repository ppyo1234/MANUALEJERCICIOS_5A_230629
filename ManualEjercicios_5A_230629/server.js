const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://230629:caradechango@cluster0.y2evu.mongodb.net/usuarios_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir el modelo
const SessionSchema = new mongoose.Schema({
  sessionId: String,
  email: String,
  nickname: String,
  status: String,
  serverData: {
    ip: String,
    mac: String
  }
});

const Session = mongoose.model('Session', SessionSchema, 'sessions');

// Ruta para obtener todas las sesiones
app.get('/allSessions', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json({ sessions });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo sesiones' });
  }
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
