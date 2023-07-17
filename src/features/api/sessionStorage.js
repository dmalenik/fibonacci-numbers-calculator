const settleItem = (key, value) => sessionStorage.setItem(key, value)

const getItem = (key) => sessionStorage.getItem(key)

export { settleItem, getItem }
