AOS.init()
var tempMusic = ''
music = document.querySelector('.music')
if(tempMusic) {
    music.src = tempMusic
}

function mulai() {
    window.scrollTo(0, 0)
    var soundDoor = document.querySelector('.sound-door')
    soundDoor.play()

    var doorSection = $('#door-section')
    var doors = document.querySelectorAll('.door')
    doors.forEach(function(door, index) {
        var direction = (index === 0) ? -1 : 1
        door.style.transform = 'rotateY(' + (70 * direction) + 'deg)'
    })

    setTimeout(function () {
        music.play()
        doorSection.css('transform', 'scale(6)')
    }, 600)

    setTimeout(function() {
        doorSection.css('opacity', 0)
        $('body').removeClass('overflow-hidden')
        $('body').addClass('transition')
        doorSection.css('display', 'none')
    }, 2000)
}



var isPlaying = true
function toggleMusic(event) {
    event.preventDefault()
    const musicButton = document.getElementById('music-button')
    if(isPlaying) {
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>'
        musicButton.style.transform = 'translateY(0)'
        music.pause()
    } else {
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
        musicButton.classList.add('rotate')
        music.play()
    }
    isPlaying = !isPlaying
}


window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    const contact = document.getElementById('contact');
    
    if (window.scrollY > 50) {
        navbar.classList.add('visible');
        contact.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
        contact.classList.remove('visible');

    }

    
};

