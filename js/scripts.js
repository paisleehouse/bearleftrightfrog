// Function to search posts by title or excerpt
function searchPosts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase();
        const excerpt = post.getAttribute('data-excerpt').toLowerCase();

        if (title.includes(searchQuery) || excerpt.includes(searchQuery)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Function to show/hide the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the scroll-to-top button when the user scrolls down
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

// Function to toggle the navigation menu on mobile devices
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
