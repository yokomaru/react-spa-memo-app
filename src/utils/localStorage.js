export function setItemsToLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getItemsFromLocalStorage(key, array) {
  return localStorage.setItem(key, JSON.stringify(array));
}
