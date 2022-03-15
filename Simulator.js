'use strict'

// god class, handles the whole page

document.addEventListener('DOMContentLoaded', function () {

    const plane = createPlane()

    let b = createBulb(380, 240)
    plane.addBulb(b)

    const walls = []

    // perimeter walls
    walls.push(createWall(0, 0, 1000, 0))
    walls.push(createWall(1000, 0, 1000, 500))
    walls.push(createWall(1000, 500, 0, 500))
    walls.push(createWall(0, 500, 0, 0))

    // other walls
    walls.push(createWall(444, 215, 444, 240))
    walls.push(createWall(340, 400, 444, 240))
    walls.push(createWall(123, 312, 122, 212))
    walls.push(createWall(422, 22, 232, 153))
    walls.push(createWall(622, 122, 552, 253))
    walls.push(createWall(662, 122, 532, 353))
    walls.push(createWall(322, 322, 372, 353))

    for (const w of walls)
        plane.addWall(w)

    const panel = document.getElementById('planepanel')

    plane.draw()

    panel.addEventListener('mousemove', event => {
        b.update(event.clientX, event.clientY)
        panel.innerHTML = ''
        plane.draw()
    })
})