const formatNumberWithSpaces = (numberString: string) => {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default formatNumberWithSpaces;
