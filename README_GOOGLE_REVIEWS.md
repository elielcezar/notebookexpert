# 🌟 Integração com Google Reviews - NotebookExpert

Este projeto implementa uma integração dinâmica com as avaliações do Google My Business, substituindo as avaliações estáticas por dados reais obtidos da Google Places API.

## 📋 Funcionalidades

- ✅ **Avaliações dinâmicas**: Busca avaliações reais do Google My Business
- ✅ **Carrossel responsivo**: Exibe as avaliações em um carrossel interativo
- ✅ **Fallback inteligente**: Usa dados locais quando a API não está disponível
- ✅ **Atualização em tempo real**: Estatísticas de rating e contagem atualizadas automaticamente
- ✅ **Design responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Loading states**: Indicadores visuais durante o carregamento
- ✅ **Tratamento de erros**: Mensagens de erro amigáveis ao usuário

## 🚀 Como Configurar

### 1. Obter Google Places API Key

1. **Acesse o Google Cloud Console**
   - Vá para: https://console.cloud.google.com/
   - Faça login com sua conta Google

2. **Criar/Selecionar Projeto**
   - Clique em "Selecionar projeto" no topo
   - Clique em "Novo projeto" ou selecione um existente
   - Dê um nome ao projeto (ex: "NotebookExpert-Reviews")

3. **Habilitar a Places API**
   - Vá para "APIs e serviços" > "Biblioteca"
   - Procure por "Places API"
   - Clique em "Habilitar"

4. **Criar API Key**
   - Vá para "APIs e serviços" > "Credenciais"
   - Clique em "Criar credenciais" > "Chave da API"
   - Copie a chave gerada

5. **Restringir API Key (Recomendado)**
   - Clique na chave criada para editá-la
   - Em "Restrições de aplicativo", selecione "Referenciadores HTTP"
   - Adicione seu domínio (ex: `*.seudominio.com.br/*`)
   - Em "Restrições de API", selecione "Places API"
   - Clique em "Salvar"

### 2. Encontrar o Place ID da Empresa

1. **Método 1: Place ID Finder**
   - Acesse: https://developers.google.com/maps/documentation/places/web-service/place-id#find-id
   - Busque por "NotebookExpert Curitiba"
   - Copie o Place ID (geralmente começa com "ChIJ...")

2. **Método 2: Google Maps**
   - Acesse o Google Maps
   - Busque pela sua empresa
   - Copie o ID da URL ou use ferramentas de desenvolvedor

3. **Método 3: Usar o link fornecido**
   - O Place ID pode estar no link que você forneceu
   - Examine a URL para encontrar o identificador

### 3. Configurar o Projeto

1. **Abrir o arquivo `index.html`**
   - Localize a seção `GOOGLE_PLACES_CONFIG`
   - Substitua `'SUA_API_KEY_AQUI'` pela sua API key
   - Substitua `'SUA_PLACE_ID_AQUI'` pelo Place ID da empresa

```javascript
const GOOGLE_PLACES_CONFIG = {
    apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg', // Sua API key real
    placeId: 'ChIJoVZiXG_E3JQRASdng3sLr-A', // Seu Place ID real
    // ... resto da configuração
};
```

## 🔧 Estrutura do Código

### Arquivos Principais

- `index.html` - Página principal com a integração
- `config.js` - Configurações da API (opcional)
- `README_GOOGLE_REVIEWS.md` - Este arquivo de instruções

### Funções Principais

1. **`fetchGoogleReviews()`**
   - Busca avaliações da Google Places API
   - Retorna dados formatados ou fallback em caso de erro

2. **`populateReviewsCarousel()`**
   - Popula o carrossel com as avaliações
   - Atualiza estatísticas de rating
   - Reinicializa o Swiper

3. **`formatRelativeTime()`**
   - Converte timestamps em tempo relativo
   - Ex: "Há 2 semanas", "Há 1 mês"

