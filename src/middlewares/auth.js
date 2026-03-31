const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token      = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido. Faça login.' });
  }

  try {
    const payload  = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario    = payload;
    next();
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
}

module.exports = autenticar;

// Middleware de autenticação usando JWT
// - Pega o token do header Authorization (Bearer TOKEN)
// - Verifica se o token é válido usando a chave secreta
// - Se for válido, libera acesso e salva os dados do usuário em req.usuario
// - Se não existir ou for inválido, bloqueia com erro 401
