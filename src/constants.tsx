
import { BarChart3, Grid3X3, Network, QrCode, RotateCw, Users, Map } from 'lucide-react';
import { Experience, SandboxItem, EducationItem, CertificationItem, ImpactProject, SecondaryProject } from './types';

// export const EXPERIENCES: Experience[] = [
//   {
//     company: "Vertigo Games",
//     role: "Senior Frontend Developer",
//     period: "2021 — Present",
//     accentColor: "bg-primary",
//     projects: [
//       {
//         title: "VR Interaction Engine",
//         problem: "Critical de-sync between 50+ concurrent users during physics-based object manipulation.",
//         solution: "Engineered interpolation layer using SharedArrayBuffer and Worker threads for off-main-thread prediction.",
//         impact: "-40% Latency",
//         impactLabel: "IMPACT",
//         tech: ["THREE.JS", "WEBGL", "WEBWORKERS"],
//         icon: "hub"
//       },
//       {
//         title: "Multiplayer Lobby System",
//         problem: "Socket connection exhaustion during peak traffic events (10k+ concurrent lobbies).",
//         solution: "Redesigned state management with Redis-backed sticky sessions and HAProxy scaling.",
//         impact: "99.9% Uptime",
//         impactLabel: "IMPACT",
//         tech: ["NODE.JS", "SOCKET.IO", "REDIS"],
//         icon: "groups"
//       }
//     ]
//   },
//   {
//     company: "O2OZ Logistics",
//     role: "Frontend Developer",
//     period: "2018 — 2021",
//     accentColor: "bg-blue-400",
//     projects: [
//       {
//         title: "Smart Routing Dashboard",
//         subtitle: "REAL-TIME OPTIMIZATION SYSTEM",
//         problem: "Inefficient pathing calculations causing delay in driver updates.",
//         solution: "Implemented client-side Voronoi tessellation for rapid proximity estimation.",
//         impact: "-14% Fuel Cost",
//         impactLabel: "CORE IMPACT",
//         tech: ["VUE", "D3.JS"],
//         icon: "route"
//       },
//       {
//         title: "Virtual High-Density Grid",
//         subtitle: "INVENTORY MANAGEMENT INTERFACE",
//         problem: "DOM bottleneck rendering 100k+ inventory items.",
//         solution: "Built a custom canvas renderer to bypass React reconciliation for bulk data visuals.",
//         impact: "50k+ Live Records",
//         impactLabel: "CORE IMPACT",
//         tech: ["REACT", "CANVAS"],
//         icon: "inventory_2"
//       }
//     ]
//   }
// ];

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
    title: '[파파야 포탈] 다중 게임 운영을 위한 관리자 사이트 고도화',
    category: '관리자 사이트/디자인 시스템',
    impact: '디자인/개발 효율화, 관리 효율 향상',
    problem: '비일관적 스타일 자산, 분산된 UI 컴포넌트, 단일 게임 기준의 관리자 구조',
    solution: '',
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
    title: '[대항해시대 온라인 & EOS] 한국 서비스 런칭 및 이관/운영',
    category: '런칭/인증/이관',
    impact: '런칭/이관 무장애, 사용자 유입',
    problem: '게임 계정 이관, 인증 시스템 연동, 다양한 게임별 사이트 운영',
    solution: '',
    tags: ['Next.js', 'Typescript', 'Zustand', 'SCSS', 'TailwindCSS', 'Cloudflare'],
    iconType: 'network',
    details: [
      'OAuth2 인증 시스템 연동 및 쿠키 기반 세션 관리',
      'postMessage 기반 인증 동기화 로직 설계/구현',
      '사전예약/런칭/계정 이관 사이트 개발 및 운영',
      '런칭 및 계정 이관 과정에서 인증 장애 없이 서비스 운영',
      'Cloudflare Pages/Workers 활용한 배포 및 인증/통신 안정성 확보'
    ]
  },
  {
    id: 'v3',
    title: '[대항해시대 온라인] 클라이언트 내 WebView 가챠 시스템 구축',
    category: 'Legacy 환경 대응/JAMStack',
    impact: 'IE10 환경 대응, 진입 실패 해소',
    problem: 'ES6 미지원 WebView 환경에서 React/Next.js 미동작',
    solution: '',
    tags: ['Javascript', 'jQuery', 'Cloudflare'],
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
    title: '[파파야 글로벌] 신규 이벤트 및 웹 미니 게임 및 템플릿 개발',
    category: '이벤트/게임 엔진/템플릿',
    impact: 'DAU·PU 유지, 연간 공수 80% 절감',
    problem: '이벤트별 반복 개발, UI 구조 비표준',
    solution: '',
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
    title: '[한국에너지기기산업진흥회] 관리자 시스템 신규 개발',
    category: '전자결재/워크플로우/일정관리',
    impact: '결재 처리시간 단축, 업무 효율 향상',
    problem: '수기 결재, 일정/문서 현황 파악 어려움',
    solution: '',
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
    id: 'o2',
    title: '[사주인 - 작명가앱] Android/IOS 개발',
    category: '모바일/인증/결제/데이터분석',
    impact: '운영 복잡도 감소, 서비스 품질 향상',
    problem: '플랫폼별 인증/결제 흐름 상이, 데이터 기반 개선 미흡',
    solution: '',
    tags: ['Angular Ionic', 'PHP', 'Cordova', 'Firebase'],
    iconType: 'network',
    details: [
      '카카오·네이버·구글·애플 4종 소셜 로그인 인증 흐름 통합',
      '세션/토큰 기반 인증 관리 구조 설계 및 공통 인증 모듈화',
      'In-App Purchase 플러그인 기반 결제 검증 및 예외 처리',
      '결제 상태/예외 분기별 다단계 화면 흐름 제어',
      'Firebase Analytics 기반 사용자 행동 데이터 수집/분석 및 개선 사이클 구축',
      '플랫폼 간 인증 흐름 통합, 인앱 결제 시스템 도입, 데이터 기반 서비스 개선'
    ]
  },
  {
    id: 'o3',
    title: '[바이크마트] 쇼핑몰 + 관리자 사이트 개발',
    category: '쇼핑몰/주문 자동화/비동기 최적화',
    impact: 'API 호출량 감소, 운영 공수 절감',
    problem: '비동기 처리/주문 자동화 미흡',
    solution: '',
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
