function createCard(serviceName, businessName, price, thumbnail){
    // if(views >= 1e9){
    //     views = `${views/1e9}B`
    // }
    // else if(views >= 1e6){
    //     views = `${views/1e6}M`
    // }
    // else if(views >= 1e3){
    //     views = `${views/1e3}k`
    // }
    document.querySelector(".price").innerHTML = `${price}`
    document.querySelector(".img1").src = `${thumbnail}`
    // document.querySelector(".upldTime").innerHTML = `${monthsOld} months old`
    // document.querySelector(".views").innerHTML = `${views} views .`
    document.querySelector(".businessName").innerHTML = `${businessName}`
    document.querySelector(".serviceName").innerHTML = `${serviceName}`
  }
  createCard("Stylish hair cutting", "babar barber", "5$", "Egghead-Uno-/images/hairCutting.jpeg" )
  createCard("Stylish hair cutting", "babar barber", "5$", "Egghead-Uno-/images/hairCutting.jpeg" )
  createCard("Stylish hair cutting", "babar barber", "5$", "Egghead-Uno-/images/hairCutting.jpeg" )
  createCard("Stylish hair cutting", "babar barber", "5$", "Egghead-Uno-/images/hairCutting.jpeg" )
  createCard("Stylish hair cutting", "babar barber", "5$", "Egghead-Uno-/images/hairCutting.jpeg" )