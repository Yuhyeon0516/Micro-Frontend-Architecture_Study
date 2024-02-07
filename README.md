# Micro-Frontend-Architecture_Study

-   MFA, 모노레포, 모듈페더레이션 등을 배워봅시다!

## Micro Frontends 개념 기초 학습

### Monolith

-   Frontend와 Backend, Database에 이르기까지 하나의 팀에서 하나의 프로그램을 함께 만들고, 수정하고 배포하게 됩니다.
-   단점으로는 HTML, API 등을 수정해도 적용하려면 전체를 다시 배포해야함
-   보통 MVP를 빠르게 만들고 사업성을 증명해야할 필요가 있을때 이것을 채용함

### Frontend & Backend

-   더 많은 사람들이 많은 일을 동시에 할 수 있도록, 즉 개발 효율성을 향상시키기 위해서 팀을 분리함
-   팀 간에는 API라는 인터페이스를 기반으로 소통하게 됩니다.

### Frontend & Micro Service Backend

-   백엔드에서 서비스를 더 전문적으로 만들고 고도화 시킬 목적으로 마이크로 서비스를 도입
-   백엔드 API들과 프론트엔드 사이의 비효율성을 개선하기 위해 BFF와 GraphQL이 이때 유행하기 시작함

### Micro Frontends

-   독립적으로 제공 가능한 프론트엔드 애플리케이션이 더 큰 전체로 구성되는 아키텍쳐 스타일
-   MSA(Micro Service Architecture)에서 시작된 Architecture임
-   MSA의 경우 백엔드에서 주로 사용하고 필수 아키텍쳐로 채용되어 있을만큼 유명함

### Monolith Frontend 와 Micro Frontends의 비교

| 비교군            | Monolith Frontend        | Micro Frontends |
| ----------------- | ------------------------ | --------------- |
| 초기 개발 속도    | 빠르다                   | 느리다          |
| 빌드 / 배포 설정  | 단순                     | 복잡            |
| 개발 환경 설정    | 간단                     | 복잡            |
| 커뮤니케이션 비용 | 시스템이 커질수록 커진다 | 작다            |
| 배포 시간         | 느리다                   | 빠르다          |
| 장애 파급 범위    | 크다                     | 작다            |
| 자율성            | 낮다                     | 높다            |

### Micro Frontends 도입 검토 시기

-   프로젝트 규모가 커야함
    -   프로젝트 규모가 크다는 것은
        -   코드의 양이 많아서 크다.
            -   코드가 10만줄 이상이면 도입 고민
        -   팀원이 많다.
            -   프론트엔드 엔지니어가 5인 이상이면 고민
        -   제공하는 기능이 많다.
            -   서비스 페이지가 100페이지 이상이면 고민
            -   제공하는 기능이 50가지 이상이면 고민
    -   규모가 커지면서 Monolith Frontend 시스템에서 나타나는 전조 증상
        -   코드를 수정한 후, 엉뚱한 곳에서 버그가 발생함
        -   새로운 기능을 위해 기존 코드를 활용하기 무서움
        -   간단한 수정 사항을 적용하기 위해 통합, 테스트, 빌드 및 배포 시간이 점점 길어짐
        -   작업을 위한 커뮤니케이션이 점점 늘어남
        -   동일한 기능을 제공하기 위해 여기 저기서 각각 개발하는 일이 늘어난다.

### Micro Frontends 도입의 장점

-   덜 복잡하고, 적은 양의 코드를 관리하여 코드의 품질을 높일 수 있습니다.
-   배포의 범위가 줄어들어 빌드 및 배포 시간이 줄고 위험도가 줄어듭니다.
-   단일 장애 지점 (Single Point Of Failure) 을 피할 수 있습니다.
-   점진적으로 업그레이드 하기에 용이합니다.
-   요구사항에 맞춰 애플리케이션을 자유롭게 조립하여 제공할 수 있습니다.
-   독립적으로 개발 및 배포할 수 있기 때문에 오너십을 가진 팀이 자유롭게 스케줄을 조정할 수 있습니다.
-   팀이 주도적으로 자유롭게 기술 스택을 선택할 수 있습니다.
-   서로 다른 팀이 독립적으로 작업을 할 수 있기 때문에 개발 주기가 더 빨라질 수 있습니다.

### Micro Frontends 도입의 단점

-   중복 코드가 발생할 수 있다.
-   전체적인 리소스의 크기가 커져 성능 저하에 대한 주의가 필요하다.
-   초기 구축 비용이 발생한다.
-   다양한 마이크로 프론트엔드 간의 통합과 통신에서 추가적인 복잡성이 발생할 수 있다.
-   빌드 타임에서는 문제가 발생하지 않지만, 런타임에 동적으로 통합하는 과정에서 문제가 발생할 수 있다.
-   각각 자율적으로 발전하는 마이크로 프론트엔드 간의 일관적인 UX 제공을 위한 장치가 필요하다.
-   마이크로 프론트엔드마다 기술적인 격차가 벌어질 가능성이 있다.

### Micro Frontends 도입이 필요한 경우

-   적절한 규모의 팀을 벗어난 경우

    -   소수의 개발자만 있고 의사 소통에 문제가 없는 경우, 마이크로 프론트엔드가 주는 이점보다는 비용이 더 크다.
    -   마이크로 앱으로 분해하여 각 팀마다 개발할 인원이 충분한 경우
        -   프론트엔드 개발자가 많은 경우
        -   크로스 펑셔널 팀을 조직 가능한 경우

-   기능적으로 마이크로 앱으로 분해가 가능한 경우

    -   서비스가 URL 경로를 기준으로 기능적으로 구분이 가능한 경우
    -   어떤 팀이 어떤 부분에 책임을 가지고 있는지가 명확하게 구분이 가능해야함
        -   불분명하거나 중복된 부분이 발생하지 않아야함

-   런타임에 여러가지 마이크로 앱을 선택적으로 조립해서 제공해야 하는 경우

    -   런타임에 특정 버전을 사용하도록 처리 할 수 있음

-   마이크로 앱이 독립적으로 인프라 구성이 가능한 경우
    -   클라우드 자원을 충분히 활용 가능한 경우
    -   같은 서버에 서로 다른 마이크로 앱을 배포하는 경우 의미가 적어짐

### 서비스를 어떻게 나눠야 할까요?

