function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation >= 42){
    return pickupLocation - 42;
    } else return (42 - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    if (startBlock >= destinationBlock){
        return (startBlock - destinationBlock) * 264;
    } else return (destinationBlock - startBlock) * 264; 
}

function calculatesFarePrice(startBlock, destinationBlock){
    if (distanceTravelledInFeet(startBlock, destinationBlock) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(startBlock, destinationBlock) > 400 && distanceTravelledInFeet(startBlock, destinationBlock) < 2000){
        return ((distanceTravelledInFeet(startBlock, destinationBlock) - 400) * .02);
    } else if (distanceTravelledInFeet(startBlock, destinationBlock) > 2000 && distanceTravelledInFeet(startBlock, destinationBlock) < 2500){
        return 25;
    } else if (distanceTravelledInFeet(startBlock, destinationBlock) > 2500){
        return 'cannot travel that far';
    }
}