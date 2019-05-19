## Requisitos
- PHP 7+
- MySQL
- Composer
- Node JS
- NPM

## Tecnologias

- PHP 7
- Laravel
- MySSQL
- React JS
- Redux
- Bootstrap

## Como instalar

Dentro da pasta do projeto execute o seguinte comando para baixar as dependencias do Laravel

```sh
$ composer install
```

Também se faz necessário executar o seguinte comando para instalar as dependencias do node

```sh
$ npm install
```

Para gerar os arquivos de produção do React JS execute o seguinte comando
```sh
$ npm run production
```

Caso queira implementar alguma mudança no front-end execute o seguinte comando
para que o servidor do webpack fique monitorando as mudanças

```sh
$ npm run watch
```

Renomear o arquivo `.env.example` para `.env`

Execute o seguinte comando para criar a chave da aplicação

```sh
$ php artisan key:generate
```

Criar um banco de dados para a aplicação
No arquivo `.env` localize as configurações do banco de dados e defina as mesma para um banco de dados 

Para executar localmente deve-se primeiro configurar o banco de dados

Após configurar o banco de dados execute o seguinte comando para criar a estrutura das tabelas

```sh
$ php artisan migrate:fresh
```

Para subir o servidor com o laravel, deve-se executar o seguinte comando

```sh
$ php artisan serve
```

Por padrão o laravel irá subir o servidor na porta 8000,
então para acessa-lo basta digitar http://localhost:8000 no seu navegador