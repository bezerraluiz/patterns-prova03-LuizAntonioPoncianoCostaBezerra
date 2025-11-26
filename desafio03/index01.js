// Exemplo SOLID => S

// Classe base para as formas de pagamento
class FormaDePagamento {
    calcularPagamento(valor) {
      throw new Error("Método 'calcularPagamento' deve ser implementado");
    }
  }
  
  // Subclasse: Pagamento com Cartão de Crédito
  class PagamentoCartaoCredito extends FormaDePagamento {
    calcularPagamento(valor) {
      const taxa = 0.05;  // Taxa de 5% para pagamento com cartão de crédito
      return valor * (1 + taxa);
    }
  }
  
  // Subclasse: Pagamento com Boleto Bancário
  class PagamentoBoletoBancario extends FormaDePagamento {
    calcularPagamento(valor) {
      const taxa = 0.02;  // Taxa de 2% para pagamento com boleto bancário
      return valor * (1 + taxa);
    }
  }
  
  // Classe para gerar relatórios de pagamentos
  class GeradorRelatorioPagamentos {
    constructor(fonteDePagamentos) {
      this.fonteDePagamentos = fonteDePagamentos;
    }
  
    gerar() {
      const pagamentos = this.fonteDePagamentos.buscarPagamentos();
      return pagamentos.map((pagamento) => ({
        cliente: pagamento.cliente,
        valorComTaxa: pagamento.formaDePagamento.calcularPagamento(pagamento.valor),
      }));
    }
  }
  
  // Classe para exportar relatórios para CSV
  class ExportadorCSV {
    exportar(dados) {
      const cabecalho = Object.keys(dados[0]).join(';');
      const linhas = dados.map((linha) => Object.values(linha).join(';'));
      return [cabecalho, ...linhas].join('\n');
    }
  }
  
  // Fonte de dados simulada - Dados de pagamentos
  class FonteDeDadosPagamentos {
    buscarPagamentos() {
      return [
        {
          cliente: 'Ana',
          valor: 500,
          formaDePagamento: new PagamentoCartaoCredito(),  // Pagamento com Cartão de Crédito
        },
        {
          cliente: 'Bruno',
          valor: 1500,
          formaDePagamento: new PagamentoBoletoBancario(),  // Pagamento com Boleto Bancário
        },
      ];
    }
  }
  
  // Usando a FonteDeDadosPagamentos
  const fontePagamentos = new FonteDeDadosPagamentos();
  const geradorPagamentos = new GeradorRelatorioPagamentos(fontePagamentos);
  const exportador = new ExportadorCSV();
  
  const relatorioGerado = geradorPagamentos.gerar();
  const csv = exportador.exportar(relatorioGerado);
  
  console.log('Relatório de Pagamentos (LSP):');
  console.log(csv);
  