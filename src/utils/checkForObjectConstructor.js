const objectConstructor = {}.constructor;

const checkForObjectConstructor = (item) => {
  if (item.constructor === objectConstructor) {
    return true;
  }

  return false;
};

export default checkForObjectConstructor;
