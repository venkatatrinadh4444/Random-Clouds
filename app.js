// Write JavaScript code here

let containerEl = document.getElementById('container')

let cloudElement = `<div class="cloud">
<div class="cloudBubble1">                   
</div>
<div class="cloudBubble2">                   
</div>
</div>`

containerEl.innerHTML = cloudElement.repeat(6)

let cloudElements = document.querySelectorAll('.cloud')

function animationClouds(clouds) {
    let cloud1 = clouds;
    let randomNum = Math.ceil(Math.random() * 100)
    cloud1.style.top = randomNum + '%'
    cloud1.style.left = randomNum + '%'
    let randomSize = Math.random()*0.7+0.3
    cloud1.style.transform="scale("+randomSize+");"

    

    let randomDelay = Math.ceil(Math.random() * 13)
    cloud1.style.transform = 'scale(0.5)'
    cloud1.style.transition = 'all ease ' + randomDelay + 's';

    let repeat = 0
    let intervalFun = setInterval(() => {
        repeat += 1;
        if (repeat === 1)
            cloud1.style.left = '100%'
        else if (repeat === 2)
            cloud1.style.left = '-200%'
        else if (repeat === 3) {
            cloud1.style.left = '100%'
            repeat = 0
        }
    }, randomDelay * 1000)

    setTimeout(() => {
        cloud1.style.left = '-200px'
    }, 100)
}
for (let eachCloud of cloudElements) {
    animationClouds(eachCloud)
}


