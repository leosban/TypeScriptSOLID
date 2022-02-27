// Classe com o metodo com o serviço de persistencia

import { PersistencyProtocol } from '../classes/interfaces/persistencyProtocol';

// Para facilitar a manutenção do código
export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order saved successfully');
  }
}
