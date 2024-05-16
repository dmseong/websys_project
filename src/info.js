window.onload = function(){
let kuzuha = document.getElementById('kuzuha')
let kanae = document.getElementById('kanae')
let kzhinfo = document.getElementById('kuzuha_info')
let kneinfo = document.getElementById('kanae_info')
let kzh_dsp = true
let kne_dsp = true
kuzuha.addEventListener('click', () => {
    if (kne_dsp == false){
        console.log("hi")
        kanae.style.display = 'block'
        kzhinfo.style.display = 'none'
        kne_dsp = true
        return
    }
    kanae.style.display = 'none'
    kzhinfo.style.display = 'block'
    kne_dsp = false
})

kanae.addEventListener('click', () => {
    if (kzh_dsp == false){
        kuzuha.style.display = 'block'
        kneinfo.style.display = 'none'
        kzh_dsp = true
        return
    }
    kuzuha.style.display = 'none'
    kneinfo.style.display = 'block'
    kzh_dsp = false
})
}
