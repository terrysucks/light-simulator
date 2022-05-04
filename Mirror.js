'use strict'

function createMirror(a, b, c, d, i) {
    let wall = createWall(a, b, c, d)
    let Ocolor = 'silver'
    let Icolor = 'teal'

    wall.r = []
    wall.reflector = true
    wall.id = i
    wall.draw = () => {
        const wallOuter = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        const wallInner = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        const panel = document.getElementById('planepanel')

        wallOuter.setAttribute('x1', a - 1)
        wallOuter.setAttribute('y1', b - 1)
        wallOuter.setAttribute('x2', c + 1)
        wallOuter.setAttribute('y2', d + 1)
        wallOuter.setAttribute('stroke-width', 7)
        wallOuter.setAttribute('stroke', Ocolor)
        panel.appendChild(wallOuter)

        wallInner.setAttribute('x1', a)
        wallInner.setAttribute('y1', b)
        wallInner.setAttribute('x2', c)
        wallInner.setAttribute('y2', d)
        wallInner.setAttribute('stroke-width', 3)
        wallInner.setAttribute('stroke', Icolor)
        panel.appendChild(wallInner)
    }

    // draw a ray bouncing off of the mirror
    wall.drawRay = (x1, y1, x2, y2, walls) => {
        // draw another ray
        const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        const panel = document.getElementById('planepanel')

        let p = {
            x: x2,
            y: y2,
            T: 999999 // arbitrary
        }
        let w = {}

        // get closest intersection point
        // s = d−2(d⋅n)n
        let de = {
            x: x2 - x1,
            y: y2 - y1
        }
        let dx = c - a
        let dy = d - b
        let magnitude = Math.sqrt(dy * dy + dx * dx)
        let n = {
            x: -(dy/magnitude),
            y: dx/magnitude
        }
        let s = {
            x: de.x - 2*(de.x*n.x + de.y*n.y)*n.x,
            y: de.y - 2*(de.x*n.x + de.y*n.y)*n.y
        }
        let r = {
            x1: x2,
            y1: y2,
            x2: x2 + s.x,
            y2: y2 + s.y
        }
        for (const wall of walls) {
            if ('id' in wall)
                if (wall.id == i)    // dont intersect with self
                    continue

            let p1 = getIntersection(r, wall)
            if (p1)
                if (p1.T < p.T) {
                    p = p1
                    w = wall
                }
        }

        // if incoming and outgoing rays are parallel, no need to draw
        // for normalized vectors, dot product = -1 means perfect reflection
        let dp = dotProduct(x1, y1, x2, y2, x2, y2, p.x, p.y)
        console.log(dp)
        let e = 0.000000001
        if(-1 - e < dp
        && dp < -1 + e)
            return;

        line1.setAttribute('x1', x2)
        line1.setAttribute('y1', y2)
        line1.setAttribute('x2', p.x)
        line1.setAttribute('y2', p.y)
        line1.setAttribute('stroke-width', 1)
        line1.setAttribute('stroke', 'yellow')

        panel.appendChild(line1)

        if(w.reflector)
            w.drawRay(x2, y2, p.x, p.y, walls)
    }

    return wall
}