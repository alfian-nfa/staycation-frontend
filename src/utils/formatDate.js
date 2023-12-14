const formatDate = (date) => {
  const inputDate = new Date(date);

  if (isNaN(inputDate)) {
    // Handle invalid date value
    return "";
  }

  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(inputDate);

  return `${da} ${mo}`;
};

export default formatDate;
