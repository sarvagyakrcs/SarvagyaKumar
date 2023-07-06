function readMore(moreTextId , buttonId){
    const moreText = document.getElementById(moreTextId);
    const button = document.getElementById(buttonId);
    if (button.innerHTML === 'Read More') {
        moreText.style.display = 'block';
        button.innerHTML = 'Read Less';
    } 
    else {
        moreText.style.display = 'none';
        button.innerHTML = 'Read More';
    }
}
