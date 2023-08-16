function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    let output = street + "," + house + "," + society;
    return output;
}