export interface IGroup {
    destination : string,
    schedule : BigInteger,
    users : [{
        name : string,
        address : string
    }]
}