-   페이지의 구조를 통해 나누는 방법

    -   모든 페이지의 경로를 리스트업하고, 적절한 팀에게 나눠준다.
    -   이미 서비스가 있는 경우에 좀 더 유용할 수 있다.
    -   일부 페이지에는 둘 이상의 목적이 있을 수 있고 그러면 잘라내서 적당한 팀에게 줍니다.
        -   이 부분이 공유 코드 조각이 될 가능성이 있습니다.

-   고객 요구 사항을 중심으로 나누는 방법
-   도메인 주도 설계를 통해 나누는 방법

    -   도메인 기반 설계는 소프트웨어 구조화에 널리 사용되는 접근 방식입니다. 특정 규모의 프로젝트
        에 대해 일관된 모델을 만드는 것이 어렵다는 사실을 인정하고, 서로 명시적인 관계가 있는 더 작
        은 하위 모델을 만들어 이러한 복잡성을 처리하는 패턴을 제공합니다.

    -   DDD 는 프로젝트의 영역을 식별하고 격리하기 위한 일련의 개념과 도구를 제공합니다. 회사의
        다양한 전문가와 부서의 언어를 분석한다는 아이디어, 즉 유비쿼터스 언어를 소개합니다.

    -   어휘의 차이점을 분석하여, DDD 의 핵심 개념 중 하나인 bounded contexts 를 식별할 수 있습니다. bounded contexts 는 서로 관련된 비즈니스 프로세스 그룹으로 볼 수 있습니다. 체크아웃 프로세스는 bounded contexts 로 볼 수 있습니다. 그것은 서로 밀접하게 관련된 배송 및 지불과 같은 다양한 하위 주제로 구성됩니다.

    -   기존에 마이크로서비스 아키텍처가 견고하게 구성되어 있는 경우, 마이크로서비스의 도메인 모델로부터 도움을 받을 수 있습니다.

    -   하지만, 마이크로서비스의 도메인은 UI 로 드러나지 않는 경우도 있기 때문에 어려움이 있을 수 있습니다.

### Micro Frontends 와 Monorepo

-   Monolith Repo

    -   한 저장소에 하나의 앱에 관련된 모든 코드와 리소스를 넣는 방식
    -   프로젝트 하나(React SPA or NestJS 등등)
    -   프로젝트 하나 안에 페이지들, UI 컴포넌트들, 상태 관리 로직 및 데이터 처리 등 모든 것이 들어 있습니다.
    -   Monorepo ≠ Monolith

-   Modular Repo

    -   소스 코드를 분류하여 여러개의 모듈로 나누고 모듈을 각각의 패키지로 만들어 패키지간 필요한 패키지를 가져다 쓰는 방식
    -   패키지간 잘 정의된 관계가 없다면 Monorepo가 아님
    -   이러한 패키지 간 잘 정의된 관계로 여러 패키지를 하나의 레포에서 관리하는 방식이 Monorepo이다.

-   Monorepo 와 Polyrepo

    -   "모듈로 나누어 연관 짓는다"라는 개념 아래서 하나의 Repo로 관리하면 Monorepo, 모듈마다 Repo를 가지고 관리하면 Polyrepo 혹은 Multirepo라고 한다.
    -   Polyrepo에서의 단점 = Monorepo에서의 장점
        -   이슈 수정을 하다가 라이브러리를 수정해야 해서 번거로운 일이 발생한다.
        -   히스토리가 한번에 보이지 않는다.
        -   기존 코드를 활용하려면 추가적인 비용이 든다.
        -   프로젝트를 새로 생성할 때, 비용이 크다.
        -   각 프로젝트마다 설정이 일관적이지 않아 컨텍스트 스위칭과 유지보수 맥락이 끊긴다.
    -   Monorepo에서의 단점 = Polyrepo에서의 장점
        -   상대적으로 의존성 연결이 쉽기 때문에 과도한 의존 관계가 나타날 수 있다.
        -   하나의 CI를 구성할 수는 있지만, 방법이 복잡할 수 있다.
        -   저장소 자체가 빠르게 무거워진다.
        -   모든 코드가 밀집되어있어 사소한 문제가 크게 확대될 가능성이 있다.

-   Monorepo는 결국 잘 정의된 관계를 가진 여러 개의 개별 프로젝트가 포함된 단일 레포지토리이다.

-   Micro Frontends에 Monorepo가 꼭 필요한가?

    -   꼭 필요한것은 아니다.
    -   먼저 여러개의 프로젝트(마이크로 앱)가 모여 하나의 앱을 만들기 때문에 프로젝트는 여러개가 필요하다.
    -   프로젝트들이 잘 정의된 관계를 가지고 있다.
        -   공통으로 쓰는 코드들을 따로 빼서 함께 사용한다
        -   이러한 패키지들이 의존 관계를 명확히 가지고 있어야 한다.
        -   수정된 패키지가 어떤 마이크로 앱들에게 영향을 주는지 확실히 알아야 한다.
            -   이것이 배포의 범위를 결정
    -   이슈 수정을 하다가 라이브러리를 수정해야해서 번거로운 일이 발생하지 않는다.
        -   이슈 기반의 커밋을 하게 된다.
    -   전체 히스토리가 한번에 보인다.
    -   기존 코드를 활용할 때 드는 비용이 작다.
    -   프로젝트를 새로 생성할 때, 비용이 작다.
    -   각 프로젝트마다 설정이 일관적이고 같안 DX를 가질 수 있다.
    -   상대적으로 의존성 연결이 쉽기 때문에 과도한 의존 관계가 나타나지 않도록 주의해야 한다.
    -   방법이 복잡할 수 있지만 함께 하나의 CI를 구성할 수는 있고 일관적인 DX를 발전시킬 수 있다.
    -   Monorepo Tool을 이용해서 성능에 주의를 기울입니다.
    -   모든 코드가 밀집되어 있어 사소한 문제가 크게 확대될 가능성이 있음에 주의하고 여러군데서 사용하는 코드에 대해 여러 프로젝트 담당자들과 함께 충분히 검증한다.

### Monorepo 도입 여부 결정 및 구현 방식 결정

