rock = document.getElementById('rock')
paper = document.getElementById('paper')
scissor = document.getElementById('scissor')
validate = document.getElementById('validate')
header = document.getElementById('header')
userScoreHTML = document.getElementById('userScore')
AIScoreHTML = document.getElementById('AIScore')
let userScore = 0
let AIScore = 0
let userPlay = undefined


rock.addEventListener('click', () => {
    rock.classList.add('bg-amber-400')
    paper.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
    userPlay = "rock"
    document.getElementById('userCard').innerHTML = `<img src="./img/${userPlay}.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
    document.getElementById('AICard').innerHTML = `<img src="./img/question.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
})

paper.addEventListener('click', () => {
    paper.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
    userPlay = "paper"
    document.getElementById('userCard').innerHTML = `<img src="./img/${userPlay}.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
    document.getElementById('AICard').innerHTML = `<img src="./img/question.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
})

scissor.addEventListener('click', () => {
    scissor.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    paper.classList.remove('bg-amber-400')
    userPlay = "scissor"
    document.getElementById('userCard').innerHTML = `<img src="./img/${userPlay}.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
    document.getElementById('AICard').innerHTML = `<img src="./img/question.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
})

validate.addEventListener('click', () => {


    paper.classList.remove('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')

    if (userPlay == undefined) {
        header.innerHTML = "<p>Vous n'avez pas choisi</p>"
        document.getElementById('userCard').innerHTML = `<img src="./img/question.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
        document.getElementById('AICard').innerHTML = `<img src="./img/question.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`
    } else {
        // console.log('Joueur : ' + userPlay)
        document.getElementById('userCard').innerHTML = `<img src="./img/${userPlay}.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`

        let IAPlay = Math.floor(Math.random() * 3)
        // let IAPlay = 1

        if (IAPlay == 0) {
            IAPlay = 'rock'
        } else if (IAPlay == 1) {
            IAPlay = 'paper'
        } else if (IAPlay == 2) {
            IAPlay = 'scissor'
        }
        // console.log('IA : ' + IAPlay)
        document.getElementById('AICard').innerHTML = `<img src="./img/${IAPlay}.png" alt="" class="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]">`

        switch (userPlay) {
            case 'rock':
                switch (IAPlay) {
                    case 'rock':
                        header.innerHTML = "<p>Egalité ! Retentez votre chance</p>"
                        break
                    case 'paper':
                        AIScore++
                        AIScoreHTML.innerHTML = AIScore
                        header.innerHTML = "<p class='text-red-500'>Perdu !</p>"
                        break
                    case 'scissor':
                        userScore++
                        userScoreHTML.innerHTML = userScore
                        header.innerHTML = "<p class='text-green-600'>Gagné !</p>"
                        break
                }
                break

            case 'paper':
                switch (IAPlay) {
                    case 'rock':
                        userScore++
                        userScoreHTML.innerHTML = userScore
                        header.innerHTML = "<p class='text-green-600'>Gagné !</p>"
                        break
                    case 'paper':
                        header.innerHTML = "<p>Egalité ! Retentez votre chance</p>"
                        break
                    case 'scissor':
                        AIScore++
                        AIScoreHTML.innerHTML = AIScore
                        header.innerHTML = "<p class='text-red-500'>Perdu !</p>"
                        break
                }
                break

            case 'scissor':
                switch (IAPlay) {
                    case 'rock':
                        AIScore++
                        AIScoreHTML.innerHTML = AIScore
                        header.innerHTML = "<p class='text-red-500'>Perdu !</p>"
                        break
                    case 'paper':
                        userScore++
                        userScoreHTML.innerHTML = userScore
                        header.innerHTML = "<p class='text-green-600'>Gagné !</p>"
                        break
                    case 'scissor':
                        header.innerHTML = "<p>Egalité ! Retentez votre chance</p>"
                        break
                }
                break
        }

        userPlay = undefined
    }

})