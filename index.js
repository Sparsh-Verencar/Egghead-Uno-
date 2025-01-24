function createCard(title, channelName, views, monthsOld, duration, thumbnail){
    if(views >= 1e9){
        views = `${views/1e9}B`
    }
    else if(views >= 1e6){
        views = `${views/1e6}M`
    }
    else if(views >= 1e3){
        views = `${views/1e3}k`
    }
    document.querySelector(".duration").innerHTML = `${duration}`
    document.querySelector(".img1").src = `${thumbnail}`
    document.querySelector(".upldTime").innerHTML = `${monthsOld} months old`
    document.querySelector(".views").innerHTML = `${views} views .`
    document.querySelector(".cname").innerHTML = `${channelName} .`
    document.querySelector(".title").innerHTML = `${title}`
  }
  createCard("Introduction to backend | Sigma Web Dev #63", "CodeWithHarry", 560000, 7, "31:22", "Egghead-Uno-/hairCutting.jpeg" )