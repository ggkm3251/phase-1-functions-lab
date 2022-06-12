// Code your solution in this file!
function distanceFromHqInBlocks(hq) {
    let distance = 42;
    if (hq > distance) {
        return (hq - distance);
    } else {
        return (distance - hq);
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet (hq, distance) {
    if (hq < distance) {
        return (distance - hq) * 264
    } else {
        return (hq - distance) * 264
    }
    }

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination)   
    if (distance <= 400) {
        return 0.0
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
} 


/*function distanceTravelledInFeet (start, destination) {
if (start < destination) {
    return (destination - start) * 264
} else {
    return (start - destination) * 264
}
}

function calculatesFarePrice (start, destination) {
const distance = distanceTravelledInFeet(start, destination)

if (distance <= 400) {
    return 0.0
} else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400)
} else if (distance > 2000 && distance < 2500) {
    return 25
} else {
    return 'cannot travel that far'
}
}*/