
---

### **`README.md`**  
```markdown
# 🛒 Projeto de Categorização de Produtos de Supermercado

Este projeto implementa um algoritmo inteligente para categorizar produtos de supermercado, agrupando produtos equivalentes e diferenciando produtos similares.

## 📌 Objetivos
✔️ **Produtos equivalentes** de diferentes supermercados são agrupados, mesmo com variações na descrição.  
   **Exemplo:** "Arroz Branco Tio João 5kg" e "Arroz Tio João Branco 5kg" são o mesmo produto.  

✔️ **Produtos similares mas distintos** são mantidos separados.  
   **Exemplo:** "Arroz Branco Tio João 5kg" e "Arroz Integral Tio João 5kg" são produtos diferentes.  

✔️ **Produtos com tamanhos/quantidades diferentes** são categorizados separadamente.  
   **Exemplo:** "Leite Integral Italac 1L" e "Leite Integral Italac 2L" não são agrupados juntos.  

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Instalar as dependências
```bash
npm install
```

### 2️⃣ Executar a categorização
```bash
node index.js
```

### 3️⃣ Rodar os testes automatizados
```bash
npm test
```

---

## 📂 Estrutura do Projeto
```
projetoo/
│── data/
│   ├── data.json  # Entrada de dados
│   ├── output.json # Saída dos resultados
│── logs/
│   ├── app.log  # Arquivo de logs
│── src/
│   ├── categorizer.js # Algoritmo principal
│   ├── normalizer.js # Normalização de nomes
│   ├── logger.js # Sistema de logs
│── tests/
│   ├── categorizer.test.js # Testes automatizados
│── index.js  # Arquivo principal
│── package.json
│── README.md
```

---

## 📌 Tecnologias Utilizadas
- **Node.js** → Runtime para execução do JavaScript no servidor.
- **Jest** → Framework de testes automatizados.
- **remove-accents** → Biblioteca para normalização de texto.
- **Filesystem (fs)** → Leitura e escrita de arquivos JSON.

---

## 📊 Exemplo de Entrada (`data/data.json`)
```json
[
    { "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
    { "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" },
    { "title": "Leite Desnatado Piracanjuba 1L", "supermarket": "Supermercado C" }
]
```

---

## 📈 Exemplo de Saída (`data/output.json`)
```json
[
    {
        "category": "Leite Integral Piracanjuba 1L",
        "count": 2,
        "products": [
            { "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
            { "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" }
        ]
    },
    {
        "category": "Leite Desnatado Piracanjuba 1L",
        "count": 1,
        "products": [
            { "title": "Leite Desnatado Piracanjuba 1L", "supermarket": "Supermercado C" }
        ]
    }
]
```

---

## 🔍 Funcionamento do Algoritmo
1. **Lê os produtos do arquivo JSON.**
2. **Normaliza os títulos** (removendo acentos, espaços extras e padronizando letras minúsculas).
3. **Compara produtos** usando similaridade textual.
4. **Agrupa produtos equivalentes** mantendo contagem e supermercados de origem.
5. **Gera um arquivo de saída** contendo os produtos categorizados.

---



## 🤝 Contribuição
Fique à vontade para sugerir melhorias ou contribuir com código! 🚀  

---

