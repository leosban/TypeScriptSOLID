// Classes que vão implementar o protocolo de customer

import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

// Implementação da interface 'CustomerOrder'
export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  // Método para obter name e lastName serão usados na Order
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  // Método para obter IDN (Identificador único) serão usados na Order
  getIDN(): string {
    return this.cpf;
  }
}

// Implementação da interface 'CustomerOrder'
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  // Método para obter name e lastName serão usados na Order
  getName(): string {
    return this.name;
  }
  // Método para obter IDN (Identificador único) serão usados na Order
  getIDN(): string {
    return this.cnpj;
  }
}
