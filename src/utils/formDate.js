const formatDate = date => {
  const newDate = date * 1000;

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(newDate));
};

export default formatDate;
