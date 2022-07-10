function handleDate() {
  const dateNew = new Date();
  const day = dateNew.getDate();
  const month = dateNew.getMonth() + 1;
  const year = dateNew.getFullYear();
  const minutes = dateNew.getMinutes();
  const hours = dateNew.getHours();
  const seconds = dateNew.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default handleDate;
