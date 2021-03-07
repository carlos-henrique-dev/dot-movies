# DOT movies

## Sobre o projeto
Projeto desenvolvido em ``Vue.js`` como teste para [DOT digital group](https://dotgroup.com.br/).

## One netlify
[Clique aqui para acessar o projeto no netlify](https://wonderful-meitner-b75607.netlify.app/)

## Configurações iniciais
Para poder acessar a API do TMDB é necessário uma ``api_key``. Esta chave pode ser obtida no [site do TMDB](https://www.themoviedb.org/) em ``Profile > Settings > API`` <br>

Após gerar a chave, adicione ela em um arquivo ``.env`` na raiz do projeto. O arquivo .env deve conter as seguinte variável:
```
VUE_APP_TMDB_API_KEY=sua_apy_key

```
**__O sistema utiliza a [versão 3](https://api.themoviedb.org/3) da api do TMDB__**
<br/><br/>
## Rodando o projeto
Finalizada a configuração da ``api_key``, instale as dependências do projeto rodando o comando:
```
yarn
```
Depois inicie o servidor com o comando:
```
yarn serve
```

#### Bibliotecas utilizadas
- [Axios](https://github.com/axios/axios) ;
- [Vee-validate](https://vee-validate.logaretm.com/v4/) (para integração com yup na validação do formulário de checkout);
- [Yup](https://github.com/jquense/yup);
- [Vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/) (para adicionar máscaras nos inputs especiais);
- [Sass](https://sass-lang.com/)


# Screenshots

## Tela inicial
![Screenshot da tela inicial](/screenshots/home.png "Screenshot da tela inicial")
## Carrinho
![Screenshot do carrinho](/screenshots/cart.png "Screenshot ddo carrinho")
## Favoritos
![Screenshot dos favoritos](/screenshots/wishlist.png "Screenshot dos favoritos")
## Checkout
![Screenshot da tela de checkout](/screenshots/checkout.png "Screenshot da tela de checkout")
## Tela inicial e checkout mobile
![Screenshot da tela inicial mobile](/screenshots/mobile-home.png "Screenshot da tela inicial mobile")
![Screenshot da tela de checkout mobile](/screenshots/checkout-mobile.png "Screenshot da tela de checkout")
