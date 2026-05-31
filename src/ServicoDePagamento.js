class ServicoDePagamento {
  constructor() {
    this._pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100 ? 'cara' : 'padrão',
    };
    this._pagamentos.push(pagamento);
  }

  consultarUltimoPagamento() {
    return this._pagamentos[this._pagamentos.length - 1];
  }
}

export default ServicoDePagamento;

const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
//servicoDePagamento.pagar('1234-5678-9012', 'Agilean', 50.00);
console.log(servicoDePagamento.consultarUltimoPagamento());
