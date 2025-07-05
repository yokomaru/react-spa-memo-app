export function setItemsToLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

export function getItemsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
