# ServicoDePagamento

Classe JavaScript que simula um serviço de pagamentos, permitindo registrar pagamentos e consultar o último pagamento realizado.

## A classe e seus métodos

### `pagar(codigoBarras, empresa, valor)`
Registra um pagamento na lista interna. Cada pagamento armazena:
- `codigoBarras`: código de barras do boleto
- `empresa`: nome da empresa
- `valor`: valor pago
- `categoria` : `'cara'` se o valor for maior que R$ 100,00, ou `'padrão'` caso contrário

### `consultarUltimoPagamento()`
Retorna o objeto do último pagamento registrado.

## Instalação

```
npm init -y
```

```
npm i mocha
```

No arquivo `package.json` gerado, altere a propriedade `"type"` de `"commonjs"` para `"module"`:

```json
"type": "module"
```

## Execução

### Teste manual da classe

```
node src/ServicoDePagamento.js
```

### Testes automatizados com Mocha

```
npx mocha test/**/*.test.js
```
