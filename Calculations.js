'use strict'

function getIntersection(ray, segment) {

    // ray
    let rpx = ray.x1;
    let rpy = ray.y1;
    let rdx = ray.x2 - ray.x1;
    let rdy = ray.y2 - ray.y1;

    // segment
    let spx = segment.x1;
    let spy = segment.y1;
    let sdx = segment.x2 - segment.x1;
    let sdy = segment.y2 - segment.y1;

    // if parallel, return null
    if (rdx - rpx == 0 && sdx - spx == 0)
        return null;
    else if (rdx - rpx == 0 || sdx - spx == 0) {
        // they intersect, continue
    }
    else {
        let rSlope = (rdy - rpy) / (rdx - rpx)
        let sSlope = (sdy - spy) / (sdx - spx)
        let e = 0.00000001
        // slopes within e range of each other
        if (rSlope - e < sSlope && sSlope < rSlope + e)
            return null
    }

    // get T1 from T2
    let T2 = (rdx * (spy - rpy) + rdy * (rpx - spx)) / (rdy * sdx - rdx * sdy);
    let T1 = (spx + sdx * T2 - rpx) / rdx;

    if (T1 < 0)
        return null;
    if (T2 < 0 || 1 < T2)
        return null;

    return {
        x: rpx + rdx * T1,
        y: rpy + rdy * T1,
        T: T1
    };

}

function dotProduct(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2){
    let a = normalize(ax1, ay1, ax2, ay2)
    let b = normalize(bx1, by1, bx2, by2)
    return (a.x2*b.x2 + a.y2*b.y2)
}

function normalize(x1, y1, x2, y2){
    let x = x2 - x1
    let y = y2 - y1
    let magnitude = Math.sqrt(x*x + y*y)
    x /= magnitude
    y /= magnitude
    return {
        x1: 0,
        y1: 0,
        x2: x,
        y2: y
    }
}