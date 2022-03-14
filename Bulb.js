'use strict'

// a bulb emits light

function createBulb(a, b) {
    let radius = 3
    let color = 'goldenrod'
    let r = []
    

    r.push({
        x1: a,
        y1: b,
        x2: a + 1,
        y2: b + 0
    })

    r.push({
        x1: a,
        y1: b,
        x2: a - 2,
        y2: b + 10
    })

    r.push({
        x1: a,
        y1: b,
        x2: a + 20,
        y2: b + 6
    })



    return {
        
        x: a,
        y: b,

        rays: r,

        draw: () => {
            const bulb = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            const panel = document.getElementById('planepanel')
            bulb.setAttribute('cx', a)
            bulb.setAttribute('cy', b)
            bulb.setAttribute('r', radius)
            bulb.setAttribute('fill', color)
            panel.appendChild(bulb)
        }

    }

}