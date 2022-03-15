'use strict'

// a bulb emits light

function createBulb(x, y) {
    let radius = 8
    let color = 'goldenrod'
    let r = []

    for (let i = 0; i < 2 * Math.PI; i += 0.1) {
        r.push({
            x1: 7 * Math.cos(i),
            y1: 7 * Math.sin(i),
            x2: 9 * Math.cos(i),
            y2: 9 * Math.sin(i)
        })
    }

    return {

        getX: () => {
            return x
        },
        getY: () => {
            return y
        },
        rays: r,

        update: (x1, y1) => {
            x = x1 - 10
            y = y1 - 10
        },

        draw: () => {
            const bulb = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            const panel = document.getElementById('planepanel')
            bulb.setAttribute('cx', x)
            bulb.setAttribute('cy', y)
            bulb.setAttribute('r', radius)
            bulb.setAttribute('fill', color)
            panel.appendChild(bulb)
        }

    }

}