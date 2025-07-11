export function setItemsToLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

export function getItemsFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error(error.message);
      return [];
    } else {
      throw error;
    }
  }
}
