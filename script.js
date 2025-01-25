rock = document.getElementById('rock')
paper = document.getElementById('paper')
scissor = document.getElementById('scissor')
validate = document.getElementById('validate')
header = document.getElementById('header')
let userPlay = undefined


rock.addEventListener('click', () => {
    rock.classList.add('bg-amber-400')
    paper.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
    userPlay = "rock"
})

paper.addEventListener('click', () => {
    paper.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
    userPlay = "paper"
})

scissor.addEventListener('click', () => {
    scissor.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    paper.classList.remove('bg-amber-400')
    userPlay = "scissor"
})

validate.addEventListener('click', () => {


    paper.classList.remove('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')

    if (userPlay == undefined) {
        header.innerHTML = "<p>Veuillez sélectionner votre choix</p>"
    } else {
        console.log('Joueur : ' + userPlay)
        document.getElementById('userCard').innerHTML = `<img src="./img/${userPlay}.png" alt="" class="w-[10rem] h-[10rem]">`

        let IAPlay = Math.floor(Math.random() * 3)
        if (IAPlay == 0) {
            IAPlay = 'rock'
        } else if (IAPlay == 1) {
            IAPlay = 'paper'
        } else if (IAPlay == 2) {
            IAPlay = 'scissor'
        }
        console.log('IA : ' + IAPlay)

        document.getElementById('AICard').innerHTML = `<img src="./img/${IAPlay}.png" alt="" class="w-[10rem] h-[10rem]">`
        userPlay = undefined
    }



})