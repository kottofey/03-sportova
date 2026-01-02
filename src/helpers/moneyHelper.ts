export default function moneyHelper() {
  const toRubbles = (amount: number, postfix: string = ' руб.', digits: number = 2) => {
    return `${amount.toLocaleString('ru-RU', { maximumFractionDigits: digits, minimumFractionDigits: digits })} ${postfix}`;
  };

  return { toRubbles };
}
