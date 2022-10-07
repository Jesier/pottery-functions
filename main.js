const buyClay = () => {
    const clayObject = { }
        return clayObject
}

const daClay = buyClay()  //needed to make it global and put it in each fumction

const makePottery = (clayObject) => {
    clayObject.shape = 'Bowl'
        return clayObject
}

const getShape = makePottery(daClay)

const bisqueFire = (clayObject) => {
    clayObject.readyForGlaze = true
        return clayObject
}

const inTheFire = bisqueFire(daClay) //varible isnt needed

const glazePottery = (clayObject) => {
    if (clayObject.readyForGlaze === true) {
        clayObject.glazing = 'Midnight Blue'
            return clayObject
    }   else { 
            console.log('Make sure you bisque fire the pottery before you glaze it.')
        }
}

const glazingBlue = glazePottery(daClay)  //var not needed

const finalFiring = (clayObject, temperature) => {
    if (temperature > 1200){
    clayObject.cracked = true
    } else {
        temperature < 1200
        clayObject.cracked = false
    }
            return clayObject
}

const firedPottery1400 = finalFiring(daClay, 1400)
//const firedPottery1200 = finalFiring(daClay, 1200)
console.log(daClay)

