'use strict'

// god class, handles the whole page

document.addEventListener('DOMContentLoaded', function () {

    const plane = createPlane()

    const b = createBulb(380, 240)
    plane.addBulb(b)

    const walls = []
    walls.push(createWall(444, 215, 444, 240))
    walls.push(createWall(340,400,444,240))
    walls.push(createWall(123,312,122,212))
    walls.push(createWall(422,22,232,153))
    walls.push(createWall(622,122,552,253))
    walls.push(createWall(662,122,532,353))
    walls.push(createWall(322,322,372,353))
    
    for (const w of walls)
        plane.addWall(w)

    const panel = document.getElementById('planepanel')

    plane.draw()

})