-   Package Manager Workspaces를 이용하여 구현할 수 있다.
-   Monorepo Tool의 필요성.
    -   그냥 Package Manager Workspaces 기능만 활용하면 안될까?
        -   개발 과정에서 여러 패키지들을 사용하고 패키지는 그냥 코드를 바로 사용하는 방식이 아니라 빌드 과정이 필요하기 때문에 속도에 대한 문제가 발생할 수 있고, 예민한 문제이다.
    -   레포지토리 내 워크스페이스에 대한 분석과 시각화 기능을 활용하면 전체를 파악할 때 효과적입니다.
    -   스케폴딩이나 코드 공유 그리고 사용 제한 등의 관리에 수작업이 아니라 도구를 제공하면, 좀 더 편리하다.
    -   Monorepo Tool을 살펴보면 어떤 기능이 있는지 보면 역으로 유용한 기능이 있음을 알 수 있다.
        https://monorepo.tools/

### 통합 방법 설계 및 적절 기술 스택과 도구 선택

-   Server-side template composition
-   Build-time integration
-   Run-time integration via iframes
-   Run-time integration via Web Components
-   Run-time integration via JavaScript
-   Run-time integration via Module Federation
-   Linked SPA & Unified SPA

### 공통 모듈 설계 및 인터페이스 결정

-   재사용 가능한 컴포넌트
-   공통 설정 혹은 유틸리티
-   인프라 레벨의 코드(HTTP Client Wrapper)

### Micro Frontends 와 디자인 시스템

-   디자인 시스템이란?

    -   디자인 시스템은 명확한 표준에 따라 재사용 가능한 구성 요소의 모음으로, 여러 앱을 구축하기 위해 함께 조립할 수 있다.
    -   디자인 시스템은 앱이나 웹사이트와 같은 디지털 제품 설계 및 제품 개발에 도움이 된다.
    -   디자인 시스템에는 패턴 라이브러리, 디자인 언어, 스타일 가이드, 코딩된 구성 요소, 브랜드 언어 및 문서가 포함될 수 있지만 이에 국한되지는 않는다.
    -   디자이너, 개발자, 카피라이터, 프로젝트 관리자 등 다양한 관련 팀이 디지털 제품을 디자인하고 구축하는데 도움이 되는 참고 자료로 사용된다.

-   디자인 시스템 장점

    -   디자인부터 프로덕션 워크플로우까지 간소화
    -   교차 가능 팀 간 및 팀 내에서 통합된 언어 생성
    -   재사용 가능한 컴포넌트와 공유된 논리적 근거를 통해 제작 속도 향상
    -   더욱 응집력 있는 사용자 경험과 일관된 디자인 언어를 통해 더 나은 제품을 제공합니다.
    -   설계 및 기술 부채 감소를 통한 유지 관리 및 확장성 개선
    -   공통된 문제를 해결하여 팀이 사용자 요구 사항을 해결하는데 집중할 수 있으므로 제품팀의 집중력 향상

-   디자인 시스템 레포지토리

    -   Style Guide
        -   스타일 가이드에는 인터페이스 또는 기타 디자인 결과물을 만들기 위한 구체적인 구현 지침, 시작적 레퍼런스 및 디자인 원칙이 포함되어 있습니다.
    -   Component Library
        -   재사용 가능한 UI 요소가 포함되어 있으며 디자이너와 개발자 모두 특정 UI 요소에 대해 배우고 구현할 수 있는 원본의 역할을 합니다.
    -   Pattern Library
        -   UI 요소 그룹 또는 레이아웃의 컬렉션을 제공합니다.
        -   일반적으로 콘텐츠 구조, 레이아웃 또는 템플릿을 포함합니다.
        -   컴포넌트와 마찬가지로 패턴은 재사용하고 조정할 수 있습니다.

-   Micro Frontends 와 디자인 시스템의 관계
    -   Micro Frontends는 하나의 앱이다.
    -   하나의 앱인데 서로 다른 서비스처럼 보이면 완성도가 떨어져 고객의 신뢰가 떨어질 수 있다.
    -   여러 End-to-End 팀들이 각자 작업을 하다보면 파편화가 발생할 수 있고, 생산성에도 문제가 생길 수 있다.
    -   디자인과 개발의 Single Source of Truth가 필요하고, 디자인 원칙과 재사용 가능한 컴포넌트의 관리가 필수적입니다.
    -   디자인 시스템은 일반적으로 관리를 하는 만큼 강력한 힘을 가지게 됩니다.

## Micro Frontends 개념 심화 학습(설계를 위한 Monorepo)

### Micro Frontends 설계의 시작, Monorepo 이해하기

-   싱글 레포지토리(Monolith Repo)

    -   단독으로 동작하는 앱이거나 독립적이고 범용적인 라이브러리에 어울리는 형태

        ![싱글 레포지토리](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/f3144f8c-5de9-47a0-ae1b-ca2428428794)

-   멀티 레포지토리(Multirepo 또는 Polyrepo)

    -   여러개의 레포지토리가 서로 유기적으로 관계를 가지면서 개발하는 방식

        ![멀티 레포지토리](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/fbfa085f-0b54-4bd7-af40-32654f043677)

-   모노 레포지토리(Monorepo)

    -   단일 레포지터리이면서 내부에 여러 패키지가 유기적으로 서로 관계를 가지면서 함께 개발하는 방식

        ![모노 레포지토리](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/5e23337d-1d76-45be-b41a-5b9595323374)

-   Monorepo의 특징

    -   루트 프로젝트가 앱이나 라이브러리가 되지 않습니다. 보통 각각의 워크스페이스를 관리하는 역할을 수행합니다.
    -   루트 프로젝트와 각각의 워크스페이스가 가지고 있는 외부 의존성이 효율적으로 관리되어야 합니다. 이를 위해 적절한 패키지 관리자를 선정해야 합니다.
    -   각각의 워크스페이스를 독립적으로 제작하기 보다는 유기적으로 작업하기 때문에 패키지 간 의존성이 명확해야 하고 의존성을 바탕으로 태스크를 수행해야 합니다. 이를 위해 적절한 모노레포 빌드 시스템 도구를 활용하기도 합니다.
    -   각각의 워크스페이스는 앱으로 실행될 수도 있고, 모듈로서 다른 앱이나 모듈에서 사용될 수 있습니다. 모듈인 워크스페이스는 패키지로 명확하게 노출합니다. 패키지 제작을 위해 여러가지 도구를 사용해야 합니다.

