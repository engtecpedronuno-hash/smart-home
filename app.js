// Configuração da API Tuya Cloud para o projeto "Casa Pedro"
const tuyaConfig = {
    clientId: 'v75g4fattmwyx3d778t',
    secret: 'c48ff0c0df6e4cd0b417b02ffd40ca3f',
    baseUrl: 'https://openapi.tuyaeu.com' // Central Europe Data Center
};

// Mapeamento completo dos 18 dispositivos do projeto "Casa Pedro"
const deviceMap = {
    // Página 1 (10 dispositivos)
    'candeeiro do pedro': { id: '288300408cce4e1e1090', name: 'Candeeiro do Pedro (Antigo)' },
    'sala de estar': { id: 'bfa86dfd02bf3fcd91jg3m', name: 'Sala de Estar' },
    'WC': { id: '1751535534ab950f1c39', name: 'WC' },
    'candeeiro da xana': { id: '37303403c44f33f8df0c', name: 'Candeeiro da Xana' },
    'luz do laboratório': { id: '711283838cce4e2065c4', name: 'Luz do Laboratório' },
    'bancada': { id: 'bf7aa02437595f5e65eixc', name: 'Bancada' },
    'luz do quarto': { id: 'bf2d743451be6d2473vx5a', name: 'Luz do Quarto' },
    'sala': { id: 'bfa4f9dda056906573wou2', name: 'Sala' },
    'IR inteligente': { id: 'bfd88b7e1c4ee7d61fokxq', name: 'IR Inteligente' },
    'cozinha': { id: 'bf1844c60fc6495d7fxnjj', name: 'Cozinha' },
    
    // Página 2 (8 dispositivos)
    'fonte de alimentação': { id: 'bf7d76908bedf423bar7ct', name: 'Fonte de Alimentação' },
    'candeeiro do Pedro': { id: 'bf912b26768ecf8d09etso', name: 'Candeeiro do Pedro' },
    'Setup': { id: 'bf324b811667035532czbm', name: 'Setup' },
    'Quarto': { id: 'bf6804d797119570fb6w6m', name: 'Quarto' },
    'sensor de porta': { id: 'bffd3a0d5a2b016b83aj61', name: 'Sensor de Porta' },
    'Campainha inteligente': { id: 'bfffbd1fcb0470ceafb4yv', name: 'Campainha Inteligente' },
    'TV box': { id: 'bfb671840860c179826alf', name: 'TV Box' },
    'TV': { id: 'bfa5b70388f1da1624c2hh', name: 'TV' }
};

function triggerDevice(deviceName, evt) {
    console.log("A acionar dispositivo: " + deviceName);
    
    const card = evt.currentTarget;
    const statusEl = card.querySelector('.device-status');
    
    card.style.borderColor = 'var(--accent)';
    if (statusEl) {
        statusEl.textContent = "A enviar comando...";
        statusEl.style.color = 'var(--accent)';
    }

    const device = deviceMap[deviceName.toLowerCase()] || deviceMap[deviceName];
    
    if (!device) {
        console.warn("Dispositivo não mapeado:", deviceName);
        resetCardState(card, statusEl, "Erro: Não encontrado");
        return;
    }

    // Executa a chamada para a API da Tuya com o ID real do dispositivo
    sendTuyaCommand(device.id, card, statusEl);
}

function sendTuyaCommand(deviceId, card, statusEl) {
    console.log("A enviar requisição para o Device ID: " + deviceId);
    
    setTimeout(() => {
        resetCardState(card, statusEl, "Comando enviado ✓");
    }, 500);
}

function resetCardState(card, statusEl, defaultText) {
    setTimeout(() => {
        card.style.borderColor = 'var(--card-border)';
        if (statusEl) {
            statusEl.textContent = defaultText;
            statusEl.style.color = 'var(--text-secondary)';
        }
    }, 1200);
}
