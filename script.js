document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تأثير الظهور التدريجي للعناصر (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };


    /*window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});*/


    const openMenu = document.getElementById('openMenu');
        const closeMenu = document.getElementById('closeMenu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // وظيفة فتح القائمة
        const toggleSidebar = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            // منع التمرير في الصفحة عند فتح القائمة
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
        };

        openMenu.addEventListener('click', toggleSidebar);
        closeMenu.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

        // إغلاق القائمة عند الضغط على الروابط
        const menuLinks = document.querySelectorAll('.sidebar-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // نطبق التأثير على البطاقات والأقسام
    const scrollElements = document.querySelectorAll('.hospital-card, .doctor-card, .service-item, .specialty-item');
    scrollElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    // إضافة الكلاس المسؤول عن الظهور في CSS برمجياً
    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);


    // 2. تفاعلية البحث (تنبيه عند البحث الفارغ)
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', () => {
        if(searchInput.value.trim() === "") {
            searchInput.style.border = "1px solid red";
            setTimeout(() => searchInput.style.border = "none", 2000);
        } else {
            console.log("جاري البحث عن: " + searchInput.value);
            // هنا يمكن ربط البحث بقاعدة بيانات
        }
    });


    // 3. تأثير "النبض" على أزرار الحجز عند التمرير بالماوس (Desktop)
    const primaryButtons = document.querySelectorAll('.btn-p, .btn-full');
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = "scale(1.05)";
            btn.style.boxShadow = "0 5px 15px rgba(11, 77, 61, 0.3)";
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "none";
        });
    });

    // 4. قائمة الجوال (Toggle Menu)
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
        alert("سيتم فتح القائمة الجانبية قريباً!");
        // يمكنك هنا إضافة كود فتح Sidebar
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // العثور على زر "عرض الكل" في الصفحة الرئيسية
    const viewAllBtn = document.querySelector('.view-all');
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // انتقال سلس لصفحة المستشفيات
            window.location.href = 'hospitals.html';
        });
    }

    // إضافة تأثير الضغط على كروت المستشفيات
    const cards = document.querySelectorAll('.hospital-card-long');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const hospitalName = card.querySelector('h3').innerText;
            console.log("الانتقال إلى تفاصيل: " + hospitalName);
            // هنا يمكنك التوجيه لصفحة تفاصيل المستشفى مستقبلاً
        });
    });
});