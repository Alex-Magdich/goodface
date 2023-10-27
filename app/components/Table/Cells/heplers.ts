import { TransactionCategory, TransactionType } from '../types';

export const getFormatedAmount = (value: string | number, type: TransactionType) => {
    const prefix = type === TransactionType.credit ? '- $' : '+ $';

    return prefix + value;
};

const categoryColors = {
    [TransactionCategory.foodAndDining]: 'pink',
    [TransactionCategory.income]: 'green',
    [TransactionCategory.groceries]: 'indigo',
    [TransactionCategory.subscriptions]: 'blue',
};

export const getColorByCategory = (category: TransactionCategory) => categoryColors[category] || 'grey';
