'use strict'

// a wall blocks light

function createWall(x1, y1, x2, y2) {
    let color = 'grey'

    return {
        draw: () => {
            const wall = document.createElementNS('http://www.w3.org/2000/svg', 'line')
            const panel = document.getElementById('planepanel')
            wall.setAttribute('x1', x1)
            wall.setAttribute('y1', y1)
            wall.setAttribute('x2', x2)
            wall.setAttribute('y2', y2)

            wall.setAttribute('stroke-width', 2)
            wall.setAttribute('stroke', 'black')
            panel.appendChild(wall)
        }

    }

}