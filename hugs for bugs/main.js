const iconLinks = document.querySelectorAll('.box-left a, .box-right a');

iconLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const description = link.getAttribute('data-description');
        if (description) {
            const iconDescription = document.createElement('span');
            iconDescription.className = 'icon-description';
            iconDescription.textContent = description;
            link.appendChild(iconDescription);
        }
    });

    link.addEventListener('mouseout', () => {
        const iconDescription = link.querySelector('.icon-description');
        if (iconDescription) {
            iconDescription.remove();
        }
    });
});

