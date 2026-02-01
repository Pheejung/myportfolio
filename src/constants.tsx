
import { BarChart3, Grid3X3, Network, QrCode, RotateCw, Users, Map } from 'lucide-react';
import { Experience, SandboxItem, EducationItem, CertificationItem, ImpactProject, SecondaryProject } from './types';

export const SANDBOX_ITEMS: SandboxItem[] = [
  {
    title: "Type-Safe Events",
    description: "A tiny utility for strictly typed event emitters in TypeScript.",
    icon: "data_object"
  },
  {
    title: "Procedural UI",
    description: "Algorithm-driven interface generator using Perlin noise.",
    icon: "draw"
  },
  {
    title: "Git Flow Visualizer",
    description: "Canvas-based tool to visualize complex git branch operations.",
    icon: "terminal"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "항해플러스 프론트엔드 코스 7기",
    institution: "항해플러스",
    description: "2025.10 ~ 2025.12 수료"
  },
  {
    degree: "스마트소프트웨어학과",
    institution: "대림대학교",
    description: "2022.03 ~ 2023.02 졸업"
  },
  {
    degree: "모바일 인터넷과",
    institution: "대림대학교",
    description: "2017.03 ~ 2021.02 졸업"
  },
  {
    degree: "클라우드 기반 웹 개발 실무 프로젝트",
    institution: "남부여성발전센터",
    description: "2020.06 ~ 2020.10 수료"
  }
];


export const CERTIFICATIONS: CertificationItem[] = [
  { title: "리눅스 마스터 2급 2020.07" },
  { title: "네트워크관리사 2급 2020.10" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: '버티고우게임즈',
    role: 'Frontend Developer',
    period: '2024.01 ~ 현재',
    active: true,
  },
  {
    company: '오투오즈',
    role: 'FullStack Developer',
    period: '2021.01 ~ 2023.07',
    active: false,
  }
];

