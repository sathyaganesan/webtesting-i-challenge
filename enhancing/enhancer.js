module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const modifiedItem = {};
  if (item.enhancement < 20) {
    modifiedItem.enhancement = item.enhancement + 1
  } else {
    modifiedItem.enhancement = item.enhancement
  }
  return modifiedItem;
}

function fail(item) {
  const modifiedItem = {};
  if (item.enhancement < 15) {
    modifiedItem.durability = item.durability - 5
    modifiedItem.enhancement = item.enhancement;
  } else if (item.enhancement >= 15) {
    modifiedItem.durability = item.durability - 10 
  } else if (item.enhancement > 16) {
    modifiedItem.enhancement = item.enhancement - 1
  }
  return modifiedItem;
}

function repair(item) {
   return { ...item };
}

function get(item) {
  return { ...item };
}