-   Monorepo의 장점

    -   이슈 수정을 하다가 라이브러리를 수정해야 해서 번거러운 일이 발생하지 않습니다.
        -   이슈 기반의 커밋
    -   전체 히스토리가 한번에 보입니다.
    -   기존 코드를 활용할 때 드는 비용이 작습니다.
    -   프로젝트를 새로 생성할 때, 비용이 작습니다.
    -   각 프로젝트마다 설정이 일관적이고 같은 DX 를 가질 수 있습니다.

-   Monorepo의 단점
    -   모노레포를 운영을 위한 추가적인 학습이 필요하고, 모노레포 툴을 사용한다면 툴에 대한 학습도 필요합니다.
    -   상대적으로 의존성 연결이 쉽기 때문에 과도한 의존 관계가 나타날 수 있습니다.
    -   하나의 CI 를 구성할 수는 있지만, 방법이 복잡할 수 있습니다.
    -   많은 코드가 변경될 경우 태스크 실행이 매우 느려질 수 있습니다.
    -   저장소 자체가 빠르게 무거워질 수 있습니다.
    -   모든 코드가 밀집되어 있어 사소한 문제가 크게 확대될 가능성이 있습니다.

### Monorepo로 구성된 Frontend 프로젝트를 위한 도구 학습하기(Package Manager)

-   Package Manager의 필요성

    -   다른 사람이 만들어서 공개한 도구를 가져다가 쓰려면 나의 프로젝트로 가지고 와야한다.
    -   소스 코드를 작성하다가 이미 다른 누군가 작성한 코드가 라이브러리로 제공되고 있습니다. 이를 가져다 쓰려면 나의 프로젝트로 가지고 와야한다.
    -   나의 프로젝트로 가지고 오는 설치 과정 그리고 프로젝트에 무엇이 필요한지 기록해서 관리하는 과정
    -   이러한 이유로 Package Manager가 꼭 필요하고, Default Package Manager는 NodeJS를 설치할 때 함께 설치되는 `npm`이다.

-   npm

    -   사람들은 기본 설치된 npm을 주로 이용했었음
    -   npm 저장소에 npm 패키지를 만들어 올렸음
    -   나의 프로젝트에 패키지를 설치하고 정의해두었음
    -   의존성 문제들이 있었지만, 굉장히 큰 문제이나 사람들은 큰 문제가 아니라고 생각하고 다들 잘 이용하고 있다.

-   yarn classic

    -   npm 의 동작방식을 그대로 가져가면서 아쉬운 부분들을 해결하고자 Facebook, Google 등이 함께 만든 yarn 이 출시되었습니다.
    -   Lock 파일이라는 개념을 도입해서 일관적인 의존성을 재설치 할 수 있었다.
    -   보안도 향상
    -   병렬 설치 기능으로 성능을 향상 시킴
    -   워크스페이스 기능을 도입

-   Phantom Dependency

    -   npm & yarn classic 모두 node_modules의 구조가 플랫하기 때문에 내가 설치하지 않은 의존성을 사용할 수 있게 되었습니다.
    -   이로 인해 많은 위험이 있을 수 있고, 현재도 이 리스크는 가지고 있다.

-   pnpm

    -   기존에 패키지 매니저에 실망감을 가지고 있는 개발자가 pnpm 을 출시합니다.
    -   하드 링크와 소프트 링크를 적절히 사용해서 성능 향성과 디스크 효율성을 강조합니다.
    -   그리고 npm v3 의 플랫한 구조를 버리고 중첩 구조를유지하면서 문제를 해결합니다.(Phantom Dependency를 해결)
    -   워크스페이스 기능을 가지고 있음

-   yarn berry

    -   yarn 의 첫번째 버전과 다른 완전히 새로운 버전이 2020년 출시됨
    -   node_modules 를 사용하지 않고 압축파일을 사용하는 완전히 새로운 개념을 사용합니다. 이를 통해서 설치 시간을 최소화하고 설치하지 않아도 사용 가능한 개념을 선보입니다.
    -   엄격한 의존 관계로 인해 팬텀 디펜던시와 같은 문제가 발생하지 않습니다.
    -   워크스페이스 기능이 계속 존재함

-   npm workspaces 실습

    -   `./npm-link-example`

        -   Monorepo가 나오기 전에는 아래와 같은 `npm link`를 많이 활용했음

            ```shell
            mkdir npm-link-example
            cd npm-link-example
            npm init -y
            mkdir package-a
            cd package-a
            npm init -y
            cd ..
            mkdir node_modules
            ln -s ../package-a ./node_modules/package-a
            # 링크되는 위치(오른쪽) 기준으로 실제 위치(왼쪽) 작성
            mkdir package-b
            cd package-b
            npm init -y
            cd ..
            npm link ./package-b
            # ln -s와 같은 역할을 npm에서 제공
            # 자동으로 현재 root 경로에 node_modules로 link해줌
            ```

    -   `./npm-workspaces-example`

        -   workspaces 기능이 나오면서 `npm link`를 수동으로 할 필요 없어짐

            -   workspaces의 경우 `package.json`의 `workspaces` 속성을 통해 정의

                ```shell
                mkdir npm-workspaces-example
                cd npm-workspaces-example
                npm init -y
                npm init -y -w ./packages/a
                # ./packages/a가 생성되고 그 안에 npm init -y가 자동으로 되며 -w flag로 인하여 root project에 자동으로 workspaces로 연동이 된다.
                npm install -w a axios
                # a workspace에 axios를 install하겠다는 뜻
                npm start -w a
                # a workspace를 실행하겠다는 뜻(a workspace의 package.json내에 start script가 실행됨)
                npm start --ws
                # root project에 연동된 workspaces 전부 start script를 실행함
                ```

