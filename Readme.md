![Cypress](https://github.com/suMin-97/Front_Assignment_Sumin/actions/workflows/Cypress.yml/badge.svg)
![Build](https://github.com/suMin-97/Front_Assignment_Sumin/actions/workflows/Build.yml/badge.svg)

# 프론트엔드 개발 과제

이 프로젝트는 Webpack 설정을 직접 구성하고, react-beautiful-dnd 라이브러리를 사용하여 드래그 앤 드롭 기능을 구현하는 과제입니다. 또한 TypeScript와 Babel을 사용하여 더욱 견고한 코드를 작성하고, Cypress를 이용한 자동화 테스트 및 GitHub Actions을 통한 CI 파이프라인을 구축했습니다.

## 프로젝트 개요

이 애플리케이션은 React, TypeScript, Webpack, Babel을 사용하여 구성되었으며, 사용자 친화적인 드래그 앤 드롭 인터페이스를 제공합니다.

## 설치 및 실행 방법

### 설치

저장소를 클론합니다:

```
git clone https://github.com/suMin-97/Front_Assignment_Sumin.git
```

필요한 패키지를 설치합니다:

```
npm install
```

### 실행

개발 서버를 시작합니다:

```
npm run start
```

## Cypress를 이용한 테스트

프로젝트의 모든 주요 기능은 Cypress를 통해 테스트되었습니다. 테스트는 cypress/e2e/dnd.cy.ts 파일에 위치하고 있으며, 개발 서버가 실행된 상태에서 다음 명령어로 실행할 수 있습니다:

```
npm run cypress
```

## GitHub Actions을 통한 CI 설정

이 프로젝트는 GitHub Actions을 사용하여 지속적 통합(CI) 파이프라인을 구성하였습니다. 모든 푸시에 대해 자동으로 빌드 오류를 테스트하고, Cypress를 이용한 E2E 테스트가 실행됩니다. GitHub Actions 설정은 .github/workflows 폴더를 참조하세요.

## 기술 스택

- React
- TypeScript
- Webpack
- Babel
- react-beautiful-dnd
- Cypress
- GitHub Actions

## 프로젝트 구조

```
├── cypress
│   ├── downloads
│   ├── e2e
│   │   └── dnd.cy.ts
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── components
│   │   ├── Board.tsx
│   │   ├── ColumnCounterButtons.tsx
│   │   ├── DraggableItem.tsx
│   │   ├── DroppableColumn.tsx
│   │   └── index.ts
│   ├── constants
│   │   ├── animation.ts
│   │   ├── index.ts
│   │   └── key-codes.ts
│   ├── features
│   │   ├── index.ts
│   │   └── reorder.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useAnimationEnabled.ts
│   │   ├── useColumnCounterWithItems.ts
│   │   └── useMultiDrag.ts
│   ├── types
│   │   ├── index.ts
│   │   ├── itemsContainerTypes.ts
│   │   ├── propsTypes.ts
│   │   └── styledPropsTypes.ts
│   └── utils
│       ├── getItemsContainer.ts
│       └── index.ts
├── Readme.md
├── cypress.config.ts
├── package-lock.json
├── package.json
├── babel.config.js
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

## 기능 요구사항

1. Webpack 적용: create-react-app의 react-scripts를 사용하지 않고 Webpack을 직접 설정하여 React 애플리케이션을 빌드합니다.

2. 칼럼 확장: 하나의 칼럼에서 네 개의 칼럼으로 확장합니다.

3. 드래그 제약 조건:

   - 첫 번째 칼럼에서 세 번째 칼럼으로는 아이템 이동이 불가능합니다.
   - 짝수 아이템은 다른 짝수 아이템 앞으로 이동할 수 없습니다.
   - 이동할 수 없는 지점으로 드래그할 경우, 사용자가 알 수 있도록 피드백을 제공합니다.

4. 멀티 드래그 구현: 여러 아이템을 동시에 선택하고 드래그할 수 있습니다.
