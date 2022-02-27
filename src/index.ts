// Código será criado sem principios
// Ao longo das aulas iremos corrigindo

/* Open/Closed Principle
Principio do aberto e fechado: entidades, classes, módulos, funções, métodos
devem estar abertas para extensões e fechadas para modificações;
Siginifica que não devemos ficar mexendo no nosso source code
 */

/* Principio da substituição de Liskov
Descrição complexa, porém de fácil entendimento

Vantagens e Desvantagens do S.O.L.I.D.

*Saber dosar entre as vantagens e desvantagens*

Vantagens:
- Código modular, ou seja, cada módulo faz uma coisa específica, mas também podemos ter módulos que fazem mais de
uma coisa, porém são coisas relacionadas.
- Código reutilizavel (D.R.Y - Don't repeat yourself), ou seja, não repita a si mesmo no seu código;
- Código testável e de baixo acoplamento, pois nesse caso, as classes não estão atreladas uma na outra. Porque as classes
dependem de abstrações
- Baixo acoplamento - são as classes coesas, por exemplo, Order, possui checkout() que tem metodos dentro, porém
não é a Order quem faz ou tem os métodos inseridos
- Código expansível - podemos adicionar mais métodos numa classe já existente, sem alterar o código em si, nem
quebrar o código ou algo do tipo. Caso aconteceça a quebra ou alteração, podemos refatorar o código.
- Separations of concerns (Separação de conceitos) - Cada classe precisa ser coesa, tem que fazer realmente o que está
sendo descrita para fazer, ou seja, ter somente uma razão para mudar.
- Código de fácil manutenção - podemos criar mais interfaces com coisas que realmente iremos precisar

Desvantagens:
- Complexidade aumentada, pois temos muitas relações no código e nos faz aumentar a quantidade de código digitado;
- Código é feito de maneira bruta, logos após implementamos os principios SOLID, para fazer a modulação, mas a
principio é mais importante fazer o código funcionar primeiramente, para depois separar as coisas.
- Cuidados com os conceitos: YAGNI, KISS (You aren't gonna need it - Você não vai precisar disso) (Keep it simple, stupid
  mantenha simples, estupido).
- Tempo de desenvolvimento aumenta drasticamente
*/
