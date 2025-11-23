export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Las tendencias de diseño web que dominarán 2024',
    slug: 'tendencias-diseno-web-2024',
    excerpt: 'Descubre las últimas tendencias en diseño web que están transformando la experiencia de usuario y la estética digital.',
    content: `
# Las tendencias de diseño web que dominarán 2024

El diseño web está en constante evolución, y 2024 trae consigo innovaciones emocionantes que transformarán la forma en que creamos experiencias digitales.

## 1. Minimalismo Maximalista

Una aparente contradicción que combina la simplicidad del minimalismo con elementos visuales audaces. Espacios en blanco generosos con toques de color vibrante y tipografías impactantes.

## 2. Animaciones Micro-Interactivas

Las micro-interacciones se han vuelto más sofisticadas, proporcionando feedback visual instantáneo que mejora la experiencia del usuario sin abrumar.

## 3. Diseño Neumórfico

El neumorfismo continúa evolucionando, creando interfaces que parecen emerger de la pantalla con sombras y relieves sutiles.

## 4. Tipografía Variable

Las fuentes variables permiten ajustes dinámicos en peso, ancho y otros atributos, ofreciendo mayor flexibilidad sin sacrificar el rendimiento.

## 5. Dark Mode Inteligente

Ya no es solo una opción, sino una experiencia cuidadosamente diseñada que se adapta a las preferencias del usuario y la hora del día.

## Conclusión

Estas tendencias no son solo estéticas; representan un cambio hacia experiencias más personalizadas, accesibles y performantes. En Birdie Digital, implementamos estas innovaciones para crear sitios web que destacan.
    `,
    author: 'Equipo Birdie',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['Diseño Web', 'Tendencias', 'UX/UI']
  },
  {
    id: '2',
    title: 'React vs Vue: ¿Qué framework elegir en 2024?',
    slug: 'react-vs-vue-2024',
    excerpt: 'Una comparación profunda entre React y Vue para ayudarte a tomar la mejor decisión para tu próximo proyecto.',
    content: `
# React vs Vue: ¿Qué framework elegir en 2024?

Elegir el framework adecuado es crucial para el éxito de tu proyecto. Analizamos React y Vue desde diferentes perspectivas.

## Curva de Aprendizaje

**Vue** es conocido por su curva de aprendizaje más suave. Su sintaxis es intuitiva y la documentación es excelente.

**React** tiene una curva más pronunciada, pero su ecosistema es más robusto y hay más recursos disponibles.

## Ecosistema y Comunidad

**React** cuenta con una comunidad masiva y un ecosistema de librerías increíblemente rico. Next.js ha llevado React a otro nivel.

**Vue** tiene una comunidad apasionada y herramientas oficiales excelentes como Nuxt.js.

## Rendimiento

Ambos frameworks ofrecen rendimiento excepcional. Las diferencias en la mayoría de aplicaciones son imperceptibles.

## Flexibilidad

**React** te da más libertad (y responsabilidad) en cómo estructurar tu aplicación.

**Vue** ofrece más estructura "out of the box", lo que puede acelerar el desarrollo inicial.

## ¿Cuál elegir?

- **React** si necesitas un ecosistema robusto y estás cómodo con JavaScript moderno
- **Vue** si valoras la simplicidad y quieres resultados rápidos

En Birdie Digital trabajamos con ambos frameworks, eligiendo la mejor herramienta según las necesidades de cada proyecto.
    `,
    author: 'Equipo Birdie',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tags: ['React', 'Vue', 'JavaScript', 'Frameworks']
  },
  {
    id: '3',
    title: 'SEO en 2024: Estrategias que realmente funcionan',
    slug: 'seo-estrategias-2024',
    excerpt: 'Aprende las estrategias SEO más efectivas para posicionar tu sitio web en los primeros resultados de Google.',
    content: `
# SEO en 2024: Estrategias que realmente funcionan

El SEO sigue siendo fundamental para el éxito online. Estas son las estrategias que están dando resultados reales en 2024.

## 1. Contenido de Calidad sobre Cantidad

Google premia el contenido que realmente aporta valor. Mejor un artículo excepcional que diez mediocres.

## 2. Core Web Vitals

El rendimiento ya no es opcional. LCP, FID y CLS son métricas críticas que impactan directamente tu ranking.

## 3. E-E-A-T

Experiencia, Expertise, Autoridad y Confianza. Google valora sitios que demuestran conocimiento real.

## 4. Búsqueda por Voz

Optimizar para búsquedas conversacionales es cada vez más importante con el auge de asistentes virtuales.

## 5. Mobile-First

El diseño responsive ya no es suficiente. Tu sitio debe estar pensado primero para móviles.

## 6. Contenido Visual

Videos, infografías y contenido visual bien optimizado mejoran el engagement y el tiempo en página.

## Herramientas Esenciales

- Google Search Console
- Ahrefs o SEMrush
- PageSpeed Insights
- Schema Markup Validator

## Conclusión

El SEO moderno requiere un enfoque holístico que combine contenido de calidad, experiencia técnica y comprensión del usuario. En Birdie Digital implementamos estas estrategias en cada proyecto.
    `,
    author: 'Equipo Birdie',
    date: '2024-01-05',
    readTime: '6 min',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
    tags: ['SEO', 'Marketing Digital', 'Google']
  },
  {
    id: '4',
    title: 'Tailwind CSS: Por qué es nuestra elección para proyectos modernos',
    slug: 'tailwind-css-proyectos-modernos',
    excerpt: 'Descubre por qué Tailwind CSS se ha convertido en nuestra herramienta favorita para el desarrollo de interfaces modernas.',
    content: `
# Tailwind CSS: Por qué es nuestra elección para proyectos modernos

Tailwind CSS ha revolucionado la forma en que desarrollamos interfaces. Te explicamos por qué lo amamos.

## Utility-First Approach

El enfoque utility-first acelera el desarrollo dramáticamente. No más nombres de clases inventados o CSS que crece sin control.

## Diseño Consistente

Con Tailwind, la consistencia visual es natural. Los espaciados, colores y tipografías siguen un sistema predefinido.

## Rendimiento Optimizado

PurgeCSS elimina el CSS no utilizado, resultando en archivos increíblemente pequeños en producción.

## Personalización Total

El archivo de configuración permite crear un sistema de diseño completamente personalizado.

## Responsive por Defecto

Los modificadores responsive hacen que el diseño adaptable sea intuitivo y rápido.

## Ventajas en Producción

- Mantenimiento simplificado
- Onboarding rápido de nuevos desarrolladores
- Menos bugs CSS
- Prototipos más rápidos

## Desventajas a Considerar

- HTML más verboso
- Curva de aprendizaje inicial
- Requiere build process

## Conclusión

Tailwind CSS no es solo una herramienta, es una filosofía de diseño que mejora la colaboración entre diseñadores y desarrolladores. En Birdie Digital, lo usamos en casi todos nuestros proyectos.
    `,
    author: 'Equipo Birdie',
    date: '2023-12-28',
    readTime: '5 min',
    category: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['Tailwind CSS', 'CSS', 'Desarrollo Web']
  },
  {
    id: '5',
    title: 'Accesibilidad Web: Más allá del cumplimiento legal',
    slug: 'accesibilidad-web-importancia',
    excerpt: 'La accesibilidad web no es solo una obligación legal, es una oportunidad para alcanzar más usuarios y mejorar la UX.',
    content: `
# Accesibilidad Web: Más allá del cumplimiento legal

La accesibilidad web beneficia a todos los usuarios, no solo a personas con discapacidades. Es hora de verla como una ventaja competitiva.

## ¿Por qué importa?

- 15% de la población mundial tiene alguna discapacidad
- Mejora la experiencia para todos los usuarios
- Aumenta tu alcance de mercado
- Mejora el SEO

## Principios WCAG

### 1. Perceptible

La información debe ser presentable de formas que todos puedan percibir.

### 2. Operable

Los componentes de interfaz deben ser operables por todos los usuarios.

### 3. Comprensible

La información y operación de la interfaz deben ser comprensibles.

### 4. Robusto

El contenido debe ser interpretable por una amplia variedad de tecnologías.

## Implementación Práctica

**Contraste de Color**: Mínimo 4.5:1 para texto normal, 3:1 para texto grande.

**Navegación por Teclado**: Todo debe ser accesible sin ratón.

**Texto Alternativo**: Todas las imágenes deben tener alt text descriptivo.

**Estructura Semántica**: Usar HTML semántico correctamente.

## Herramientas

- axe DevTools
- WAVE
- Lighthouse
- Screen readers

## ROI de la Accesibilidad

- Mayor audiencia
- Mejor SEO
- Menos riesgo legal
- Mejor UX para todos

## Conclusión

La accesibilidad es una inversión en la calidad de tu producto digital. En Birdie Digital, la consideramos desde el primer día de cada proyecto.
    `,
    author: 'Equipo Birdie',
    date: '2023-12-20',
    readTime: '8 min',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['Accesibilidad', 'WCAG', 'UX', 'Diseño Web']
  },
  {
    id: '6',
    title: 'TypeScript: El superpoder de JavaScript',
    slug: 'typescript-javascript-superpoder',
    excerpt: 'TypeScript ha transformado el desarrollo JavaScript. Descubre por qué deberías adoptarlo en tu próximo proyecto.',
    content: `
# TypeScript: El superpoder de JavaScript

TypeScript se ha convertido en el estándar de facto para aplicaciones JavaScript de calidad empresarial. Aquí está el porqué.

## ¿Qué es TypeScript?

TypeScript es un superset de JavaScript que añade tipado estático opcional y otras características que mejoran la experiencia de desarrollo.

## Ventajas Principales

### 1. Detección Temprana de Errores

Los errores se capturan en tiempo de compilación, no en producción.

### 2. Mejor IntelliSense

El autocompletado y la documentación inline mejoran la productividad.

### 3. Refactoring Seguro

Los cambios en la estructura son más seguros gracias al análisis estático.

### 4. Documentación Viviente

Los tipos sirven como documentación que nunca queda obsoleta.

## Casos de Uso Ideales

- Aplicaciones empresariales grandes
- Equipos con múltiples desarrolladores
- Proyectos de larga duración
- APIs y librerías públicas

## Adopción Gradual

No necesitas migrar todo de golpe. TypeScript permite adopción incremental.

\`\`\`typescript
// Puedes empezar simple
let message: string = "Hola TypeScript";

// Y crecer en complejidad
interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return \`Hola, \${user.name}\`;
}
\`\`\`

## Ecosistema

- Excelente integración con React, Vue, Node.js
- Soporte first-class en VS Code
- DefinitelyTyped para tipos de librerías JS

## Conclusión

TypeScript no es solo una moda, es una mejora fundamental en cómo escribimos JavaScript. En Birdie Digital, todos nuestros proyectos nuevos usan TypeScript.
    `,
    author: 'Equipo Birdie',
    date: '2023-12-15',
    readTime: '6 min',
    category: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'JavaScript', 'Programación']
  }
];

export const categories = ['Todos', 'Diseño', 'Desarrollo', 'SEO'];
