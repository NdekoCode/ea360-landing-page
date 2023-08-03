import { Article, Testimonial, faq } from './types';

export const DATA_ABOUT_US = [
  {
    title: 'Executive Coaching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua minim veniam.',
  },
];
export const DATA_TESTIMONIALS: Testimonial[] = [
  {
    content: `"I gained so much confidence in my ability to connect and deepen my relationships with people. "`,
    username: 'Jane',
    userimage: '/assets/images/testi-1.png',
    rating: 5,
  },
  {
    content: `"I gained so much confidence in my ability to connect and deepen my relationships with people. "`,
    username: 'Catherine',
    userimage: '/assets/images/testi-2.png',
    rating: 0,
  },
  {
    content: `"I gained so much confidence in my ability to connect and deepen my relationships with people. "`,
    username: 'Micheline',
    userimage: '/assets/images/testi-3.png',
    rating: 0,
  },
];
export const PARTNER = [
  {
    title: 'Adapt IT',
    image: '/assets/images/partner-adaptit.png',
  },

  {
    title: 'DPO Think Payment',
    image: '/assets/images/partner-dpo.png',
  },

  {
    title: 'Swiss education Group',
    image: '/assets/images/partber-seg.png',
  },

  {
    title: 'Catalog',
    image: '/assets/images/partner-catalog.png',
  },

  {
    title: 'Quotient',
    image: '/assets/images/partner-quotient.png',
  },
];
export const BLOG_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'A progressive mindset on development',
    except:
      'A progressive mindset on development is a perspective that emphasizes continuous improvement and growth, both on an individual level and on a larger scale.',
    image: 'assets/images/blog-1.jpg',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
  {
    id: 2,
    title: 'We were so honored our event',
    except:
      'We were so honored to host you at our first event in March, in honor of that we want to see you again! Last month during the first edition of our Phenomenal Woman Series,',
    image: 'assets/images/blog-4.jpg',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
  {
    id: 2,
    title: 'Webinar on Mastering Time Management!',
    except:
      'On Saturday, May 13th 2023, we will hold the second event in the Phenomenal Woman Series, the objectives of which are to provide practical resources for financial independence and mental fitness.',
    image: 'assets/images/blog-3.jpg',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
];

export const FAQ: faq[] = [
  {
    question: 'How long does the coaching process take?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What if I wanted to end my coaching engagement?',
    answer:
      'Absolument ! Notre application est conçue pour les freelances et les entreprises qui cherchent à gérer efficacement les prestations de service. Vous pouvez facilement suivre les projets, les facturations et les paiements en un seul endroit.',
  },
  {
    question: 'Can I change through coaching?',
    answer:
      'Nous avons conçu cette application pour être simple et intuitive à utiliser pour tous les utilisateurs, même les moins technophiles. Nous offrons une interface conviviale et des fonctionnalités faciles à comprendre pour une expérience utilisateur sans stress.',
  },
  {
    question: 'How often do we meet?',
    answer:
      "Notre application vous permet de suivre facilement l'état de vos prestations en temps réel. Vous pouvez voir les prestations en cours, les prestations terminées et les prestations à venir. Vous pouvez également recevoir des notifications par e-mail pour vous tenir informé de l'état de vos prestations.",
  },
];
