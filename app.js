const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        const suffix = input.getAttribute('data-sizing') || '';
        console.log(input.value, input.name);
        document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
    });
});
