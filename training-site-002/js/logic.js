//Открыть модальное окно
document.getElementById("mod-but-002").addEventListener("click", function(){
    document.getElementById("id-mod-1").classList.add("open")
})

//Закрыть модальное окно при нажатии на Esc
window.addEventListener("keydown", (e) =>{
    if (e.key === "Escape") {
        document.getElementById("id-mod-1").classList.remove("open")
    }
})

//Закрыть модальное окно при клике вне его
document.querySelector("#id-mod-1 .modal-background").addEventListener("click",event => {
    event._isClickWithInModal = true;
})
document.getElementById("id-mod-1").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
})