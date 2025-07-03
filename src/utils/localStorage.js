export function setItemsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function getItemsToLocalStorage(key, array) {
  return localStorage.setItem(key, JSON.stringify(array));
}