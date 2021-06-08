const hq = 42

function distanceFromHqInBlocks(pickup) {
    if (pickup > hq){
        return (pickup-hq)}
    else if (pickup < hq){
        return (hq-pickup)}
}

function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    return (pickup * 264);

}

function distanceTravelledInFeet () {


}

function calculatesFarePrice () {


}

