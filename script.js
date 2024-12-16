document.addEventListener("DOMContentLoaded", function () {
    const expandButton = document.querySelector(".expand-button");
    const introParagraph = document.querySelector("#intro-paragraph");

    if (expandButton && introParagraph) {
        expandButton.addEventListener("click", function () {
            introParagraph.classList.toggle("expanded");

            if (introParagraph.classList.contains("expanded")) {
                expandButton.textContent = "과제 소개글 접기";
            } else {
                expandButton.textContent = "과제 소개글";
            }
        });
    } else {
        console.error("Expand button or intro paragraph not found!");
    }

    const projectsContainer = document.getElementById("projects-container");
    const modal = document.querySelector(".modal");

    
    
    const projects = [
        {
            name: "매싸 폰트 연구소",
            fullDescription: "애니메이션 'The Right Way Of Madness'를 제작하며 수집한 매드 사이언티스트를 연상시키는 폰트 아카이빙. 애니메이터 상시 모집중. ",
            studentName: "김수민",
            studentId: "2020-16447",
            imageUrl: "./assets/01.jpg",  
            projectUrl: "https://jedas-lucan.github.io/mad-scientist-lab/"
        },
        {
            name: "영화 보고 싶다...",
            fullDescription: "영화를 보는 것이 삶의 낙인데, 올해 강의를 너무 많이 들어서 영화를 잘 못봤다. 비명을 지르고 싶은 마음으로, 제목이 '아'로 시작되는 영화 타이틀 이미지를 수집하고 나의 솔직한 감상평을 남겼다.",
            studentName: "박세인",
            studentId: "2020-17788",
            imageUrl: "./assets/02.jpg",  
            projectUrl: "https://saeinpark.github.io/AAAAAAAAA/"
        },
        {
            name: "손글씨 아카이브",
            fullDescription: "갈수록 손글씨 찾기가 어렵다. 애초에 펜도 잘 안 들고 다니는, 디지털 필기의 시대가 되고 있으니. 그 와중에 여기저기 남아있는 귀여운 손글씨들을 손수 '스캔(?)'하여 모아보았다. ",
            studentName: "김설하",
            studentId: "2020-19592",
            imageUrl: "./assets/03.jpg",  
            projectUrl: "https://typo2024-03.glitch.me/"
        },
        {
            name: "BLUE DYSTOPIA",
            fullDescription: "파란색만 남겨진 곳에 불시착한 당신,, 이곳은 너무나 낯선 동시에 익숙합니다. 이 웹사이트는 바로 당신같은 사람들을 위해 만들어졌습니다. 파일에 담긴 파란색 단서들은, 당신이 이 세계를 이해하는데에 도움을 줄 것입니다. 단서들을 수집하여 이 파란색 세계의 일면을 보십시오.",
            studentName: "권나연",
            studentId: "2023-17750",
            imageUrl: "./assets/04.jpg",  
            projectUrl: "https://typo2024-04.glitch.me/"
        },
        {
            name: "Typotic Ocean",
            fullDescription: "인터넷은 '정보의 바다'. 그렇다면 그 속을 헤엄치는 글자들은 물고기라고 할 수 있지 않을까? 더 깊은 바다로 스크롤할수록 심해어처럼 더 독특하게 변형된 모습을 가진 디지털 폰트들을 볼 수 있는 웹 페이지.",
            studentName: "박설아",
            studentId: "2020-16874",
            imageUrl: "./assets/05.jpg",  
            projectUrl: "https://seolah-park.github.io/TypoticOcean/"
        },
        {
            name: "(띄)(지) (않)(는) (지)(시)",
            fullDescription: "누구나 수없이 지시받는다. 곳곳에 여러 지시 사항이 새겨져 있다. 그러나 그 중 대부분은 눈에 띄지 않는다. 기꺼이 따라 줄 것을 기대하며 게시된 지시임에도 등한시되는 원인을 찾는다. 일과 중 마주하는 다양한 지시 사항들을 분류하여 아카이빙하는 웹페이지.",
            studentName: "유서연",
            studentId: "2021-19299",
            imageUrl: "./assets/06.jpg",  
            projectUrl: "https://typo2024-06.glitch.me/"
        },
        {
            name: "시모키타자와에서 서울대입구역까지",
            fullDescription: "시모키타자와에서 서울대입구역까지 직접 걸어다니며 모은 → 화살표와 함께 있는 텍스트들.",
            studentName: "홍지우",
            studentId: "2023-18489",
            imageUrl: "./assets/07.jpg",  
            projectUrl: "https://typo2024-07.glitch.me/"
        },
        {
            name: "ㄱ장닌 극자들",
            fullDescription: "타이포는 타이포그래퍼의 의도대로 읽힐 수 있을까? 디자인은 디자이너의 의도대로 전달될 수 있을까? 사람은 사람의 의도대로 소통할 수 있을까? <ㄱ장닌 극자들>은 글자들이 제3의 대상에 의해 훼손되고, 유실된 장면들의 기록이다. 이 과정에서 글자들은 의미를 잃기도 하지만, 새로운 의미를 만들어내기도, 변형된 맥락과 예상치 못한 커뮤니케이션을 거쳐 다층적인 의미의 결합을 만들어내기도 한다.",
            studentName: "최예진",
            studentId: "2022-10291",
            imageUrl: "./assets/08.jpg",  
            projectUrl: "https://typo2024-08.glitch.me/"
        },
        {
            name: "주간짤린더",
            fullDescription: "‘주간짤린더’는 인터넷에서 유행하는 밈들을 모아 내 일상과 연결짓는 프로젝트다. 어울리는 짤과 함께 기록한 나의 기록을 아카이빙하며, 지나간 시간을 생생하게 되돌려보는 디지털 기억 저장소.",
            studentName: "문현수",
            studentId: "2022-18703",
            imageUrl: "./assets/09.jpg",  
            projectUrl: "https://typo2024-09.glitch.me/"
        },
        {
            name: "Mysterious Towel Archive",
            fullDescription: "매일 사용하는 수건 속에는 사실 독특한 타이포그래피 글귀가 숨어 있다. 하지만 이 수건이 우리 집에 언제, 왜 들어왔는지 생각해본 적은 거의 없다. 무심코 지나쳤던 수건의 미스터리한 행적을 추적하며, 각기 다른 이야기를 품고 탄생한 특별한 수건들을 소개한다.",
            studentName: "정선영",
            studentId: "2021-15339",
            imageUrl: "./assets/10.jpg",  
            projectUrl: "https://typo2024-10.glitch.me/"
        },
        {
            name: "김수한무거북이와두루미삼천갑자동방삭",
            fullDescription: "지역, 건설사, 브랜드, 펫네임의 결합으로 끊임없이 길어지는 아파트 이름들. 당신의 아파트 이름은 몇 글자일까?",
            studentName: "홍서경",
            studentId: "2023-18207",
            imageUrl: "./assets/11.jpg",  
            projectUrl: "https://typo2024-11.glitch.me/"
        },
        {
            name: "Open the book",
            fullDescription: "여러 사람이 함께 읽을 수 있는 책에 남겨진 다양한 반응들",
            studentName: "전수정",
            studentId: "2022-18658",
            imageUrl: "./assets/12.jpg",  
            projectUrl: "https://typo2024-12.glitch.me/"
        },
        {
            name: "이상한 버스정류장",
            fullDescription: "욕쟁이할머니, 권춘섭집앞, 작은 대머리, 용사마을... 국내에 실제로 존재하는 버스정류장 이름들이다. 전국 곳곳의 이상하고 특이해서 눈길이 가는 버스정류장 이름들을 모아 주관이 잔뜩 들어간 기준에 따라 분류한 아카이브.",
            studentName: "송나윤",
            studentId: "2019-16431",
            imageUrl: "./assets/13.jpg",  
            projectUrl: "https://typo2024-13.glitch.me/"
        },
        {
            name: "Choco Loco",
            fullDescription: "달콤한 초콜릿에 미친 사람을 위한 아카이빙. 초콜릿 간식들의 로고 타이포를 자판기에서 뽑아 맛볼 수 있는 아카이빙이다.",
            studentName: "황지현",
            studentId: "2023-13097",
            imageUrl: "./assets/14.jpg",  
            projectUrl: "https://typo2024-14.glitch.me/"
        },
        {
            name: "추억 복원 자료집 (Feat.수빈)",
            fullDescription: "내 머릿 속은 추억분쇄기다. 예전의 웃으며 반짝이던 추억들을 쉽게 잊곤 한다. 모든 물체에는 잊은 기억을 떠올리게 하는 능력이 있다. 특히 상대를 생각하며 쓴 편지들은 추억을 보관한 자료집과 같다. 그 중에서도 '수빈'을 중심으로 수집한 자료들을 다양한 별을 통해 보여준다.",
            studentName: "안수빈",
            studentId: "2023-15509",
            imageUrl: "./assets/15.jpg",  
            projectUrl: "https://typo2024-15.glitch.me/"
        },
        {
            name: "거릐의 표지",
            fullDescription: "우리는 매일 도로에서 표지판을 마주하게 된다. 가장 짧은 문구와 최소한의 글자로 사람들에게 방향을 제시한다. 각 나라별로 다양한 색상의 표지판이 있으며, 같은 색상의 표지판이라도 나라에 따라 다른 의미를 가질 수 있다. 그래서 저는 시각적인 관점에서 색상을 기준으로 이 표지판들을 분류해 보았다.",
            studentName: "김해욱",
            studentId: "2020-14923",
            imageUrl: "./assets/16.jpg",  
            projectUrl: "https://horn-aromatic-cashew.glitch.me/"
        },
        {
            name: "MACROButton for Everyday Life",
            fullDescription: "우리는 하루를 보내며 수많은 버튼들을 누른다. 각 버튼에는 사람들로 하여금 목적을 달성시키기 위한 다양한 시각적인 배치가 시도된다.눈에 띄는 것을 최우선으로 고려한 버튼, 개성이 확실한 타이포가 포함된 버튼, 눈에 띄지 않도록 숨겨놓은 버튼 등 목적에 따른 버튼의 시각적 시도를 분류해 아카이빙해보았다.",
            studentName: "민유진",
            studentId: "2021-16038",
            imageUrl: "./assets/17.png",  
            projectUrl: "https://typo2024-17.glitch.me/"
        },
        {
            name: "Google Knows vs. I know",
            fullDescription: "번역과 해석은 다르다."+ "모르는 외국어 글자를 구글 번역을 사용해 번역하고, 스스로 해석해보았을 때 나타나는 네 가지 경우의 수의 아카이빙. ",
            studentName: "전아련",
            studentId: "2021-11853",
            imageUrl: "./assets/18.jpg",  
            projectUrl: "https://typo2024-18.glitch.me/"
        },
        {
            name: "Rachmatypoff",
            fullDescription: "악보 헤더를 구성하는 타이포그래피를 수집하고 배열하였다. 동일한 음악을 다양한 스타일로 나타내는 약 백년간의 악보들의 아카이빙.",
            studentName: "정해관",
            studentId: "2021-19730",
            imageUrl: "./assets/19.png",  
            projectUrl: "https://rachmatypoff.glitch.me/"
        },
        {
            name: "독서의 파편",
            fullDescription: "2024년 한 해 동안 읽은 책을 장르에 따라 분류하고 좋아하는 문장을 소개하는 독서 아카이브. 내 영혼에 흔적을 남기고 간 문장들은 어떤 형태를 띄고 있을까. ",
            studentName: "박가은",
            studentId: "2020-15983",
            imageUrl: "./assets/20.jpg",  
            projectUrl: "https://typo2024-20.glitch.me/"
        },
        {
            name: "RandomMetroText.png",
            fullDescription: "지하철을 탈 때 마주하는 글자들을 랜덤으로.",
            studentName: "권민정",
            studentId: "2021-12513",
            imageUrl: "./assets/21.jpg",  
            projectUrl: "https://typo2024-21.glitch.me/"
        },
        {
            name: "발 없는 말이 천 리 간다",
            fullDescription: "낮말은 새가 듣고 밤말은 쥐가 듣습니다. 가는 말이 고와야 오는 말이 곱습니다. 혀 아래 도끼를 감추고, 한 입으로 두말하거나, 말이 씨가 되는가 하면 발도 없는데 천 리를 달리기도 합니다. '말'에는 질량이 없지만 정보화 시대에는 각종 사이트에서 흘러나온 '텍스트'가 밈화되어 인터넷이라는 구천을 떠돌고 있습니다. 이번에는 그중에서도 대화문을 위주로 붙잡아 두었습니다. 당신도 잡히지 않게 조심하세요.",
            studentName: "신지호",
            studentId: "2022-19063",
            imageUrl: "./assets/22.jpg",  
            projectUrl: "https://typo2024-22.glitch.me/"
        },
        {
            name: "각종 자격증명서 훔쳐보기",
            fullDescription: "명예롭다는 것은 무엇일까? 온갖 자격증명서를 모아놓은 아카이브. 자격증명서의 명예로움은 오로지 대중들의 좋아요에 달려 있다. ",
            studentName: "이재연",
            studentId: "2023-12057",
            imageUrl: "./assets/23.jpg",  
            projectUrl: "https://typo2024-23.glitch.me/"
        },
        {
            name: "사과의 언덕",
            fullDescription: "한번 저지른 잘못은 되돌릴 수 없는 법. 그러나 사과의 기회는 남아있다! 사죄를 위해 작성한 누군가의 사과문들을 모은 웹사이트. 사과의 진정성에 개입하는 요소는 비단 내용뿐이 아니기에 작성자, 사과체로 나누어 사과문을 보고 용서하거나 반려해보자.",
            studentName: "빈채현",
            studentId: "2022-13634",
            imageUrl: "./assets/24.jpg",  
            projectUrl: "https://typo2024-24.glitch.me/"
        },
        {
            name: "Printing on Clothes Archive",
            fullDescription: "옷에 영어문구가 있으면 멋있긴 한데, 무슨 뜻인지..? 옷 위 영어 문구와 번역 아카이브. ",
            studentName: "김수은",
            studentId: "2021-15235",
            imageUrl: "./assets/25.jpg",  
            projectUrl: "https://typo2024-25.glitch.me/"
        },
        {
            name: "그 뭐냐 말에 좀 오타가 약간 많이 달렸는데 뭐랄까 고치기가 좀 많이 어렵습니다.",
            fullDescription: "말할 때 필요없지만 굳이굳이 말하게 되는 말버릇들에 집중하여 아카이빙한 웹사이트. 의도치 않게 나오게 되는 말버릇을 오타에 비유하고 본인의 말버릇을 담아내어 표현하였다.",
            studentName: "박은빈",
            studentId: "2021-10332",
            imageUrl: "./assets/26.jpg",  
            projectUrl: "https://typo2024-26.glitch.me/"
        },
        {
            name: "Laundry Oracle",
            fullDescription: "다양한 세탁 기호와 정보가 빼곡히 적힌 옷 안쪽의 세탁 라벨. 하지만 대부분은 눈길 한 번 받지 못한 채 그대로 세탁기로 직행한다. Laundry Oracle은 옷 속 깊이 숨겨져 쉽게 지나치기 쉬운 이 라벨에, 포춘쿠키처럼 예기치 못한 메시지가 담겨 있을지도 모른다는 상상에서 출발했다. 라벨 속 문구와 기호를 운세 메시지로 재해석하며, 평범한 일상 속 숨겨진 재미와 새로운 시각을 제안하는 작업이다.",
            studentName: "두소진",
            studentId: "2020-17706",
            imageUrl: "./assets/27.jpg",  
            projectUrl: "https://typo2024-27.glitch.me/"
        },
        {
            name: "CAPTCHA Typography",
            fullDescription: "사람과 로봇을 구별하기 위해 사용되는 완전히 자동화된 공개 튜링 테스트, CAPTCHA. 그 중, 텍스트 기반의 CAPTCHA는 단순히 '변형 / 왜곡된 글자' 이상의 의미를 지닌다. 타이포그래피적 특징과 변형 방식을 체계적으로 기록하여 디지털 시대의 타이포그래피를 이해하는 데 조금이나마 기여할 수 있길 기대한다.",
            studentName: "유진호",
            studentId: "2021-10202",
            imageUrl: "./assets/28.jpg",  
            projectUrl: "https://typo2024-28.glitch.me/"
        },
        {
            name: "Beyond the Screen",
            fullDescription: "“화면 너머의 대화”는 동물의 숲 시리즈 속 대사를 수집한 아카이브로, 15년간 변화해온 말풍선과 타이포그래피 디자인의 여정을 탐구한 프로젝트이다. 동물의 숲은 모든 상황을 완벽히 통제할 수 없는 특성 속에서, 플레이어가 마치 실제 대화를 나누는 듯한 몰입감을 느끼게 한다. 말풍선과 타이포는 단순한 텍스트를 넘어 감성과 분위기를 전달하며, 본 프로젝트는 이를 통해 동물의 숲의 시각적 변화와 디자인적 의미를 조명하고자 한다.",
            studentName: "정다인",
            studentId: "2021-14226",
            imageUrl: "./assets/29.jpg",  
            projectUrl: "http://popo-web.shop/beyondTheScreen/index.html"
        },
        {
            name: "24: 독수리의 마지막 비상",
            fullDescription: "한화이글스는 1986년 창단 이래 39년동안 사용해온 이글스파크와 작별을 하고, 새로운 홈구장인 베이스볼드림파크로 이전하는 역사적인 해였다. 이 프로젝트 통해서 한화이글스가 2024년 시즌을 되돌아보며, 이글스파크에서 마지막 비상들을 기록하고 팀의 성과와 의미 있는 순간들을 다시 조명한다. 새로운 홈구장에서 펼쳐질 미래를 기다하며, 팀의 역사에 한 획으로 그은 2024년 시즌의 황홀했던 순간을 수집하고자 한다.",
            studentName: "우성",
            studentId: "2020-11275",
            imageUrl: "./assets/30.jpg",  
            projectUrl: "https://thededtoboca.github.io/typo2024-30/"
        },
        {
            name: "A very personal piece of Fashion",
            fullDescription: "기후위기의 세대에도 여전히 패션은 ‘끊임없이' 변해야만 할까?우리 세대는 변화와 혁신보다 스스로가 오래 지속할 수 있는 ‘취향'을 우선하여 우리가 향유하는 패션의 속도를 스스로 늦춰야 한다. 지극히 개인적이며 지속적인 취향의 패션 키워드를 기반으로, 해당 패션을 다루는 브랜드 로고 아카이빙을 진행했다.",
            studentName: "장동후",
            studentId: "2020-18279",
            imageUrl: "./assets/31.jpg",  
            projectUrl: "https://wispy-surf-8030.animaapp.io/?v=27a7d346-121f-4b1d-b83c-80e49937abfb"
        },
        {
            name: "금지구역",
            fullDescription: "일상 속 금지 표지 아카이브. 금지하는 메시지는 때로 강한 감정을 담고 있고, 때로는 잘 전달되지 않는다. 주관적인 감상에 따라 각 글자들을 사분면에 배치했다.",
            studentName: "하현정",
            studentId: "2021-10305",
            imageUrl: "./assets/32.jpg",  
            projectUrl: "https://typo2024-32.glitch.me/"
        },
        {
            name: "철인(哲人)의 동물원",
            fullDescription: "철학책의 제목에 이런 동물이 등장한다고? 세 곳의 도서관 철학 코너에서 발견한 다양한 동물들을 아카이빙해보았다. 과연 어떤 동물에게서 어떤 깨달음을 얻게 될까?",
            studentName: "한수정",
            studentId: "2023-14088",
            imageUrl: "./assets/33.jpg",  
            projectUrl: "https://typo2024-33.glitch.me/"
        }
    ];
    

    let currentProjectIndex = 0;

    function truncateToWords(text, count) {
        const words = text.trim().split(/\s+/);
        if (words.length <= count) return text;
        return words.slice(0, count).join(' ') + '...';
    }

    function createProjectRow(project, index) {
        const row = document.createElement('div');
        row.className = 'project-row';
        row.innerHTML = `
            <div class="project-name">${project.name}</div>
            <div class="project-description">
                <div class="full-description">${project.fullDescription}</div>
            </div>
            <div class="student-info">
                <div>${project.studentName}</div>
                <div>${project.studentId}</div>
            </div>
            <img class="project-image" src="${project.imageUrl}" alt="${project.name}" loading="lazy">
        `;
        
        row.addEventListener('click', (e) => {
            if (!e.target.closest('.project-description')) {
                openModal(project, index);
            }
        });
        
        return row;
    }

    function openModal(project, index) {
        currentProjectIndex = index;
        modal.style.display = 'block';
        modal.querySelector('h2').textContent = project.name;
        modal.querySelector('iframe').src = project.projectUrl;
        document.body.style.overflow = 'hidden';
        updateNavigationState();
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.querySelector('iframe').src = '';
        document.body.style.overflow = '';
    }

    function navigateProject(direction) {
        currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
        const project = projects[currentProjectIndex];
        openModal(project, currentProjectIndex);
    }

    function updateNavigationState() {
        const prevButton = modal.querySelector('.prev');
        const nextButton = modal.querySelector('.next');
        
        prevButton.style.visibility = currentProjectIndex > 0 ? 'visible' : 'hidden';
        nextButton.style.visibility = currentProjectIndex < projects.length - 1 ? 'visible' : 'hidden';
    }

    modal.querySelector('.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        navigateProject(-1);
    });

    modal.querySelector('.next').addEventListener('click', (e) => {
        e.stopPropagation();
        navigateProject(1);
    });

    modal.querySelector('.home-button').addEventListener('click', closeModal);


    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'ArrowLeft':
                    if (currentProjectIndex > 0) navigateProject(-1);
                    break;
                case 'ArrowRight':
                    if (currentProjectIndex < projects.length - 1) navigateProject(1);
                    break;
                case 'Escape':
                    closeModal();
                    break;
            }
        }
    });

    projects.forEach((project, index) => {
        projectsContainer.appendChild(createProjectRow(project, index));
    });
});
