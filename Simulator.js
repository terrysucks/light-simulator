'use strict'

// god class, handles the whole page

document.addEventListener('DOMContentLoaded', function () {

    const plane = createPlane()

    const b = createBulb(380, 240)
    plane.addBulb(b)

    const walls = []
    walls.push(createWall(221,215,135,221))
    walls.push(createWall(232,212,322,123))
    walls.push(createWall(123,312,122,212))
    walls.push(createWall(422,22,232,153))
    walls.push(createWall(622,122,552,253))
    walls.push(createWall(422,222,432,243))
    walls.push(createWall(662,122,532,353))
    walls.push(createWall(322,322,372,353))
    walls.push(createWall(422,422,372,453))
    walls.push(createWall(322,422,372,453))
    walls.push(createWall(422,323,345,453))
    for(const w of walls)
        plane.addWall(w)

    const panel = document.getElementById('planepanel')

    plane.draw()


})