document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const modal = document.querySelector('.modal');

document.addEventListener('DOMContentLoaded', () =>  {
    const expandButton = document.querySelector('.expand-button');
    const introParagraph = document.getElementById('intro-paragraph');
    
        expandButton.addEventListener('click', () => {
            introParagraph.classList.toggle('hidden'); 
            expandButton.textContent = introParagraph.classList.contains('hidden') ? '과제 소개글' : '과제 소개글 접기';
        });
    });
    
    
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
            projectUrl: "https://typo2024-02.glitch.me/"
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
            name: "Project 09",
            fullDescription: "Full project description 09...",
            studentName: "Student 09",
            studentId: "Student ID 09",
            imageUrl: "./assets/09.jpg",  
            projectUrl: "https://typo2024-09.glitch.me/"
        },
        {
            name: "Project 10",
            fullDescription: "Full project description 10...",
            studentName: "Student 10",
            studentId: "Student ID 10",
            imageUrl: "./assets/10.jpg",  
            projectUrl: "https://typo2024-10.glitch.me/"
        },
        {
            name: "Project 11",
            fullDescription: "Full project description 11...",
            studentName: "Student 11",
            studentId: "Student ID 11",
            imageUrl: "./assets/11.jpg",  
            projectUrl: "https://typo2024-11.glitch.me/"
        },
        {
            name: "Project 12",
            fullDescription: "Full project description 12...",
            studentName: "Student 12",
            studentId: "Student ID 12",
            imageUrl: "./assets/12.jpg",  
            projectUrl: "https://typo2024-12.glitch.me/"
        },
        {
            name: "Project 13",
            fullDescription: "Full project description 13...",
            studentName: "Student 13",
            studentId: "Student ID 13",
            imageUrl: "./assets/13.jpg",  
            projectUrl: "https://typo2024-13.glitch.me/"
        },
        {
            name: "Project 14",
            fullDescription: "Full project description 14...",
            studentName: "Student 14",
            studentId: "Student ID 14",
            imageUrl: "./assets/14.jpg",  
            projectUrl: "https://typo2024-14.glitch.me/"
        },
        {
            name: "Project 15",
            fullDescription: "Full project description 15...",
            studentName: "Student 15",
            studentId: "Student ID 15",
            imageUrl: "./assets/15.jpg",  
            projectUrl: "https://typo2024-15.glitch.me/"
        },
        {
            name: "Project 16",
            fullDescription: "Full project description 16...",
            studentName: "Student 16",
            studentId: "Student ID 16",
            imageUrl: "./assets/16.jpg",  
            projectUrl: "https://typo2024-16.glitch.me/"
        },
        {
            name: "Project 17",
            fullDescription: "Full project description 17...",
            studentName: "Student 17",
            studentId: "Student ID 17",
            imageUrl: "./assets/17.jpg",  
            projectUrl: "https://typo2024-17.glitch.me/"
        },
        {
            name: "Project 18",
            fullDescription: "Full project description 18...",
            studentName: "Student 18",
            studentId: "Student ID 18",
            imageUrl: "./assets/18.jpg",  
            projectUrl: "https://typo2024-18.glitch.me/"
        },
        {
            name: "Project 19",
            fullDescription: "Full project description 19...",
            studentName: "Student 19",
            studentId: "Student ID 19",
            imageUrl: "./assets/19.jpg",  
            projectUrl: "https://typo2024-19.glitch.me/"
        },
        {
            name: "Project 20",
            fullDescription: "Full project description 20...",
            studentName: "Student 20",
            studentId: "Student ID 20",
            imageUrl: "./assets/20.jpg",  
            projectUrl: "https://typo2024-20.glitch.me/"
        },
        {
            name: "Project 21",
            fullDescription: "Full project description 21...",
            studentName: "Student 21",
            studentId: "Student ID 21",
            imageUrl: "./assets/21.jpg",  
            projectUrl: "https://typo2024-21.glitch.me/"
        },
        {
            name: "Project 22",
            fullDescription: "Full project description 22...",
            studentName: "Student 22",
            studentId: "Student ID 22",
            imageUrl: "./assets/22.jpg",  
            projectUrl: "https://typo2024-22.glitch.me/"
        },
        {
            name: "Project 23",
            fullDescription: "Full project description 23...",
            studentName: "Student 23",
            studentId: "Student ID 23",
            imageUrl: "./assets/23.jpg",  
            projectUrl: "https://typo2024-23.glitch.me/"
        },
        {
            name: "Project 24",
            fullDescription: "Full project description 24...",
            studentName: "Student 24",
            studentId: "Student ID 24",
            imageUrl: "./assets/24.jpg",  
            projectUrl: "https://typo2024-24.glitch.me/"
        },
        {
            name: "Project 25",
            fullDescription: "Full project description 25...",
            studentName: "Student 25",
            studentId: "Student ID 25",
            imageUrl: "./assets/25.jpg",  
            projectUrl: "https://typo2024-25.glitch.me/"
        },
        {
            name: "Project 26",
            fullDescription: "Full project description 26...",
            studentName: "Student 26",
            studentId: "Student ID 26",
            imageUrl: "./assets/26.jpg",  
            projectUrl: "https://typo2024-26.glitch.me/"
        },
        {
            name: "Project 27",
            shortDescription: "Project description 27 (truncated to 100 words)...",
            fullDescription: "Full project description 27...",
            studentName: "Student 27",
            studentId: "Student ID 27",
            imageUrl: "./assets/27.jpg",  
            projectUrl: "https://typo2024-27.glitch.me/"
        },
        {
            name: "Project 28",
            fullDescription: "Full project description 28...",
            studentName: "Student 28",
            studentId: "Student ID 28",
            imageUrl: "./assets/28.jpg",  
            projectUrl: "https://typo2024-28.glitch.me/"
        },
        {
            name: "Project 29",
            fullDescription: "Full project description 29...",
            studentName: "Student 29",
            studentId: "Student ID 29",
            imageUrl: "./assets/29.jpg",  
            projectUrl: "https://typo2024-29.glitch.me/"
        },
        {
            name: "Project 30",
            fullDescription: "Full project description 30...",
            studentName: "Student 30",
            studentId: "Student ID 30",
            imageUrl: "./assets/30.jpg",  
            projectUrl: "https://typo2024-30.glitch.me/"
        },
        {
            name: "Project 31",
            fullDescription: "Full project description 31...",
            studentName: "Student 31",
            studentId: "Student ID 31",
            imageUrl: "./assets/31.jpg",  
            projectUrl: "https://typo2024-31.glitch.me/"
        },
        {
            name: "Project 32",
            fullDescription: "Full project description 32...",
            studentName: "Student 32",
            studentId: "Student ID 32",
            imageUrl: "./assets/32.jpg",  
            projectUrl: "https://typo2024-32.glitch.me/"
        },
        {
            name: "Project 33",
            fullDescription: "Full project description 33...",
            studentName: "Student 33",
            studentId: "Student ID 33",
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
