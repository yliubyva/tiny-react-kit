export type ToastsVariant = 'solid' | 'bordered';
export type ToastsColor = 'default' | 'success' | 'danger';

export interface ToastsType {
  id: string;
  title: string;
  description?: string;
  variant: ToastsVariant;
  color: ToastsColor;
  duration: 2000 | 5000 | 10000;
}
