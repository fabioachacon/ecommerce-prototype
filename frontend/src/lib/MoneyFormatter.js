const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  export default function formatMoney(cents) {
    const dollars = cents / 100;
    return formatter.format(dollars);
  }
  