import assert from 'assert';
import ServicoDePagamento from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  describe('pagar', () => {
    it('armazena pagamento com as propriedades corretas', () => {
      servico.pagar('0987-7656-3475', 'Samar', 56.87);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.codigoBarras, '0987-7656-3475');
      assert.strictEqual(ultimo.empresa, 'Samar');
      assert.strictEqual(ultimo.valor, 56.87);
    });

    it('classifica como "padrao" quando valor e menor ou igual a 100', () => {
      servico.pagar('1111-2222-3333', 'EmpresaA', 100.00);
      assert.strictEqual(servico.consultarUltimoPagamento().categoria, 'padrão');
    });

    it('classifica como "cara" quando valor e maior que 100', () => {
      servico.pagar('4444-5555-6666', 'EmpresaB', 156.87);
      assert.strictEqual(servico.consultarUltimoPagamento().categoria, 'cara');
    });
  });

  describe('consultarUltimoPagamento', () => {
    it('retorna apenas o ultimo pagamento realizado', () => {
      servico.pagar('0000-0000-0001', 'Primeira', 10.00);
      servico.pagar('0000-0000-0002', 'Segunda', 20.00);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.empresa, 'Segunda');
    });
  });
});