export const VERTIGO_PROJECTS: ImpactProject[] = [
  {
    id: 'v1',
    period: '2025.11 ~ 2026.01',
    title: '[파파야 포탈] 다중 게임 운영을 위한 관리자 사이트 고도화',
    category: '관리자 사이트',
    subject: '게임 포탈 관리자 사이트가 한 개의 게임 중심 구조로 개발되어 있어, 다중 게임 관리로 구축이 필요했습니다.',
    impact: '디자인 시스템 구축, 게임 단위 관리 영역 분리',
    problem: '비일관적 스타일 자산, 분산된 UI 컴포넌트, 단일 게임 기준의 관리자 구조',
    tags: ['Next.js', 'Typescript', 'SCSS', 'Azure'],
    iconType: 'settings',
    details: [
      '디자인 토큰 기반 SCSS 변수 체계 통합 및 디자인 시스템 구축',
      '공통 UI 컴포넌트 라이브러리화 및 신규 페이지 구축 속도 단축',
      'Next.js 기반 모듈 단위 구조 설계로 UI/UX 일관성 확보',
      '게임 단위 관리 영역 분리 및 직관적 정보 구조 설계',
      '운영자 중심의 기능/화면 설계로 관리 효율 및 안정성 향상',
      '스타일 및 UI 자산 중복 제거, 커뮤니케이션 비용 절감'
    ]
  },
  {
    id: 'v2',
    period: '2024.08 ~ 2024.11 / 2025.10 ~2025.11',
    title: '[대항해시대 온라인 & EOS] 한국 서비스 런칭 및 이관/운영',
    category: '런칭/이관 및 공통 컴포넌트 템플릿화',
    subject: '대항해시대 온라인 & EOS 한국 서비스 런칭을 위해 웹시아트 및 사전예약·이관 페이지를 개발하였습니다.',
    impact: '런칭/이관 무장애, 사용자 유입',
    problem: '게임 계정 이관, 인증 시스템 연동, 다양한 게임별 사이트 운영',
    tags: ['Next.js', 'Typescript', 'Zustand', 'SCSS', 'TailwindCSS', 'Cloudflare'],
    iconType: 'network',
    details: [
      '사전예약/런칭/계정 이관 사이트 개발 및 운영',
      'OAuth2 인증 시스템 연동 및 쿠키 기반 세션 관리',
      'postMessage 기반 인증 동기화 로직 설계/구현',
      '런칭 및 계정 이관 과정에서 인증 장애 없이 서비스 운영',
      'Cloudflare Pages/Workers 활용한 배포 및 인증/통신 안정성 확보',
      '게임 간 공통으로 사용되는 커뮤니티 게시판, 배너, 공지사항 등을 Shadow DOM 기반 템플릿(Web Component)으로 설계해 반복 개발 없이 재사용 가능하도록 구조화',
      '공통 UI/기능을 Web Component로 모듈화하여 각 게임 사이트에서는 HTML 태그 선언만으로 기능 적용이 가능하도록 구조 전환',
      '컴포넌트 단위로 버전 관리와 배포 프로세스를 표준화하여 운영 효율성과 서비스 일관성 향상',
      '공통 컴포넌트 구조 도입으로 반복 개발 제거, 기능 교체 및 운영 대응 속도 향상'
    ]
  },
  {
    id: 'v3',
    period: '2024.08 ~ 2024.09',
    title: '[대항해시대 온라인] 클라이언트 내 WebView 가챠 시스템 구축',
    category: 'Legacy 환경 대응/JAMStack',
    subject: '대항해시대 온라인 클라이언트의 WebView 환경에서 트레저 체스트 웹 게임을 직접 개발하였습니다.',
    impact: 'IE10 환경 대응, 진입 실패 해소',
    problem: 'ES6 미지원 WebView 환경에서 React/Next.js 미동작',
    tags: ['Javascript', 'jQuery', 'Cloudflare Workers'],
    iconType: 'route',
    details: [
      'JAMStack 아키텍처로 전환, ES5 타깃 빌드/Polyfill 적용',
      'Cloudflare Workers 기반 Edge Proxy로 CORS 이슈 해결',
      'IE10 WebView 환경에서 안정적 화면 렌더링 및 서비스 진입 실패 해소',
      '프론트엔드 단 통신 제어 구조 확보로 운영 비용 절감'
    ]
  },
  {
    id: 'v4',
    period: '2024.04 ~ 2025.08',
    title: '[파파야 글로벌] 신규 이벤트 및 웹 미니 게임 및 템플릿 개발',
    category: '이벤트/게임 엔진/템플릿',
    subject: '다양한 확률형 보상 이벤트 및 웹 미니 게임을 위한 공통 게임 엔진과 템플릿을 개발하였습니다.',
    impact: 'DAU·PU 유지, 연간 공수 80% 절감',
    problem: '이벤트별 반복 개발, UI 구조 비표준',
    tags: ['Javascript', 'Vue.js', 'SCSS', 'S3'],
    iconType: 'chart',
    details: [
      '확률형 보상, 참여 제한, 상태 저장 등 공통 게임 엔진 설계/구현',
      'API 인터셉터/상태 잠금 로직으로 이벤트 참여 상태 안정화',
      'Slot 기반 템플릿 설계로 화면 구조 표준화 및 반복 개발 최소화',
      'JSON 설정값 기반 UI 구성으로 운영팀 요청 대응 효율화',
      '이벤트 로직 안정화로 DAU·PU 지표 유지 및 운영 공수 절감'
    ]
  },
];

