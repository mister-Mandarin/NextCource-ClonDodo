import React from 'react';

interface ItemsProps {
  text: string;
  value: string;
}

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export interface CheckboxFiltersProps {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems?: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: ItemsProps[];
  className?: string;
}

// export const DEFAULT_ITEMS: ItemsProps[] = [
//   { text: 'Сырный соус', value: '1' },
//   { text: 'Моццарелла', value: '2' },
//   { text: 'Чеснок', value: '3' },
//   { text: 'Солённые огурчики', value: '4' },
//   { text: 'Красный лук', value: '5' },
//   { text: 'Томаты', value: '6' },
// ];

export const ITEMS: ItemsProps[] = [
  { text: 'Пепперони', value: '1' },
  { text: 'Грибы', value: '2' },
  { text: 'Оливки', value: '3' },
  { text: 'Базилик', value: '4' },
  { text: 'Пармезан', value: '5' },
  { text: 'Курица', value: '6' },
  { text: 'Шпинат', value: '7' },
  { text: 'Паприка', value: '8' },
  { text: 'Анчоусы', value: '9' },
  { text: 'Брокколи', value: '10' },
  { text: 'Кукуруза', value: '11' },
  { text: 'Фета', value: '12' },
  { text: 'Чили', value: '13' },
  { text: 'Сосиски', value: '14' },
  { text: 'Сладкий перец', value: '15' },
  { text: 'Тунец', value: '16' },
  { text: 'Яйцо', value: '17' },
  { text: 'Каперсы', value: '18' },
  { text: 'Сельдерей', value: '19' },
  { text: 'Кедровые орехи', value: '20' },
  { text: 'Сыр', value: '21' },
];
