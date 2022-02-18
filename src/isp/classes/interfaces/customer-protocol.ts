// Interface criada para o customer
/* As interfaces foram criadas, de acordo com o Principio da Segregação de Interface,
sendo assim não devemos criar classes infladas, para não criar coisas
que não vão ser utilizadas */

// Interface criada para obter as props: firstName e name
// E um identificador único: cpf ou cnpj
export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
