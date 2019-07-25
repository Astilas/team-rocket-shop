function splitNumbers(number) {
  return new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(number);
}

export default splitNumbers;
