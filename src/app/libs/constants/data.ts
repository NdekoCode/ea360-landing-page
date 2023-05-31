import { Article, Testimonial } from './types';

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
    image: 'assets/images/blog-1.png',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
  {
    id: 2,
    title: 'We were so honored our event',
    except:
      'We were so honored to host you at our first event in March, in honor of that we want to see you again! Last month during the first edition of our Phenomenal Woman Series,',
    image: 'assets/images/blog-2.png',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
  {
    id: 2,
    title: 'Webinar on Mastering Time Management!',
    except:
      'On Saturday, May 13th 2023, we will hold the second event in the Phenomenal Woman Series, the objectives of which are to provide practical resources for financial independence and mental fitness.',
    image: 'assets/images/blog-3.png',
    tag: 'Stories from the field',
    linkTitle: 'Read more',
  },
];
