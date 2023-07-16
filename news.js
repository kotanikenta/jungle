window.addEventListener('DOMContentLoaded', (event) => {
    const noticeLink = document.getElementById('newslink');
    
    noticeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'news.html';
    });
});
