document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 100, // Trigger animations 100px before the element is visible
        duration: 1000, // Animation duration (1 second)
        easing: 'ease-in-out', // Smooth animation effect
        delay: 200, // Delays between animations
        once: true, // Only animate once
    });
});
    document.addEventListener('DOMContentLoaded', () => {
        // Array mapping JavaScript days (0-6) to Hebrew day names in your schedule
        const daysMap = ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'];

        // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const currentDayIndex = new Date().getDay();
        const currentDayName = daysMap[currentDayIndex];

        // Select all day titles in the schedule
        const dayColumns = document.querySelectorAll('.day-column');

        dayColumns.forEach((column) => {
            const dayTitle = column.querySelector('.day-title').textContent.trim();

            // Compare the current day name with the column's title
            if (dayTitle === currentDayName) {
                column.classList.add('highlight'); // Add highlight class
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links with hashes
    
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default anchor behavior
    
                const targetId = this.getAttribute("href").substring(1); // Get target element's ID
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop, // Scroll to the element's top offset
                        behavior: "smooth" // Smooth scroll behavior
                    });
                }
            });
        });
    });
    
