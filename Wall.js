'use strict'

// a wall blocks light

function createWall(a, b, c, d) {
    let color = 'black'

    return {

        x1: a,
        y1: b,
        x2: c,
        y2: d,

        draw: () => {
            const wall = document.createElementNS('http://www.w3.org/2000/svg', 'line')
            const panel = document.getElementById('planepanel')
            wall.setAttribute('x1', a)
            wall.setAttribute('y1', b)
            wall.setAttribute('x2', c)
            wall.setAttribute('y2', d)

            wall.setAttribute('stroke-width', 2)
            wall.setAttribute('stroke', color)
            panel.appendChild(wall)
        }

    }

}