4. **`getInitials()` e `getBackgroundColor()`**
   - Gera iniciais e cores para avatares
   - Cria identificação visual única para cada reviewer

## 📊 Dados da API

A integração utiliza os seguintes campos da Google Places API:

- `name` - Nome da empresa
- `rating` - Avaliação média (1-5 estrelas)
- `user_ratings_total` - Número total de avaliações
- `reviews` - Array com até 5 avaliações mais relevantes
  - `author_name` - Nome do autor
  - `rating` - Avaliação individual
  - `text` - Texto da avaliação
  - `time` - Timestamp da avaliação
  - `profile_photo_url` - URL da foto do perfil (opcional)

## 🎨 Personalização

### Cores e Estilo

O sistema utiliza classes Tailwind CSS para estilização. Você pode personalizar:

- **Cores dos avatares**: Modificar array `colors` na função `getBackgroundColor()`
- **Badges de tempo**: Ajustar classes CSS na função `getReviewBadge()`
- **Layout do carrossel**: Modificar configurações do Swiper

### Configurações do Swiper

```javascript
window.swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
```

## 🔒 Segurança

### Restrições de API Key

**IMPORTANTE**: Sempre restrinja sua API key:

1. **Por domínio**: Adicione apenas seus domínios autorizados
2. **Por API**: Habilite apenas as APIs necessárias
3. **Por quota**: Configure limites de uso

### Exemplo de Restrições

```
Referenciadores HTTP:
- https://www.notebookexpert.com.br/*
- https://notebookexpert.com.br/*
- http://localhost:3000/* (apenas para desenvolvimento)

APIs restritas:
- Places API
```

## 📈 Monitoramento

### Google Cloud Console

Monitore o uso da API em:
- **APIs e serviços** > **Painel**
- **Métricas**: Requests, latência, erros
- **Quotas**: Uso diário/mensal

### Logs no Console

O sistema registra logs úteis:

```javascript
console.log('Avaliações carregadas:', reviewsData);
console.error('Erro ao buscar avaliações:', error);
```

## 🛠️ Solução de Problemas

### Problemas Comuns

1. **API Key não funciona**
   - Verifique se a Places API está habilitada
   - Confirme as restrições de domínio
   - Aguarde até 5 minutos após criar a chave

2. **Place ID não encontrado**
   - Use o Place ID Finder oficial
   - Verifique se o negócio existe no Google Maps
   - Confirme se o Place ID está correto

3. **CORS Error**
   - Certifique-se de que o domínio está nas restrições
   - Para testes locais, use um servidor HTTP (não file://)

4. **Sem avaliações**
   - Confirme se o negócio tem avaliações públicas
   - Verifique se o Place ID está correto
   - O fallback será usado automaticamente

### Códigos de Erro da API

- `OK` - Sucesso
- `ZERO_RESULTS` - Nenhum resultado encontrado
- `OVER_QUERY_LIMIT` - Limite de consultas excedido
- `REQUEST_DENIED` - Requisição negada (problema na API key)
- `INVALID_REQUEST` - Requisição inválida (parâmetros incorretos)

## 💡 Dicas Importantes

1. **Custos**: A Places API tem custos por requisição - monitore o uso
2. **Cache**: Considere implementar cache para reduzir chamadas
3. **Fallback**: Sempre tenha dados de fallback configurados
4. **Testes**: Teste em ambiente de desenvolvimento antes de produção
5. **Backup**: Mantenha backups das configurações

## 📞 Suporte

Se você encontrar problemas:

1. Verifique o console do navegador para erros
2. Confirme as configurações da API
3. Teste com dados de fallback
4. Consulte a documentação oficial do Google Places API

---

**Desenvolvido para NotebookExpert - Assistência Técnica em Curitiba**

*Esta integração foi criada para melhorar a credibilidade e transparência do site, exibindo avaliações reais dos clientes diretamente do Google My Business.* 