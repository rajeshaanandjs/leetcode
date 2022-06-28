var store = (() => {
  const _store = ["Apple", "Orange", "Banana"];
  const _print = function (data) {
    console.log("inventory:", data.toString());
  };
  const _addOne = function (item) {
    _store.push(item);
  };
  return {
    getInventory: () => _print(_store),
    addInventory: (item) => _addOne(item),
  };
})();
store.addInventory("Cherry");
store.getInventory();
