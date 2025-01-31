// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown-content, .nested-dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

function toggleDropdown(event, id) {
    event.stopPropagation();
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active');
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}