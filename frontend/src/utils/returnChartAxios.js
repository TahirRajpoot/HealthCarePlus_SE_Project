const returnChartAxios = (data) => {
  let result = [];
  for (let date in data) {
    let axios = {
      x: date,
      y: data[date],
    };
    result.push(axios);
  }
  return result;
};

export default returnChartAxios;
