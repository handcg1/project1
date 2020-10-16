const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    window.open(`mailto:johnrhand4@gmail.com?subject=${subject}&body=${message}`);
}); 