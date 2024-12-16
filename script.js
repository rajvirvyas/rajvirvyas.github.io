document.querySelectorAll('.current-work-section .card').forEach(card => {
    const percent = parseInt(card.getAttribute('progress'), 10);
    let color;
    let backgroundImg;
    const progressBar = card.querySelector('.progress');
    const cardNumber = parseInt(card.getAttribute('number'), 10);

    if (percent <= 25) {
        color = 'var(--progress-yellow)';
    } else if (percent <= 50) {
        color = 'var(--progress-orange)';
    } else if (percent <= 75) {
        color = 'var(--progress-blue)';
    } else {
        color = 'var(--progress-green)';
    }

    if (cardNumber == 1) {
        backgroundImg = "images/stego.png";
    } else if (cardNumber == 2) {
        backgroundImg = "images/aws.png";
    } else if (cardNumber== 3) {
        backgroundImg = "images/f1.png"
    }
    else {
        backgroundImg = "images/project3.jpg";
    }

    card.style.boxShadow = `0 0 20px ${color}`;
    progressBar.style.background = color;
    card.style.backgroundImage = `url(${backgroundImg})`;
    

    // Insert the background image as a regular image element when the card is expanded
    card.addEventListener('click', () => {
        // Close all other cards by removing the 'expanded' class
        document.querySelectorAll('.current-work-section .card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                // Remove image when collapsing
                const imgElement = otherCard.querySelector('img');
                if (imgElement) {
                    imgElement.remove();
                }
            }
        });

        // Toggle the 'expanded' class for the clicked card
        card.classList.toggle('expanded');
        
        // Add the image when expanded
        if (card.classList.contains('expanded') && !card.querySelector('img')) {
            const img = document.createElement('img');
            img.src = backgroundImg;
            card.appendChild(img);
        } else {
            // Remove the image when collapsed
            const imgElement = card.querySelector('img');
            if (imgElement) {
                imgElement.remove();
            }
        }
    });
});
