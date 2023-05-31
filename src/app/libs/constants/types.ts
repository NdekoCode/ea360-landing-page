export type Testimonial = {
  content: string;
  username: string;
  userimage: string;
  rating: number;
};
export type Partner = {
  title: string;
  image: string;
};
export type Article = {
  id: string | number;
  title: string;
  except: string;
  image: string;
  tag?: string | string[];
  body?: string;
  [key: string]: string | number | undefined | string[];
};
