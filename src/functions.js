export const utils = {}

utils.getCurrencies = function getLanguages(object) {
    let array = [];
    for (let keys in object) {
      let key = object[keys];
      array.push(key);
    }

    return array.toString();
  }

  utils.getLanguages =function getCurrencies(object) {
    return object[Object.keys(object)[0]].name;
  }



