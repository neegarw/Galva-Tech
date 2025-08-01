document.addEventListener('DOMContentLoaded', function () {
    // Sidebar açılıb-bağlanması
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    openBtn.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
    });

    const toggleBtn = document.getElementById('toggleSubmenu');
    const submenu = document.getElementById('submenu');
    const arrowIcon = document.getElementById('arrowIcon');

    toggleBtn.addEventListener('click', () => {
        const isHidden = submenu.classList.contains('hidden');

        if (isHidden) {
            submenu.classList.remove('hidden');
            submenu.classList.add('flex');
            submenu.style.maxHeight = submenu.scrollHeight + "px";
            submenu.style.transition = "max-height 0.3s ease";
            arrowIcon.classList.add('rotate-180');
        } else {
            submenu.style.maxHeight = "0";
            submenu.style.overflow = "hidden";
            arrowIcon.classList.remove('rotate-180');
            setTimeout(() => {
                submenu.classList.remove('flex');
                submenu.classList.add('hidden');
            }, 300);
        }
    });

    const header = document.getElementById("mainHeader");
    const logoImage = document.getElementById("logoImage");
    const consultBtn = document.getElementById("consultBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.classList.remove("bg-transparent", "text-white");
            header.classList.add("bg-white", "text-[#16113B]", "shadow-xl");

            if (logoImage) logoImage.classList.remove("invert");

            if (consultBtn) {
                consultBtn.classList.remove("bg-white", "text-[#16113B]");
                consultBtn.classList.add("bg-[#16113B]", "text-white");
            }
        } else {
            header.classList.remove("bg-white", "text-[#16113B]", "shadow-xl");
            header.classList.add("bg-transparent", "text-white");

            if (logoImage) logoImage.classList.add("invert");

            if (consultBtn) {
                consultBtn.classList.remove("bg-[#16113B]", "text-white");
                consultBtn.classList.add("bg-white", "text-[#16113B]");
            }
        }
    });
});
const previewImage = document.getElementById("previewImage");
const featureItems = document.querySelectorAll(".feature-item");

previewImage.src = "img/flat1.png";
let lastSrc = "img/flat1.png";

featureItems.forEach(item => {
    const imgTag = item.querySelector("img");
    const imgSrc = imgTag.getAttribute("data-img");

    item.addEventListener("mouseenter", () => {
        previewImage.src = imgSrc;
        lastSrc = imgSrc;
    });

    item.addEventListener("mouseleave", () => {
        previewImage.src = lastSrc;
    });
});


