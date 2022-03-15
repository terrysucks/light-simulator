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
            // draw rays (this takes effort)
            // for each bulb, each ray, and check each wall
            for (const bulb of bulbs) {
                for (const ray of bulb.rays) {

                    let p = {
                        x: ray.x1 + bulb.getX(),
                        y: ray.y1 + bulb.getY(),
                        T: 999999 // arbitrary
                    }

                    // get closest intersection point
                    let r = {
                        x1: ray.x1 + bulb.getX(),
                        y1: ray.y1 + bulb.getY(),
                        x2: ray.x2 + bulb.getX(),
                        y2: ray.y2 + bulb.getY()
                    }
                    for (const wall of walls) {
                        let p1 = getIntersection(r, wall)
                        if (p1)
                            if (p1.T < p.T)
                                p = p1
                    }

                    // draw a ray
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
                    const panel = document.getElementById('planepanel')
                    line.setAttribute('x1', ray.x1 + bulb.getX())
                    line.setAttribute('y1', ray.y1 + bulb.getY())
                    line.setAttribute('x2', p.x)
                    line.setAttribute('y2', p.y)

                    line.setAttribute('stroke-width', 1)
                    line.setAttribute('stroke', 'red')
                    panel.appendChild(line)
                }
            }

            // draw bulbs
            for (const bulb of bulbs)
                bulb.draw()

            // draw walls
            for (const wall of walls)
                wall.draw()


        }
    }
}