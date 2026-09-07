
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
    period: '2024.01 ~ 2026.08',
    active: false,
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
    id: 'v5',
    title: 'AI 기반 개발 Workflow 구축 및 생산성 개선',
    category: '개발 프로세스 개선',
    subject: '프로젝트 컨텍스트와 개발 규칙을 구조화하고 AI 기반 UI 구현 및 결과 검증 방식을 개발 Workflow에 적용했습니다.',
    impact: 'AI 개발 컨텍스트·구현 규칙·검증 프로세스 표준화',
    problem: 'AI 활용 시 프로젝트 맥락 손실과 작업 결과의 일관성·검증 기준 부족',
    tags: ['Claude Code', 'Figma MCP', 'AI Agent'],
    iconType: 'grid',
    details: [
      'CLAUDE.md, Plan.md, 프로젝트 Convention을 작성해 프로젝트 구조·코드 스타일·구현 원칙 문서화',
      'Figma MCP와 Claude로 디자인 구조를 분석하고 UI 구현 방향과 프롬프트를 구체화하는 Workflow 구축',
      'AI Agent Harness의 Context 관리, 작업 단위 분할, 결과 검증 방식을 개발 과정에 적용',
      'AI 작업의 일관성과 구현 결과 검증 프로세스를 개선하여 반복적인 UI 개발 생산성 향상'
    ]
  },
  {
    id: 'v0',
    period: '2026.06 ~ 2026.08',
    title: '[클로저스] 글로벌 서비스 게임 런칭 홈페이지 구축',
    category: '글로벌 게임 런칭·운영',
    subject: '클로저스 글로벌 서비스 런칭을 위한 웹사이트와 캐릭터 소개, FAQ, 게임 가이드 등 주요 운영 기능을 개발했습니다.',
    impact: '콘텐츠 확장성 확보, 이미지·API 로딩 최적화',
    problem: '대량 이미지로 인한 초기 로딩 지연과 지속적으로 추가되는 글로벌 콘텐츠의 관리 복잡성',
    tags: ['JavaScript', 'Vue.js', 'SCSS', 'S3'],
    iconType: 'network',
    details: [
      '캐릭터 소개, FAQ, 게임 가이드 등 글로벌 런칭 사이트의 주요 콘텐츠 및 운영 기능 개발',
      '캐릭터와 콘텐츠를 데이터 기반으로 구성하여 지속적인 콘텐츠 추가와 관리가 가능한 구조 구축',
      'Lazy Loading과 WebP 이미지 포맷을 적용해 대량 이미지 페이지의 렌더링 성능과 네트워크 전송량 최적화',
      'FAQ·게임 가이드 API 응답을 인메모리 캐싱하여 동일 세션 내 중복 API 요청 감소',
      'Figma MCP와 Claude를 활용해 디자인 구조와 기존 코드베이스를 함께 분석하는 UI 구현 Workflow 적용'
    ]
  },
  {
    id: 'v1',
    period: '2025.11 ~ 2026.04',
    title: '[파파야 포탈] 다중 게임 운영을 위한 관리자 사이트 고도화',
    category: '관리자 사이트',
    subject: '게임 포탈 관리자 사이트가 한 개의 게임 중심 구조로 개발되어 있어, 다중 게임 관리로 구축이 필요했습니다.',
    impact: '신규 페이지 개발 시간 50% 단축',
    problem: '비일관적 스타일 자산, 분산된 UI 컴포넌트, 단일 게임 기준의 관리자 구조',
    tags: ['Next.js', 'Typescript', 'SCSS', 'Azure'],
    iconType: 'settings',
    details: [
      '단일 게임 중심 구조를 게임 Scope 기반 멀티 게임 구조로 전환하고 메뉴·화면 계층 재설계',
      '게임별 설정과 공통 기능의 책임을 분리하고 서버 중심 상태 구조로 전환하여 상태·설정 충돌 최소화',
      '디자인 토큰 기반 SCSS 변수 체계를 구축하고 Button, Input, Modal 등 공통 UI의 Props 규격 표준화',
      '공통 컴포넌트 시스템을 통해 UI·로직 중복을 줄이고 신규 페이지 개발 시간 50% 단축',
      'lib/service.ts 중심의 Service Layer를 구축하여 API 통신 로직을 UI 컴포넌트에서 분리',
      '공통 API 응답 타입과 데이터 처리 방식을 TypeScript 기반으로 표준화하여 타입 안정성과 확장성 확보'
    ]
  },
  {
    id: 'v2',
    period: '2024.08 ~ 2024.11 / 2025.10 ~2025.11',
    title: '[대항해시대 온라인 & EOS] 한국 서비스 런칭 및 이관/운영',
    category: '런칭/이관 및 공통 컴포넌트 템플릿화',
    subject: '대항해시대 온라인과 EOS의 한국 서비스 런칭 및 넷마블 계정 이관을 위한 웹사이트를 구축하고 운영했습니다.',
    impact: '인증 정합성 확보, 공통 기능 재사용 구조 구축',
    problem: '게임 계정 이관, 인증 시스템 연동, 다양한 게임별 사이트 운영',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'Cloudflare'],
    iconType: 'network',
    details: [
      '자사 OAuth2 인증을 연동하고 Access/Refresh Token을 HttpOnly·Secure 쿠키로 관리하여 토큰 노출 최소화',
      'Next.js Middleware에서 토큰 유효성과 만료를 서버사이드로 검증하여 인증 페이지 접근 제어 표준화',
      '웹과 게임 클라이언트 간 토큰·이벤트 교환을 위한 postMessage 기반 동기화 로직 설계',
      'TanStack Query 캐싱과 API Service Layer를 연계해 서버 상태와 UI 상태의 책임 분리 및 중복 요청 감소',
      '넷마블 계정 이관과 게임별 사전예약·런칭 페이지를 개발하여 서비스 전환과 초기 사용자 유입 지원',
      '커뮤니티·배너·공지 기능을 Shadow DOM Web Component로 모듈화하여 HTML 태그만으로 적용 가능한 구조 구축',
      '공통 컴포넌트의 버전 관리와 배포 구조를 표준화하여 기능 교체와 운영 대응 효율 향상'
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
      'React/Next.js 런타임 렌더링 대신 ES5 타깃 JAMStack 아키텍처로 전환',
      '필요한 Polyfill만 선별 적용하고 ES6 런타임 의존성을 제거하여 IE10 WebView 초기 렌더링 안정화',
      'Cloudflare Workers 기반 Edge Proxy를 구현해 CORS 해결 및 API 요청 라우팅·동적 헤더 제어',
      '백엔드 수정 없이 프론트엔드에서 통신을 제어할 수 있는 구조를 확보하여 배포·협업 비용 절감'
    ]
  },
  {
    id: 'v4',
    period: '2024.04 ~ 2025.08',
    title: '[파파야 글로벌] 신규 이벤트 및 웹 미니 게임 및 템플릿 개발',
    category: '이벤트/게임 엔진/템플릿',
    subject: '다양한 확률형 보상 이벤트 및 웹 미니 게임을 위한 공통 게임 엔진과 템플릿을 개발하였습니다.',
    impact: '연간 반복 개발 90% 절감, UI 요청 월 10건 → 1건 이하',
    problem: '이벤트별 반복 개발, UI 구조 비표준',
    tags: ['Javascript', 'Vue.js', 'SCSS', 'S3'],
    iconType: 'chart',
    details: [
      '확률형 보상, 참여 제한, 상태 저장 등 이벤트 비즈니스 로직을 설계·문서화하여 9개 게임에 공통 적용',
      'API 요청 중 상태 잠금 로직을 적용해 중복 클릭과 네트워크 지연에 따른 Race Condition 방지',
      'Slot 기반 레이아웃과 JSON 설정값으로 이벤트 UI를 구성하도록 화면 구조 표준화',
      '이벤트마다 파일을 새로 만들던 방식을 개선하여 연간 반복 개발 공수 90% 이상 절감',
      '운영팀 UI 수정 요청을 월 평균 10건에서 1건 이하로 감소시켜 개발·협업 비용 절감'
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
    category: '설치 예약 시스템',
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
    title: '[한국에너지기기산업진흥회] 백오피스 시스템 개발 및 유지보수',
    category: '전자결재, 일정관리 워크플로우 구축',
    subject: '수기로 진행되던 결재 프로세스를 전자결재 Workflow로 전환하고 일정·직원·문서 관리 기능을 React 기반 백오피스로 확장했습니다.',
    impact: '결재 알림 자동화, 업무 가시성과 관리 효율 향상',
    problem: '수기 결재로 인한 업무 비효율, 일정 및 문서 현황 파악의 어려움, 부서/사용자별 정보 관리의 복잡성',
    tags: ['React', 'PHP', 'Ag-grid', 'Material UI'],
    iconType: 'settings',
    details: [
      '수기 결재·보고·지출결의를 전자결재로 전환하고 승인 단계 기반 전체 Workflow 설계·구축',
      '결재 유형별 템플릿 자동화와 요청·진행·승인·반려 상태 기반 관리 구조로 진행 상황 추적성 확보',
      'SMS·카카오 알림을 연동해 결재 요청과 일정 알림을 자동화하고 누락·지연과 처리 병목 완화',
      '직원·부서 일정 관리를 위한 커스텀 달력 UI를 구현해 일정과 결재·문서 흐름 시각화',
      '사용자·부서 단위 필터링과 권한 기반 접근 제어로 정보 노출 범위와 행정 처리 효율 개선'
    ]
  },
  {
    id: 'o5',
    period: '2021.09 ~ 2021.11 / 2022.08~2022.09',
    title: '[사주인 - 작명가앱] Android/IOS 개발',
    category: '작명가 앱 개발',
    subject: '사주학 데이터를 기반으로 사용자에게 적합한 이름을 추천하는 Android·iOS 앱의 인증, 결제, 핵심 추천 기능을 개발했습니다.',
    link: "https://play.google.com/store/apps/details?id=sonamusoft.knaming&hl=ko-KR",
    impact: '4종 인증 통합, IAP 예외 대응과 핵심 추천 기능 구축',
    problem: '플랫폼별 상이한 인증·결제 흐름으로 인한 복잡성, 결제 예외 처리의 어려움, 데이터 기반 서비스 개선의 한계',
    tags: ['Angular Ionic', 'PHP', 'Cordova Plugin', 'Firebase'],
    iconType: 'network',
    details: [
      '카카오·네이버·구글·애플 4종 소셜 로그인 흐름을 공통 인증 모듈로 추상화',
      '세션·토큰 기반 인증 관리 구조를 설계해 신규 로그인 추가 시 변경 범위 최소화',
      '인앱 결제 검증·실패·취소·중복 결제 등 예외 상태를 고려한 IAP 처리 로직과 다단계 화면 흐름 구현',
      '사주 데이터를 기반으로 이름을 추천하는 PHP API 핵심 로직 직접 설계·구현',
      '조건별 추천 이름 필터링과 이름 상세 정보를 확인하는 Angular Ionic UI 개발',
      'Firebase Analytics로 주요 행동 흐름과 이탈 구간을 수집·분석할 수 있는 환경 구축'
    ]
  },
  {
    id: 'o6',
    period: '2021.01 ~ 2021.07',
    title: '[바이크마트] 이커머스 쇼핑몰 및 관리자 시스템 구축',
    category: '커머스 플랫폼 주문 관리 시스템 구축',
    subject: '오토바이 용품 쇼핑몰과 내부 운영을 위한 관리자 사이트를 신규 개발하고 구매·주문·재고 관리 흐름을 구축했습니다.',
    link: "https://shop.bikemart.co.kr/",
    impact: '불필요한 API 호출 제거, 주문·재고 운영 자동화',
    problem: '연속 요청에 따른 UI 불일치와 외부 쇼핑몰 주문·재고의 반복적인 수작업 처리',
    tags: ['Angular', 'PHP', 'Ag-grid'],
    iconType: 'route',
    details: [
      'JWT 기반 로그인과 세션 관리 구조를 적용해 로그인 유지와 접근 제어 일관성 확보',
      '장바구니 수량 연속 입력을 단일 요청으로 처리하고 최신 요청만 반영하도록 비동기 API 흐름 개선',
      '지연 응답으로 인한 UI 불일치와 불필요한 API 호출 제거',
      '외부 쇼핑몰 주문 데이터를 연동해 내부 시스템의 주문을 자동 생성하는 관리자 처리 흐름 구현',
      '주문·재고 상태를 관리자 목록에 실시간 반영하여 운영 대응 효율 개선',
      '환불 처리와 고객 휴면 관리 등 운영 기능을 개발하여 반복 수작업 감소'
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
