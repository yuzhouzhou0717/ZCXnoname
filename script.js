// 预先定义成功页面的 CSS
const successPageStyles = `
    .yes-screen {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        position: relative;
        background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    }
    
    .yes-text {
        color: #e91e63;
        font-size: 2.8rem;
        margin: 20px 0 30px;
        text-align: center;
        text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);
        animation: heartbeat 1.2s infinite;
    }
    
    .yes-image {
        max-width: 320px;
        width: 90%;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(233, 30, 99, 0.3);
        margin-bottom: 30px;
        border: 5px solid white;
    }
    
    .read-letter-btn {
        background: linear-gradient(45deg, #ff4081, #e91e63);
        color: white;
        border: none;
        padding: 18px 40px;
        font-size: 1.3rem;
        border-radius: 50px;
        cursor: pointer;
        margin: 20px 0 40px;
        box-shadow: 0 8px 20px rgba(233, 30, 99, 0.4);
        transition: all 0.3s ease;
        font-weight: bold;
        letter-spacing: 1px;
    }
    
    .read-letter-btn:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 12px 25px rgba(233, 30, 99, 0.6);
    }
    
    .letter-container {
        display: none;
        max-width: 800px;
        width: 95%;
        margin: 20px auto;
        animation: slideUp 0.8s ease-out;
    }
    
    .letter {
        background: linear-gradient(to bottom, #fff9f9, #fff0f5);
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        position: relative;
        border: 2px solid #ffb6c1;
    }
    
    .letter:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px dashed #ffb6c1;
        border-radius: 15px;
        pointer-events: none;
    }
    
    .letter-header {
        text-align: center;
        margin-bottom: 40px;
        border-bottom: 2px solid #ffd6e0;
        padding-bottom: 20px;
    }
    
    .heart {
        font-size: 3rem;
        animation: float 3s infinite;
    }
    
    .letter-header h2 {
        color: #e91e63;
        font-size: 2.2rem;
        margin: 15px 0 10px;
    }
    
    .date {
        color: #ff6b9d;
        font-size: 1.1rem;
        font-style: italic;
    }
    
    .letter-content {
        line-height: 1.8;
        font-size: 1.15rem;
        color: #555;
        height: 400px; /* 固定高度 */
        overflow: hidden; /* 隐藏溢出内容 */
        position: relative;
        padding-right: 10px;
    }
    
    .letter-scroll-content {
        position: relative;
    }
    
    .letter-content p {
        margin-bottom: 20px;
        text-align: justify;
    }
    
    .letter-footer {
        text-align: right;
        margin-top: 50px;
        padding-top: 20px;
        border-top: 1px dashed #ffb6c1;
    }
    
    .signature {
        font-size: 1.3rem;
        color: #e91e63;
        font-weight: bold;
        margin-top: 10px;
        animation: glow 2s infinite;
    }
    
    /* 滚动控制按钮 */
    .scroll-controls {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    
    .scroll-control-btn {
        background: linear-gradient(45deg, #9c27b0, #673ab7);
        color: white;
        border: none;
        padding: 10px 25px;
        font-size: 1rem;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
    }
    
    .scroll-control-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    
    .scroll-control-btn.pause {
        background: linear-gradient(45deg, #f44336, #d32f2f);
    }
    
    .scroll-control-btn.resume {
        background: linear-gradient(45deg, #4CAF50, #2E7D32);
    }
    
    .scroll-control-btn.restart {
        background: linear-gradient(45deg, #2196F3, #0D47A1);
    }
    
    .scroll-control-btn.disabled {
        background: linear-gradient(45deg, #9e9e9e, #757575);
        cursor: not-allowed;
        transform: none;
    }
    
    .scroll-control-btn.disabled:hover {
        transform: none;
        box-shadow: none;
    }
    
    /* 惊喜按钮样式 */
    .surprise-btn {
        background: linear-gradient(45deg, #FF9800, #FF5722);
        color: white;
        border: none;
        padding: 18px 45px;
        font-size: 1.4rem;
        border-radius: 50px;
        cursor: pointer;
        margin: 30px auto 40px;
        display: block;
        box-shadow: 0 8px 25px rgba(255, 87, 34, 0.4);
        transition: all 0.3s ease;
        font-weight: bold;
        letter-spacing: 1.5px;
        animation: pulse 2s infinite;
    }
    
    .surprise-btn:hover {
        transform: translateY(-5px) scale(1.08);
        box-shadow: 0 12px 30px rgba(255, 87, 34, 0.6);
        background: linear-gradient(45deg, #FFB74D, #FF8A65);
    }
    
    .hearts-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }
    
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes glow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes floatHeart {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% { 
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(255, 87, 34, 0.4);
        }
        50% { 
            transform: scale(1.05);
            box-shadow: 0 12px 30px rgba(255, 87, 34, 0.6);
        }
    }
    
    /* 自动滚动动画 - 只播放一次 */
    @keyframes autoScrollOnce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(calc(-100% + 400px + 40px));
        }
    }
    
    .auto-scroll-paused {
        animation-play-state: paused !important;
    }
    
    .scroll-completed {
        animation: none !important;
        transform: translateY(calc(-100% + 400px));
    }
    
    @media (max-width: 768px) {
        .yes-text {
            font-size: 2rem;
        }
        
        .letter {
            padding: 25px;
        }
        
        .letter-header h2 {
            font-size: 1.8rem;
        }
        
        .letter-content {
            font-size: 1rem;
            height: 300px; /* 移动端更小的高度 */
        }
        
        .scroll-completed {
            transform: translateY(calc(-100% + 300px + 30px));
        }
        
        .scroll-controls {
            flex-direction: column;
            align-items: center;
        }
        
        .scroll-control-btn {
            width: 200px;
        }
        
        .surprise-btn {
            padding: 15px 35px;
            font-size: 1.2rem;
            width: 80%;
            max-width: 300px;
        }
    }
`;

