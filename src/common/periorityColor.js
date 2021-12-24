const selectedPriorityColor = (pValue) => {
  let colors = [{ color: "#fff", contentColor: "#fff" }];
  switch (pValue) {
    case 0:
      colors = [{ color: "#fff", contentColor: "#fff" }];
      break;
    case 1:
      colors = [{ color: "#ff3333", contentColor: "#FFEEEE" }];
      break;
    case 2:
      colors = [{ color: "#ff7700", contentColor: "#FFF2E6" }];
      break;
    case -1:
      colors = [{ color: "#3377ff", contentColor: "#EBF1FF" }];
      break;
    default:
      colors = [{ color: "#fff", contentColor: "#fff" }];
      break;
  }
  return colors;
};

export default selectedPriorityColor;
