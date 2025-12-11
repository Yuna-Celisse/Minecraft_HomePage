// 移动端导航菜单切换
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// 点击导航链接后关闭菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // 导航栏高度
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 复制服务器IP
function copyIP() {
    const ip = document.getElementById('server-ip').textContent;
    navigator.clipboard.writeText(ip).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✅ 已复制!';
        btn.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制: ' + ip);
    });
}

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 监听所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .mod-card, .step, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// 导航栏背景透明度变化
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// 模拟获取在线玩家数（实际使用时应该从服务器API获取）
function updatePlayerCount() {
    // 这里应该是实际的API调用
    // 示例：fetch('https://your-server-api.com/status')
    
    // 模拟数据
    const randomPlayers = Math.floor(Math.random() * 50) + 10;
    const playerCountElement = document.getElementById('player-count');
    if (playerCountElement) {
        playerCountElement.textContent = `${randomPlayers}/100`;
    }
}

// 页面加载时更新一次
updatePlayerCount();

// 每30秒更新一次在线人数
setInterval(updatePlayerCount, 30000);

// 为卡片添加3D倾斜效果
document.querySelectorAll('.feature-card, .mod-card, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// 添加粒子效果到英雄区域
function createParticles() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background-color: rgba(76, 175, 80, ${Math.random() * 0.5 + 0.2});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 创建粒子效果
createParticles();

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
    // 按 Esc 关闭移动端菜单
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
    
    // 按 C 复制服务器地址
    if (e.key === 'c' && e.ctrlKey) {
        const serverIP = document.getElementById('server-ip');
        if (serverIP && document.activeElement !== serverIP) {
            e.preventDefault();
            copyIP();
        }
    }
});

// 添加页面加载完成提示
window.addEventListener('load', () => {
    console.log('%c🎮 Minecraft Forge 服务器主页已加载完成！', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
    console.log('%c欢迎来到我们的服务器！', 'color: #00b8ff; font-size: 16px;');
});

// 检测浏览器是否支持必要的特性
if (!('IntersectionObserver' in window)) {
    console.warn('您的浏览器不支持 IntersectionObserver，某些动画效果可能无法正常显示。');
}

if (!navigator.clipboard) {
    console.warn('您的浏览器不支持剪贴板API，复制功能可能无法正常工作。');
}

// 防止右键菜单（可选，根据需要启用）
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// 添加控制台彩蛋
console.log(`
    ⛏️  ⛏️  ⛏️  ⛏️  ⛏️
    Minecraft Forge Server
    ⛏️  ⛏️  ⛏️  ⛏️  ⛏️
    
    感谢访问我们的服务器主页！
    服务器地址: play.example.com
    版本: 1.20.1 Forge
    
    有问题？联系管理员！
`);