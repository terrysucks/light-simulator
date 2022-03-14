'use strict'

// a bulb emits light

function createBulb(x, y) {
    let radius = 10
    let color = 'goldenrod'

    return {
        draw: () => {
            const bulb = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            const panel = document.getElementById('planepanel')
            bulb.setAttribute('cx', x + radius / 2)
            bulb.setAttribute('cy', y + radius / 2)
            bulb.setAttribute('r', radius)
            bulb.setAttribute('fill', color)
            panel.appendChild(bulb)
        }

    }

}