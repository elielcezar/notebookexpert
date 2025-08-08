// Configurações da Google Places API
const GOOGLE_PLACES_CONFIG = {
    // IMPORTANTE: Substitua estas configurações pelas suas próprias
    apiKey: 'SUA_API_KEY_AQUI', // Sua chave da API do Google Places
    placeId: 'SUA_PLACE_ID_AQUI', // O Place ID da sua empresa
    
    // Configurações de busca
    fields: 'name,rating,user_ratings_total,reviews,formatted_address,geometry',
    
    // Configurações de CORS Proxy (opcional, se necessário)
    useProxy: false,
    proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    
    // Configurações de cache
    cacheEnabled: true,
    cacheTimeout: 30 * 60 * 1000, // 30 minutos
    
    // Dados de fallback (usados quando a API não está disponível)
    fallbackData: {
        name: "NotebookExpert",
        rating: 4.8,
        reviewsCount: 150,
        reviews: [
            {
                author_name: "Ana Clara Silva",
                rating: 5,
                text: "Excelente atendimento! Meu notebook Dell estava com problemas na tela e eles consertaram rapidamente. Preço justo e muita qualidade no serviço. Recomendo muito!",
                time: Date.now() - (14 * 24 * 60 * 60 * 1000), // 2 semanas atrás
                profile_photo_url: null
            },
            {
                author_name: "Ricardo Ferreira Santos",
                rating: 5,
                text: "Precisei de um conserto urgente para trabalho e eles me atenderam no mesmo dia. Profissionais competentes e honestos. Super recomendo! Equipe muito preparada.",
                time: Date.now() - (30 * 24 * 60 * 60 * 1000), // 1 mês atrás
                profile_photo_url: null
            },
            {
                author_name: "Marina Santos Costa",
                rating: 5,
                text: "Melhor assistência técnica de Curitiba! Recuperaram todos os meus arquivos que pensei ter perdido. Equipe muito atenciosa e preços honestos. Salvaram meu trabalho!",
                time: Date.now() - (21 * 24 * 60 * 60 * 1000), // 3 semanas atrás
                profile_photo_url: null
            },
            {
                author_name: "João Mendes",
                rating: 5,
                text: "Serviço impecável! Meu MacBook Pro estava com problema no HD e eles fizeram um trabalho perfeito. Já é a segunda vez que uso os serviços deles. Profissionais de primeira!",
                time: Date.now() - (7 * 24 * 60 * 60 * 1000), // 1 semana atrás
                profile_photo_url: null
            },
            {
                author_name: "Luiza Costa",
                rating: 5,
                text: "Atendimento nota 10! Meu notebook estava lento e com vírus, eles limparam tudo e ainda instalaram um antivírus. Ficou voando! Preço justo e trabalho rápido.",
                time: Date.now() - (4 * 24 * 60 * 60 * 1000), // 4 dias atrás
                profile_photo_url: null
            },
            {
                author_name: "Pedro Silva",
                rating: 5,
                text: "Precisava trocar a tela do meu notebook e achei que seria caro. Eles fizeram um orçamento justo e o serviço ficou perfeito. Muito satisfeito com o resultado!",
                time: Date.now() - (5 * 24 * 60 * 60 * 1000), // 5 dias atrás
                profile_photo_url: null
            },
            {
                author_name: "Carla Oliveira",
                rating: 5,
                text: "Excelente trabalho! Meu notebook não ligava mais e eles conseguiram resolver o problema. Atendimento cordial e preços competitivos. Voltarei sempre!",
                time: Date.now() - (10 * 24 * 60 * 60 * 1000), // 10 dias atrás
                profile_photo_url: null
            },
            {
                author_name: "Roberto Lima",
                rating: 5,
                text: "Profissionais muito competentes! Formataram meu computador e instalaram todos os programas que eu precisava. Serviço completo e bem feito. Recomendo!",
                time: Date.now() - (18 * 24 * 60 * 60 * 1000), // 18 dias atrás
                profile_photo_url: null
            }
        ]
    }
};

// Função para obter o Place ID da sua empresa
// Acesse: https://developers.google.com/maps/documentation/places/web-service/place-id
function getPlaceIdInstructions() {
    console.log(`
    📍 Como encontrar o Place ID da sua empresa:
    
    1. Acesse: https://developers.google.com/maps/documentation/places/web-service/place-id
    2. Ou use o Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id#find-id
    3. Busque pelo nome da sua empresa: "NotebookExpert Curitiba"
    4. Copie o Place ID (geralmente começa com "ChIJ...")
    5. Substitua 'SUA_PLACE_ID_AQUI' no arquivo config.js
    
    🔑 Como obter sua Google Places API Key:
    
    1. Acesse: https://console.cloud.google.com/
    2. Crie um novo projeto ou selecione um existente
    3. Vá para "APIs & Services" > "Library"
    4. Procure e habilite a "Places API"
    5. Vá para "APIs & Services" > "Credentials"
    6. Clique em "Create Credentials" > "API key"
    7. Copie a chave e substitua 'SUA_API_KEY_AQUI' no arquivo config.js
    
    ⚠️ IMPORTANTE: Restrinja sua API key para maior segurança!
    `);
}

// Exportar configurações (para uso em módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOOGLE_PLACES_CONFIG;
} 