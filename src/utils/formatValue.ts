const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
