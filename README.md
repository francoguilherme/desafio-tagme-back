# Desafio Tagme - Back

## Como rodar

Primeiro, certifique-se de que o arquivo *.env* está criado na raíz do projeto. Por segurança, os dados serão enviados por email.

Depois, use `npm install` para instalar todos os pacotes.

Finalmente, use `npm start` para iniciar o servidor. Ele rodará em `http://localhost:80/`.

## Endpoints

Essa API possui dois endpoints:

- `http://localhost:80/recipe`: retorna todas as receitas, porém somente com os campos *id*, *name*, *description* e *image* para diminuir a carga de dados.
  
- `http://localhost:80/recipe/:recipeId`: retorna todos os campos da receita identificada pelo *recipeId*.
