# Feito ✳

Um espaço para transformar trabalho criativo em relatórios por projeto.

## Executar

Requer Node.js 18 ou superior. Não há dependências externas para instalar.

```sh
npm run dev
```

O servidor usa a porta 3000, ou a variável `PORT`.

## Funcionalidades

- Projetos com cliente, categoria, objetivo, prazo e status.
- Registro de entregas com quantidade e horas dedicadas.
- Indicadores, busca e filtros por status.
- Relatório com resumo, entregas e resultados escritos pelo usuário.
- Exportação: clique em **Exportar PDF** e escolha **Salvar como PDF** na janela de impressão do navegador. A versão impressa omite os controles de edição.
- Salvamento local automático neste navegador, sem envio a servidores.

Os três projetos iniciais são exemplos demonstrativos. Podem ser excluídos. Os dados não sincronizam entre navegadores e podem ser perdidos se o armazenamento do navegador for apagado; exporte os relatórios que deseja guardar. Não há autenticação ou backend de dados nesta versão.

## Verificar

```sh
npm run check
```

Para uma verificação funcional, crie um projeto, adicione uma entrega, registre um resultado, recarregue a página e abra o relatório. Verifique também a prévia de impressão.

## Publicação

O site é estático. Publique somente `index.html`, `style.css` e `app.js` em uma hospedagem HTTPS. Os caminhos relativos permitem hospedagem em subdiretórios, incluindo GitHub Pages.

Alternativa manual: extraia o ZIP `feito-site.zip` e envie a pasta em https://app.netlify.com/drop usando sua conta. O serviço fornecerá o endereço público após a publicação.

A publicação do ambiente de desenvolvimento não publica o site na internet.
