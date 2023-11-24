const internationalNumber = (number, format = "en-US") => {
  return new Intl.NumberFormat(format).format(number);
};

export default internationalNumber;
