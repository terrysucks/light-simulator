'use strict'

// plane handles all objects

function createPlane() {
    let bulbs = []
    let walls = []

    return {

        addBulb: (bulb) => {
            bulbs.push(bulb)
        },

        addWall: (wall) => {
            walls.push(wall)
        },

        draw: () => {
            for (const b of bulbs)
                b.draw()

            for (const w of walls)
                w.draw()
        }
    }
}