-   yarn workspaces

    -   yarn 1.x(classic)

        -   시기상으로 yarn의 workspaces 기능이 npm의 workspaces 기능보다 먼저 나왔음
        -   yarn 1.0부터 기본적으로 사용이 가능함
        -   `npm link`와 마찬가지로 `yarn link`를 대신하여 선언적으로 사용할 수 있음
        -   package.json 파일의 workspaces 속성을 통해 정의(npm과 동일)
        -   프로젝트 내의 모든 패키지의 의존성이 함께 설치되고 관리되어 충돌이 적고, 최적화에 유리함
        -   최종적으로 npm과 같은 방식이기 때문에 같은 한계를 지니고 있음
        -   yarn 1.x에서는 root project에 `private:true`가 설정되어 있어야함

        -   `./yarn-classic-workspaces-example`

            ```shell
            yarn init -y -p
            # -p flag는 private: true로 설정
            mkdir packages packages/a packages/b
            cd packages/a
            yarn init -y
            cd ..
            cd b
            yarn init -y
            # 이후 root project에서 workspaces를 설정
            yarn
            # npm install과 같은 기능
            yarn workspace a add axios
            # a라는 workspace에 axios를 install
            yarn workspace a start
            # a라는 workspace의 start script 실행
            yarn workspaces run start
            # 모든 workspace의 start script 실행
            ```

    -   yarn berry

        -   yarn berry는 yarn의 두 번째 버전이고, 2.x부터 시작하여 이 글을 적는 현재 4.1.0 버전이다.
        -   기본적으로 명시적인 의존 관계를 나타내야 사용이 가능하다.(약간의 불편함?)
        -   `node_modules`에 패키지를 저장하는 방식이 아니라 패키지를 압축하여 한개의 파일을 `.yarn/cache`폴더에 수평적으로 저장한다.
            -   이러한 방식을 Plug'n'Play(PnP)라고 부른다.
            -   수평적으로 존재하기 때문에 빠르게 찾을 수 있다.
            -   압축파일을 설치하기 때문에 파일 개수가 감소하여 설치가 빠르며, Zero Install을 이용하여 저장소에서 함께 관리할 수도 있다.
            -   팬텀 디펜던시가 발생하지 않는다.
        -   아쉬운점

            -   PnP는 기존의 패키지 관리 방식과는 다르기 때문에 어색함
                -   IDE에서 직접 사용하는 많은 도구들을 SDK를 통해 우회 호출할 수 있도록 추가적인 설정이 필요함
            -   Install이 항상 빠르지만은 않음
            -   Zero Install을 이용하여 압축파일들을 가지고 작업하면, 저장소 자체가 매우 커질 수 있음
                -   Zero Install이라고 정말 설치하지 않는것은 아님

        -   `./yarn-berry-workspaces-example`

            ```shell
            mkdir yarn-berry-workspaces-example
            cd yarn-berry-workspaces-example
            corepack enable
            yarn init -2 -w
            # -2 flag로 yarn-berry가 사용되게 되며, -w로 workspaces중 root라고 정의해준다.
            mkdir packages/a packages/b
            cd packages/a
            yarn init
            cd ..
            cd b
            yarn init
            cd ...
            yarn workspace a add axios
            yarn config set enableGlobalCache false
            yarn
            yarn workspace a start
            yarn workspace a remove axios
            yarn workspace b add axios
            yarn workspace a start
            ```

-   pnpm workspaces

    -   pnpm이 추구하는 철학

        -   빠르고, 효율적인 패키지 매니저
        -   모노레포를 지원하고, 평탄하지 않은 node_modules가 기본이기 때문에 엄격한 의존 관리가 가능
        -   시스템 내에 단일 패키지 스토어에 모든 의존성을 보관하기 때문에 디스크 공간이 절약됨
        -   필요한 의존성을 식별하여 스토어로 가져오고, 디렉토리 구조를 계산하여 하드 링크하는 과정을 가지기 때문에 설치 속도가 빠름
        -   기본적으로 pnpm은 symlink를 사용하여 프로젝트의 직접적인 의존성만을 모듈 디렉토리의 루트로 추가합니다.

    -   `./pnpm-workspaces-example`

        ```shell
        mkdir pnpm-workspaces-example
        cd pnpm-workspaces-example
        corepack enable
        pnpm init
        corepack use pnpm@8.15.1
        mkdir packages packages/a packages/b
        cd packages/a
        pnpm init
        cd ..
        cd b
        pnpm init
        cd ...
        pnpm --filter a add axios
        pnpm --filter a start
        pnpm --filter a remove axios
        pnpm --filter b add axios
        ```

### Monorepo로 구성된 Frontend 프로젝트를 위한 도구 학습하기(Build System Tool)

-   패키지 매니저만으로 모노레포를 운영할 수 있을까?

    -   npm, yarn classic, yarn berry, pnpm 에는 전부 Workspaces 기능이 있고 이 기능은 대체로 각 패키지에 독립적으로 무언가를 수행하거나, 전체 패키지를 순회하며 무언가를 수행할 수 있다.
    -   아마도 작은 규모의 모노레포에서는 특별한 문제를 느끼지 않을 수 있습니다. 처음 도입하는 과정에서 느리지 않을 수 있기 때문입니다. 하지만 모노레포는 운영하면서 점점 커지게 되고 결국에는 모노레포를 사용하고 싶지 않을 정도로 느리고 불편해질 수 있다.
    -   느리다는 것은 이런 것입니다. 모노레포 안에 패키지 A, B, C 가 있습니다. A 는 B 를 사용하고, B 는 C 를 사용합니다. C 의 변경으로 인해 B 와 A 도 영향을 받습니다. 빌드를 하거나 테스트를 할때도 이런 관계에 따라서 실행해야 할 부분이 결정됩니다. 하지만 항상 정확한 순서를 기억해서 빌드를 하거나 테스트를 해야합니다. 혹은 하지 않아도 되는 작업을 항상 해야한다.
    -   결국 이렇게 패키지들의 작업 수행을 관리하고 효율적으로 수행하고 싶어진다.

-   모노레포 빌드시스템 도구의 역할

    -   작업의 선후 관계를 정의해서 수행하고, 캐싱을 통해 작업 실행 속도를 높이는 이유로 많은 모노레포 프로젝트에서 모노레포 도구를 사용한다.
    -   오픈 소스 프로젝트에서도 모노레포를 활용하고 그 안의 여러가지 분석 버저닝 배포까지 모노레포 도구를 활용하는 것이 트랜드가 되었다.
    -   작업 수행 속도를 높여 생산성에 도움을 주고, 패키지를 분석하는 도구를 제공하며, 기타 여러 패키지를 관리할 때 도움이 되는 기능을 가지고 있다.
    -   이러한 툴에는 여러가지가 있고, JS/TS 프로젝트 뿐만이 아니라 다른 프로젝트에서 사용할 수 있는 도구들이 많이 있다.
    -   프론트엔드 프로젝트로 Lerna, Nx, Rush, Turborepo를 학습할 예정이다.

