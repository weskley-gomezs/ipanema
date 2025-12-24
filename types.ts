export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: 'pink' | 'blue' | 'white' | 'mint' | 'lavender';
  description: string;
}

export type SiteTheme = 'default' | 'pink' | 'blue' | 'mint';