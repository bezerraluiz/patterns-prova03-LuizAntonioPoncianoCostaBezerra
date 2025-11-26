// Exemplo GRASP

// Classe representando o Item do Pedido (Responsável por seus próprios cálculos)
class ItemPedido {
    constructor(nome, quantidade, preco) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  
    // Método para calcular o total de um item
    calcularTotal() {
      return this.quantidade * this.preco;
    }
  }
  
  // Classe representando o Pedido (Responsável pelo cálculo do total do pedido)
  class Pedido {
    constructor(cliente) {
      this.cliente = cliente;
      this.itens = [];
    }
  
    // Método que adiciona um item ao pedido
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    // Método para calcular o total do pedido somando o total de todos os itens
    calcularTotal() {
      return this.itens.reduce((total, item) => total + item.calcularTotal(), 0);
    }
  }
  
  // Classe representando o Garçom (Responsável por coordenar a criação do pedido)
  class Garcom {
    // O Garçom cria o Pedido e adiciona os itens ao pedido
    criarPedido(cliente, itens) {
      const pedido = new Pedido(cliente);
      // Usando o princípio de Creator para adicionar os itens no pedido
      itens.forEach(item => pedido.adicionarItem(item));
      return pedido;
    }
  }
  
  // Criando alguns itens para o pedido
  const item1 = new ItemPedido("Hambúrguer", 2, 15.5);
  const item2 = new ItemPedido("Refrigerante", 3, 5);
  
  // Criando o Garçom e o Pedido para o cliente
  const garcom = new Garcom();
  const pedido = garcom.criarPedido("João", [item1, item2]);
  
  // Exibindo o total do pedido
  console.log(`Total do pedido de João: R$ ${pedido.calcularTotal().toFixed(2)}`);
  