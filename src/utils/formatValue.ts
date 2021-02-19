function formatValue(value = 0): string {
  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
}

export default formatValue;