-   모노레포 빌드시스템 도구에서 우리가 집중해야할 주요 기능

    -   프로젝트가 커지면 커질수록 태스크 실행을 효율적으로 관리하는 기능에 집중해야 한다.
        -   Task 실행
        -   Task 실행을 조율하는 기능
        -   Task 실행 결과를 캐싱하는 방식

-   lerna

    -   최신 패키지 매니저들은 과거보다 좀더 많은 일들을 해주고 있지만, 초창기에 모노레포를 운영할 때는 사실상 필수적인 도구였음 (yarn workspaces + lerna)
    -   지원 중단을 선언했다가, Nx 를 만들고 있는 Nrwl 이 Lerna 를 계속 유지 관리하기로 함
    -   그래서 기존이 Lerna 의 기능에 Nx 의 기능이 추가된 형태로 변해옴
        -   Task 관리, Cache 기능
    -   여러 기능들을 Nx의 기능으로 실행하기 때문에 이제는 밀접하게 함께 사용되고 있음
    -   여러 패키지를 관리하고 게시하는 기능으로 인해 많은 오픈소스 프로젝트에 사용해옴

        -   패키지 게시, 패키지 변경 사항 체크, 릴리즈 노트 자동 생성 등

    -   핵심 기능

        -   Run Tasks

            -   모노레포 안에는 수백, 수천 개의 패키지를 보유할 수 있으므로 모든(또는 일부) 프로젝트에 대해 스크립트를 실행할 수 있는 것은 핵심 기능임
            -   모든 패키지에 스크립트 실행 - lerna run test
            -   특정 패키지에 스크립트 실행 - lerna run test --scope=a
            -   모든 패키지에 여러 스크립트 실행 - lerna run test,build
            -   스크립트 순서가 필요하다면, nx 의 기능을 이용함 (lerna add-caching)

        -   Cache Task Results

            -   작업의 결과를 캐싱할 수 있습니다. 의도적인 변화가 있을 때만 작업을 재실행하는 기능은 nx 를 이용함 (lerna add-caching)
            -   캐싱을 할 스크립트를 지정할 수 있고 이 내용은 nx.json 에 존재함
            -   캐싱의 출력물을 지정하면 삭제하더라도, 패키지가 변하지 않으면 다시 생성하는 과정을 거치지 않고, 캐싱으로부터 바로 생성됨(빠르다)

        -   Share Your Cache

            -   캐시를 여러 머신에 분산할 수 있습니다. 직접 구현할 수 있겠지만, Nx Cloud 를 이용하면 별도의 구성없이 쉽게 사용이 가능함. 오픈 소스 프로젝트에서는 무료.
            -   사용법은 nx-connect-to-nx-cloud

        -   Explore the Project Graph

            -   모노레포 안에 있는 모든 패키지 간의 의존성 그래프를 생성함.
            -   Nx의 기능이고 사용법은 nx graph

        -   Distribute Task Execution

            -   레포지토리의 핵심이 수정되어 모든 작업을 CI 에서 실행해야 하는 경우, 성능을 개선할 수 있는 유일한 방법은 에이전트 작업을 더 추가하고 작업을 효율적으로 병렬화하는 것 뿐.
            -   Nx Cloud에 연결하고(nx connect-to-nx-cloud), CI에서 DTE를 활성화 시킴(nx generate @nrwl/workspace:ci-workflow --ci=github)

        -   Version and Publish

            -   패키지의 버전을 증가시킬 수 있을 뿐만 아니라 패키지를 npm 에 게시할 수 있으며, 모든 방식으로 사용할 수 있도록 다양한 옵션을 제공
            -   일반적으로 npm 게시를 하지 않는 패키지는 "private": true 를 정의합니다.
            -   버전 증가 lerna version --no-private
            -   npm 에 게시 lerna publish --no-private

        -   Editor Integrations

            -   VSCode에 Nx Console 확장 프로그램이 있음

        -   Workspace Watching

            -   파일 변경을 체크하여 명령을 실행할 수 있는 기능
            -   lerna watch -- echo \$LERNA_PACKAGE_NAME \$LERNA_FILE_CHANGES
            -   lerna watch -- lerna run build --scope=\$LERNA_PACKAGE_NAME
            -   lerna watch -- lerna run build

        -   `./lerna-example`

            ```shell
            mkdir lerna-example
            cd lerna-example
            pnpx lerna init --dryRun
            # --dryRun flag는 앞에 명령어를 실행했을때 예상되는 변경사항을 출력해주는 flag(실제 파일이 생성되지는 않음)
            pnpx lerna init
            corepack use pnpm@8.15.1
            pnpm exec lerna create a -y
            # lerna를 이용하여 package create
            pnpm exec lerna create b -y
            pnpm exec lerna run start --scope=a
            # a package의 start script 실행
            pnpm exec lerna run test
            # lerna로 모든 package의 test 실행
            pnpm exec lerna run test --no-private
            # private의 값이 true가 아닌 package만 실행
            pnpm exec lerna run test,build
            # test와build script를 모두 진행시킴
            pnpm exec lerna add-caching
            # 변경사항이 없을때 cache를 사용하도록 설정
            pnpm exec lerna run test --scope=a --verbose
            # --verbose flag로 자세한 진행사항을 출력함
            # a가 test하기 위해서 a를 build하여야하는데 a가 build되기 위해선 의존성인 b가 build되어야해서 b build -> a build -> a test 순으로 진행됨
            pnpm exec lerna run test --scope=a --verbose
            # 변경사항 없이 다시 진행하면 위와 같은 진행 순서를 가져야하는데 a, b 변경사항이 없으므로 a를 test하기 위해 a build -> a test 순으로 진행되나 cache를 가져옴
            pnpm exec lerna run test --scope=a --verbose
            # a만 변경하고 다시 진행하면 동일하게 a build -> a test 순으로 진행되나 a에 변경점이 생겼기 때문에 cache를 가져오지 않음
            pnpm exec lerna run test --scope=a --verbose
            # b를 변경하고 다시 진행하면 이제 b도 build가 필요하기 때문에 b build -> a build -> a test 순으로 진행됨
            pnpm -w add nx
            # nx console을 사용하기 위해 -w flag로 root project에 nx를 추가함
            pnpm exec nx graph
            # nx conole에서도 graph기능을 지원해주지만 위 명령어로 웹에서 볼 수 있게 실행됨
            pnpm exec lerna version
            # lerna project의 version을 올릴때 사용됨
            pnpm exec lerna watch -- echo \$LERNA_PACKAGE_NAME \$LERNA_FILE_CHANGES
            # lerna의 수정사항을 모니터링하여 package name과 바뀐 file을 출력함
            pnpm exec lerna watch -- lerna run test --scope=\$LERNA_PACKAGE_NAME
            # lerna의 수정사항을 모니터링하여 변경된 package를 test 수행함
            ```

