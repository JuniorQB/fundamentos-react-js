const formatData = (value: Date): string => {
  function appendLeadingZeroes(n: number): string {
    if (n <= 9) {
      return `0${n}`;
    }
    return `n''`;
  }

  const currentDatetime = new Date(value);

  const formattedDate = `${appendLeadingZeroes(
    currentDatetime.getDate(),
  )}/${appendLeadingZeroes(
    currentDatetime.getMonth() + 1,
  )}/${currentDatetime.getFullYear()}`;

  return formattedDate;
};

export default formatData;
