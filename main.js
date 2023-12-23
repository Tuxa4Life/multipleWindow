let windowId = Math.random().toString(36).slice(2, 9);

let data = {
    width: null,
    height: null,

    x: null,
    y: null,
}

let setPos = () => {
    data.x = this.window.screenX || this.window.screenLeft
    data.y = this.window.screenY || this.window.screenTop
}

let setSize = () => {
    data.width = this.window.outerWidth
    data.height = this.window.outerHeight
}

let setDotPosition = () => {
    localStorage.setItem(windowId, JSON.stringify({
        x: data.x + data.width / 2,
        y: data.y + data.height / 2
    }))
}

let displayDots = () => {
    let keys = Object.keys(localStorage)
    keys.forEach(e => {
        let _data = JSON.parse(localStorage.getItem(e))
        let dot = document.createElement('div')
        document.body.appendChild(dot)

        dot.style.top = `${_data.y - data.y - 60}px`
        dot.style.left = `${_data.x - data.x- 50}px`
        setTimeout(() => dot.remove(), 5)
    })
}

setInterval(() => {
    setPos()
    setSize()
    displayDots()
    setDotPosition()
}, 5)

setInterval(() => localStorage.clear(), 1500)