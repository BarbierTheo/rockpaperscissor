rock = document.getElementById('rock')
paper = document.getElementById('paper')
scissor = document.getElementById('scissor')

rock.addEventListener('click', () => {
    rock.classList.add('bg-amber-400')
    paper.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
})

paper.addEventListener('click', () => {
    paper.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    scissor.classList.remove('bg-amber-400')
})

scissor.addEventListener('click', () => {
    scissor.classList.add('bg-amber-400')
    rock.classList.remove('bg-amber-400')
    paper.classList.remove('bg-amber-400')
})