// Code your solution in this file!

const distanceFromHqInBlocks=(pickup)=>{
    return Math.abs( pickup-42)
}


const distanceFromHqInFeet=(pickup)=>{
 const blocks=distanceFromHqInBlocks(pickup)

return blocks*264
}

const distanceTravelledInFeet=(start, destination)=> {
  let distanceTravelled= Math.abs(destination-start)*264
 return distanceTravelled
  }

const calculatesFarePrice=(start, destination)=>{
    let feet=distanceTravelledInFeet(start,destination)
    if(feet<=400){
        return 0
    }
    else if (feet<=2000){
        return (feet-400)*0.02
    }
    else if (feet <= 2500) {
        return 25
    } 
    else {
        return "cannot travel that far"
      }
}
 