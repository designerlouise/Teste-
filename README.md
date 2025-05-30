# Guia de Personalização da Landing Page Estilo Netflix

Este documento contém instruções detalhadas para personalizar sua landing page estilo Netflix. Todos os arquivos estão organizados e os pontos de personalização estão claramente marcados com comentários "ÁREA EDITÁVEL".

## Estrutura de Arquivos

```
netflix-landing-page/
├── css/
│   ├── reset.css          # Estilos de reset
│   ├── login.css          # Estilos da página de login/captação
│   └── main.css           # Estilos da página principal e detalhes
├── js/
│   ├── language.js        # Sistema de alternância de idiomas
│   ├── login.js           # Script da página de login/captação
│   └── main.js            # Script da página principal
├── images/                # Pasta para suas imagens
│   ├── background.jpg     # Imagem de fundo da página de login
│   ├── hero-background.jpg # Imagem de fundo do banner principal
│   ├── detail-background.jpg # Imagem de fundo das páginas de detalhes
│   └── [outras imagens]   # Imagens para os carrosséis
├── pages/                 # Páginas de detalhes
│   ├── quem-sou.html      # Página "Quem sou eu?"
│   ├── como-ajudar.html   # Página "Como posso ajudar"
│   └── [outras páginas]   # Outras páginas de detalhes
├── index.html             # Página de login/captação
└── main.html              # Página principal com carrosséis
```

## Pontos de Personalização

### 1. Imagens

Substitua as imagens na pasta `images/` por suas próprias imagens:

- `background.jpg`: Imagem de fundo da página de login
- `hero-background.jpg`: Imagem de fundo do banner principal
- `detail-background.jpg`: Imagem de fundo das páginas de detalhes
- Imagens para os carrosséis (nomeie-as de forma organizada)

### 2. Textos e Conteúdo

Os textos estão marcados com comentários "ÁREA EDITÁVEL" nos arquivos HTML. Você pode editar:

- Títulos e descrições
- Textos das páginas de detalhes
- Links de navegação
- Informações de rodapé

### 3. Configuração do EmailJS

Para ativar o envio de formulário via EmailJS:

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Crie um serviço e um template
3. No arquivo `js/login.js`, localize a seção "Configurar EmailJS" e substitua:
   - `YOUR_SERVICE_ID` pelo ID do seu serviço
   - `YOUR_TEMPLATE_ID` pelo ID do seu template
   - `YOUR_USER_ID` pelo seu ID de usuário

4. Remova os comentários do bloco de código EmailJS e remova o bloco de simulação

### 4. Personalização de Cores

As cores principais estão definidas como variáveis CSS no início dos arquivos CSS:

```css
:root {
    --netflix-red: #e50914;
    --netflix-black: #000000;
    --netflix-dark-gray: #141414;
    --netflix-light-gray: #333333;
    --netflix-white: #ffffff;
}
```

Você pode alterar essas variáveis para usar suas próprias cores.

## Instruções para Publicação no GitHub

1. Crie um novo repositório no GitHub
2. Clone o repositório para sua máquina local
3. Copie todos os arquivos da pasta `netflix-landing-page` para a pasta do repositório
4. Adicione, faça commit e envie os arquivos para o GitHub:

```bash
git add .
git commit -m "Adicionar landing page estilo Netflix"
git push origin main
```

5. Ative o GitHub Pages nas configurações do repositório para publicar o site

## Dicas de Personalização

- **Imagens**: Use imagens de alta qualidade e com proporções adequadas
- **Textos**: Mantenha os textos concisos e impactantes
- **Cores**: Ajuste as cores para combinar com sua identidade visual
- **Responsividade**: O site já é responsivo, mas teste em diferentes dispositivos
- **Animações**: As animações estilo Netflix já estão implementadas

## Recursos Adicionais

- [Font Awesome](https://fontawesome.com/) para ícones adicionais
- [EmailJS Documentação](https://www.emailjs.com/docs/) para configuração avançada do formulário
- [Google Fonts](https://fonts.google.com/) para personalizar fontes

Aproveite sua nova landing page estilo Netflix! Se tiver dúvidas, entre em contato.
