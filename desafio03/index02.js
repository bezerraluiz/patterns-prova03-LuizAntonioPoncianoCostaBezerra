// Exemplo SOLID > I

// Interface para dispositivos que podem imprimir
class DispositivoComImpressao {
    imprimir() {
      throw new Error("Método 'imprimir' deve ser implementado");
    }
  }
  
  // Interface para dispositivos que podem digitalizar
  class DispositivoComDigitalizacao {
    digitalizar() {
      throw new Error("Método 'digitalizar' deve ser implementado");
    }
  }
  
  // Interface para dispositivos que podem enviar fax
  class DispositivoComFax {
    enviarFax() {
      throw new Error("Método 'enviarFax' deve ser implementado");
    }
  }
  
  // Classe para impressoras (implementa apenas a funcionalidade de impressão)
  class Impressora extends DispositivoComImpressao {
    imprimir() {
      console.log("Impressora: Documento impresso.");
    }
  }
  
  // Classe para scanners (implementa apenas a funcionalidade de digitalização)
  class Scanner extends DispositivoComDigitalizacao {
    digitalizar() {
      console.log("Scanner: Documento digitalizado.");
    }
  }
  
  // Classe para fax (implementa apenas a funcionalidade de envio de fax)
  class Fax extends DispositivoComFax {
    enviarFax() {
      console.log("Fax: Documento enviado por fax.");
    }
  }
  
  // Classe multifuncional (implementa todas as funcionalidades)
  class Multifuncional extends DispositivoComImpressao {
    imprimir() {
      console.log("Multifuncional: Documento impresso.");
    }
  
    digitalizar() {
      console.log("Multifuncional: Documento digitalizado.");
    }
  
    enviarFax() {
      console.log("Multifuncional: Documento enviado por fax.");
    }
  }
  
  // Usando as classes de dispositivos
  
  const impressora = new Impressora();
  const scanner = new Scanner();
  const fax = new Fax();
  const multifuncional = new Multifuncional();
  
  // Executando funcionalidades apenas nos dispositivos que as suportam
  impressora.imprimir();
  // scanner.digitalizar(); // Não chamamos digitalizar em uma impressora
  // fax.enviarFax(); // Não chamamos enviarFax em um scanner
  
  multifuncional.imprimir();
  multifuncional.digitalizar();
  multifuncional.enviarFax();
  