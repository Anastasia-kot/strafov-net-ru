export const findByWord = (searchWord: string, array: Object[]) => {
  let callback = (object: Object) => {
    let result = false;
    for (let key in object) {
      if (result) {
        break;
      }
      if (typeof object[key] !== "object") {
        // if (typeof object[key] === "string" || typeof object[key] === "number") {
        if (String(object[key]).includes(searchWord)) {
          result = true;
        }
      } else {
        if (callback(object[key])) {
          result = true;
        }
      }
    }
    return result;
  };

  return array.filter(callback);
};
