
export function setItem(key, item) {
    localStorage.setItem(key, item)
}

export function getItem(key) {
    const item = localStorage.getItem(key)
    if (!item) return false
    return item
}

export function removeItem(key) {
    localStorage.removeItem(key)
}