// 成功页面的 HTML 模板
const successPageHTML = `
    <div class="yes-screen">
        <!-- 标题 -->
        <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
        
        <!-- 动图 -->
        <img src="images/hug2.gif" alt="拥抱" class="yes-image">
        
        <!-- 开始看信按钮 -->
        <button class="read-letter-btn" id="readLetterBtn">📮 打开我的信</button>
        
        <!-- 信件内容（初始隐藏） -->
        <div class="letter-container" id="letterContainer">
            <div class="letter">
                <div class="letter-header">
                    <div class="heart">💌</div>
                    <h2>给最特别的你</h2>
                    <div class="date">2025.12.18</div>
                </div>
                
                <div class="letter-content" id="letterContent">
                    <div class="letter-scroll-content" id="letterScrollContent">
                        <p>亲爱的丹珍：</p>
                        <p>......</p>
                        <p>丹珍 你太美好了</p>
                        <p>你说话时温柔的语气</p>
                        <p>你笑起来浅浅的酒窝</p>
                        <p>你低头做题时微蹙的眉</p>
                        <p>你分享小事时发亮的眼睛</p>
                        <p>你睡着时呼吸的频率</p>
                        <p>你被夸时害羞的小表情</p>
                        <p>你有趣可爱的性格</p>
                        <p>你动听的歌声</p>
                        <p>你在我心情低落时突然贴近的脸</p>
                        <p>你在散步时牵起我的手</p>
                        <p>你在听我说话时认真的模样</p>
                        <p>你穿的衣服</p>
                        <p>你扎的头发</p>
                        <p>你背包上的小挂件</p>
                        <p>你往我肩上轻靠的脸和耳朵</p>
                        <p>你掀起袖子漏出的伤痕</p>
                        <p>你轻刮我脸庞的发梢</p>
                        <p>你在我失落时耐心的安慰</p>
                        <p>你的笑声</p>
                        <p>你走路的姿势</p>
                        <p>你有时的小脾气与倔犟</p>
                        <p>你对待小猫的温柔</p>
                        <p>你衣服上淡淡的香味</p>
                        <p>你被阳光吻亮的发丝</p>
                        <p>你天马行空的想象力</p>
                        <p>你受到欺负时的小委屈</p>
                        <p>你写下的字</p>
                        <p>你凑近时温热的呼吸</p>
                        <p>你思考问题独特的想法</p>
                        <p>你逗我时戏谑的语气</p>
                        <p>你戴着我围巾的样子</p>
                        <p>你吻我时害羞的表情</p>
                        <p>你在散步时哼着的歌</p>
                        <p>你偷偷躲起来吓唬我的得逞</p>
                        <p>你的心软</p>
                        <p>你长长的睫毛</p>
                        <p>你偶尔的撒娇</p>
                        <p>你给我的拥抱</p>
                        <p>你轻抚我脸庞的手</p>
                        <p>你在我耳旁轻轻的吹气</p>
                        <p>你的坚强</p>
                        <p>你对我的鼓励</p>
                        <p>你的嘴唇</p>
                        <p>你的耳朵</p>
                        <p>你的机智与灵动</p>
                        <p>你的善良</p>
                        <p>你对我的包容与理解</p>
                        <p>你一些幼稚的行为</p>
                        <p>你的幽默风趣</p>
                        <p>你对我无时无刻的关心</p>
                        <p>你的三观</p>
                        <p>你的明媚</p>
                        <p>你的疲惫</p>
                        <p>你记住的我喜欢和讨厌的事情</p>
                        <p>你为了我改变了一小部分的自己</p>
                        <p>你会认真记录着我</p>
                        <p>你为我准备的惊喜</p>
                        <p>你的素颜</p>
                        <p>你的真诚</p>
                        <p>你给我送的花</p>
                        <p>你的自信勇敢</p>
                        <p>你抠破的额头的小伤口</p>
                        <p>你耳朵上戴着的耳坠</p>
                        <p>你模仿抖音小舞蹈的模样</p>
                        <p>你会耐心满足我的小要求</p>
                        <p>你微微侧头的弧度</p>
                        <p>你搞怪的表情和眼神</p>
                        <p>你指间的痣</p>
                        <p>你的桀骜不羁</p>
                        <p>你穿着的礼裙</p>
                        <p>你清瘦的背影</p>
                        <p>你有时的笨拙</p>
                        <p>你看似大大咧咧其实细腻的内心</p>
                        <p>你坐在我身旁的侧脸</p>
                        <p>你内心深处的柔软</p>
                        <p>你偶尔犯困时迷糊的样子</p>
                        <p>你身份证上鲜活的面孔</p>
                        <p>你温润洁净的皮肤</p>
                        <p>我喜欢你任何样子 包括你的名字 一笔一画都想刻在我心里</p>
                        <p>......</p>
                        <p>完整版请于12月19日与鱼洲见面获取</p>
                    </div>
                </div>
                
                <!-- 滚动控制按钮 -->
                <div class="scroll-controls">
                    <button class="scroll-control-btn pause" id="pauseScroll">暂停</button>
                    <button class="scroll-control-btn resume" id="resumeScroll">继续</button>
                    <button class="scroll-control-btn restart" id="restartScroll">重新开始</button>
                </div>
                
                <div class="letter-footer">
                    <p>爱你的</p>
                    <p class="signature">鱼洲</p>
                </div>
            </div>
            
            <!-- 惊喜按钮 -->
            <button class="surprise-btn" id="surpriseBtn">✨ 点击领取惊喜 ✨</button>
        </div>
        
        <!-- 浪漫点缀 -->
        <div class="hearts-container"></div>
    </div>
`;

