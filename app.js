// =========================================================================
// Mapeamento Direto de Dispositivos - "Pedro Nuno Engenho e Tecnologia"
// =========================================================================
const tuyaDevices = {
    wc: { id: "1751535534ab950f1c39", name: "WC", type: "W-W601" },
    luzLaboratorio: { id: "711283838cce4e2065c4", name: "luz do laboratório", type: "Smart break" },
    luzQuarto: { id: "bf2d743451be6d2473vx5a", name: "luz do quarto", type: "Latched hidden Switch Single pro" },
    cozinha: { id: "bf1844c60fc6495d7fxnjj", name: "cozinha", type: "Smart Plug" },
    bancada: { id: "bf7aa02437595f5e65eixc", name: "bancada", type: "Smart Plug" },
    campainha: { id: "bfffbd1fcb0470ceafb4yv", name: "Campainha inteligente", type: "IP06" },
    salaEstar: { id: "bfa86dfd02bf3fcd91jg3m", name: "sala de estar", type: "Smart Plug" },
    tvBox: { id: "bfb671840860c179826alf", name: "TV box", type: "network box" },
    tv: { id: "bfa5b70388f1da1624c2hh", name: "TV", type: "TV" },
    irInteligente: { id: "bfd88b7e1c4ee7d61fokxq", name: "IR inteligente", type: "HMS06CBU" },
    setup: { id: "bf324b811667035532czbm", name: "Setup", type: "WiFi Breaker" },
    quartoSwitch: { id: "bf6804d797119570fb6w6m", name: "Quarto", type: "TC0301" },
    candeeiroXana: { id: "37303403c44f33f8df0c", name: "candeeiro da xana", type: "Smart break" },
    sensorPorta: { id: "bffd3a0d5a2b016b83aj61", name: "sensor da porta", type: "WIFI door sensor" },
    candeeiroPedro1: { id: "bf912b26768ecf8d09etso", name: "candeeiro do Pedro", type: "Switch" },
    fonteAlimentacao: { id: "bf7d76908bedf423bar7ct", name: "fonte de alimentação", type: "Smart Plug" },
    candeeiroPedro2: { id: "288300408cce4e1e1090", name: "candeeiro do pedro 2", type: "Switch" },
    sala: { id: "bfa4f9dda056906573wou2", name: "sala", type: "TC0301" }
};

// =========================================================================
// Função de Acionamento Direto (Client-Side / Sem Servidores)
// =========================================================================
function triggerDevice(deviceKey) {
    const device = tuyaDevices[deviceKey];
    if (!device) {
        console.error(`Dispositivo não encontrado: ${deviceKey}`);
        return;
    }

    const smartLifeDeepLink = `smartlife://device?id=${device.id}`;
    console.log(`A acionar [${device.name}] (ID: ${device.id}) via Smart Life...`);
    window.location.href = smartLifeDeepLink;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard 'Pedro Nuno Engenho e Tecnologia' carregada com sucesso.");
});