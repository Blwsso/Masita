document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continue-btn');
    const passwordSection = document.getElementById('password-section');
    const submitBtn = document.getElementById('submit-btn');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const errorImage = document.getElementById('error-image');

    // Define la fecha de cumpleaños en formato YYYY-MM-DD
    const correctDate = '2003-09-12'; // La fecha correcta

    continueBtn.addEventListener('click', function() {
        document.getElementById('welcome-section').style.display = 'none';
        passwordSection.style.display = 'block';
    });

    submitBtn.addEventListener('click', function() {
        const inputDate = document.getElementById('birthday-input').value;

        if (inputDate === correctDate) {
            passwordSection.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
            errorImage.style.display = 'block'; // Muestra la imagen y el mensaje de error
        }
    });

    // Botones en main-content
    const likeBtn = document.getElementById('like-btn');
    const loveBtn = document.getElementById('love-btn');
    const beautifulBtn = document.getElementById('beautiful-btn');
    const likeContent = document.getElementById('like-content');
    const loveContent = document.getElementById('love-content');
    const beautifulContent = document.getElementById('beautiful-content');

    likeBtn.addEventListener('click', function() {
        hideAllContents();
        likeContent.style.display = 'block';
    });

    loveBtn.addEventListener('click', function() {
        hideAllContents();
        loveContent.style.display = 'block';
    });

    beautifulBtn.addEventListener('click', function() {
        hideAllContents();
        beautifulContent.style.display = 'block';
    });

    function hideAllContents() {
        likeContent.style.display = 'none';
        loveContent.style.display = 'none';
        beautifulContent.style.display = 'none';
    }
});
