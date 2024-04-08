const toCutString = (value, start, end) => {
  return value.slice(start, end);
};

const onToggle = (target) => {
  if (target.classList.contains("active")) {
    target.classList.remove("active");
  } else {
    target.classList.add("active");
  }
};
