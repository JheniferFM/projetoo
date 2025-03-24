# Projetoo - Categorizador Inteligente de Produtos de Supermercado

## Descrição

O **Projetoo** é um sistema inteligente para categorização de produtos de supermercado, identificando produtos equivalentes mesmo quando apresentam variações em suas descrições. Utilizando algoritmos de normalização e processamento de texto, o sistema agrupa produtos similares e os diferencia corretamente quando necessário.

## Objetivos

- Identificar e agrupar produtos equivalentes, mesmo com diferenças sutis na descrição.
- Diferenciar produtos que tenham variações significativas, como tipos diferentes (ex.: integral vs. desnatado).
- Manter a precisão na categorização de produtos com tamanhos ou quantidades distintas.
- Permitir integração fácil com outros sistemas via API REST.
- Gerar relatórios organizados para análise dos produtos categorizados.

## Funcionalidades

✅ Normalização avançada dos nomes dos produtos (remoção de acentos, espaços extras e padronização de descrição).  
✅ Identifica produtos equivalentes mesmo com nomes levemente diferentes.  
✅ Distingue produtos que são similares, mas não idênticos.  
✅ Exporta os resultados categorizados para um arquivo JSON.  
✅ API REST com Express.js para consultar categorias e produtos via requisições HTTP.  
✅ Logs detalhados de todo o processamento.  
✅ Testes automatizados para garantir a precisão da classificação.  

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação da API REST.
- **Jest**: Framework para testes automatizados.
- **Lodash**: Biblioteca para manipulação eficiente de dados.
- **Git & GitHub**: Controle de versão e repositório remoto.

## Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
  git clone https://github.com/JheniferFM/projetoo.git
  cd projetoo
```

### 2️⃣ Instalar dependências

```bash
  npm install
```

### 3️⃣ Executar a categorização de produtos

```bash
  node index.js
```

Isso gerará um arquivo `output.json` com os produtos organizados em categorias.

### 4️⃣ Iniciar o servidor da API

```bash
  node server.js
```

A API estará disponível em `http://localhost:3000` para consulta dos produtos categorizados.

### 5️⃣ Executar os testes automatizados

```bash
  npm test
```

## Estrutura do Projeto

```
projetoo/
├── index.js
├── package.json
├── package-lock.json
├── data/
│   ├── data.json
│   ├── output.json
├── logs/
│   ├── app.log
├── node_modules/
├── src/
│   ├── categorizer.js
│   ├── logger.js
│   ├── normalizer.js
│   ├── server.js
├── tests/
│   ├── categorizer.test.js

```

## Exemplo de Entrada e Saída

### 📥 Entrada (`data.json`)
```json
[
  { "id": 1, "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
  { "id": 2, "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" },
  { "id": 3, "title": "Arroz Branco Tio João 5kg", "supermarket": "Supermercado A" }
]
```

### 📤 Saída esperada (`output.json`)
```json
[
  {
    "category": "Leite Integral Piracanjuba 1L",
    "count": 2,
    "products": [
      { "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
      { "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" }
    ]
  }
]
```

## API REST

A API permite consultar as categorias de produtos.

### 📌 **Obter todas as categorias**
**GET** `http://localhost:3000/categories`

### 📌 **Obter produtos de uma categoria**
**GET** `http://localhost:3000/categories/Leite Integral Piracanjuba 1L`

---


