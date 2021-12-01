const getCurrentDateTime = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  var hour = String(today.getHours()).padStart(2, "0");
  var min = String(today.getMinutes()).padStart(2, "0");
  var sec = String(today.getSeconds()).padStart(2, "0");
  var milisec = String(today.getMilliseconds()).padStart(3, "0");

  return (today =
    yyyy +
    "/" +
    mm +
    "/" +
    dd +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec +
    ":" +
    milisec);
};

export default getCurrentDateTime;
