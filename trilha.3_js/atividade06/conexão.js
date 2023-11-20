const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '0301',
  database: 'exemploDb'
};

// Cria uma conexão com o banco de dados
const conexão = mysql.createConnection(dbConfig);

// Tenta se conectar ao banco de dados
conexão.connect((err) => {
  
  console.log('sucesso na conexão!!');
  if (err) {
    console.error('Erro em conexão com o banco de dados:', err.message);
    return;
  }
  // Você pode executar consultas ou outras operações aqui, se necessário

  // Fecha a conexão após as operações necessárias
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar conexão:', err.message);
    } else {
      console.log('Conexão finalizada!');
    }
  });
});