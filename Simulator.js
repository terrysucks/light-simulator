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
    walls.push(createWall(322, 322, 372, 353))
    
    // tube facing mirror
    walls.push(createWall(652, 352, 502, 453))
    walls.push(createWall(652, 382, 502, 503))

    // polygons
    walls.push(createWall(50, 50, 50, 150))
    walls.push(createWall(50, 150, 150, 150))
    walls.push(createWall(150, 150, 50, 50))

    // mirrors
    walls.push(createMirror(730, 60, 730, 450, 1))
    walls.push(createMirror(830, 60, 830, 450, 2))

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