-   nx

    -   현재 가장 많은 기능을 제공하는 모노레포를 위한 도구입니다. 개발자 생산성 향상, CI 성능 최적화, 코드 품질 유지를 위한 최고 수준의 도구
    -   오픈 소스이면서 Nx Cloud 라는 유료 상품을 통해 원격 캐싱 및 분산 태스크 수행과 같은 수준 높은 기능을 간편하게 제공
    -   버전이 올라가면서 사용법이 추가되거나 바뀔 수 있습니다. 설정을 굉장히 다양하고 세밀하게 할 수 있습니다. 중요한 것은 사용자가 어떻게 사용하게 하려는 것인지에 대한 방향성
    -   주요 기능

        -   Run Tasks

            -   nx 는 단일 워크스페이스 혹은 전체 워크스페이스들에 대한 태스크 수행 명령어를 가지고 있음
            -   단일 워크스페이스 태스크 실행 : `nx build my-app`
            -   전체 워크스페이스들에 대한 태스크 실행 : `nx run-many -t build`
            -   전체 워크스페이스들에 대한 여러 태스크 실행 : `nx run-many -t build test`

        -   Cache Task Results
            -   캐싱 기능을 제공. 태스크 실행 명령어를 실행하면, 여러방식의 설정 파일로부터 캐싱을 어떻게 하는지 체크함
            -   nx.json / project.json / package.json 등을 이용해서 설정
            -   lerna 에서 확인했던 비슷한 개념
        -   Use Remote Caching
            -   nx cloud 를 활용해서 손쉽게 사용이 가능 : `nx connect-to-nx-cloud`
        -   Distribution Task Execution
            -   레포지토리의 핵심이 수정되어 모든 작업을 CI 에서 실행해야 하는 경우, 성능을 개선할 수 있는 유일한 방법은 에이전트 작업을 더 추가하고 작업을 효율적으로 병렬화하는 것 뿐
            -   nx cloud에 연결 후 CI에서 DTE를 활성화 : `nx generate @nrwl/workspace:ci-workflow --ci=github`
        -   Explore the Graph
            -   모노레포 안에 있는 모든 패키지 간의 의존성 그래프를 생성 : `nx graph`
        -   Automate Updating Dependencies
            -   사용하는 package versions 들을 업데이트 하거나, 여러가지 도구들의 설정을 업데이트 하거나 심지어 소스코드도 마이그레이션을 자동으로 수행해줌
        -   Enforce Module Boundaries
            -   코드 분석을 사용하여 프로젝트가 서로의 잘 정의된 공용 API 에만 의존할 수 있도록 함
            -   프로젝트가 서로 의존할 수 있는 방식에 선언적으로 제약을 가할 수 있음
            -   Lint 설정을 이용해서 선언적으로 설정한 내용을 바탕으로 제약을 가할 수 있음
        -   Integrate with Editors
            -   nx console이라는 확장을 VSCode에서 제공해줌
        -   Plugin Features
            -   공통적으로 사용 가능한 실행기나 코드를 생성해내는 생성기를 플러그인으로 작성하고 서로 공유할 수 있음

    -   `./nx-example`
        ```shell
        mkdir nx-example
        cd nx-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpx create-next-app@latest
        cd ..
        pnpm --filter my-app dev
        mkdir packages
        cd packages
        mkdir my-utils
        cd my-utils
        pnpm init
        pnpm --filter my-utils add typescript -D
        pnpm --filter my-utils exec tsc --init
        pnpm --filter my-utils build
        cd ...
        pnpm install
        pnpm --filter my-utils build
        pnpm --filter my-app dev
        pnpm -w add nx -D
        pnpm exec nx build my-utils
        pnpm exec nx run-many -t build
        # 모든 Workspace에서 build 진행
        ```

-   rush

    -   rush는 공통 Git 리포지토리에서 많은 패키지를 빌드하고 게시하는 JavaScript 개발자의 삶을 더 쉽게 만들어주는 모노레포 관리 도구
    -   마이크로소프트에서 관리하기 때문에 마이크로소프트의 많은 팀에서 사용하고 있음
    -   다른 모노레포 도구와는 설정이나 동작 방식이 차이가 좀 있음
    -   국내에는 레퍼런스가 많지 않음
    -   많은 부분이 자동화 되어 있고, git 사용을 설정해야 캐싱 기능을 사용할 수 있음
    -   기능과 장점

        -   Ready for large repos
            -   대규모 프로덕션 모노레포를 유지 관리하는 전문 엔지니어에 의해 구축되었고, 동료들에게 최고의 개발자 경험을 제공하는 것이 목표
            -   모노레포를 관리하기 위해 병렬 빌드, 하위 집합 빌드, 증분 빌드 및 분산 빌드를 제공
        -   Designed for large teams
            -   리포지토리 정책을 통해 새로운 패키지 종속성을 승인하기 전에 검토할 수 있음
            -   리포지토리 전체에 일관된 종속성 버전을 적용할 수 있음
            -   프로젝트는 독립적인 버전 관리 전략을 사용하여 개별적으로 게시할 수 있음
        -   Reliable NPM installations
            -   rush 설치 모델은 pnpm 을 활용하여 팬텀 디펜던시를 제거함
            -   lock 파일 탐색기 를 사용하여 버전 충돌을 시각화하고 문제를 해결할 수 있음
        -   Easy to administer
            -   rush를 사용하면 설치 및 빌드가 완전히 결정론적으로 이루어지도록 보장할 수 있음
            -   rush 엔진 버전도 git 브랜치에 따라 자동으로 설치됨
            -   사용자 지정 명령이나 옵션을 정의하면 엄격하게 검증되고 Rush 의 명령줄 도움말의 일부로 문서화 됨
        -   Turnkey solution
            -   rush 는 설치, 링크, 빌드, 변경 로그 생성, 게시 및 버전 범프가 가능한 통합 오케스트레이터 입니다. 이러한 기능은 광범위한 Rush Stack 도구 및 사례와 통합되도록 설계되었음
        -   Open Model
            -   rush는 무료 오픈 소스임

    -   `./rush-example`

        ```shell
        mkdir rush-example
        cd rush-example
        pnpm i @microsoft/rush -g
        rush init
        mkdir projects
        cd projects
        mkdir my-utils
        cd my-utils
        pnpm init
        rush update
        # rush.json의 설정을 변경 시 update 명령어를 사용해야함
        rush add -p typescript --dev
        rush-pnpm exec tsc --init
        rushx build
        # 현재 들어와있는 폴더의 프로젝트의 script를 실행
        cd ..
        pnpx create-next-app@latest
        rush update
        cd my-app
        rushx dev
        rush build
        # rush project 전체 build script 실행
        ```

