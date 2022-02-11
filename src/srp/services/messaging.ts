// Classe com o metodo com o serviço mensageiro
// Para facilitar a manutenção do código

export class Messaging {
  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }
}
