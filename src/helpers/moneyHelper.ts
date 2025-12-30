export default function moneyHelper() {
  const toRubbles = (amount: number) => {
    return `${amount.toLocaleString('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} руб.`;
  };

  return { toRubbles };
}
