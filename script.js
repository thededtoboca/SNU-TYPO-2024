const projects = [
    {
        id: 1,
        title: "매싸 폰트 연구소",
        student: "김수민",
        description: "애니메이션 'The Right Way Of Madness'를 제작하며 수집한 매드 사이언티스트를 연상시키는 폰트 아카이빙.",
        image: "./assets/01.jpg",
        link: "https://typo2024-01.glitch.me/"
    },
    {
        id: 2,
        title: "영화 보고 싶다...",
        student: "김세인",
        description:"영화를 보는 것이 삶의 낙인데, 올해 강의를 너무 많이 들어서 영화를 잘 못봤다. 비명을 지르고 싶은 마음으로, 제목이 '아'로 시작되는 영화 타이틀 이미지를 수집하고 나의 솔직한 감상평을 남겼다.",
        image: "./assets/02.jpg",
        link: "https://typo2024-02.glitch.me/"
    },
    {
        id: 3,
        title: "손글씨 아카이브",
        student: "김설하",
        description:"갈수록 손글씨 찾기가 어렵다. 애초에 펜도 잘 안 들고 다니는, 디지털 필기의 시대가 되고 있으니. 그 와중에 여기저기 남아있는 귀여운 손글씨들을 손수 스캔하여 모아보았다. ",
        image: "./assets/03.jpg",
        link: "https://typo2024-03.glitch.me/"
    },
    {
        id: 4,
        title: "BLUE DYSTOPIA",
        student: "권나연",
        description:"",
        image: "./assets/04.jpg",
        link: "https://typo2024-04.glitch.me/"
    },
    {
        id: 5,
        title: "Typotic Ocean",
        student: "박설아",
        description:"인터넷은 '정보의 바다'. 그렇다면 그 속을 헤엄치는 글자들은 물고기라고 할 수 있지 않을까? 더 깊은 바다로 스크롤할수록 심해어처럼 더 독특하게 변형된 모습을 가진 디지털 폰트들을 볼 수 있는 웹 페이지.",
        image: "./assets/05.jpg",
        link: "https://typo2024-05.glitch.me/"
    },
    {
        id: 6,
        title: "(띄)(지) (않)(는) (지)(시)",
        student: "유서연",
        description: "누구나 수없이 지시받는다. 곳곳에 여러 지시 사항이 새겨져 있다. 하지만 그 중에서도 눈에 띄지 않는 것들이 있다. 기꺼이 따라 줄 것을 기대했음에도 등한시되는 원인을 찾는다. 눈에 띌 듯 말 듯 안 보이는 지시 사항들을 분류하여 아카이빙하는 웹페이지.",
        image: "./assets/06.jpg",
        link: "https://typo2024-06.glitch.me/"
    },
    {
        id: 7,
        title: "시모키타자와에서 서울대입구역까지",
        student: "홍지우",
        description: "시모키타자와에서 서울대입구역까지 직접 걸어다니며 모은 → 화살표와 함께 있는 텍스트들.",
        image: "./assets/07.jpg",
        link: "https://typo2024-07.glitch.me/"
    },
    {
        id: 8,
        title: "ㄱ장닌 극자들",
        student: "최예진",
        description: "타이포는 타이포그래퍼의 의도대로 읽힐 수 있을까? 디자인은 디자이너의 의도대로 전달될 수 있을까? 사람은 사람의 의도대로 소통할 수 있을까? <ㄱ장닌 극자들>은 글자들이 제3의 대상에 의해 훼손되고, 유실된 장면들의 기록이다. 이 과정에서 글자들은 의미를 잃기도 하지만, 새로운 의미를 만들어내기도, 변형된 맥락과 예상치 못한 커뮤니케이션을 거쳐 다층적인 의미의 결합을 만들어내기도 한다.",
        image: "./assets/08.jpg",
        link: "https://typo2024-08.glitch.me/"
    },
    {
        id: 9,
        title: "주간짤린더",
        student: "문현수",
        description: "‘주간짤린더’는 인터넷에서 유행하는 밈들을 모아 내 일상과 연결짓는 프로젝트다. 어울리는 짤과 함께 기록한 나의 기록을 아카이빙하며, 지나간 시간을 생생하게 되돌려보는 디지털 기억 저장소.",
        image: "./assets/09.jpg",
        link: "https://typo2024-09.glitch.me/"
    },
    {
        id: 10,
        title: "Mysterious Towel Archive",
        student: "정선영",
        description: "매일 사용하는 수건 속에는 사실 독특한 타이포그래피 글귀가 숨어 있다. 하지만 이 수건이 우리 집에 언제, 왜 들어왔는지 생각해본 적은 거의 없다. 무심코 지나쳤던 수건의 미스터리한 행적을 추적하며, 각기 다른 이야기를 품고 탄생한 특별한 수건들을 소개한다.",
        image: "./assets/10.jpg",
        link: "https://typo2024-10.glitch.me/"
    },
    {
        id: 11,
        title: "김수한무거북이와두루미삼천갑자동방삭",
        student: "홍서경",
        description: "지역, 건설사, 브랜드, 펫네임의 결합으로 끊임없이 길어지는 아파트 이름들. 당신의 아파트 이름은 몇 m일까?",
        image: "./assets/11.jpg",
        link: "https://typo2024-11.glitch.me/"
    },
    {
        id: 12,
        title: "Open the book",
        student: "전수정",
        description: "여러 사람이 함께 읽을 수 있는 책에 남겨진 다양한 반응들",
        image: "./assets/12.jpg",
        link: "https://typo2024-12.glitch.me/"
    },
    {
        id: 13,
        title: "이상한 버스정류장",
        student: "송나윤",
        description: "욕쟁이할머니, 권춘섭집앞, 작은 대머리, 용사마을... 국내에 실제로 존재하는 버스정류장 이름들이다." +
                     "전국 곳곳의 이상하고 특이해서 눈길이 가는 버스정류장 이름들을 모아 주관이 잔뜩 들어간 기준에 따라 분류한 아카이브.",
        image: "./assets/13.jpg",
        link: "https://typo2024-13.glitch.me/"
    },
    {
        id: 14,
        title: "Choco Loco",
        student: "황지현",
        description: "달콤한 초콜릿에 미친 사람을 위한 아카이빙. 초콜릿 간식들의 로고 타이포를 자판기에서 뽑아 맛볼 수 있는 아카이빙이다.",
        image: "./assets/14.jpg",
        link: "https://typo2024-14.glitch.me/"
    },
    {
        id: 15,
        title: "추억 복원 자료집",
        student: "안수빈",
        description: "내 머릿 속은 추억분쇄기다. 예전에 웃으며 행복해했던 추억들을 쉽게 잊곤 한다. 모든 물체에는 잊은 기억을 떠올리게 하는 능력이 있다. 특히 나를 생각하며 쓴 편지들은 추억을 복원한 자료집과 같다.    ",
        image: "./assets/15.jpg",
        link: "https://typo2024-15.glitch.me/"
    },
    {
        id: 16,
        title: "거리의 표지",
        student: "김해욱",
        description: "우리는 매일 도로에서 표지판을 마주하게 된다. 가장 짧은 문구와 최소한의 글자로 사람들에게 방향을 제시한다. 각 나라별로 다양한 색상의 표지판이 있으며, 같은 색상의 표지판이라도 나라에 따라 다른 의미를 가질 수 있다. 그래서 저는 시각적인 관점에서 색상을 기준으로 이 표지판들을 분류해 보았다.",
        image: "./assets/16.jpg",
        link: "https://typo2024-16.glitch.me/"
    },
    {
        id: 17,
        title: "MACROButton for Everyday Life",
        student: "민유진",
        description: "우리는 하루를 보내며 수많은 버튼들을 누른다. 각 버튼에는 사람들로 하여금 목적을 달성시키기 위한 다양한 시각적인 배치가 시도된다."+
                     "눈에 띄는 것을 최우선으로 고려한 버튼, 개성이 확실한 타이포가 포함된 버튼, 눈에 띄지 않도록 숨겨놓은 버튼 등 목적에 따른 버튼의 시각적 시도를 분류해 아카이빙해보았다.",
        image: "./assets/17.jpg",
        link: "https://typo2024-17.glitch.me/"
    },
    {
        id: 18,
        title: "Google Knows vs. I know",
        student: "전아련",
        description: "번역과 해석은 다르다."+ 
                     "모르는 외국어 글자를 구글 번역을 사용해 번역하고, 스스로 해석해보았을 때 나타나는 네 가지 경우의 수의 아카이빙. ",
        image: "./assets/18.jpg",
        link: "https://typo2024-18.glitch.me/"
    },
    {
        id: 19,
        title: "Rachmatypoff",
        student: "정해관",
        description: "악보 헤더를 구성하는 타이포그래피를 수집하고 배열하였다. 동일한 음악을 다양한 스타일로 나타내는 약 백년간의 악보들의 아카이빙.",
        image: "./assets/19.jpg",
        link: "https://typo2024-19.glitch.me/"
    },
    {
        id: 20,
        title: "독서의 파편",
        student: "박가은",
        description: "2024년 한 해 동안 읽은 책을 장르에 따라 분류하고 좋아하는 문장을 소개하는 독서 아카이브. 내 영혼에 흔적을 남기고 간 문장들은 어떤 형태를 띄고 있을까. ",
        image: "./assets/20.jpg",
        link: "https://typo2024-20.glitch.me/"
    },
    {
        id: 21,
        title: "RandomMetroText.png",
        student: "권민정",
        description: "지하철을 탈 때 마주하는 글자들을 랜덤으로.",
        image: "./assets/21.jpg",
        link: "https://typo2024-21.glitch.me/"
    },
    {
        id: 22,
        title: "발 없는 말이 천 리 간다",
        student: "신지호",
        description: "낮말은 새가 듣고 밤말은 쥐가 듣습니다. 가는 말이 고와야 오는 말이 곱습니다. 혀 아래 도끼를 감추고, 한 입으로 두말하거나, 말이 씨가 되는가 하면 발도 없는데 천 리를 달리기도 합니다. '말'에는 질량이 없지만 정보화 시대에는 각종 사이트에서 흘러나온 '텍스트'가 밈화되어 인터넷이라는 구천을 떠돌고 있습니다. 이번에는 그중에서도 대화문을 위주로 붙잡아 두었습니다. 당신도 잡히지 않게 조심하세요.",
        image: "./assets/22.jpg",
        link: "https://typo2024-22.glitch.me/"
    },
    {
        id: 23,
        title: "각종 자격증명서 훔쳐보기",
        student: "이재연",
        description: "",
        image: "./assets/23.jpg",
        link: "https://typo2024-23.glitch.me/"
    },
    {
        id: 24,
        title: "사과의 언덕",
        student: "빈채현",
        description: "한번 저지른 잘못은 되돌릴 수 없는 법. 그러나 사과의 기회는 남아있다! 사죄를 위해 작성한 누군가의 사과문들을 모은 웹사이트." 
                    + "사과의 진정성에 개입하는 요소는 비단 내용뿐이 아니기에 작성자, 사과체로 나누어 사과문을 보고 용서하거나 반려해보자.",
        image: "./assets/24.jpg",
        link: "https://typo2024-24.glitch.me/"
    },
    {
        id: 25,
        title: "POCA - printing on clothes archive",
        student: "김수은",
        description: "옷에 영어문구가 있으면 멋있긴 한데, 무슨 뜻인지..? 옷 위 영어 문구와 번역 아카이브. ",
        image: "./assets/25.jpg",
        link: "https://typo2024-25.glitch.me/"
    },
    {
        id: 26,
        title: "아니근데어진짜이거약간너무솔직히살짝그냥뭔가그뭐냐혹시..",
        student: "박은빈",
        description: "말할 때 필요없지만 굳이굳이 말하게 되는 말버릇들에 집중하여 아카이빙한 웹사이트. 의도치 않게 나오게 되는 말버릇을 오타에 비유하고 본인의 말버릇을 담아내어 표현하였다.",
        image: "./assets/26.jpg",
        link: "https://typo2024-26.glitch.me/"
    },
    {
        id: 27,
        title: "Care Label",
        student: "두소진",
        description: "다양한 세탁 기호와 정보가 빼곡히 적힌 옷 안쪽의 세탁 라벨. 하지만 대부분은 눈길 한 번 받지 못한 채 그대로 세탁기로 직행한다. 옷 속 깊이 숨겨져 쉽게 지나치기 쉬운 이 라벨들은, 어쩌면 포춘쿠키처럼 예기치 못한 메시지를 담고 있을지도 모른다. 세탁 라벨 속에 숨어 있는 다양한 문구와 메시지를 모아 기록한 아카이빙.",
        image: "./assets/27.jpg",
        link: "https://typo2024-27.glitch.me/"
    },
    {
        id: 28,
        title: "CAPTCHA Typography",
        student: "유진호",
        description: "사람과 로봇을 구별하기 위해 사용되는 CAPTCHA.  텍스트, 이미지, 오디오 등 오늘날까지 다양한 버전이 개발되고 있다." +
                     "그 중, 텍스트 기반의 CAPTCHA는 단순히 '변형 / 왜곡된 글자' 이상의 의미를 지닌다. 타이포그래피적 특징과 변형 방식을 체계적으로 기록하여 디지털 시대의 타이포그래피를 이해하는 데 조금이나마 기여할 수 있길 기대한다.",
        image: "./assets/28.jpg",
        link: "https://typo2024-28.glitch.me/"
    },
    {
        id: 29,
        title: "Beyond the Screen",
        student: "정다인",
        description: "“화면 너머의 대화”는 동물의 숲 시리즈 속 대사를 수집한 아카이브로, 15년간 변화해온 말풍선과 타이포그래피 디자인의 여정을 탐구한 프로젝트이다. 동물의 숲은 모든 상황을 완벽히 통제할 수 없는 특성 속에서, 플레이어가 마치 실제 대화를 나누는 듯한 몰입감을 느끼게 한다. 말풍선과 타이포는 단순한 텍스트를 넘어 감성과 분위기를 전달하며, 본 프로젝트는 이를 통해 동물의 숲의 시각적 변화와 디자인적 의미를 조명하고자 한다.",
        image: "./assets/29.jpg",
        link: "https://typo2024-29.glitch.me/"
    },
    {
        id: 30,
        title: "24: 독수리의 마지막 비상",
        student: "우성",
        description: "한화이글스는 1986년 창단 이래 39년동안 사용해온 이글스파크와 작별을 하고, 새로운 홈구장인 베이스볼드림파크로 이전하는 역사적인 해였다. 이 프로젝트 통해서 한화이글스가 2024년 시즌을 되돌아보며, 이글스파크에서 마지막 비상들을 기록하고 팀의 성과와 의미 있는 순간들을 다시 조명한다. 새로운 홈구장에서 펼쳐질 미래를 기다하며, 팀의 역사에 한 획으로 그은 2024년 시즌의 황홀했던 순간을 수집하고자 한다.",
        image: "./assets/30.jpg",
        link: " https://thededtoboca.github.io/typo2024-30/"
    },
    {
        id: 31,
        title: "A very personal piece of Fashion",
        student: "장동후",
        description: "기후위기의 세대에도 여전히 패션은 ‘끊임없이' 변해야만 할까?"+
        "우리 세대는 변화와 혁신보다 스스로가 오래 지속할 수 있는 ‘취향'을 우선하여"+
        "우리가 향유하는 패션의 속도를 스스로 늦춰야 한다."+
        "지극히 개인적이며 지속적인 취향의 패션 키워드를 기반으로,"+
        "해당 패션을 다루는 브랜드 로고 아카이빙을 진행했다.",
        image: "./assets/31.jpg",
        link: "https://typo2024-31.glitch.me/"
    },
    {
        id: 32,
        title: "금지구역",
        student: "하현정",
        description: "일상 속 금지 표지 아카이브. 금지하는 메시지는 때로 강한 감정을 담고 있고, 때로는 잘 보이지도 않는다. 글자를 보고 느낀 주관적인 감상에 따라 분노(x축)와, 전달력(y축)을 기준으로 사분면에 배치했다.",
        image: "./assets/32.jpg",
        link: "https://typo2024-32.glitch.me/"
    },
    {
        id: 33,
        title: "철인(哲人)의 동물원",
        student: "한수정",
        description: "철학책의 제목에 이런 동물이 등장한다고? 세 곳의 도서관 철학 코너에서 발견한 다양한 동물들을 아카이빙해보았다. 과연 어떤 동물에게서 어떤 깨달음을 얻게 될까?",
        image: "./assets/33.jpg",
        link: "https://typo2024-33.glitch.me/"
    },
];

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    
    projectDiv.innerHTML = `
        <div class="project-image" style="background-image: url(${project.image})"></div>
        <div class="project-info">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-student">${project.student}</p>
        </div>
    `;
    
    projectDiv.addEventListener('click', () => {
        openProject(project);
    });
    
    return projectDiv;
}

function openProject(project) {
    const iframe = document.getElementById('project-iframe');
    const popupTitle = document.getElementById('popup-title');
    const popupStudent = document.getElementById('popup-student');
    const popupDescription = document.getElementById('popup-description');
    
    iframe.src = project.link;
    popupTitle.textContent = project.title;
    popupStudent.textContent = project.student;
    popupDescription.textContent = project.description;
    
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function initializeProjects() {
    const projectGrid = document.querySelector('.project-grid');
    const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
    
    projectGrid.innerHTML = '';
    shuffledProjects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectGrid.appendChild(projectElement);
    });
}

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
});

document.addEventListener('DOMContentLoaded', initializeProjects);