-   turborepo

    -   특징

        -   Nest.JS를 만든 Vercel이라는 회사에서 인수한 빌드 시스템 도구
        -   모노레포에서만 사용하는 것은 아닙니다. 모노레포의 경우에는 npm, yarn classic, yarn berry, pnpm 의 워크스페이스와 함께 사용 가능하지만, pnpm 을 권장
        -   모노레포 환경에서도 쉽고 빠르게 개발할 수 있는 빌드 환경을 제공하는 것이 목표
        -   프로젝트의 루트 혹은 각 워크스페이스에 turbo.json 이라는 파일을 이용해서 캐싱과 태스크 오케스트레이션을 설정

    -   장점

        -   Turborepo 는 사용자가 빌드한 내용을 기억하고 이미 계산한 내용은 건너뜁니다. (태스크 설정 만으로 기본값이 캐싱 한다는 뜻)
        -   Turborepo 는 타임스탬프 가 아닌 파일 내용 을 보고 빌드해야 할 내용을 파악
        -   쉬고 있는 CPU 를 낭비하지 않고, 모든 코어를 최대로 사용해서 병렬로 실행할 수 있음
        -   원격 빌드 캐시를 팀원 및 CI/CD 와 공유하여 빌드 속도를 더욱 높일 수 있음
        -   작업 간의 관계를 정의한 다음 Turborepo 가 빌드할 항목과 시기를 최적화할 수 있음

    -   주요 기능

        -   Running Tasks : `turbo run test`
        -   Task Dependencies : `turbo run lint test build`
        -   Code Generation : `turbo gen workspace`
        -   Remote Caching : `turbo login`, `turbo link`

    -   `./turborepo-example`
        ```shell
        mkdir turborepo-example
        cd turborepo-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpx create-next-app@latest
        cd ..
        pnpm -w add turbo -D
        mkdir packages
        pnpm exec turbo gen workspace --name my-utils
        # turbo의 Code Generation 기능을 이용하여 my-utils라는 workspace를 생성
        pnpm --filter my-utils add typescript -D
        pnpm --filter my-utils exec tsc --init
        pnpm --filter my-utils build
        pnpm i
        pnpm --filter my-app dev
        pnpm exec turbo build --filter=my-utils
        # my-utils workspace만 build script 실행
        pnpm exec turbo build
        # 모든 workspace의 build script 실행
        ```

-   개인적으로는 nx나 turborepo가 제일 사용하기 편리하고 접근성이 좋은것 같다.

### Monorepo로 구성된 Frontend 프로젝트를 위한 도구 학습하기(트랜스파일러, 컴파일러, 번들러)

-   프론트엔드 프로젝트에서 트랜스파일러, 컴파일러란 무엇인가

    -   자바스크립트는 여러 곳에서 실행이 됨
    -   실행이 되는 곳에서 인식하는 자바스크립트는 차이가 있습니다. 예를 들어 브라우저에서 실행이 될 수 있고, Node.js 를 이용해서 실행이 될 수도 있습니다. 브라우저도 여러 제조사에서 제공하는 다양한 브라우저가 있고 이들 브라우저는 각자가 이해하는 자바스크립트 문법에 차이가 있음
    -   이런 여러 자바스크립트 실행 환경에서 이해하는 자바스크립트 문법이 무엇인지에 대해 목록을 제공하는 사이트도 있음
    -   우리가 작성하는 코드는 이제 더이상 브라우저에서 바로 실행하지 않음
    -   항상 우리가 실행하고자 하는 브라우저에서 이해할 수 있는 문법으로 변경이 필요함
    -   이렇게 변경하는 것을 트랜스파일, 컴파일이라고 함

    -   대표적인 트랜스파일러, 컴파일러

        -   Babel : 기본
        -   TypeScript : 타입 시스템을 가지고 컴파일을 하는 인기있는 컴파일러
        -   esbuild : Go를 기반으로 빠른 속도와 번들링까지 가능한 차세대 대표 트랜스파일러
        -   SWC : Rust를 기반으로 빠른 속도와 쉬운 사용을 목표로 인기를 얻고 있는 트랜스파일러

-   프론트엔드 프로젝트에서 번들러란 무엇인가

    -   우리가 작성하는 코드는 실행 환경에서보다는 우리가 이해할 수 있도록 적절히 파일을 분할하고 구조적으로 작업함
    -   모듈 시스템을 이용해서 모듈간 연결을 만듬
    -   이렇게 최종적으로 작업한 파일은 브라우저에서 실행하기 위해 함께 묶는 작업을 합니다. 이것을 번들링이라고 함
    -   보통은 번들링을 하면서 최적화를 진행
    -   이런 과정을 거친 후 브라우저가 이해할 수 있는 적절한 크기의 파일들(하나 혹은 여러개)로 만들어지고 이것을 실행

    -   대표적인 번들러
        -   Webpack : 기본, 사실상 번들러를 자리잡게한 대표적인 번들러
        -   Rollup : es6 모듈 시스템을 기반으로 라이브러리 번들리에 많이 쓰이는 번들러
        -   Vite : 빠른 속도와 쉬운 사용법으로 인기를 얻어 현재 가장 많이 쓰이는 번들러
        -   esbuild : Go를 기반으로 빠른 속도와 트랜스파일까지 가능한 차세대 대표 번들러

### Monorepo로 구성된 Frontend 프로젝트를 위한 적합 도구 최종 선택

## Micro Frontends 개념 심화 학습(분해와 통합을 위한 여러 기술 비교)
