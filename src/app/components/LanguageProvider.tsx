'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  en: {
    // Navegação
    'nav.blog': 'BLOG',
    'nav.careers': 'CAREERS',
    'nav.jobs': 'JOBS',
    
    // Home
    'home.building': 'Precision-built technology',
    'home.theFuture': '',
    'home.description': 'Indibrief publishes curated analysis and research on AI, venture capital, and regulation.',
    'home.applyNow': 'APPLY NOW!',
    'home.exploreBlog': 'EXPLORE BLOG',
    'home.ourBlog': 'Our ',
    'home.blog': 'Blog',
    'home.blogDescription': 'We explore the future of technology focusing on AI, productivity and digital transformation. Discover free tools, trends and strategies to boost your career and business.',
    'home.exploreArticles': 'EXPLORE ARTICLES',
    'home.tools': 'AI Tools',
    'home.toolsDescription': 'AI tools that can increase your productivity by up to 10x',
    'home.apps': 'Essential Apps',
    'home.appsDescription': 'AI applications that are revolutionizing productivity in 2024',
    'home.madeBy': 'made by',

    // Blog
    'blog.title': 'Indibrief Blog',
    'blog.subtitle': 'Exploring the future of technology and how AI is transforming our world',
    'blog.search': 'Search articles...',
    'blog.all': 'All',
    'blog.ai': 'Artificial Intelligence',
    'blog.productivity': 'Productivity',
    'blog.future': 'Future of Work',
    'blog.tools': 'Tools',
    'blog.featured': 'FEATURED',
    'blog.readMore': 'READ MORE',
    'blog.recentArticles': 'Recent Articles',
    'blog.viewAll': 'View All',
    'blog.newsletter': 'Subscribe to our newsletter',
    'blog.newsletterDesc': 'Receive the latest news about AI, productivity and the future of work directly in your email.',
    'blog.yourEmail': 'Your best email',
    'blog.subscribe': 'SUBSCRIBE',
    'blog.noSpam': 'We promise not to send spam. You can unsubscribe at any time.',
  },
  pt: {
    // Navegação
    'nav.blog': 'BLOG',
    'nav.careers': 'CARREIRAS',
    'nav.jobs': 'VAGAS',
    
    // Home
    'home.building': 'Precision-built technology',
    'home.theFuture': '',
    'home.description': 'O Indibrief publica análises e pesquisas curadas sobre IA, venture capital e regulação.',
    'home.applyNow': 'INSCREVA-SE!',
    'home.exploreBlog': 'EXPLORAR BLOG',
    'home.ourBlog': 'Nosso ',
    'home.blog': 'Blog',
    'home.blogDescription': 'Exploramos o futuro da tecnologia com foco em IA, produtividade e transformação digital. Descubra ferramentas gratuitas, tendências e estratégias para impulsionar sua carreira e negócios.',
    'home.exploreArticles': 'EXPLORAR ARTIGOS',
    'home.tools': 'Ferramentas de IA',
    'home.toolsDescription': 'Ferramentas de IA que podem aumentar sua produtividade em até 10x',
    'home.apps': 'Aplicativos Essenciais',
    'home.appsDescription': 'Aplicativos de IA que estão revolucionando a produtividade em 2024',
    'home.madeBy': 'feito por',

    // Blog
    'blog.title': 'Blog Indibrief',
    'blog.subtitle': 'Explorando o futuro da tecnologia e como a IA está transformando nosso mundo',
    'blog.search': 'Buscar artigos...',
    'blog.all': 'Todos',
    'blog.ai': 'Inteligência Artificial',
    'blog.productivity': 'Produtividade',
    'blog.future': 'Futuro do Trabalho',
    'blog.tools': 'Ferramentas',
    'blog.featured': 'DESTAQUE',
    'blog.readMore': 'LER MAIS',
    'blog.recentArticles': 'Artigos Recentes',
    'blog.viewAll': 'Ver Todos',
    'blog.newsletter': 'Inscreva-se na nossa newsletter',
    'blog.newsletterDesc': 'Receba as últimas novidades sobre IA, produtividade e o futuro do trabalho diretamente no seu email.',
    'blog.yourEmail': 'Seu melhor email',
    'blog.subscribe': 'INSCREVER',
    'blog.noSpam': 'Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Detectar idioma do navegador
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.substring(0, 2).toLowerCase();
      return browserLang === 'pt' ? 'pt' : 'en';
    };

    setLanguage(detectBrowserLanguage());
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 