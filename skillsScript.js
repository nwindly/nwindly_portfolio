document.addEventListener('DOMContentLoaded', (event) => {
    const skillBoxes = document.querySelectorAll('.skill-box');

    skillBoxes.forEach(box => {
        box.addEventListener('dragstart', dragStart);
        box.addEventListener('dragend', dragEnd);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    }

    function dragEnd(e) {
        e.target.style.display = 'block';
        e.target.style.left = `${e.pageX - e.target.offsetWidth / 2}px`;
        e.target.style.top = `${e.pageY - e.target.offsetHeight / 2}px`;
    }
});
