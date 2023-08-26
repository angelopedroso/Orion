# Orion: Desvende o Inglês Autêntico

## Descrição

Bem-vindo ao repositório da aplicação Orion, uma ferramenta para auxiliar você em sua jornada de estudos de inglês. Através do método de mineração de frases, o Orion permite que você mergulhe profundamente no idioma, coletando, estudando e aprendendo frases autênticas a partir de palavras novas que você encontra. Com o Orion, o controle do seu próprio aprendizado está em suas mãos, permitindo que você explore o idioma de maneira única e eficaz.

## Sobre

Orion é desenvolvido usando NextJS, uma estrutura de renderização React para aplicações web modernas. A autenticação é simplificada e segura graças ao NextAuth, que permite autenticação rápida através de contas do GitHub e Google.

## Requisitos

- NodeJS 18+
- Banco de Dados MongoDB
- Google API e GitHub API keys

## Configuração

1. Clone este repositório para o seu ambiente local.

2. Instale as dependências usando o seguinte comando:

```
   yarn install
```

3. Configure as variáveis de ambiente no arquivo `.env` com as informações necessárias:

```
   NEXTAUTH_SECRET=
   NEXTAUTH_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GITHUB_ID=
   GITHUB_SECRET=
   DATABASE_URL=
   ENCRYPTER_PASSWORD=
```

4. Inicie a aplicação usando o comando:

```
   yarn dev
```

## Principais Ferramentas Utilizadas

- NextJS 13
- Tailwind CSS
- React Hook Form
- Shadcn (Re-usable components built using Radix UI and Tailwind CSS)
- NextAuth para autenticação
- MongoDB para armazenamento de dados
- Prisma para manipulação do banco de dados
- OpenAI para inteligência artificial
- Zod para validação de dados

## Contribuição

Se você deseja contribuir com este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para suas contribuições: `git checkout -b sua-branch`.
3. Implemente suas alterações e adicione documentação, se necessário.
4. Envie suas alterações: `git push origin sua-branch`.
5. Abra um pull request neste repositório.

Orion agradece antecipadamente por suas valiosas contribuições!

## Licença

Este projeto está licenciado sob os termos da Licença Apache 2.0. Para obter mais detalhes, consulte o arquivo [LICENSE](./LICENSE).