// 主程序逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 初始化背景音乐 - 在页面加载时就创建
    let backgroundMusic = null;
    
    // 创建并设置背景音乐
    function setupBackgroundMusic() {
        // 创建音频元素
        backgroundMusic = new Audio();
        
        
        backgroundMusic.src = "xx.mp3"; // ← 修改这里
        
        // 设置音乐属性
        backgroundMusic.loop = true; // 循环播放
        backgroundMusic.volume = 0.3; // 音量30%，比较柔和
        
        // 尝试自动播放
        document.addEventListener('click', function startMusic() {
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    console.log("自动播放被阻止，需要用户交互");
                });
            }
            // 移除事件监听，只执行一次
            document.removeEventListener('click', startMusic);
        }, { once: true });
        
        // 保存到全局，方便其他函数访问
        window.backgroundMusic = backgroundMusic;
        
        // 预加载音乐
        backgroundMusic.load();
    }
    
    // 页面加载时就初始化音乐
    setupBackgroundMusic();

    // 获取元素
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let questionText = document.getElementById("question");
    let mainImage = document.getElementById("mainImage");

    // 检查元素是否存在
    if (!yesButton || !noButton || !questionText || !mainImage) {
        console.error("Required elements not found! Please check your HTML structure.");
        return;
    }

    let clickCount = 0;  // 记录点击 No 的次数

    // No 按钮的文字变化
    const noTexts = [
        "？你认真的吗…", 
        "要不再想想？", 
        "不许选这个！ ", 
        "我会很伤心…", 
        "好伤心...",
        "为什么选这个?！",
        "不行:("
    ];

    // 添加成功页面样式（只添加一次）
    if (!document.getElementById('success-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'success-styles';
        styleEl.textContent = successPageStyles;
        document.head.appendChild(styleEl);
    }

    // No 按钮点击事件
    noButton.addEventListener("click", function() {
        clickCount++;

        // 让 Yes 变大，每次放大
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        // 挤压 No 按钮，每次右移
        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        // 让图片和文字往上移动
        let moveUp = clickCount * 25;
        if (mainImage) mainImage.style.transform = `translateY(-${moveUp}px)`;
        if (questionText) questionText.style.transform = `translateY(-${moveUp}px)`;

        // No 文案变化
        if (clickCount <= 7 && clickCount > 0) {
            noButton.innerText = noTexts[clickCount - 1] || noTexts[noTexts.length - 1];
        }

        // 图片变化
        const imageMap = {
            1: "images/shocked2.gif",
            2: "images/think2.gif",
            3: "images/think4.gif",
            4: "images/crying3.gif",
            5: "images/crying4.gif",
            6: "images/crying2.gif"
        };
        
        if (clickCount in imageMap && mainImage) {
            mainImage.src = imageMap[clickCount];
        } else if (clickCount >= 7 && mainImage) {
            mainImage.src = "images/think3.gif";
        }
        
        // 用户点击时尝试播放音乐
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("音乐播放需要用户明确同意");
            });
        }
    });

    // Yes 按钮点击事件
    yesButton.addEventListener("click", function() {
        // 确保音乐在切换页面后继续播放
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("音乐播放失败:", error);
            });
        }
        
        // 设置新内容
        document.body.className = '';
        document.body.innerHTML = successPageHTML;
        document.body.style.overflow = "auto";
        document.body.classList.add('success-page');
        
        // 添加事件监听
        setupSuccessPageEvents();
    });

    // 创建漂浮爱心
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        if (!heartsContainer) return;
        
        // 清除已有的爱心
        heartsContainer.innerHTML = '';
        
        const hearts = ['💖', '💕', '💓', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: floatHeart ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                z-index: -1;
            `;
            heartsContainer.appendChild(heart);
        }
    }

    // 设置信件自动滚动（只播放一次）
    function setupAutoScroll() {
        const scrollContent = document.getElementById('letterScrollContent');
        const pauseBtn = document.getElementById('pauseScroll');
        const resumeBtn = document.getElementById('resumeScroll');
        const restartBtn = document.getElementById('restartScroll');
        const letterContent = document.querySelector('.letter-content');
        
        if (!scrollContent || !pauseBtn || !resumeBtn || !restartBtn || !letterContent) return;
        
        // 计算滚动距离和动画时间
        const scrollHeight = scrollContent.scrollHeight;
        const containerHeight = letterContent.offsetHeight;
        const scrollDistance = scrollHeight - containerHeight;
        
        // 计算动画持续时间（大约每分钟滚动300像素）
        const duration = Math.max(30, Math.min(90, (scrollDistance / 300) * 60)); // 30-90秒之间
        
        // 开始自动滚动（只播放一次）
        function startAutoScroll() {
            scrollContent.style.animation = `autoScrollOnce ${duration}s linear forwards`;
            scrollContent.classList.remove('auto-scroll-paused', 'scroll-completed');
            
            // 启用按钮
            pauseBtn.classList.remove('disabled');
            resumeBtn.classList.add('disabled');
            restartBtn.classList.remove('disabled');
            
            // 监听动画结束事件
            scrollContent.addEventListener('animationend', onAnimationEnd, { once: true });
        }
        
        // 动画结束时的处理
        function onAnimationEnd() {
            scrollContent.classList.add('scroll-completed');
            pauseBtn.classList.add('disabled');
            resumeBtn.classList.add('disabled');
            restartBtn.classList.remove('disabled');
        }
        
        // 暂停滚动
        pauseBtn.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            scrollContent.classList.add('auto-scroll-paused');
            this.classList.add('disabled');
            resumeBtn.classList.remove('disabled');
        });
        
        // 继续滚动
        resumeBtn.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            scrollContent.classList.remove('auto-scroll-paused');
            this.classList.add('disabled');
            pauseBtn.classList.remove('disabled');
        });
        
        // 重新开始滚动
        restartBtn.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            // 移除之前的事件监听
            scrollContent.removeEventListener('animationend', onAnimationEnd);
            
            // 重置到开始位置
            scrollContent.style.animation = 'none';
            scrollContent.style.transform = 'translateY(0)';
            
            // 重新开始滚动
            setTimeout(() => {
                startAutoScroll();
            }, 10);
        });
        
        // 鼠标悬停时暂停，移开时继续
        letterContent.addEventListener('mouseenter', function() {
            if (!scrollContent.classList.contains('scroll-completed') && 
                !pauseBtn.classList.contains('disabled')) {
                scrollContent.classList.add('auto-scroll-paused');
            }
        });
        
        letterContent.addEventListener('mouseleave', function() {
            if (!scrollContent.classList.contains('scroll-completed') && 
                !pauseBtn.classList.contains('disabled')) {
                scrollContent.classList.remove('auto-scroll-paused');
            }
        });
        
        // 触摸设备支持
        let touchTimer = null;
        letterContent.addEventListener('touchstart', function() {
            if (!scrollContent.classList.contains('scroll-completed') && 
                !pauseBtn.classList.contains('disabled')) {
                scrollContent.classList.add('auto-scroll-paused');
            }
        });
        
        letterContent.addEventListener('touchend', function() {
            if (!scrollContent.classList.contains('scroll-completed') && 
                !pauseBtn.classList.contains('disabled')) {
                if (touchTimer) clearTimeout(touchTimer);
                touchTimer = setTimeout(() => {
                    scrollContent.classList.remove('auto-scroll-paused');
                }, 2000);
            }
        });
        
        // 开始自动滚动
        startAutoScroll();
    }

    // 跳转到惊喜页面
    function goToSurprisePage() {
        // 跳转到您指定的惊喜页面
        const surpriseURL = "https://yuzhouzhou0717.github.io/A-Gift-for-Dan-Zhen/DZ.html";
        
        // 暂停音乐
        if (backgroundMusic) {
            backgroundMusic.pause();
        }
        
        // 添加一个简单的过渡效果
        const body = document.body;
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = '0';
        
        // 显示跳转提示
        const surpriseBtn = document.getElementById('surpriseBtn');
        if (surpriseBtn) {
            surpriseBtn.textContent = '✨ 跳转中... ✨';
        }
        
        // 等待过渡效果完成后跳转
        setTimeout(() => {
            window.location.href = surpriseURL;
        }, 500);
    }

    // 设置成功页面事件
    function setupSuccessPageEvents() {
        const readLetterBtn = document.getElementById('readLetterBtn');
        if (readLetterBtn) {
            readLetterBtn.onclick = function() {
                const letterContainer = document.getElementById('letterContainer');
                if (letterContainer) {
                    letterContainer.style.display = 'block';
                    this.style.display = 'none';
                    
                    // 创建漂浮爱心
                    setTimeout(() => {
                        createFloatingHearts();
                    }, 300);
                    
                    // 设置自动滚动
                    setTimeout(() => {
                        setupAutoScroll();
                    }, 500);
                    
                    // 滚动到信件
                    setTimeout(() => {
                        letterContainer.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }, 800);
                }
            };
        }
        
        // 设置惊喜按钮事件
        const surpriseBtn = document.getElementById('surpriseBtn');
        if (surpriseBtn) {
            surpriseBtn.onclick = function() {
                // 添加点击效果
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.2s ease';
                
                // 显示提示信息
                this.textContent = '准备惊喜中...';
                
                // 延迟跳转，让用户看到效果
                setTimeout(() => {
                    goToSurprisePage();
                }, 800);
            };
        }
        
        // 预加载成功页面的图片
        preloadImage("images/hug2.gif");
        
        // 确保音乐继续播放
        if (backgroundMusic && backgroundMusic.paused) {
            setTimeout(() => {
                backgroundMusic.play().catch(error => {
                    console.log("音乐播放失败:", error);
                });
            }, 1000);
        }
    }

    // 图片预加载函数
    function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }

    // 预加载所有需要的图片
    const imagesToPreload = [
        "images/shocked2.gif",
        "images/think2.gif", 
        "images/think4.gif",
        "images/crying3.gif",
        "images/crying4.gif",
        "images/crying2.gif",
        "images/think3.gif",
        "images/hug2.gif"
    ];
    
    imagesToPreload.forEach(preloadImage);
});
