export type ToastsVariant = 'solid' | 'bordered' | 'flat';
export type ToastsColor = 'default' | 'success' | 'danger';

export interface ToastsType {
  id: string;
  title: string;
  description?: string;
  variant: ToastsVariant;
  color: ToastsColor;
}
