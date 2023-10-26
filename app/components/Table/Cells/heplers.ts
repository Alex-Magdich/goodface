import { TransactionCategory, TransactionType } from '../types';

export const getFormatedAmount = (value: string | number, type: TransactionType) => {
    const prefix = type === TransactionType.credit ? '- $' : '+ $';

    return prefix + value;
};

export const getColorByCategory = (category: TransactionCategory) => {
    if (category === TransactionCategory.foodAndDining) return 'pink';
    if (category === TransactionCategory.income) return 'green';
    if (category === TransactionCategory.groceries) return 'indigo';
    if (category === TransactionCategory.subscriptions) return 'blue';
    return 'grey';
};
