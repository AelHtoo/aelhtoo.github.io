let parent = document.querySelector('.row');
parent.addEventListener('click',event=>{
    let current = event.target;
    let readmore = current.className.includes('read_more_button');
    if (!readmore) return;
    let currentText = event.target.parentNode.querySelector('.read_more_text');
    currentText.classList.toggle('read_more_text--show');
    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})