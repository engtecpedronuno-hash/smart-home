// Painel Smart Home - Conexão Direta API Smart Life (Sem Servidor)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Painel Smart Home inicializado com sucesso.");
    
    // Configura o comportamento interativo dos botões (.tile)
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Alterna a classe 'active' para ligar/desligar visualmente o botão
            tile.classList.toggle('active');
            
            // Lê o ID do dispositivo real configurado na Smart Life
            const deviceId = tile.getAttribute('data-device-id');
            if (deviceId) {
                const novoEstado = tile.classList.contains('active');
                enviarComandoSmartLife(deviceId, novoEstado);
            }
        });
    });
});

// Função para enviar o comando diretamente para a API Smart Life
function enviarComandoSmartLife(deviceId, estado) {
    console.log(`A enviar comando para o dispositivo ${deviceId}: ${estado ? 'LIGADO' : 'DESLIGADO'}`);
    
    // Comunicação direta à API da Smart Life (sem servidores intermédios)
}