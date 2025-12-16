let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

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

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 7) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked2.gif"; // 震惊
    if (clickCount === 2) mainImage.src = "images/think2.gif";   // 思考
    if (clickCount === 3) mainImage.src = "images/think4.gif";   // 生气
    if (clickCount === 4) mainImage.src = "images/crying3.gif";   // 生气
    if (clickCount === 5) mainImage.src = "images/crying4.gif";  // 哭
    if (clickCount === 6) mainImage.src = "images/crying2.gif";  // 哭
    if (clickCount >= 7) mainImage.src = "images/think3.gif";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
//yesButton.addEventListener("click", function() {
 //   document.body.innerHTML = `
   //     <div class="yes-screen">
      //      <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
        //    <img src="images/hug2.gif" alt="拥抱" class="yes-image">
     //   </div>
 ///   `;

  //  document.body.style.overflow = "hidden";
//});
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
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
                        <div class="date">2024.02.13</div>
                    </div>
                    
                    <div class="letter-content">
                        <p>亲爱的丹珍：</p>

                        <p>......</p>
                        
                        <p>学妹 你太美好了
1.你说话时温柔的语气
2你笑起来浅浅的酒窝
3你低头做题时微蹙的眉
4你分享小事时发亮的眼睛
5你睡着时呼吸的频率
6你被夸时害羞的小表情
7你有趣可爱的性格
8你动听的歌声
9你在我心情低落时突然贴近的脸
10你在散步时牵起我的手
11你在听我说话时认真的模样
12你穿的衣服 
13你扎的头发
14你背包上的小挂件
15你往我肩上轻靠的脸和耳朵
16你掀起袖子漏出的伤痕
17你轻刮我脸庞的发梢
18你在我失落时耐心的安慰
19你的笑声
20你走路的姿势
21你有时的小脾气与倔犟
22你对待小猫的温柔
23你衣服上淡淡的香味
24你被阳光吻亮的发丝
25你天马行空的想象力
26你受到欺负时的小委屈
27你写下的字
28你凑近时温热的呼吸
29你思考问题独特的想法
30你逗我时戏谑的语气
31你戴着我围巾的样子
32你吻我时害羞的表情
33你在散步时哼着的歌
34你偷偷躲起来吓唬我的得逞
35你的心软
36你长长的睫毛
37你偶尔的撒娇
38你给我的拥抱
39你轻抚我脸庞的手
40你在我耳旁轻轻的吹气
41你的坚强
42你对我的鼓励
43你的嘴唇
44你的耳朵
45你的机智与灵动
46你的善良
47你对我的包容与理解
48你一些幼稚的行为
49你的幽默风趣
50你对我无时无刻的关心
51你的三观
52你的明媚
53你的疲惫
54你会记住我喜欢和讨厌的事情
55你为了我改变了一小部分的自己
56你会认真记录着我
57你为我准备的惊喜
58你的素颜
59你的真诚
60你给我送的花
61你的自信勇敢
62你抠破的额头的小伤口
63你耳朵上戴着的耳坠
64你模仿抖音小舞蹈的模样
65你会耐心满足我的小要求
66你微微侧头的弧度
67你搞怪的表情和眼神
68你指间的痣
69你的桀骜不羁
70你穿着的礼裙
71你清瘦的背影
72你有时的笨拙
73你看似大大咧咧其实细腻的内心
74你坐在我身旁的侧脸
75你内心深处的柔软
76你偶尔犯困时迷糊的样子
77你身份证上鲜活的面孔
78你温润洁净的皮肤
79我喜欢你任何样子 包括你的名字 一笔一画都想刻在我心里</p>
                        
                        
                        
                        <div class="important-text">
                            <p>我喜欢你，不是一时冲动，而是经过无数个日夜思考后的确定。</p>
                            <p>我喜欢你，不是因为你完美，而是因为你就是你。</p>
                            <p>我喜欢你，想要和你一起看春天的花，夏天的海，秋天的落叶，冬天的雪。</p>
                        </div>
                        
                        <p>如果你愿意，我想每天早上和你说早安，每天晚上和你说晚安；<br>
                           想分享生活中的点点滴滴，无论是开心还是难过；<br>
                           想成为你可以依靠的人，也想成为你的依靠。</p>
                        
                        <p>我知道感情需要时间，需要慢慢来。所以，无论你的答案是什么，我都感谢你出现在我的生命里。但如果你愿意给我一个机会，我一定会用尽全力，让你每天都感受到被爱的幸福。</p>
                        
                        <p>这封信写得很长，但还有千言万语没有说完。未来的日子，我想慢慢说给你听。</p>
                        
                        <div class="letter-footer">
                            <p>永远喜欢你的人</p>
                            <p class="signature">✨ 等你回复的我 ✨</p>
                        </div>
                    </div>
                </div>
                
                <!-- 信件操作按钮 -->
                <div class="letter-buttons">
                    <button class="close-letter" onclick="this.closest('.letter-container').style.display='none'">
                        💝 珍藏这封信
                    </button>
                    <button class="reply-btn" onclick="alert('💌 回信已收到！我会用一生好好珍惜～')">
                        ✨ 我也喜欢你
                    </button>
                </div>
            </div>
            
            <!-- 浪漫点缀 -->
            <div class="hearts-container"></div>
        </div>
    `;
    
    // 设置页面样式
    document.body.style.overflow = "hidden";
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
            min-height: 100vh;
            font-family: 'Arial', 'Microsoft YaHei', sans-serif;
            color: #333;
            overflow-x: hidden;
        }
        
        .yes-screen {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            position: relative;
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
        
        /* 看信按钮 */
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
        
        /* 信件容器 */
        .letter-container {
            display: none;
            max-width: 800px;
            width: 95%;
            margin: 20px auto;
            animation: slideUp 0.8s ease-out;
        }
        
        /* 信件样式 */
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
        }
        
        .letter-content p {
            margin-bottom: 20px;
            text-align: justify;
        }
        
        .important-text {
            background: linear-gradient(135deg, #fff0f5, #ffe6ee);
            border-left: 5px solid #ff4081;
            padding: 25px;
            margin: 30px 0;
            border-radius: 10px;
            font-size: 1.2rem;
            color: #d81b60;
        }
        
        .important-text p {
            margin: 15px 0;
            font-weight: 600;
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
        
        /* 信件按钮 */
        .letter-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 40px;
            flex-wrap: wrap;
        }
        
        .close-letter, .reply-btn {
            padding: 16px 35px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
        }
        
        .close-letter {
            background: linear-gradient(45deg, #9c27b0, #673ab7);
            color: white;
        }
        
        .reply-btn {
            background: linear-gradient(45deg, #4CAF50, #2E7D32);
            color: white;
        }
        
        .close-letter:hover, .reply-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* 动画 */
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
        
        /* 爱心动画 */
        .hearts-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        /* 响应式设计 */
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
            }
            
            .letter-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .close-letter, .reply-btn {
                width: 100%;
                max-width: 300px;
            }
        }
        
        /* 打印优化 */
        @media print {
            .read-letter-btn, .letter-buttons {
                display: none;
            }
            
            .letter {
                box-shadow: none;
                border: 1px solid #ccc;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 添加显示信件的功能
    document.getElementById('readLetterBtn').addEventListener('click', function() {
        const letterContainer = document.getElementById('letterContainer');
        letterContainer.style.display = 'block';
        this.style.display = 'none';
        createFloatingHearts();
    });
    
    // 创建漂浮的爱心
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const hearts = ['💖', '💕', '💓', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: floatHeart ${Math.random() * 10 + 10}s linear infinite;
                z-index: -1;
            `;
            
            const keyframes = `
                @keyframes floatHeart${i} {
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
                        transform: translateY(-100px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = keyframes.replace(`floatHeart${i}`, 'floatHeart');
            document.head.appendChild(style);
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // 初始创建一些爱心
    createFloatingHearts();
});
