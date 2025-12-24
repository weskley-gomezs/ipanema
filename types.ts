
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: 'pink' | 'blue' | 'white';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
