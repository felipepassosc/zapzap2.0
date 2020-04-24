
const interval = setInterval(() => {
    const header = document.querySelector('._3auIg')

    if (header) {
    //     console.log(header)
        clearInterval(interval)

      const button = document.createElement("button")
      const button2x = document.createElement("button")
      
      button.innerHTML = '1x'
      button2x.innerHTML = '1.5x'
      button.classList.add('onex')
      button2x.classList.add('twox')
      

        button.addEventListener('click', () => {
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio) =>{
                audio.playbackRate = 1;
                console.log('1.5 XXXXXXX')
            })
        })

        button2x.addEventListener('click', () => {
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio) =>{
                audio.playbackRate = 1.5;
                console.log('2 XXXXXXX')
            })
        })

      header.appendChild(button)
      header.appendChild(button2x)

    // const modal = document.createElement('div')
    // modal.setAttribute('class', 'modal-velocidade')
    // header.appendChild(modal)
    }
},1000)


