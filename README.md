# 🎉 Challenge Amigo Secreto 🎉

[![Licença](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)](#)

> Código desenvolvido para sortear um amigo secreto a partir de uma lista de amigos. 🎉

![Imagem do Projeto](assets/amigo-secreto-2.png)

## Índice

1.  [Funcionalidades do Projeto](#funcionalidades-do-projeto)
2.  [Layout](#layout)
3.  [Como Rodar Este Projeto?](#como-rodar-este-projeto)
4.  [Tecnologias Utilizadas](#tecnologias-utilizadas)
5.  [Autora do Projeto](#autora-do-projeto)
6.  [Licença](#licença)
7.  [Status do Projeto](#status-do-projeto)
8.  [Contribuição](#contribuição)

## Funcionalidades do Projeto

*   **Adicionar Amigos:**
    *   Permite aos usuários adicionar nomes de amigos ou colegas à lista de participantes do sorteio. Cada nome é armazenado e exibido na lista, garantindo que todos os participantes sejam considerados no sorteio.
    *   Ao digitar um nome no campo de entrada e clicar no botão "Adicionar", o nome é validado (para garantir que não esteja vazio) e adicionado à lista de amigos. Uma mensagem de sucesso é exibida para confirmar a ação.
    *   Facilita a criação da lista de participantes, permitindo que o usuário adicione quantos amigos desejar de forma rápida e intuitiva.

*   **Remover Amigos:**
    *   Oferece a flexibilidade de remover um amigo da lista, caso ele não possa participar do sorteio ou tenha sido adicionado por engano.
    *   Cada nome na lista de amigos possui um botão "Remover" associado. Ao clicar neste botão, o nome do amigo é removido da lista e uma mensagem de confirmação é exibida.
    *   Permite corrigir erros e ajustar a lista de participantes de forma fácil e rápida, garantindo que apenas os amigos que realmente participarão do sorteio sejam incluídos.

*   **Editar Amigos:**
    *   Permite aos usuários editar o nome de um amigo já adicionado à lista. Isso é útil para corrigir erros de digitação ou atualizar o nome de um participante.
    *   Ao clicar no botão "Editar" ao lado de um nome na lista, um campo de texto é exibido para que o usuário possa inserir o novo nome. Após a edição, o nome é atualizado na lista e uma mensagem de confirmação é exibida.
    *   Garante que os nomes na lista estejam sempre corretos e atualizados, evitando confusões e problemas no momento do sorteio.

*   **Limpar Lista:**
    *   Remove todos os nomes da lista de amigos de uma só vez, permitindo que o usuário comece do zero caso deseje criar uma nova lista.
    *   Ao clicar no botão "Limpar Lista", todos os nomes são removidos da lista e uma mensagem de confirmação é exibida.
    *   Economiza tempo e esforço, permitindo que o usuário limpe a lista inteira com apenas um clique, em vez de remover os nomes individualmente.

*   **Sortear Amigo Secreto:**
    *   Realiza o sorteio do amigo secreto de forma aleatória, garantindo que cada participante tenha a mesma chance de ser sorteado. O resultado do sorteio é exibido de forma clara e visível para o usuário.
    *   Ao clicar no botão "Sortear Amigo Secreto", o sistema seleciona um amigo aleatoriamente da lista e exibe o nome do amigo sorteado. Uma animação de confetes é exibida para celebrar o momento.
    *   Simplifica o processo de sorteio, eliminando a necessidade de realizar o sorteio manualmente. Garante a aleatoriedade e a imparcialidade do sorteio.

*   **Confetes:**
    *   Exibe uma animação de confetes ao sortear o amigo secreto para celebrar o momento e tornar a experiência mais divertida e festiva.
    *   Após o sorteio, uma animação de confetes é exibida na tela, criando um efeito visual atraente e emocionante.
    *   Adiciona um toque de diversão e emoção ao sorteio, tornando a experiência mais memorável e agradável para o usuário.

*   **Mensagens:**
    *   Exibe mensagens de sucesso e erro para guiar o usuário durante a utilização da aplicação. As mensagens fornecem feedback sobre as ações do usuário e ajudam a evitar erros.
    *   Mensagens de sucesso são exibidas quando uma ação é realizada com sucesso (por exemplo, ao adicionar um amigo ou sortear o amigo secreto). Mensagens de erro são exibidas quando ocorre um problema (por exemplo, ao tentar adicionar um nome vazio à lista).
    *   Melhora a usabilidade da aplicação, fornecendo feedback claro e conciso ao usuário. Ajuda a evitar erros e a resolver problemas de forma rápida e fácil.
## Layout

O layout do projeto foi desenvolvido com foco na usabilidade e na experiência do usuário, utilizando cores vibrantes e elementos visuais atraentes.

*   **Cores:**
    *   `--color-primary`: #4B69FD (Azul)
    *   `--color-secondary`: #FFF9EB (Amarelo Claro)
    *   `--color-tertiary`: #C4C4C4 (Cinza)
    *   `--color-button`: #fe652b (Laranja)
    *   `--color-button-hover`: #e55720 (Laranja Escuro)
    *   `--color-text`: #444444 (Cinza Escuro)
    *   `--color-white`: #FFFFFF (Branco)
*   **Fontes:**
    *   `Inter`: Para textos gerais.
    *   `Merriweather`: Para títulos (estilo itálico e peso 900).

## Como Rodar Este Projeto?

Siga estas etapas para executar o projeto em sua máquina local:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/[seu-usuario]/amigo-secreto.git 
    ```
2.  **Navegue até o diretório do projeto:**

    ```bash
    cd amigo-secreto
    ```
3.  **Abra o arquivo `index.html` em seu navegador.**

## Tecnologias Utilizadas

*   **HTML:** Estrutura da página web.
*   **CSS:** Estilização da página web.
*   **JavaScript:** Lógica da aplicação.
*   **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti):** Biblioteca para a animação de confetes.

## Autora do Projeto

**Gisele Lima**

*   [LinkedIn](https://www.linkedin.com/in/gisele-lima-tech/)
*   [GitHub](https://github.com/GiseleLima-AI)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Status do Projeto

Concluído. As funcionalidades propostas neste projeto foram implementadas com sucesso.

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

### Como Contribuir

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça commit de suas mudanças (`git commit -am 'Adiciona nova feature'`).
4.  Faça push para a branch (`git push origin feature/sua-feature`).
5.  Abra um pull request.