export const setLogin = () => {
  window.localStorage.setItem("stockekey","keyvalue")
}

export const removeLogin = () => {
  window.localStorage.removeItem("stockekey")
}

export const isLogin = () => {
  return !!window.localStorage.getItem('stockekey')
}

