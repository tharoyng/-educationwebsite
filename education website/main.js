//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

//show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

    //changeicon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-angle-up') {
        icon.className = "uil uil-angle-down"
    } else {
        icon.className = "uil uil-angle-up"
    }
    })
})