export const O2OZ_PROJECTS: ImpactProject[] = [
    {
    id: 'o1',
    period: '2023.06 ~ 2023.07',
    title: '[하프코] 전시 참가 신청 시스템 리뉴얼',
    category: '연도별 전시 참가 신청 시스템 리뉴얼',
    subject: '하프코 전시 참가 신청 프로그램 리뉴얼 및 화면 개선 및 할인제도 변경, 번역 이슈 대응하였습니다.',
    link: "https://www.harfko.com",
    impact: '결재 처리시간 단축, 업무 효율 향상',
    problem: '하프코 2024년도 개최에 맞게 화면 개선, 할인제도 변경 개발, 크롬 자체 번역 기능 오류 해결',
    tags: ['Angular.js', 'PHP'],
    iconType: 'settings',
    details: [
      '하프코 2024년도 개최에 맞게 화면 개선', 
      '할인제도 변경 개발', 
      '크롬 자체 번역 기능이 동적 요소에 적용되지 않는 문제를 MutationObserver로 감지하고, 번역 컨테이너 내부에 이벤트 리스너를 추가해 클릭 이벤트를 정상 처리하도록 개선'
    ]
  },
  {
    id: 'o2',
    period: '2023.04 ~ 2023.07',
    title: '[소전서림] 도서관 예약 시스템 어플리케이션 개발',
    category: '도서관 예약 시스템',
    subject: 'React-Native로 도서관 예약 시스템 어플리케이션을 유지보수 및 개발을 하였습니다.',
    link: "https://play.google.com/store/apps/details?id=com.sojeonseolim.sojeonseolimApp&pcampaignid=web_share",
    impact: '',
    problem: '앱 업데이트 시 업데이트 버전 알림 부재, 이용권 상품 구매 관련 예외처리 오류',
    tags: ['React-Native', 'Spring'],
    iconType: 'settings',
    details: [
      '회원권을 월별로 선택하고 결제할 수 있는 화면을 컴포넌트로 구현.',
      'react-native-version-check 라이브러리를 사용하여 앱 업데이트 알림창을 개발, 사용자가 앱을 업데이트하고 사용할 수 있도록 구축.'
    ]
  },
  {
    id: 'o3',
    period: '2023.01 ~ 2023.02(앱) / 2023.02 ~ 2023.03(웹)',
    title: '가정용 에어컨 설치 예약 시스템 (앱/웹) 개발 및 유지보수',
    category: '도서관 예약 시스템',
    subject: 'React ionic으로 가정용 에어컨 설치 시스템 홈페이지에서 에어컨 설치기사 예약 서비스 개발을 하였습니다.',
    impact: '',
    problem: '',
    tags: ['React(웹)', 'React ionic(앱)', 'PHP'],
    iconType: 'settings',
    details: [
      { type: 'strong', text: '[Android/IOS 앱개발]' },
      '회원가입 시 제조사 설치인증, 자격인증 후 가입 처리 로직 개발.',
      '설치기사 이력등록/신청정보 확인 기능 개발.',
      'React와 TypeScript를 기반으로 컴포넌트 기반 아키텍처를 활용하여 확장 가능하고 재사용 가능한 UI 설계 및 Redux를 도입하여 이력 등록과 관련된 Reducer를 구현하여 상태의 일관성을 유지 및 비동기 작업 관리.',
      'Axios를 사용하여 이력등록/신청정보 API 호출 및 서버와 통신 처리.',
      'React Capacitor Camera 플러그인을 활용하여 사용자가 간편하게 사진을 촬영하고 카메라를 간편하게 사용할 수 있는 컴포넌트를 개발.',
      { type: 'strong', text: '[홈페이지 웹 개발]' },
      '카카오 로그인 API와 네이버 로그인 API를 사용하여 소셜 로그인 기능을 개발하여 웹 서비스에 간편하게 가입하고 로그인 할 수 있도록 기여.',
      '사용자가 에어컨 제품 정보와 주소 등 사용자의 정보들을 Redux로 상태 관리하여 맞춤 업체를 제공하는 시스템을 구현.'
    ]
  },
  {
    id: 'o4',
    period: '2023.04 ~ 2023.07',
    title: '[한국에너지기기산업진흥회] 관리자 시스템 신규 개발',
    category: '전자결재, 일정관리 워크플로우 구축',
    subject: '전자결재, 일정관리, 워크플로우, 직원정보 관리 등 관리자 시스템의 다양한 기능을 개발하였습니다.',
    impact: '결재 처리시간 단축, 업무 효율 향상',
    problem: '수기 결재로 인한 업무 비효율, 일정 및 문서 현황 파악의 어려움, 부서/사용자별 정보 관리의 복잡성',
    tags: ['React', 'PHP', 'Ag-grid', 'Material UI'],
    iconType: 'settings',
    details: [
      '전자결재 시스템 도입으로 결재·보고·지출결의 자동화',
      'DirectSend PHP API로 SMS/카카오 알림 연동 및 결재 요청/일정 알림 기능 구축',
      '결재 단계별 상태(요청·진행·승인·반려) 관리 및 시각화',
      '커스텀 달력 UI로 부서/직원 일정 및 결재/문서 흐름 관리',
      '부서/사용자 단위 필터링, 권한 기반 접근 제어',
      '수기 결재 → 전자결재 전환으로 평균 처리 시간 단축, 결재 병목 완화, 커뮤니케이션 비용 감소'
    ]
  },
  {
    id: 'o5',
    period: '2021.09 ~ 2021.11 / 2022.08~2022.09',
    title: '[사주인 - 작명가앱] Android/IOS 개발',
    category: '작명가 앱 개발',
    subject: '고객에게 이름을 추천 및 사주풀이 하는 앱 개발 및 유지보수하였습니다.',
    link: "https://play.google.com/store/apps/details?id=sonamusoft.knaming&hl=ko-KR",
    impact: '운영 복잡도 감소, 서비스 품질 향상',
    problem: '플랫폼별 상이한 인증·결제 흐름으로 인한 복잡성, 결제 예외 처리의 어려움, 데이터 기반 서비스 개선의 한계',
    tags: ['Angular Ionic', 'PHP', 'Cordova', 'Firebase'],
    iconType: 'network',
    details: [
      '카카오·네이버·구글·애플 4종 소셜 로그인 인증 흐름 통합',
      '세션/토큰 기반 인증 관리 구조 설계 및 공통 인증 모듈화',
      'In-App Purchase 플러그인 기반 인앱 결제 시스템 개발',
      '결제 상태/예외 분기별 다단계 화면 흐름 제어',
      '작명 이름짓기 상품권 등록 개발',
      '이름짓기(기본형) UI 개발',
      'Firebase Analytics 기반 사용자 행동 데이터 수집/분석 및 개선 사이클 구축'
    ]
  },
  {
    id: 'o6',
    period: '2021.02 ~ 2021.06',
    title: '[바이크마트] 쇼핑몰 + 관리자 사이트 개발',
    category: '커머스 플랫폼 주문 관리 시스템 구축',
    subject: '오토바이 부품 쇼핑몰 및 관리자 사이트 개발을 통해 주문/재고 관리 자동화 시스템을 구축하였습니다.',
    link: "https://shop.bikemart.co.kr/",
    impact: 'API 호출량 감소, 운영 공수 절감',
    problem: '비동기 처리/주문 자동화 미흡',
    tags: ['Angular', 'PHP', 'Ag-grid'],
    iconType: 'route',
    details: [
      'RxJS Observable 기반 비동기 API 호출 구조 최적화',
      '장바구니 수량 변경 시 연속 입력을 단일 요청으로 처리',
      '최신 요청만 반영되도록 비동기 처리 흐름 개선',
      '사방넷(쇼핑몰 통합 관리 솔루션) API 연동 파이프라인 구축',
      '외부 쇼핑몰 주문 데이터 자동 수집/생성, 주문/재고 실시간 반영',
      '주문 처리 자동화로 반복 수작업 제거, 운영 오류율 감소'
    ]
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: 'API Gateway Console',
    description: 'Config UI for microservices traffic management.'
  },
  {
    title: 'Predictive Analytics Suite',
    description: 'ML integration for inventory forecasting dashboards.'
  },
  {
    title: 'Enterprise Client Portal',
    description: 'SSO-enabled self-service billing system.'
  }
];

export const getIcon = (type: string, className?: string) => {
  switch (type) {
    case 'network': return <Network className={className} />;
    case 'users': return <Users className={className} />;
    case 'chart': return <BarChart3 className={className} />;
    case 'settings': return <RotateCw className={className} />;
    case 'route': return <Map className={className} />;
    case 'grid': return <Grid3X3 className={className} />;
    case 'scanner': return <QrCode className={className} />;
    default: return <Network className={className} />;
  }
};
