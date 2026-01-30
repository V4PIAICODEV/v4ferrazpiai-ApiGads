const express = require('express');
const app = express();
const path = require('path');

// Configuração do motor de visualização (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, Imagens se tiver)
app.use(express.static('public'));

// Rota: Home (Landing Page da Ferramenta)
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'V4 Ferraz Piai - Hub de Dados',
        page: 'home'
    });
});

// Rota: Dashboard (Simulação da Ferramenta)
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { 
        title: 'Dashboard - V4 Ferraz Piai',
        page: 'dashboard'
    });
});

// Rota: Política de Privacidade (OBRIGATÓRIO para o Google)
app.get('/privacy', (req, res) => {
    res.render('privacy', { 
        title: 'Política de Privacidade',
        page: 'privacy'
    });
});

// Rota: Termos de Uso (OBRIGATÓRIO para o Google)
app.get('/terms', (req, res) => {
    res.render('terms', { 
        title: 'Termos de Uso',
        page: 'terms'
    });
});

// Rota para o Google verificar o site (Health Check)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
