// Interface criada para o customer
/* As interfaces foram criadas, de acordo com o Principio da Segregação de Interface,
sendo assim não devemos criar classes infladas, para não criar coisas
que não vão ser utilizadas */
export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
