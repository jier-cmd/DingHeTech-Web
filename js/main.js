// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 产品选项卡切换
    const productTabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    productTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('data-bs-target'));
            
            // 移除所有活动状态
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            document.querySelectorAll('[data-bs-toggle="pill"]').forEach(tab => {
                tab.classList.remove('active');
            });

            // 添加新的活动状态
            target.classList.add('show', 'active');
            this.classList.add('active');
        });
    });

    // 下载按钮点击事件
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 这里可以添加下载前的验证逻辑
            const fileName = this.getAttribute('href').split('/').pop();
            console.log('Downloading:', fileName);
        });
    });

    // 轮播图自动播放
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            pause: 'hover'
        });
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
