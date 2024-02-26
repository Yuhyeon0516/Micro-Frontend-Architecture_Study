# Micro-Frontend-Architecture_Study

-   MFA, Monorepo, ModuleFederation 등을 배워봅시다!
-   저는 Fast campus의 강의를 듣고 공부하였습니다~
    https://fastcampus.co.kr/dev_online_mfa

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

-   Babel

    -   동작 원리

        ![동작원리](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/d3b885a4-a08d-4487-b56c-839f3c66e805)

    -   @babel/core @babel/cli

        ![@babel](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/12a745de-5693-4319-9845-cbed3953ef3b)

    -   .babelrc.json (babel.config.json, .babelrc.js, babel.config.js)

        ![babelrc](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/def70549-774d-4d76-8d63-91b54bb7adaa)

    -   Plugin

        ![plugin](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/e309c227-fea4-4d8f-8a01-d068523be006)

    -   Preset

        ![preset](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/068d39f8-adfe-41e6-8480-dac86addc493)

        -   대표적인 preset
            -   @babel/preset-env : 최신 ES 스펙을 가지고 있으며, 세부 관리가 필요 없이 자동으로 필요한 문법만 처리하여 사이즈를 줄여줌
            -   @babel/preset-react : 리액트 사용을 위해 jsx 등을 처리해주는 프리셋
            -   @babel/preset-typescript 타입스크립트 문법을 변환해주는 프리셋. 변환시 타입 에러를 잡을 수 없는 단점이 있음(https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)

    -   어떤 브라우저는 화살표 함수를 이해할 수 있음

        ![화살표 함수](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/d042884b-f415-4cbb-8dbf-f5730084697c)

    -   `./babel-example`

        ```shell
        mkdir babel-example
        cd babel-example
        corepack enable
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add @babel/core @babel/cli -D
        pnpm build
        # 아무런 preset, plugin이 없는상태라 작성한 그대로 build되어 dist에 생성됨
        pnpm add @babel/plugin-transform-arrow-functions -D
        pnpm build
        # 이번엔 plugin을 적용 시켰기 때문에 화살표 함수가 일반 함수로 변환됨
        pnpm add @babel/preset-env -D
        # preset을 이용하여 변환이 필요한 문법만 변환함
        ```

-   Rollup

    -   작은 코드 조각들을 연결하는 모듈 시스템

        ![작은 코드](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/1a2653e0-02de-47e4-a0d7-9dcc9f8d5aef)

    -   cjs - commonjs (Node.js)

        ![Nodejs](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/b9f29013-131b-42f7-802c-962bbf249ca2)

    -   esm - es module (표준 스펙)

        ![표준 스펙](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/15bcdea3-bff3-4d33-a6d7-933b3ea75963)

    -   Rollup이 하는일

        -   표준 모듈 시스템 문법으로 작성된 여러개의 파일로 이루어진 코드를 한개 혹은 몇개로 묶어 주는 역할을 함
        -   묶어주기 때문에 번들러 라고 부름
        -   묶어주는 동작을 하면서 여러가지 일들(compile, minify 등)을 함께 수행하기 위해 여러가지 플러그인을 활용
        -   보통 라이브러리 제작을 위한 번들러로 많이 사용

    -   `./rollup-example`

        ```shell
        mkdir rollup-example
        cd rollup-example
        corepack enable
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add rollup -D
        pnpm build
        ```

-   Terser

    -   Terser란?

        -   자바스크립트 mangler 및 압축기 도구
        -   mangler 는 망가뜨리는 사람, 고기를 써는 기계 라는 뜻. 코드를 실행이 가능한 수준으로만 망가뜨림
        -   Terser는 자바스크립트 코드를 위한 업계 표준 minifier
        -   변수 이름을 작게 만들고, 공백과 주석을 제거하며, 사용하지 않는 코드를 삭제
        -   커맨드라인 명령어 혹은 Node.js API 로 사용이 가능
        -   보통 직접 사용하지 않고, 많은 다른 도구들에서 사용됨

            ex) webpack, angular, parcel 등

        -   커맨드라인 : `terser [input files] [options]`
        -   `./terser-example`
            ```shell
            mkdir terser-example
            cd terser-example
            pnpm init
            corepack use pnpm@8.15.1
            pnpm add terser -D
            pnpm exec terser input.js
            # 옵션없이 실행하면 아래와 같이 한줄로 변환만 해줌
            # function abc(test){const hello="world";console.log(hello,test)}
            pnpm exec terser input.js --mangle
            # mangle 옵션을 사용하면 아래와 같이 망가뜨림
            # function abc(o){const c="world";console.log(c,o)}
            pnpm exec terser input.js --compress
            # comress 옵션을 사용하면 아래와 같이 압축시킴
            # function abc(test){console.log("world",test)}
            pnpm exec terser input.js --compress --mangle
            # compress와 mangle 옵션을 같이 사용하면 아래와 같이 망가뜨리고 압축시킴
            # function abc(o){console.log("world",o)}
            pnpm exec terser input.js --compress --mangle --output dist/output.js
            # dist/output.js에 결과를 생성함
            pnpm exec terser input.js --compress --mangle --output dist/output.js --source-map
            # dist 폴더에 source map 파일이 같이 생겨서 사람이 읽기 쉽게 만들어줌
            ```

-   esbuild

    -   매우 빠른 Web용 번들러
    -   Figma 의 CTO 에 의해 만들어졌음. 차세대 자바스크립트 번들러로 빠르게 인기를 얻고 있음
    -   esbuild 번들러 프로젝트의 주요 목표는 빌드 도구 성능의 새로운 시대를 열고, 그 과정에서 사용하기 쉬운 최신 번들러를 만드는 것
    -   Go 언어를 이용한 병렬 처리로 다른 번들러에 비해 월등한 속도를 자랑함
    -   아직은 0.19 버전으로 1 버전이 출시되지 않았음. 주의해서 사용해야 하고, 계속 기능이 추가되고 있음
    -   esbuild 는 친절하게 모든 개발 경험을 만족시켜주지는 않음. 작은 규모의 코드를 분할해서 패키지화 할때 쓰이거나, 다른 도구들에서 Babel 과 Terser 를 대신하여 사용함
    -   주요 기능
        -   Extreme speed without needing a cache
        -   JavaScript, CSS, TypeScript, and JSX built-in
        -   A straightforward API for CLI, JS, and Go
        -   Bundles ESM and CommonJS modules
        -   Bundles CSS including CSS modules
        -   Tree shaking, minification, and source maps
        -   Local server, watch mode, and plugins
    -   `./esbuild-example`
        ```shell
        mkdir esbuild-example
        cd esbuild-example
        pnpm init
        corepack use pnpm@8.15.1
        cd packages/my-utils
        pnpm init
        cd ...
        pnpm --filter my-utils add esbuild typescript -D
        pnpm --filter my-utils build
        ```

-   SWC

    -   Web을 위한 Rust 기반 플랫폼
    -   SWC 는 차세대 고속 개발자 도구를 위한 확장 가능한 Rust 기반 플랫폼
    -   Speedy Web Compiler 의 약자이며 속도를 무기로 많은 다른 도구와 회사에 퍼져나가고 있음
    -   SWC 는 컴파일과 번들링 모두를 포함하고 있음. 현재는 컴파일에 주로 사용함. 번들링(spack)은 아직 개발 중. Terser 의 역할도 함
    -   SWC 프로젝트의 목표는 “느린 웹 빌드 툴 전체를 러스트로 다시 구현하는 것” 이라고 함
    -   컴파일의 경우 최신 자바스크립트 기능을 사용하여 자바스크립트/타입스크립트 파일을 가져와 모든 주요 브라우저에서 지원되는 유효한 코드를 출력
    -   많은 곳에서 SWC 를 Babel 과 Terser 대신 사용해 속도에 개선을 가져오고 있으며, 그래서 인기가 올라가고 있음
    -   `./swc-example`
        ```shell
        mkdir swc-example
        cd swc-example
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add @swc/cli @swc/core -D
        pnpm exec swc src/arrow.js
        '''결과물
        export var test = function() {
            var hello = "world";
            var world = "unused";
            console.log(hello, "test");
        };
        '''
        pnpm exec swc src/arrow.js
        '''minify 옵션을 true로 줬을때
        export var test=function(){var hello="world";var world="unused";console.log(hello,"test")};
        '''
        pnpm exec swc src/arrow.js
        ''' jsc 옵션으로 mangle과 compress를 진행했을때
        export var test=function(){console.log("world","test")};
        '''
        ```

-   Webpack

    -   Webpack이란?

        ![Webpack1](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/de3619e0-dc17-4660-b7ed-7a6d2cee780a)

        ![Webpack2](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/973d41cc-1374-4e7b-83c9-34053fe868b3)

    -   왜 Webpack을 많이 사용할까?
        -   브라우저에서 자바스크립트를 실행시킬 때, 우리는 \<script> 태그를 이용해서 파일을 추가함. 프로젝트가 커지면 우리는 스크립트를 여러개로 분리해서 \<script> 태그로 적절한 순서로 추가하게됨. 파일이 계속 많아지면, 네트워크 병목의 원인 될 수 있음
        -   위와 같이 안하면, 작은 파일을 그냥 합쳐서 엄청나게 큰 하나의 자바스크립트 파일을 만들어 사용하면됨. 이렇게 하면 유효범위와 크기, 가독성, 유지보수에 문제를 발생시킬 수 있음
        -   IIFE(Immediately Invoked Function Expression, 즉시 실행 함수 표현식)
            -   https://developer.mozilla.org/ko/docs/Glossary/IIFE
            -   유효 범위 문제를 해결하기 위해 즉시 실행 함수들을 사용함. 유효 범위에 대한 걱정없이 파일을 합칠 수 있음
            -   최적화가 어렵고, 코드가 실제로 사용되고 있는지 확인하기도 어려움
            -   만약 lodash 에서 하나의 함수만 사용해도, 전체 라이브러리를 추가하고 모든 것을 뭉쳐야 함
        -   NodeJS 가 채택한 CommonJS 는 모듈을 불러오고 사용할 수 있었음. 그렇지만 브라우저에서는 사용할 수 없었음
        -   라이브 바인딩도 없음. 순환 참조의 문제가 있으며, 동기적인 모듈 해석과 로딩이 느림
        -   브라우저에서 CommonJS의 실행을 가능하게 하는 Browserify와 RequireJS, SystemJS 같은 번들러와 툴들이 만들어졌음
        -   ES Module 이 ECMAScript 표준에서 공식 기능이 되고 있음
        -   그러나 브라우저 지원은 불완전하고, 번들링이 여전히 더 빠름
        -   JavaScript 애플리케이션을 번들로 묶을 수 있는(ESM과 CommonJS 모두 지원) 도구이며, 이미지나 폰트, 스타일 시트 같은 다양한 애셋을 지원하도록 확장할 수 있음
        -   Webpack은 성능과 로딩 시간을 중요하게 생각함. 프로젝트나 사용자에게 최고의 경험을 제공하기 위해 항상 비동기 청크 로딩이나 프리패칭 같은 새로운 기능을 추가하거나 개선하고 있음
    -   Entry
        -   엔트리 포인트는 webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈
        -   webpack 은 엔트리 포인트가 (직간접적으로) 의존하는 다른 모듈과 라이브러리를 찾아냄
        -   기본값은 ./src/index.js 이지만, webpack 설정에서 “entry” 속성을 설정하여 다른 (혹은 여러 엔트리 포인트)를 지정할 수 있음
    -   Output
        -   output 속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack 에 알려주는 역할
        -   기본 출력 파일의 경우에는 ./dist/main.js 로 생성되고, 기타 파일의 경우에는 ./dist 폴더 안에 생성되도록 설정
    -   Loaders
        -   webpack 은 기본적으로 JavaScript 와 JSON 파일만 이해함
        -   로더를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환 하여 애플리케이션에서 사용하거나 디펜던시 그래프에 추가함
        -   로더는 webpack 설정에 두 가지 속성을 가짐
            -   변환이 필요한 파일(들)을 식별하는 test 속성
            -   변환을 수행하는데 사용되는 로더를 가리키는 use 속성
    -   Plugins
        -   플러그인을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입 등과 같은 광범위한 작업을 수행 할 수 있음
        -   플러그인을 사용하려면 require() 를 통해 플러그인을 요청하고 “plugins" 배열에 추가해야 함
        -   대부분의 플러그인은 옵션을 통해 사용자가 지정할 수 있음
        -   다른 목적으로 플러그인을 여러번 사용하도록 설정할 수 있으므로 일반적으로 new 연산자로 호출하여 플러그인의 인스턴스를 만들어야 함
    -   Mode
        -   mode 파라미터를 development, production 또는 none 으로 설정하면 webpack 에 내장된 환경별 최적화를 활성화 할 수 있음
        -   기본값은 production임
    -   `./webpack-example`
        ```shell
        mkdir webpack-example
        cd webpack-example
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add webpack webpack-cli -D
        pnpm exec webpack
        pnpm add lodash
        pnpm exec webpack --config webpack.config.js
        pnpm add babel-loader @babel/core @babel/preset-env -D
        pnpm add html-webpack-plugin -D
        pnpm add webpack-dev-server -D
        ```

-   Vite

    -   차세대 프론트엔드 개발 툴
    -   프랑스어로 “빠르다” 라는 의미
    -   빠르게 개발할 수 있도록 도와주는 개발 도구
    -   Vue 를 개발한 에반 유 가 개발을 위한 개발 서버 기능과 프로덕션을 위한 번들 기능을 가진 빠른 개발 도구를 만들었음.
    -   처음에는 vue 에서 쓰였지만 현재는 React, Svelte 등 대표 웹 프레임워크들과 함께 널리 사용되고 있음
    -   기본으로 타입스크립트 및 각종 css 로더를 내장하고 있으며, HMR 과 개발 서버, Proxy 등을 지원하면서 탄탄한 구성으로 인기를 얻고 있음. 심지어 사용법도 쉽고, 어려가지 프레임워크의 시작 템플릿을 제공
    -   내부적으로 esbuild 와 Rollup 을 사용함.
    -   Webpack 의 복잡한 설정 방식을 좋아하지 않는 Rollup 사용자들을 대거 흡수하면서 기하 급수적으로 생태계가 성장함.
    -   개발 시에 빠르다는 장점으로 많은 프로젝트의 개발 도구를 Webpack 에서 Vite 로 변경시키는 임팩트를 발휘 했음
    -   해결한 문제
        -   지루할 정도로 길었던 서버 구동
            -   콜드 스타트(최초로 실행되어 이전에 캐싱한 데이터가 없는 경우)” 방식으로 개발 서버를 구동할 때, dependencies 와 source code 두 가지 카테고리로 나누어 개발 서버의 시작 시간을 개선
            -   esbuild 를 이용해서 dependencies 를 ESM 으로 불러올 수 있도록 사전 번들링함
            -   vite 는 Native ESM 을 이용해 source code 를 만들어내고, 브라우저가 번들링을 담당함
        -   느렸던 소스 코드 갱신
            -   vite 는 번들러가 아닌 ESM 을 이용해서 HMR 을 지원함
            -   어떤 모듈이 수정되면 vite 는 수정된 모듈과 관련된 부분만을 ESM 으로 다시 만들어 냄
    -   주요 기능
        -   템플릿을 이용해 프로젝트 만들기
            -   Vite 는 Node.js 버전 18+ 또는 20+ 을 필요로 함
            -   일부 템플릿의 경우, 더 높은 버전의 Node.js 를 요구할 수 있음
            -   `pnpm create vite@latest [프로젝트 이름] -- --template [템플릿 이름]`
            -   React 관련 템플릿: react, react-ts, react-swc, react-swc-ts
        -   npm을 이용한 의존성 추가 및 사전 번들링
            -   Vite 를 통해 ESM 스타일로 사전에 번들링 된 CommonJS 및 UMD 모듈을 import 할 수 있음
            -   이 과정은 esbuild 를 통해 이루어지며, JavaScript 기반의 다른 번들러보다 빠른 콜드 스타트가 가능함
            -   /node_modules/.vite/deps/my-dep.js?v=f3sf2ebd 와 같이 URL 을 이용해 ESM 을 지원하는 브라우저에서 모듈을 가져올 수 있도록 import 구문을 수정함
            -   디펜던시는 반드시 캐싱됨
        -   Hot Module Replacement(HMR)
            -   vite 는 기본적으로 ESM 를 통해 HMR API 를 제공함
            -   HMR 기능이 있는 프레임워크는 API 를 활용하여 페이지를 다시 로드하거나 애플리케이션 상태를 날려버리지 않고 즉각적이고 정확한 업데이트를 제공할 수 있음
            -   vite 는 Vue Single File Components, React Fast Refresh 와 같은 First-party HMR 모듈을 제공하고 있음
            -   create-vite 에서 제공하는 템플릿 안에는 HMR 모듈이 포함되어 있기 때문에 굳이 위와 같은 방법을 사용하지 않아도 됨
        -   내장 로더
            -   TypeScript : 트랜스파일만 수행하며, 타입 검사는 IDE 와 빌드 프로세스에서 진행하도록 권장함
            -   JSX : .jsx 와 .tsx 역시 사용이 가능. esbuild 를 이용해 컴파일함
            -   CSS : .css 파일을 가져오면 HMR 을 지원하는 \<style> 태그 를 통해 페이지에 해당 콘텐츠가 주입됨
            -   Png... : 정적 에셋을 import 하는 경우, 이에 대한 Public URL 이 반환됨
            -   JSON : JSON 파일은 바로 Import가 가능. 가져올 필드를 지정하면 트리 세이킹 함
    -   `./vite-example`
        ```shell
        mkdir vite-example
        cd vite-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create vite@latest my-app --template react-swc-ts
        cd ..
        pnpm install
        pnpm --filter my-app dev
        mkdir packages
        cd packages
        pnpm create vite@latest ui-kit --template react-swc-ts
        cd ..
        pnpm install
        pnpm --filter ui-kit build
        pnpm --filter ui-kit add vite-plugin-dts -D
        pnpm --filter ui-kit build
        pnpm --filter my-app dev
        ```

### Monorepo로 구성된 Frontend 프로젝트를 위한 적합 도구 최종 선택

-   패키지 매니저 선택 기준
    -   팬텀 디펜던시는 피해야 함. 패키지가 많아질 수록 의존 관계가 명확하게 선언되어야 함. 수많은 패키지를 여러명이 개발하면서 팬텀 디펜던시로 구멍이 발생한다면 예상치 못한 난관에 빠질 수 있음
    -   yarn berry 는 git 에 많은 부하를 줄 수 있고, pnp 를 지원하지 않는 모듈로 인해 문제가 발생하기도 했으며, 완전한 제로 인스톨은 불가능 함
    -   pnpm 은 node_modules 를 이용한 자연스러운 모듈 사용과 완성도 있는 워크스페이스 기능을 가지고 있음
    -   설치 속도 측면에 항상 pnpm 이 제일 빠른 것은 아니지만 빠른 경우도 많이 있고, 디스크 용량을 줄일 수 있어서 효율적임
-   모노레포 빌드시스템 도구 선택 기준
    -   패키지 빌드 단계에서 속도를 높이고, 태스크 의존 관계에 따라 병렬적으로 수행하는 것이 대규모 레포지토리에서 중요한 영역
    -   소개한 4가지 툴 모두 필요한 기능을 갖추고 있기 때문에 사용법이 편리하고 도구를 사용하는 커뮤니티의 활성화 정도로 선택을 할 수 있음
    -   국내에서 레퍼런스가 많이 없는 Rush 는 제외하고, Nx 계열에서 가장 강력한 기능을 가진 Nx 와 Turborepo 중에 선택을 하는 것이 좋을 것 같음
    -   어느 것을 선택하더라도 우리가 요구하는 기능을 충족. 앞으로 발전 가능성과 현재 유지하고 있는 메인테이너도 둘다 막강함
    -   Vercel 이 만드는 여러가지 오픈 소스들은 간편한 사용으로 기본적인 성능을 끌어내며, 업계를 선두하는 많은 새로운 기능을 빠르게 안정적으로 출시함
-   애플리케이션 및 패키지 개발 도구 선택 기준
    -   마이크로 프론트엔드를 위한 마이크로 애플리케이션 개발을 위해서는 현재 Webpack 를 사용하는 것이 좋음
    -   Webpack 으로 개발을 하며 성능 이슈가 발생할 수 있는데, 성능이 좋은 swc-loader 를 이용해서 개선을 하는 것이 좋음. 단, 프로덕션의 이슈가 있는지 항상 주의를 기울여야 함
    -   패키지를 분리해서 라이브러리로 만드는 경우가 많은데 이때 빠른 개발 환경이면고 종합적으로 편리한 기능을 탑재한 Vite 를 사용하는 것이 효율적. 이때도 swc 를 활용해서 성능을 좀더 끌어올릴 수 있음
    -   요즘은 툴링을 전문 영역으로 하는 엔지니어들이 늘어나고 있음. 항상 새로운 기능과 성능 향상에 대해 학습하며, 현재 일어나는 일을 따라잡아야 함
-   최적의 도구 선택을 위한 결론
    -   정답이 있는건 아님
    -   기능이나 사용법, 그리고 커뮤니티 활성화 정도나 앞으로의 방향을 고려하여 각자 판단하고 도구를 골라야 함
    -   팀원들과 함께 도구 선택을 위해 토론하고, 정보가 확실한지 확인하는 과정이 꼭 필요함
    -   앞에 내용을 바탕으로 pnpm, turborepo, webpack, vite 를 이용해 프로젝트를 진행하도록 하겠음

## Micro Frontends 개념 심화 학습(분해와 통합을 위한 여러 기술 비교)

### 마이크로 프론트엔드를 구현하는 기술 1 : 클라이언트에서 ajax를 이용한 프레그먼트 통합

-   Ajax?

    -   자바스크립트를 이용해서 비동기적으로 서버에 있는 데이터(XML 등)를 받아오는 기법
    -   XML 만을 의미하는 것이 아니라 JSON, HTML 을 이용
    -   과거 브라우저에서는 XMLHttpRequest 를 이용했으나, 최근 모던 브라우저에서는 Fetch 를 이용
    -   현재는 당연한 방식이지만 Ajax 가 대중화되기 전까지는 정적 파일만으로 사이트를 구성했음.
    -   보통 한 서버 안에서 Ajax 를 통해 동적으로 받아온 후 DOM 을 추가하거나 변경하는 식으로 새로고침 없는 서비스 레벨로 진화했고 다른 서버에서 받아오는 방식을 이용해서 분리된 서버 운영을 할 수 있음

-   Ajax를 이용한 템플릿 통합 예제

    -   시나리오 정리
        -   Team Home이 운영하는 정적 파일을 제공하는 웹 서버(localhost:3001)
            -   Pages: `/index.html`
        -   Team Jobs가 운영하는 정적 파일을 제공하는 웹 서버(localhost:3002)
            -   Fragments: `/jobs/fragments/recommendation/index.html`
    -   `./micro-frontends-with-ajax`
        ```shell
        mkdir micro-frontends-with-ajax
        cd micro-frontends-with-ajax
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add turbo -D
        pnpm create vite@latest team-home --template vanilla-ts
        mkdir team-jobs
        cd team-jobs
        pnpm init
        cd ..,
        pnpm install
        pnpm --filter team-jobs add serve
        pnpm exec turbo dev
        ```

-   특징 및 장단점
    -   URL 이 절대적이어야 합니다. (`http://localhost:3002/...`)
    -   다른 서버의 리소스를 가져오지만, 동일한 문서내에서 실행이 되어 자연스럽고, 구현이 어렵지 않음
    -   iframe에 비해 성능 문제가 적음
    -   프레그먼트를 포함하는 팀이 프레그먼트의 높이를 미리 알아내야할 필요가 없음(자동으로 조정이 됨)
    -   에러 처리나 로딩에 관련해서 처리가 용이함
    -   서버에서 템플릿을 생성해서 제공하는 경우에 더 적합함
    -   비동기 로드로 인해 지연이 발생함
        -   이를 위한 사전 협의를 통해 페이지가 깜빡이는 문제를 최소화해야함
    -   스타일과 스크립트의 격리 문제에 주의를 기울여야함
        -   네임스페이스와 같은 규칙을 도입해야함
    -   UI가 네트워크에 의존적임
    -   같은 프레그먼트를 여러 곳에서 사용할 경우 문제가 발생하거나 불필요하게 중복이 발생할 수 있음
    -   프레그먼트에서 스크립트를 사용하는 경우, 페이지의 스크립트와의 연동에 추가적인 구현이 필요함

### 마이크로 프론트엔드를 구현하는 기술 2 : 서버에서 proxy를 이용한 여러 페이지 통합

-   Nginx와 proxy를 이용한 페이지 분리 및 통합 예제

    -   Nginx와 Frontend Proxy Server

        -   Nginx (Reverse Proxy Server) 는 사용자의 요청을 가장 먼저 받고 내부의 서버로부터 리소스를 대신 요청하고 받아 제공하는 중개자 역할을 하며, 여러가지 도움을 줌
            -   로드 밸런싱을 수행해서 성능, 확장성 및 신뢰성을 향상시킬 수 있음
            -   캐싱을 이용해서 동일한 응답을 뒤에 있는 서버에 다시 요청하지 않을 수 있음
            -   외부 사용자로부터 내부의 서버를 숨겨 보안에 도움을 줌
            -   SSL 을 사용해서 암호화가 가능함

    -   예제 시나리오 정리

        -   Team Home 이 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3001`)
            -   Pages: `/index.html`
        -   Team Jobs 가 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3002`)
            -   Pages: `/jobs/index.html`
        -   Team Network 가 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3003`)
            -   Pages: `/network/index.html`
        -   Nginx Reverse Proxy Server(`localhost:3000`)

    -   `./micro-frontends-with-proxy`

        ```shell
        mkdir micro-frontends-with-proxy
        cd micro-frontends-with-proxy
        pnpm init
        corepack use pnpm@8.15.1
        pnpm add turbo -D
        cd apps/nginx-app
        pnpm init
        cd ...
        pnpm --filter nginx-app build
        mkdir teams
        cd teams
        pnpm create vite@latest team-home --template vanilla-ts
        pnpm create vite@latest team-jobs --template vanilla-ts
        pnpm create vite@latest team-network --template vanilla-ts
        cd ..
        pnpm install
        pnpm exec turbo dev
        ```

-   특징 및 장단점

    -   Nginx 를 이용한 Reverse Proxy Server 는 매우 일반적인 형태이며 여기에 Location 을 통한 서버 분리만을 추가하는 형태라서 도입이 쉽다.

    -   각 팀이 다른 도메인을 사용하는 것은 여러가지 측면에서 올바르지 않을 수 있음. 서브 도메인을 활용해서 각 팀이 분리될 수 있지만, 완전히 같은 서비스라는 인식을 주지 않음.
    -   외부에서는 같은 리소스로 인식하기 때문에 cors 와 같은 문제도 해결됨
    -   Location 의 path 로 구별되는 서버라는 것을 인지하고 SPA 를 사용하여 각자 구축할 때 주의해야함 보통 Linked SPA 라고 부릅니다. SPA 사이에서 넘나들때는 a 태그를 이용한 하드 네비게이션을 사용해야함
    -   내부망의 엔드포인트만 공유하고 인프라를 각자의 팀에서 개발 관리할 수 있음
    -   팀이 같은 리소스를 각자 중복으로 사용하게되어 스타일이나 중복 로직을 별도 패키지로 구축하고 함께 사용하는 경우에도 각자 빌드를 통해 따로 유저에게 제공이 됨
    -   각 팀은 각자 앱을 개발하게되며 이로 인해 각 팀의 영역으로 이동시에는 스타일이나 같은 로직을 중복으로 로드해야 할 수 있음. 이것은 머신의 리소스 측면에서는 단점이지만, 완벽하게 서비스는 분리되어 있으므로 장애의 전파는 확실히 차단할 수 있음
    -   팀 간의 이동시에는 하드 링크로 인해 새로 실행하면서 깜박임이 있을 수 있고, 이로 인해 유저 경험이 다소 해칠 수 있으나, 확실한 분리로 인한 장점과 팀 간의 전환이 빈번하지 않은 경우 선택할 수 있는 가장 좋은 옵션임

### 마이크로 프론트엔드를 구현하는 기술 3 : 서버에서 SSI를 이용한 프레그먼트 통합

-   SSI(Server-Side Includes)란?

    -   #include 지시문을 사용하여 하나 이상의 파일 내용을 웹 서버의 웹 페이지에 포함시키는 방법
    -   Nginx 뿐만 아니라 다른 웹서버 에서도 지원하는 기능
    -   웹 서버가 HTML 문서 내에서 지시문을 만나면, 지시문을 해석하여 변환하고 최종 결과물을 만들어서 요청자에게 제공

-   예제 시나리오 정리

    -   Team Home 이 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3001`)
        -   Pages: `/index.html`
    -   Team Jobs 이 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3002`)
        -   Fragments: `/jobs/fragments/recommendation/index.html`
    -   Nginx Reverse Proxy Server(`localhost:3000`)

-   `./micro-frontends-with-ssi`

    ```shell
    mkdir micro-frontends-with-ssi
    cd micro-frontends-with-ssi
    pnpm init
    corepack use pnpm@8.15.1
    pnpm add turbo
    cd apps/nginx-ssi-app
    pnpm init
    pnpm --filter nginx-ssi-app build
    cd ...
    mkdir teams teams/team-home teams/team-jobs
    cd teams/team-home
    pnpm init
    cd ../team-jobs
    pnpm init
    cd ...
    pnpm --filter team-home add serve
    pnpm --filter team-jobs add serve
    pnpm exec turbo dev
    ```

-   특징 및 장단점
    -   SSI 자체는 오래된 기술이며 검증된 기술로 안정성이 높음
    -   서버에서 마크업을 만들어서 제공하기 때문에 검색엔진에서 유리한 경우가 있음
    -   내부망에서의 레이턴시가 낮기 때문에 클라이언트에서 조합하는 것보다 빠름. 클라이언트에서 Ajax 를 통해 다시 서버로 요청하면서 발생하는 추가적인 시간이 없음. 서버에서 다시 서버로 요청한 템플릿을 받아 조합하기 때문에 이때의 네트워크 레이턴시가 적고 리소스를 서비스 제공자 측에 서 관리할 수 있음
    -   템플릿이 동적으로 생성된 것이 아니라, 정적이면 특히 느릴만한 부분이 없으나, 동적으로 템플릿을 생성하는 경우(디비로부터 데이터 조회 후 생성)에는 그만큼의 대기 후에 템플릿이 조합된 후 응답이 내려가서 유저 입장에서는 아예 도큐먼트를 조금도 보지 못하는 시간이 조금 길어질 수 있음
    -   규모가 커지면서 첫 로딩에 문제가 발생할 수 있습니다. 병렬로 템플릿을 합치지만 결국에는 가장 오래걸리는 시간을 따라가게 됨
    -   중첩이 심해지면 좀더 시간이 오래 걸림
    -   일반적으로 유저 인터렉션이 활발한 형태의 앱에서는 잘 맞지 않음. 서버측 통합과 클라이언트측 통합을 적절히 섞어 사용하면 좋음
    -   조합에 실패하는 경우에 대한 계획이 필요함(Fallback 이나 Timeout 설정)
    -   Nginx 의 SSI 기술뿐만 아니라 서버 사이드 랜더링을 하면서 조합을 하는 방법도 있음

### 마이크로 프론트엔드를 구현하는 기술 4 : 클라이언트에서 Web Components를 이용한 프레그먼트 통합

-   Web Components란?

    -   웹 컴포넌트 는 그 기능을 나머지 코드로부터 캡슐화하여 재사용 가능한 커스텀 엘리먼트를 생성하고 웹 앱에서 활용할 수 있도록 해주는 다양한 기술들의 모음
        -   사용자 정의 요소 (Custom Element): 내가 지은 이름의 엘리먼트
        -   캡슐화 (Shadow DOM): 웹 컴포넌트 바깥의 도큐먼트와 분리된 스타일과 스크립트
        -   HTML 템플릿: 일반적으로 랜더되지 않고 웹 컴포넌트 내에서 랜더하며 재사용할 수 있는 \<template>, \<slot> 엘리먼트

-   예제 시나리오 정리

    -   Team Home 이 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3001`)
        -   Web Component: `/bundle.js`
    -   Team Jobs 가 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3002`)
        -   Web Component: `/bundle.js`
    -   Web Service 를 제공하는 Shell App(`localhost:3000`)
        -   Page: `index.html`

-   `./micro-frontends-with-wc`

    ```shell
    mkdir micro-frontends-with-wc
    cd micro-frontends-with-wc
    pnpm init
    corepack use pnpm@8.15.1
    pnpm add turbo -D
    mkdir apps apps/shell
    cd apps/shell
    pnpm init
    cd ...
    pnpm --filter shell add serve
    mkdir teams teams/team-home teams/team-jobs
    cd teams/team-home
    pnpm init
    cd ../team-jobs
    pnpm init
    cd ...
    pnpm --filter team-home add serve
    pnpm --filter team-jobs add serve
    pnpm exec turbo dev
    ```

-   특징 및 장단점
    -   강력한 장점은 웹 표준이라는 것. 오랜 시간 웹 컴포넌트의 스펙이 준비되었고, 다른 어떤 컴포넌트 기반 라이브러리보다도 미래 지향적임
    -   Shadow DOM 을 이용해서 브라우저 레벨에서 격리가 가능함
    -   여러가지 생명 주기 메서드를 오버라이드 해서 구현이 가능함. 이를 이용해서 특정 기술로 만든 프레그먼트를 래핑할 수 있음
    -   클라이언트에서 JS 를 이용할 수 있어야함.
    -   서버사이드에서 바로 랜더가 가능하지 않음(우회 방식으로 템플릿을 문자열로 랜더해서 처리할 수 있음)
    -   Shadow DOM 을 지원하지 않는 브라우저가 있음

### 마이크로 프론트엔드를 구현하는 기술 5 : 클라이언트에서 iframe을 이용한 통합

-   \<iframe>이란?

    -   The Inline Frame element 란 의미
    -   \<iframe> HTML 요소는 중첩된 브라우징 컨텍스트를 나타내며, 현재 페이지에 다른 HTML 페이지를 삽입함

-   예제 시나리오 정리

    -   Team Home 이 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3001`)
        -   Pages: `index.html`
    -   Team Jobs 가 운영하는 정적 파일을 제공하는 웹 서버(`localhost:3002`)
        -   Fragments: `/jobs/fragments/recommendation/index.html`

-   `./micro-frontends-with-iframe`

    ```shell
    mkdir micro-frontends-with-iframe
    cd micro-frontends-with-iframe
    pnpm init
    corepack use pnpm@8.15.1
    pnpm add turbo -D
    mkdir teams
    cd teams
    pnpm create vite@latest team-home --template vanilla-ts
    pnpm create vite@latest team-jobs --template vanilla-ts
    cd ..
    pnpm i
    pnpm exec turbo dev
    ```

-   특징 및 장단점
    -   iframe 은 오래전부터 사용이 가능했고, 그래서 구형 브라우저에서도 사용이 가능함
    -   그냥 서로 다른 도큐먼트이며 별개의 브라우저 컨텍스트를 생성하기 때문에 강력하게 서로 격리됨. 이로 인해 서로 통신을 해야 한다면 추가적인 작업이 필요함
    -   새로운 컨텍스트를 만들어야 하기 때문에 추가적인 메모리 및 CPU 가 필요함
    -   검색 엔진은 iframe 을 개별 페이지로 색인하기 때문에 본 페이지의 내용에서 제외함
    -   단점이 많아 아쉽지만, 오래전부터 결합을 위해 선택하게 되는 선택지 중 가장 대표적인 케이스
    -   성능이나 접근성, SEO 가 중요한 고객 지향적인 서비스를 구축하는 경우 iframe 을 권장하지는 않음

## Micro Frontends 통합의 핵심 기술 Module Federation

### Module Federation 기술 이해하기

-   Module Federation이란?

    -   Module Federation 은 Webpack5 에서 소개된 고급 모듈 통합 기능
    -   여러 JavaScript 애플리케이션 간에 코드를 동적으로 공유할 수 있게 해줌
    -   다른 접근 방식과 달리 모듈 페더레이션은 기존 코드베이스를 변경할 필요가 없으며, 오직 Webpack 이 모듈을 원격으로 로드하도록 처리해줌
    -   모듈 페더레이션은 UI 컴포넌트, 비즈니스 로직 등 모든 유형의 자바스크립트에 사용할 수 있고 모든 자바스크립트를 공유할 수 있음
    -   마이크로프론트엔드 아키텍처에서 특히 유용하며, 다양한 애플리케이션들이 서로 독립적으로 개발되고 배포될 수 있도록 지원함

-   Module Federation 핵심 구성요소

    -   Host
        -   Host 애플리케이션은 다른 애플리케이션(remotes)으로부터 모듈을 로드함.
        -   Host 는 웹 애플리케이션의 '메인' 부분으로 생각할 수 있음.
    -   Remote
        -   Remote 애플리케이션은 Host 에 로드될 수 있는 모듈을 제공함.
        -   이들은 독립적으로 배포할 수 있는 별도의 코드베이스를 가짐
    -   Shared
        -   Shared 모듈은 여러 애플리케이션 간에 공유되는 의존성임.
        -   이를 통해 중복된 코드의 로딩을 방지하고, 일관된 의존성 관리를 가능하게함.

-   Module Federation 동작 원리

    1. 플러그인 구성
        - ModuleFederationPlugin 은 Webpack 설정 파일에서 구성되며, 원격 호스트와 공유할 모듈 등의 세부 사항을 정의함
    2. 원격 엔트리 파일 생성
        - 플러그인은 원격 애플리케이션을 위한 remoteEntry.js 파일을 생성하는데, 이 파일은 원격 애플리케이션의 인터페이스 역할을 하며, 호스트 애플리케이션에서 원격 모듈을 로드할 때 사용함
    3. 모듈 노출
        - 원격 애플리케이션에서는 exposes 객체를 통해 특정 모듈을 외부에 노출함.
        - 이렇게 함으로써, 다른 애플리케이션들이 이 모듈을 사용할 수 있게함.
    4. 동적 모듈 연결
        - 호스트 애플리케이션은 원격 애플리케이션의 remoteEntry.js 를 참조하고, 필요한 모듈을 동적으로 로드함.
        - 이는 주로 import() 문을 사용하여 수행함

-   Module Federation 동작 원리의 이해

    ![1](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/1c8ff3c8-8170-47cc-ba89-f8cea0b48046)

    ![2](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/e8e9a69e-9955-4b78-95ad-d5c1f068a6ae)

    -   Remote 애플리케이션은 자체적인 빌드 과정을 통해 remoteEntry.js 와 같은 원격 엔트리 파일을 생성하고, 이 파일은 원격 모듈의 메타데이터와 주소를 포함함.
    -   Host 애플리케이션은 remoteEntry.js 를 참조하여 필요한 모듈을 요청하고, 이 요청은 Webpack의 런타임 코드에 의해 처리되며, 필요한 경우 네트워크를 통해 해당 모듈을 로드함.

-   Vite 의 Module Federation 플러그인 이해

    -   @originjs/vite-plugin-federation 소개

        -   Module Federation 을 지원하는 Vite/Rollup 플러그인.
        -   Webpack 에서 영감을 받았으며 Webpack Module Federation 과 호환되는 것을 목표로 함
        -   Vite 공식 지원 플러그인이 아니기 때문에 프로덕션에서의 안정성을 Vite 에서 담보하진 않음
        -   Vite 를 만든 Evan You 는 2023 ViteConf 에서 Module Federation 에 대한 부족함을 언급함(https://www.youtube.com/watch?v=veCxKeLl35A&t=1400s)
        -   호스트 측에서만 개발 모드를 지원하며, 리모트 측에서는 vite build 를 사용하여 remoteEntry.js 를 생성해야함
        -   리모트에서 vite build —watch 를 이용하면 개발 모드에서 도움이 됨

    -   Vite Module Federation 설정

        1. 플러그인을 이용해서 remote 앱을 설정
            - vite.config.ts 설정 파일에서 구성되며, 공유할 모듈의 name, filename, exposes, shared 등을 정의함
        2. 원격 엔트리 파일 생성
            - 플러그인은 원격 애플리케이션을 위한 remoteEntry.js 파일을 생성하며, Vite 의 개발 모드로는 원격 엔트리 파일이 생성되지 않기 때문에 vite build 를 이용함
        3. host 앱의 설정에 remote 앱을 등록
            - 원격 애플리케이션의 exposes 객체를 통해 모듈을 사용하려면 host 앱의 vite.config.ts 에 remotes 부분에 remote 앱을 등록함
        4. 동적 모듈 연결
            - 호스트 애플리케이션의 코드애서 import() 를 통해 원격 모듈을 사용함

    -   vite.config.ts 설정

        ![3](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/419c9343-6170-4b0e-a5df-48bbdcc17dd0)

    -   @originjs/vite-plugin-federation 예제
        -   https://github.com/originjs/vite-plugin-federation?tab=readme-ov-file#example-projects
        -   Vite 프로젝트에서 노출한 모듈을 Webpack 프로젝트에서 사용하거나, Webpack 프로젝트에서 노출한 모듈을 Vite 프로젝트에서 사용할 수 있으며, 이 때는 remotes.from 과 remotes.format를 적절히 선택해야함.
        -   Webpack 은 esm 형식을 사용하는 vite-plugin-federation 컴포넌트와 함께 사용하는 것이 가장 좋음
        -   Vite/Rollup 과 Webpack 이 동일한 청크를 생성한다는 보장이 없어 shared 에 문제가 발생할 수있으므로, React 프로젝트에서 Vite 와 Webpack을 혼합하는 것은 권장하지 않음

### Module Federation 예제

-   나의 React 앱에서 다른 서버의 React 컴포넌트를 런타임에 가져와서 사용하기

    -   `./module-federation-basic-example`

        ```shell
        mkdir module-federation-basic-example
        cd module-federation-basic-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create mf-app # (main-app, 3000 port)
        pnpm create mf-app # (component-app, 3001 port)
        cd ..
        pnpm i
        pnpm --filter component-app start:live
        pnpm dev
        pnpm build
        pnpm serve
        ```

    -   여러 마이크로 앱에서 런타임에 공통적으로 사용하는 라이브러리를 한번만 로드하기

        ```shell
        pnpm --filter main-app add lodash@4.17.21
        pnpm --filter component-app add lodash@4.17.21
        # 두개의 앱의 버젼이 같으면 lodash는 한번 로딩됨
        # 만약 버젼이 다르다면 각자 따로 로딩됨
        ```

    -   두 앱에서 Context 를 공유해서 사용하기

        ```shell
        mkdir packages
        cd packages
        pnpm create vite shared-library --template react-swc-ts
        cd ..
        pnpm i
        pnpm --filter shared-library add vite-plugin-dts -D
        pnpm --filter shared-library build
        pnpm i
        pnpm dev
        ```

    -   Lazy, Suspense, ErrorBoundary 를 통한 통합

        ```shell
        pnpm --filter main-app add react-error-boundary
        pnpm --filter main-app build
        pnpm --filter main-app build:start
        # component-app이 실행중이지 않기 때문에 Error가 발샘함
        # Error가 발생하였기 때문에 ErrorBoundary로 Error에 대한 대응을 할 수 있음
        ```

-   다른 서버의 React 컴포넌트에 TypeScript 의 타입 설정하기

    -   `./module-federation-ts-example`

        ```shell
        mkdir module-federation-ts-example
        cd module-federation-ts-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create mf-app # (main-app, port 3000)
        pnpm create mf-app # (component-app, port 3001)
        cd ..
        pnpm i
        pnpm --filter component-app start:live
        pnpm --filter main-app add react-error-boundary
        pnpm --filter main-app start:live
        pnpm --filter component-app add @module-federation/typescript
        pnpm --filter component-app build
        pnpm --filter component-app build:start
        pnpm --filter main-app add @module-federation/typescript
        pnpm --filter main-app start:live
        ```

-   다른 서버의 리액트 앱을 가져와서 엘리먼트에 랜더하기(격리)

    -   `./module-federation-isolated-example`

        ```shell
        mkdir module-federation-isolated-example
        cd module-federation-isolated-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create mf-app # (main-app, port 3000)
        pnpm create mf-app # (isolated-app, port 3001)
        cd ..
        pnpm i
        pnpm --filter isolated-app start:live
        pnpm --filter main-app start:live
        ```

-   여러 페이지가 있는 두개의 앱을 하나로 통합하기 (feat. react-router-dom)

    -   `./module-federation-router-example`

        ```shell
        mkdir module-federation-router-example
        cd module-federation-router-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create mf-app # (app-shell, port 3000)
        pnpm create mf-app # (app-jobs, port 3001)
        pnpm create mf-app # (app-network, port 3002)
        pnpm --filter app-shell add react-router-dom
        pnpm --filter app-jobs add react-router-dom
        pnpm --filter app-network add react-router-dom
        pnpm dev
        ```

-   전역에서 Redux 를 사용할 때, 다른 서버의 React 컴포넌트를 가져오면서 리듀서를 추가하기

    -   `./module-federation-redux-example`

        ```shell
        mkdir module-federation-redux-example
        cd module-federation-redux-example
        pnpm init
        corepack use pnpm@8.15.1
        mkdir apps
        cd apps
        pnpm create mf-app # (main-app, port 3000)
        pnpm create mf-app # (remote-app, port 3001)
        cd ..
        pnpm i
        pnpm --filter main-app add @reduxjs/toolkit react-redux
        pnpm --filter remote-app add @reduxjs/toolkit react-redux
        pnpm --filter main-app add @babel/runtime
        pnpm dev
        ```

-   나의 React 앱에서 다른 서버의 React 컴포넌트를 가져와서 동적으로 사용하기

    -   `./module-federation-dynamic-example`

        ```shell
        mkdir module-federation-dynamic-example
        cd module-federation-dynamic-example
        pnpm init
        corepack use pnpm@8.15.1
        pnpm create mf-app # (main-app, 3000)
        pnpm create mf-app # (component-app1, 3001)
        pnpm create mf-app # (component-app2, 3002)
        cd ..
        pnpm i
        pnpm --filter main-app add @module-federation/utilities
        pnpm --filter main-app add @babel/runtime
        pnpm dev
        ```

-   다른 서버의 React 컴포넌트를 가져올 때, 다른 서버를 동적으로 지정하기

    -   `./module-federation-dynamic-example` 연장

        ```shell
        cd apps
        mkdir api-server
        cd api-server
        pnpm init
        cd ...
        pnpm --filter api-server add serve
        pnpm --filter api-server dev
        pnpm dev
        ```

## MFA를 이용하여 커리어 플랫폼 서비스 만들기(설계)

### 커리어 플랫폼 서비스 프로젝트 분석 및 마이크로 프론트엔드 아키텍쳐 적합성 판단

-   주식회사 커리어업

    -   지금부터 우리는 주식회사 커리어업을 설립했다고 가정
    -   어딘가에 커리어업 이라는 회사가 있을 수도 있음
    -   적어도 우리가 사용하는 서비스 이름 중에는 없기 때문에 가칭으로 정하였음
    -   이 회사에서 만드는 서비스는 Career Up 이라는 명칭을 가짐

-   커리어업 서비스 전반적인 목표

    -   개발자들을 위한 커리어 관리 및 발전
    -   커리어 플랫폼 서비스의 네가지 주요 기능
        -   SNS 처럼 서로 의견을 작성하여 공유하는 기능을 가짐(포스팅)
        -   여러 사용자들이 서로 친구를 맺고 관계를 확장하는 기능을 가짐(인맥)
        -   개발자들에게 필요한 여러가지 교육 컨텐츠를 보여주는 기능을 가짐(교육)
        -   회사에서 채용 공고를 보여주고, 지원할 수 있는 기능을 가짐(채용 공고)

-   시나리오 검토

    1. 포스팅
        - 글을 작성할 수 있음
        - 자신 혹은 인맥이 작성한 글을 볼 수 있음
        - 글에 댓글을 달거나, 추천 혹은 퍼가기가 가능함
    2. 인맥
        - 현재 나의 일촌 목록을 볼 수 있음
        - 일촌 신청을 할 수 있고, 현재 일촌 신청을 해서 대기중인 목록을 볼 수 있음
        - 나에게 일촌을 추천해줌
    3. 교육 컨텐츠
        - 전체 교육 컨텐츠 목록을 카테고라이징 해서 보여줌
        - 또한 나의 커리어에 맞는 교육 컨텐츠를 추천해줌
        - 교육 수강 중인 컨텐츠를 표시하고, 수강 완료하면 수료 마크를 표시해줌
    4. 채용 공고
        - 여러 회사에서 제공하는 채용 공고를 보여줌
        - 직접 지원할 수도 있으며, 맞춤 채용 공고도 제공함

-   계정

    -   모든 시나리오를 아우르는 계정 기능이 필요함
    -   계정 기능에는 나와 다른 사람의 프로필을 보여주고, 일촌 정보도 보여주며, 지원한 채용 공고, 수강 중인 교육 컨텐츠 등 여러 기능 단위와 얽혀서 여러 정보들을 보여줌
    -   일반적으로 대부분의 서비스에서는 계정 관련 기능이 서비스의 주요 기능들과 매우 밀접한 관계를 맺고 있기 때문에 중요한 역할을 차지함
    -   회원 가입 / 로그인 / 로그아웃 / 비번 찾기 등의 기능은 SaaS 를 이용해서 빠르게 구현함

-   MVP 계획

    -   조회해서 보여주는 기능을 위주로 간단한 쓰기 기능을 구현
    -   계정과 관련한 기능들은 Auth0 (SaaS) 을 통해 구현
    -   백엔드는 각각의 서비스에서 Auth0 토큰으로 인증을 처리하고, 간단하게 json 형태의 추가, 조회, 수정, 삭제가 가능하도록 각자의 서비스 팀에서 함께 다룸
    -   서비스 별로 디테일한 구현보다는 작은 서비스로 나누고 이를 원할하게 각자 개발할 수 있는 형태를 고민하며 만들어 갈 예정

-   Career Up의 서비스 구조

    -   GNB 를 통해서 명확하게 서비스가 달라지며, 각 서비스에 들어가는 기능들은 다른 서비스와 다르게 독자적으로 발전될 가능성이 큼
    -   계정 데이터는 서비스에서 활용할 가능성이 크지만 계정 화면은 독립적으로 분할되어 있음
    -   각 서비스에서 서로의 기능을 사용하려는 경우 UI 단위로 공유해서 사용하는 것에 큰 어려움이 없어 보임
    -   현재 시작 단계이므로 작은 기능을 탑재하여 모놀리스로 시작하는 것이 문제가 없지만, 서비스의 미래를 예측해볼 때, 규모가 큰 모놀리스로 변할 가능성이 큼
    -   처음부터 서비스 별로 적절하게 나누어 독자적으로 발전 가능하도록 레이어를 적절히 나누어 개발하는 것이 리소스가 판단 기준이 아니라는 전제하에 좋은 선택으로 보임

-   Application Shell 과 Routing 패키지

    -   Shell 이란 앱을 만들고 실제 앱을 구동하는 메인의 역할을 함
    -   가장 중요한 역할로는 브라우저의 경로를 Shell 이 받아서 마이크로 앱 (포스팅/인맥/교육/채용공고)로 적절히 전달함
    -   마이크로 앱은 메모리 라우터를 사용하며, 이 메모리 라우터의 변경과 Shell 은 브라우저의 커스텀 이벤트로 통신하며 적절한 로직으로 처리함
    -   비슷한 로직이 Shell 과 여러 마이크로 앱에 중복으로 사용하고 있음
        -   이 로직을 추상화해서 코드를 shell-router 란 패키지로 옮김
        -   이 패키지는 Shell 과 마이크로 앱 전반에 사용되고 있으므로 패키지가 수정되면 전체 앱을 재배포 해야함

-   로그인과 토큰 공유하기

    -   회원 가입 / 로그인 / 로그아웃 / 비번 찾기 등 계정과 관련된 기능은 Okta 의 SaaS 제품인 Auth0 를 사용함
    -   이와 관련해서도 앱의 Shell 에서 관리하고, Shell 에서 로그인되지 않은 상태면 마이크로 앱을 열지 않도록 처리함
    -   마이크로 앱은 별도로 리액트 앱이 실행되고 있으므로 인증과 관련된 데이터(토큰, 유저 정보)를 이벤트를 통해 Shell 에서 가져옴
    -   이렇게 Shell 과 마이크로 앱이 통신하는 경우를 위해 별도의 패키지를 만들고 이를 마이크로 앱에서 활용

-   스타일 격리
    -   같은 문서 안에서 스타일을 격리하는 것은 기술적으로 불가능함
    -   그래서 class 이름을 다루는 기준을 명확히 나누고 해당 가이드를 따르도록 해야함
    -   가이드를 벗어나지 않는 선에서는 각자의 마이크로 앱이 sass 를 사용하거나 css module 을 사용해도 전혀 문제가 없음
    -   ui-kit 패키지에서 공유되는 컴포넌트들은 특정 기술(emotion 등)에 의존적이지 않도록 기본적인 기술로만 작성

### 프로젝트 모노레포 설계

-   모노레포 도입 여부 결정 및 구현 방식 결정

    -   pnpm workspace + turborepo를 사용하여 구현 예정

        ![1](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/55d961cd-9713-4817-92a4-24c21865f177)

-   모노레포 환경 구축(pnpm workspace, turborepo)

    ```shell
    mkdir career-up
    cd career-up
    pnpm init
    corepack use pnpm@8.15.1
    # pnpm-workspace.yaml 설정
    '''
    packages:
    - "apps/*"
    - "packages/*"
    '''
    mkdir apps
    cd apps
    pnpm create mf-app # (shell, port 3000)
    cd ..
    pnpm i
    pnpm -w add turbo -D
    # turbo.json 설정
    '''
    {
        "$schema": "https://turbo.build/schema.json",
        "pipeline": {
            "build": {
                "dependsOn": ["^build"],
                "outputs": ["dist/**"]
            },
            "start:live": {
                "cache": false,
                "persistent": true
            },
            "build:start": {
                "cache": false,
                "persistent": true
            }
        }
    }
    '''
    # root의 package.json에 script 추가
    '''
    "scripts": {
        "dev": "turbo start:live",
        "build": "turbo build",
        "serve": "turbo build:start"
    },
    '''
    pnpm dev
    ```

### 패키지 설계

-   통합 방법 설계 및 적절한 기술 스택과 도구 선택하기

    -   마이크로 앱들의 런타임 통합

        ![1](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/e478e3e0-97ab-4bc7-9f71-d121246e97f2)

        -   기본적으로 가장 대표적인 프론트엔드 기술인 리액트와 타입스크립트를 활용
        -   Vite 의 Module Federation 플러그인은 Webpack 에 비해 프로덕션에서 아직 안정적이지 않으므로, Webpack Module Federation 을 활용
        -   Shell 은 애플리케이션의 메인이자 유일한 Host 의 역할을 함
        -   React Router 를 사용해서 다른 마이크로 앱으로 브라우저의 URL 을 전달
        -   각 마이크로 앱이 Shell 과 같은 라이프 사이클을 가지지 않기 때문에 재 랜더링이 자동으로 전파되지 않으나, 이를 통해 각 마이크로 앱이 좀더 독립적으로 앱으로 동작할 수 있지만, 공통적으로 사용하는 기능이나 데이터의 전파를 위해서는 추가적인 작업(이벤트를 통한 전파)이 필요함

    -   패키지 인터페이스를 통한 빌드 타임 통합

        ![2](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/3f48ffc7-5dbe-437e-a2b7-09f6cf78daa3)

        -   공통으로 사용할만한 로직이나 컴포넌트는 별도의 패키지로 분리하고 package.json 에 적혀있는 정보를 기반으로 사용
        -   빌드 타임에 각 마이크로 앱과 shell 에 포함이 됨
        -   Module Federation 의 Shared 로 설정하여, 같은 모듈이 여러번 로드되지 않도록 처리
        -   전체 프로젝트가 리액트를 사용하기 때문에 이러한 공통 모듈 들도 리액트 기술을 이용하지만, peerDependencies 를 이용해서 리액트 라이브러리를 앱에서 한번만 로드하고 재활용
        -   빌드한 결과물을 사용하는 것이기 때문에 Vite, esbuild, rollup 등 어떠한 기술을 활용해도 가능하지만 상대적으로 패키지 만들기에 간편한 Vite 를 활용

-   공통 모듈 설계 및 인터페이스 결정하기

    -   @career-up/ui-kit 의 주요 기능 : global.css, components(icon, button, card 등)
    -   @career-up/shell-router 의 인터페이스
        -   라우팅
            -   hooks
                -   useAppEvent
                    -   마이크로 앱에서 shell 의 라우팅 이동에 관한 이벤트를 받아 마이크로 앱의 라우팅을 처리
                    -   마이크로 앱의 라우팅이 변한 경우 shell 에게 이벤트를 전송
                -   useShellEvent
                    -   마이크로 앱의 라우팅 이동에 관한 이벤트를 받아 shell 의 라우팅을 처리
                    -   Shell 의 라우팅이 변한 경우 마이크로 앱에게 이벤트를 전송
            -   components
                -   AppRoutingManager
                    -   useAppEvent 를 가지고 있으며, Outlet 으로 연결하는 컴포넌트
                    -   실제 마이크로 앱에서는 useAppEvent 가 아니라 이 컴포넌트를 사용 예정
            -   mount function
                -   injectFactory
                    -   각 마이크로 앱을 shell 에게 연결할 수 있도록 만들어 주는 팩토리 함수
        -   인증
            -   hooks
                -   useAuthEvent
                    -   로그인한 유저 정보를 얻기 위해 요청을 받고 이벤트로 유저 정보를 돌려주는 훅
                -   getUserAsync
                    -   유저 정보를 요청하고, 이벤트를 받을 때까지 기다렸다가 받아서 리턴하는 프로미스 함수

## MFA를 이용하여 커리어 플랫폼 서비스 만들기(공통 모듈 및 마이크로 앱 구현)

### 공통 모듈 개발하기 1 (UI 라이브러리 패키지 만들기)

-   UI 라이브러리 패키지 생성 및 설정

    ```shell
    mkdir packages
    cd packages
    pnpm create vite ui-kit --template react-swc-ts
    cd ..
    pnpm i
    # career-up/packages/ui-kit/src/components/Button.tsx 생성
    pnpm --filter @career-up/ui-kit add vite-plugin-dts -D
    # career-up/packages/ui-kit/vite.config.ts 설정
    # career-up/packages/ui-kit/package.json 설정
    pnpm --filter @career-up/ui-kit build
    # career-up/apps/shell/package.json에 ui-kit을 dependencies에 추가
    pnpm i
    pnpm --filter @career-up/shell start:live
    # 위 명령어 진행 시 workspace:* 경로를 인식할 수 없다고 에러 발생함
    # career-up/apps/shell/webpack.config.js에 ui-kit의 shared signleton을 true로 설정
    # 기존 shell에 있던 index.css의 내용을 ui-kit의 global.css로 옮김
    # 그리고 index.ts에서 import 구문을 이용하여 global.css를 호출함
    # 이후 pnpm --filter @career-up/ui-kit build 를 진행하여 dist폴더에 style.css라는 파일이 생성됨
    # 그러나 이 css를 다른곳에서 호출해야하기 때문에 이름을 index.css로 변경 시킬거고 이에 대한 설정을 vite.config.ts에서 assetFileNames로 설정해줌
    pnpm --filter @career-up/ui-kit build
    # 이후 packages.json에서 exports 옵션에 ./index.css를 추가함
    # 그리고 app shell에서 import "@career-up/ui-kit/index.css";로 호출하면 사용이 가능해짐
    ```

-   컴포넌트 제작 및 빌드

    ```shell
    pnpm --filter @career-up/ui-kit add react-icons
    # 내가 사용할 icon을 components/icons 폴더에 생성(Briefcase, Home, LaptopCode, UserFriends)
    # 위에서 생성한 아이콘을 components/Icons.tsx에서 전부 export 될수 있게 생성
    # index.ts에서 Icon을 export해주면 이제 shell에서 호출이 가능해짐
    pnpm --filter @career-up/ui-kit build
    # app shell에 App.tsx에서 Icon을 @career-up/ui-kit에서 가져와서 사용할 수 있음
    # 추가로 이번 프로젝트에 사용할 Button component를 만들고 코드를 수정함
    pnpm --filter @career-up/ui-kit build
    ```

### 공통 모듈 개발하기 2 (App Shell 만들기)

-   App Shell의 역할 및 패키지 생성 및 설정

    ```shell
    cd packages
    pnpm create vite shell-router --template react-swc-ts
    cd ..
    pnpm i
    # package.json 수정
    pnpm --filter @career-up/shell-router add vite-plugin-dts -D
    # vite.config.ts 수정
    # index.ts에 test function을 export
    pnpm --filter @career-up/shell-router build
    # apps/shell/package.json의 dependencies에 "@career-up/shell-router"를 추가
    pnpm i
    # apps/shell/webpack.config.js의 shared에서 @career-up/shell-router의 signleton 옵션을 true로 변경
    pnpm --filter @career-up/shell start:live
    # 위에 작성해둔 shell router의 test function이 잘 호출되고 실행되는지 확인
    ```

-   react-router-dom 을 통한 내비게이션 구현

    ```shell
    pnpm --filter @career-up/shell-router add react-router-dom
    # shell-router의 vite.config.ts에 react-router-dom도 rollupOptions에 추가
    # 이제 navigation 구현을 위해 types.ts, router.ts, injector.tsx, use-shell-event.ts, use-app-event.ts, app-routing-manager.tsx를 생성
    # useShellEvent, injectFactory, AppRoutingManager를 index.ts에서 export 해줌
    pnpm --filter @career-up/shell-router build
    cd apps
    pnpm create mf-app # (posting, port 3001)
    cd ..
    pnpm i
    pnpm --filter @career-up/posting add react-router-dom
    pnpm --filter @career-up/shell add react-router-dom
    pnpm dev
    ```

-   공통 레이아웃 설정 및 스타일 충돌 해결을 위한 설정

    ```shell
    # ui-kit의 global.css에 공통 css 작성
    pnpm --filter @career-up/ui-kit build
    # 이후 shell에서 사용할 global css를 index.css에 작성 후 layout.tsx에 적용
    pnpm dev
    ```

-   App Shell의 인증 처리

    -   https://auth0.com SaaS를 이용할 예정

    ```shell
    pnpm --filter @career-up/shell add @auth0/auth0-react
    pnpm --filter @career-up/shell add @types/node -D
    pnpm --filter @career-up/shell add @babel/runtime -D
    ```

### 마이크로 앱 만들기 1 (포스팅)

-   API 서버 생성 및 설정

    ```shell
    # pnpm-workspace.yaml에 server workspace 추가
    mkdir server
    cd server
    pnpm init
    cd ..
    pnpm --filter @career-up/server add json-server@^0.17.4
    # server/db.json을 생성
    # server/index.js에 서버를 구성
    pnpm --filter @career-up/server start:live
    ```

-   포스팅 서비스 개발하기

    ```shell
    pnpm --filter @career-up/posting add @auth0/auth0-spa-js
    pnpm --filter @career-up/posting add @types/node -D
    # typescript 버젼 통일화 (이번 프로젝트는 5.2.2로 통일함)
    pnpm i
    # career-up.code-workspace을 설정
    # posting/src/provider/aut0-client-provider.tsx 작성
    # posting/src/hooks/use-auth0-client.tsx 작성
    # posting/webpack.config.js의 shared option에 @auth0/auth0-react의 singleton을 true로 설정
    # posting/routes.tsx에서 element를 Auth0ClientProvider로 감싸기
    pnpm --filter @career-up/posting add @babel/runtime
    pnpm dev
    pnpm --filter @career-up/posting add eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    # posting/.eslintrc.js에서 eslint 설정
    # posting/src/types.ts에 api 요청에 필요한 type 작성
    # posting/src/apis.ts에 api 요청에 필요한 function을 작성
    # posting/components에 profile, post, write-post component를 작성
    # 위에 작성된 component를 바탕으로 page-home 구성
    pnpm dev
    ```

### 마이크로 앱 만들기 2 (교육)

-   기술 스택 선정 및 패키지 생성 및 설정

    -   edu에서는 jotai(상태관리)와 emotion(css)을 사용해보려한다.

    ```shell
    cd apps
    pnpm create mf-app # (edu, port 3002)
    # apps/edu/package.json의 dependencies에 @career-up/shell-router와 @career-up/ui-kit 추가
    # typescript 버젼 5.2.2로 수정
    pnpm i
    pnpm --filter @career-up/edu add react-router-dom @auth0/auth0-spa-js @babel/runtime
    pnpm --filter @career-up/edu add @types/node eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    # apps/edu/.eslintrc.js에 eslint 설정
    # apps/edu/webpack.config.js에 shared option과 exposes 설정
    # 추가로 .env의 path를 통일하기 위해 shell, posting, edu의 webpack.config.js의 Dotenv의 path를 root로 변경
    '''env 내용
    REACT_APP_AUTH0_DOMAIN=
    REACT_APP_AUTH0_CLIENT_ID=
    REACT_APP_AUTH0_CALLBACK_URL=
    REACT_APP_MICROAPP_POSTING=
    REACT_APP_MICROAPP_EDU=
    REACT_APP_MICROAPP_NETWORK=
    REACT_APP_MICROAPP_JOB=
    REACT_APP_FRAGMENT_RECOMMEND_CONNECTIONS=
    REACT_APP_SERVER_URL=
    '''
    # routes, injector, bootstrap, provider, hook 등 프로젝트에 기본적으로 필요한 환경을 구성
    pnpm --filter @career-up/edu add @emotion/styled @emotion/react jotai
    # server/db.json에 courses와 course_contents를 추가
    pnpm dev
    ```

-   교육 컨탠츠 서비스 개발하기

    ```shell
    # API 코드 작성(types.ts, apis.ts)
    # 공통 Layout 처리(routes.tsx, layout.styles.ts, atoms.ts, layout.tsx, profile.styles.ts, profile.tsx, profile-container.tsx, my-course-info.styles.ts, my-course-info.tsx, my-course-info-container.tsx)
    # 리스트 페이지 작업(page-list.tsx, course-list-item.styles.ts, course-list-item.tsx, routes.tsx)
    # 디테일 페이지 작업(page-detail.tsx, course-detail-item.styles.ts, course-detail-item.tsx, page-detail.tsx, courese-contents.styles.ts, course-contents.tsx, course-actions.styles.ts, course-actions.tsx, routes.tsx)
    pnpm dev
    ```

### 마이크로 앱 만들기 3 (인맥)

-   기술 스택 선정 및 패키지 생성 및 설정

    -   인맥 앱은 recoil(상태관리)와 tailwind(css)를 사용하려한다.

    ```shell
    cd apps
    pnpm create mf-app(network, port 3003)
    cd ..
    # code-workspace에 network 추가
    pnpm i
    pnpm --filter @career-up/network add react-router-dom @auth0/auth0-spa-js @babel/runtime
    pnpm --filter @career-up/network add @types/node eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    # .eslintrc.js 작성
    # webpack.config.js의 plugin에 Dotenv option에 path 추가
    # webpack.config.js의 exposes option에 injector 추가
    # webpack.config.js에 shared option 수정
    # tailwind.config.js에 prefix 추가
    # 기본적인 앱의 설정을 위해 코드 작성(hooks/use-auth0-client.ts, providers/auth0-client-provider.tsx, bootstrap.tsx, index.ts, injector.tsx, routes.tsx)
    # shell app의 webpack.config.js내 remotes option에 network path 추가
    # shell app의 tsconfig.json내 paths option에 network/injector에 대한 path 추가
    # shell app에 network app을 연결해줄 app-network.tsx를 작성
    # shell app의 router에 network app 연결
    pnpm dev
    # network app의 전역 스타일 오염 방지를 위해 index.scss를 설정
    pnpm --filter @career-up/network add recoil
    # server app에 network에 대한 데이터 반환을 위한 api 작성
    # server app에 db.json에 connections 추가
    ```

-   인맥 관리 서비스 개발하기

    ```shell
    # network app에 api 요청을 위한 코드 작성(types.ts, apis.ts)
    # 공통 Layout 처리를 위한 코드 작성(styles/f.css.ts, index.scss, components/layout.css.ts, components/layout.tsx, containers/my-network-container.tsx, components/my-network.css.ts, components/my-network.tsx, atoms.ts, routes.tsx)
    # network app의 홈 페이지 작업(atoms.ts, pages/page-home.tsx, components/manage-connection.css.ts, components/manage-connection.tsx, containers/connections-container.tsx, components/connections.css.ts, components/connections.tsx, components/connection.css.ts, components/connection.tsx, assets/icon-default.tsx, routes.tsx)
    pnpm dev
    ```

### 마이크로 앱 만들기 4 (채용)

-   기술 스택 선정 및 패키지 생성 및 설정

    -   채용 앱은 redux(상태관리)와 emotion(css)를 사용할 예정이다.

    ```shell
    cd apps
    pnpm create mf-app(job, port 3004)
    cd ..
    # code-workspace에 job 추가
    # package.json 설정
    pnpm i
    pnpm --filter @career-up/job add react-router-dom @auth0/auth0-spa-js @babel/runtime
    pnpm --filter @career-up/job add @types/node eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    # .eslintrc.js 설정
    # webpack.config.js의 plugin에 Dotenv option에 path 추가
    # webpack.config.js의 exposes option에 injector 추가
    # webpack.config.js에 shared option 수정
    # 기본적인 앱의 설정을 위해 코드 작성(hooks/use-auth0-client.ts, providers/auth0-client-provider.tsx, bootstrap.tsx, index.ts, injector.tsx, routes.tsx)
    # shell app의 webpack.config.js내 remotes option에 job path 추가
    # shell app의 tsconfig.json내 paths option에 job/injector에 대한 path 추가
    # shell app에 job app을 연결해줄 app-job.tsx를 작성
    # shell app의 router에 job app 연결
    pnpm dev
    pnpm --filter @career-up/job add @emotion/styled @emotion/react @reduxjs/toolkit react-redux
    # server app에 job 대한 데이터 반환을 위한 api 작성
    # server app에 db.json에 jobs 추가
    ```

-   채용 공고 서비스 개발하기

    ```shell
    # job app API 코드 작성(types.ts, apis.ts)
    # 공통 Layout 처리를 위한 코드 작성(routes.tsx, components/layout.styles.ts, components/layout.tsx, redux/create.ts, redux/utils.ts, redux/modules/applyStatus.ts, redux/modules/rootReducer.ts, containers/apply-status-container.tsx, components/apply-status.styles.ts, components/apply-status.tsx)
    # 리스트 페이지 작업을 위한 코드 작성(pages/page-list.tsx, redux/modules/jobs.ts, redux/modules/rootReducer.ts, containers/job-list-container.tsx, components/job-list.styles.ts, components/job-list.tsx, components/job-list-item.styles.ts, components/job-list-item.tsx, assets/icon-default.tsx, routes.tsx)
    # 디테일 페이지 작업을 위한 코드 작성(pages/page-detail.tsx, routes.tsx)
    pnpm dev
    ```

### 프레그먼트 만들기

-   프레그먼트 공유를 위한 준비

    ```shell
    pnpm --filter @career-up/shell-router add @auth0/auth0-spa-js
    # shell-router로 Auth0ClientProvider와 useAuth0Client 이동 작업을 위한 코드 작성(providers/auth0-client-provider.tsx, hooks/use-auth0-client.ts, index.ts, package.json, vite.config.ts)
    pnpm --filter @career-up/shell-router build
    # 마이크로앱에서 Auth0ClientProvider 와 useAuth0Client 사용 변경(각 마이크로앱에 Auth0ClientProvider와 useAuth0Client를 전부 shell-router에서 가져오게 변경)
    # 마이크로 앱 간 이동을 위한 useShellNavigate 작성(hooks/use-shell-navigate-listener.tsx, hooks/use-shell-navigate.tsx, index.ts)
    pnpm --filter @career-up/shell-router build
    # shell의 layout.tsx에 useShellNavigateListener 등록
    pnpm dev
    ```

-   일촌 맺기 프레그먼트 컴포넌트 작성

    -   일촌 맺기 프레그먼트는 새로운 프레그먼트 앱을 만들어서 다른 앱으로 expose 할 예정이다.

    ```shell
    # fragment-recommend-connections 워크스페이스 생성(pnpm-workspace.yaml에 fragments/* 추가)
    mkdir fragments
    cd fragments
    pnpm create mf-app(fragment-recommend-connections, port 5001)
    cd ..
    # code-workspace에 fragment-recommend-connections 추가
    pnpm i
    pnpm --filter @career-up/fragment-recommend-connections add @auth0/auth0-spa-js @babel/runtime
    pnpm --filter @career-up/fragment-recommend-connections add eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    # .eslintrc.js 설정
    # webpack.config.js exposes, shared option 설정
    # ConnectionType 작성(types.ts)
    # API 통신을 위한 함수 작성(apis.ts)
    # 다른 앱으로 내보낼 Container 작성(containers/recommend-connections-container.tsx, components/recommend-connections.tsx, components/recommend-connections.css, components/connection.css, components/connection.tsx)
    ```

-   추천 채용 공고 프레그먼트 컴포넌트 작성

    -   추천 채용 공고 프레그먼트는 job 앱에서 작성하여 다른 앱으로 expose 할 예정이다.

    ```shell
    # job 앱의 webpack.config.js내 exposes option에 프레그먼트 추가
    # 내보낼 container 작성(fragments/recommend-jobs-container.tsx, components/recommend-jobs.styles.ts, components/recommend-jobs.tsx, components/recommend-job.styles.ts, components/recommend-job.tsx)
    pnpm dev
    ```

-   프레그먼트 사용하기

    ```shell
    # posting 앱에서 fragment_recommend_connections와 job 앱을 가져와 쓸 수 있도록 설정(webpack.config.js, tsconfig.json)
    # posting 앱의 홈페이지에서 프레그먼트들을 사용(pages/page-home.tsx, pages/page-home.scss)
    pnpm dev
    ```

## MFA를 이용하여 커리어 플랫폼 서비스 만들기(통합 및 빌드)

### Module Federation으로 제작된 마이크로 앱 빌드 및 배포

-   마이크로 앱과 프레그먼트 공유를 위한 모듈 페더레이션 설정

    ```shell
    # shell-router에서 injector에 대한 타입을 export하기 위해 type을 작성(types.ts)
    pnpm --filter @career-up/shell-router build
    pnpm --filter @career-up/shell add @module-federation/utilities
    # shell 앱의 remoteEntry에 lazy 로딩을 importRemote로 변경(router.tsx, components/app-edu.tsx, components/app-job.tsx, components/app-network.tsx, components/app-posting.tsx)
    pnpm --filter @career-up/server start:live
    pnpm --filter @career-up/shell build
    pnpm --filter @career-up/shell build:start
    pnpm --filter @career-up/posting add @module-federation/utilities react-error-boundary
    # posting 에 error 처리 및 리로드 추가
    pnpm --filter @career-up/posting build
    pnpm --filter @career-up/posting build:start
    pnpm --filter @career-up/network build
    pnpm --filter @career-up/network build:start
    pnpm --filter @career-up/job build
    pnpm --filter @career-up/job build:start
    ```

-   CI/CD 파이프라인 구축 및 자동화 설정

    ```shell
    # monorepo 에 패키지 빌드 스크립트 추가
    pnpm -w build:packages
    # app 과 fragment 에 빌드 전 패키지 빌드 스크립트 추가
    # 환경 변수로 리모트 URL 및 서버 URL 관리
    pnpm --filter @career-up/fragment-recommend-connections add dotenv-webpack @types/node -D
    # 불필요한 webpack remote 제거
    pnpm build
    pnpm dev
    ```

### 개발 후 배포 과정 시뮬레이션

-   마이크로 앱 추가 개발 후 배포 범위 설정 및 배포

    ```shell
    # 공통 컴포넌트인 Profile 컴포넌트를 ui-kit으로 이동
    pnpm --filter @career-up/ui-kit add @auth0/auth0-spa-js -D
    # Profile.module.css, Profile.tsx를 ui-kit에 작성
    pnpm --filter @career-up/ui-kit build
    # Edu 앱의 Profile을 ui-kit에서 가져오게 변경(profile-container.tsx)
    pnpm --filter @career-up/edu build
    pnpm --filter @career-up/edu build:start
    # Posting 앱의 Profile을 ui-kit에서 가져오게 변경(profile-container.tsx)
    pnpm --filter @career-up/posting build
    pnpm --filter @career-up/posting build:start
    # webpack overlay 제거(shell의 webpack.config.js, posting의 webpack.config.js)
    pnpm dev
    ```

-   프레그먼트 추가 개발 후 배포 범위 설정 및 배포

    ```shell
    # fragment-recommend-connections 변경
    pnpm --filter @career-up/fragment-recommend-connections add swr
    pnpm --filter @career-up/fragment-recommend-connections build
    ```

## MFA를 이용하여 커리어 플랫폼 서비스 만들기(운영)

### 성능 최적화 고려하여 운영하기

-   프론트엔드 성능 측정 개요와 그 중요성

    -   프론트엔드 성능 최적화의 중요성
        -   사용자 경험 향상
            -   웹사이트의 로드 시간과 반응 속도는 사용자의 경험에 직접적으로 영향을 미침.
            -   빠른 로드 시간은 사용자의 만족도를 높이고, 사이트의 전반적인 효율성을 증진시킴.
            -   반면, 느린 페이지 로드는 사용자의 인내심을 시험하고, 종종 사이트 이탈로 이어지며, 특히 모바일 사용자의 경우, 빠른 로드 시간의 중요성은 더욱 증가함.
        -   검색 엔진 최적화(SEO)의 향상
            -   구글과 같은 검색 엔진은 웹사이트의 로딩 속도를 검색 결과의 순위 결정 요소로 사용됨.
            -   빠른 웹사이트는 검색 엔진 순위에서 더 높은 위치를 차지할 가능성이 높으며, 이는 웹사이트로의 트래픽 증가로 이어질 수 있음.
            -   따라서 성능 최적화는 검색 엔진을 통한 가시성과 유입을 개선하는 데 중요한 역할을 함.
        -   전환율 및 매출 증가
            -   웹사이트의 성능은 사용자의 구매 결정 과정에 영향을 미칠 수 있음.
            -   빠르고 반응이 좋은 웹사이트는 사용자가 원하는 정보를 신속하게 찾을 수 있도록 하며, 이는 전환율 증가로 이어짐.
            -   여러 연구에 따르면, 로드 시간이 개선될수록 전환율이 향상됨.
    -   성능 측정의 주요 지표
        -   첫 화면 로드 시간(First Paint, FP)과 첫 콘텐츠 로드 시간(First Contentful Paint, FCP)
        -   상호작용까지의 시간(Time to Interactive, TTI)
        -   Largest Contentful Paint(LCP)
        -   Cumulative Layout Shift(CLS)
        -   자바스크립트 실행 시간
    -   프론트엔드 성능 최적화 방법
        -   프론트엔드 성능 최적화는 리소스 최소화, 비동기 로딩, 캐싱 전략, 이미지와 폰트 최적화 등을 포함하는데, 이를 위해 개발자들은 네트워크 요청을 줄이고, 불필요한 JavaScript 실행을 최소화하며, 사용자가 중요한 콘텐츠에 빠르게 접근할 수 있도록 페이지를 구조화해야함.
        -   성능 최적화는 지속적인 프로세스로, 웹사이트의 특성과 사용자의 요구에 따라 다양한 전략이 적용될수 있으며, 성능 모니터링 도구를 사용하여 사이트의 성능을 정기적으로 검토하고, 필요에 따라 최적화 전략을 조정함.
        -   리소스 최소화 및 압축, 이미지 최적화, 지연 로딩(Lazy Loading), 코드 스플리팅(Code Splitting), 캐싱 전략 사용, CDN(Content Delivery Network) 사용, HTTP 요청 최소화, Web Fonts 최적화, 웹 애플리케이션ㅇ늬 비동기 로딩, 사용자 경험 중심의 성능 측정
    -   성능 분석 도구
        -   React Developer Tools : Chrome 과 Firefox 용으로 제공되는 이 확장 프로그램은 React 컴포넌트 트리를 시각적으로 검사하고, 상태와 props를 추적하며, 성능 문제를 식별하는 데 도움을 주고, Profiler 탭을 사용하면 컴포넌트의 렌더링 시간과 원인을 분석할 수 있음.
        -   Chrome DevTools : Chrome DevTools 의 Performance 탭을 사용하여 애플리케이션의 렌더링 성능을 분석할 수 있고, JavaScript 실행 시간, 레이아웃 변화, 페이지 로드 과정 등을 시각적으로 확인할 수 있으며, 성능 병목 현상을 식별하는 데 유용함
        -   Lighthouse : Lighthouse 는 웹 애플리케이션의 성능, 접근성, 검색 엔진 최적화 등을 분석해주는 도구. React 애플리케이션의 성능을 종합적으로 평가하고, 개선을 위한 구체적인 제안을 받을 수 있음.
        -   이외에 WebPageTest, Bundlephobia, Webpack Bundle Analyzer 등을 활용할 수 있음.

-   Core Web Vitals 알아보기 (LCP, FID, CLS 등)

    -   Web Vitals(https://web.dev/articles/vitals)

        -   웹 바이탈 은 웹에서 우수한 사용자 환경을 제공하는 데 필수적인 품질 신호에 관한 통합 지침을 제공하기 위한 Google 의 이니셔티브
        -   Google 은 지난 수년간 성능을 측정하고 보고할 수 있는 여러 도구를 제공해 왔고, 이러한 도구를 사용하는 데 전문가인 개발자도 있고, 풍부한 도구와 측정항목을 사용하기가 어려운 개발자도 있음
        -   사이트 소유자가 성능에 대한 전문가가 아니어도 사용자에게 제공하는 환경의 품질을 파악할 수 있어야 하며, 웹 바이탈 이니셔티브는 환경을 간소화하고 사이트에서 가장 중요한 측정 항목인 코어 웹 바이탈에 집중할 수 있도록 돕는 것을 목표로 함

    -   Core Web Vitals(https://web.dev/articles/vitals)

        -   Core Web Vitals 은 모든 웹페이지에 적용되는 웹 바이탈의 하위 집합으로, 구성하는 측정항목은 시간이 지남에 따라 발전됨
        -   Core Web Vitals 는 Google 이 웹사이트의 사용자 경험을 측정하기 위해 도입한 일련의 지표들이며, 이들은 웹사이트의 성능, 반응성, 시각적 안정성을 평가하는 데 중점을 두며, 검색 엔진 최적화(SEO)와 사용자 만족도에 큰 영향을 미침
        -   Core Web Vitals 의 주요 지표

            -   Largest Contentful Paint(LCP) - https://web.dev/lcp/

                -   LCP 는 페이지 로딩 성능을 측정함
                -   페이지의 가장 큰 콘텐츠 요소(예: 이미지, 비디오, 대형 텍스트 블록)가 화면에 나타나는데 걸리는 시간을 측정
                -   사용자가 페이지를 방문했을 때 주요 콘텐츠가 얼마나 빨리 로드되는지를 나타냅니다. LCP 는 2.5초 이내가 이상적임

                ![1](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/98c72ce1-87d8-4328-9a9e-114ac8b07636)

            -   First Input Delay(FID) - https://web.dev/fid/

                -   FID 는 상호작용성과 반응성을 측정함
                -   사용자가 페이지의 어떤 요소를 처음 클릭하거나 탭할 때부터 브라우저가 그 상호작용에 응답하기 시작할 때까지의 지연 시간을 측정함
                -   FID 는 사용자가 페이지와 상호작용할 때의 경험을 평가하며, 100밀리초 이하가 권장

                ![2](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/a7b193bb-b69e-4da4-a977-857c59363bdb)

            -   Cumulative Layout Shift(CLS) - https://web.dev/cls/

                -   CLS 는 시각적 안정성을 측정함
                -   페이지 로딩 중에 발생하는 예기치 않은 레이아웃 이동의 정도를 측정함
                -   예를 들어, 이미지나 광고가 로드되면서 텍스트가 갑자기 움직이는 것과 같은 현상을 평가함
                -   CLS 점수는 낮을수록 좋으며, 0.1 이하가 이상적

                ![3](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/f6cb0a8e-69b0-41b5-82b4-9f74d1c6b5c0)

            -   First Contentful Paint(FCP) - https://web.dev/fcp/

                -   콘텐츠가 포함된 첫 페인트 (FCP) 측정항목은 사용자가 페이지로 처음 이동한 시점부터 페이지 콘텐츠의 일부가 화면에 렌더링된 시점까지의 시간을 측정함
                -   이 측정항목의 '콘텐츠'는 텍스트, 이미지 (배경 이미지 포함), \<svg> 요소 또는 흰색이 아닌 \<canvas> 요소를 의미
                -   우수한 사용자 환경을 제공하려면 사이트의 첫 콘텐츠 페인트가 1.8초 이하여야함

                ![4](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/706c4d67-0919-475e-b9a1-1d0a4835adb9)

                ![5](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/837d58e7-6dc3-4657-b49d-c02b0696f51e)

            -   Interaction to Next Paint(INP) - https://web.dev/inp/

                -   다음 페인트에 대한 상호작용 (INP)은 2024년 3월에 최초 입력 반응 시간 (FID)을 대체할 대기 중인 Core Web Vital 측정항목임
                -   INP 는 사용자가 페이지를 방문하는 전체 기간에 발생하는 모든 클릭, 탭, 키보드 상호작용의 지연 시간을 관찰하여 사용자 상호작용에 대한 페이지의 전반적인 응답성을 평가하는 측정항목임
                -   최종 INP 값은 관찰된 가장 긴 상호작용이며 이상점을 무시함

                ![6](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/def6fd54-a4ed-4dd4-98b4-ea0d9153f3c3)

            -   TTFB(Time to First Byte) - https://web.dev/ttfb/

                -   TTFB 는 리소스 요청과 응답의 첫 바이트가 도착하기 시작하는 시점 사이의 시간을 측정하는 측정항목임
                -   TTFB 는 startTime 에서 responseStart 사이의 경과 시간을 측정함
                -   TTFB 는 콘텐츠가 포함된 첫 페인트 (FCP) 및 최대 콘텐츠 렌더링 시간 (LCP) 과 같은 사용자 중심 측정항목보다 우선하므로, 서버가 탐색 요청에 충분히 빠르게 응답하는 것이 좋음
                -   대략적으로 대부분의 사이트는 첫 바이트까지의 시간이 0.8초 이하여야 함

                ![7](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/2c32b71a-806b-4858-ac5f-2e82bdc1c435)

                ![8](https://github.com/Yuhyeon0516/Micro-Frontend-Architecture_Study/assets/120432007/74c5f772-f6e2-4625-8c00-270d85f2ec35)

    -   [pagespeed.dev](https://pagespeed.web.dev)에서 위와 같은 지표를 모두 확인할 수 있음

-   Lighthouse 도구 사용하기
    -   Lighthouse란?
        -   Lighthouse 는 Google 이 개발한 오픈 소스, 자동화된 웹사이트 성능 평가 도구
        -   웹 애플리케이션의 성능, 접근성, 검색 엔진 최적화(SEO), 그리고 프로그레시브 웹 앱(PWA) 준수 여부를 분석
        -   성능 측정 : 웹 페이지의 로드 속도, 상호작용 준비 상태 등을 측정
        -   접근성 평가 : 웹사이트의 접근성 기준 준수 여부를 확인
        -   베스트 프랙티스 : 코드 최적화, 이미지 최적화 등 웹 개발의 베스트 프랙티스를 제공
        -   SEO 분석 : 검색 엔진 최적화 상태를 평가하여 웹사이트의 검색 엔진 가시성을 높일 수 있는 조언을 제공
        -   PWA 평가 : 프로그레시브 웹 앱 기준에 따른 웹사이트의 준수 여부를 분석
    -   Lighthouse의 중요성
        -   사용자 경험 향상 : 빠르고 접근성 높은 웹사이트는 사용자 경험을 크게 향상시킴
        -   검색 엔진 순위 개선 : 최적화된 웹사이트는 검색 엔진 결과에서 더 높은 순위를 차지함
        -   기술적 문제 해결 : 성능 저하의 원인을 식별하고 개선 방법을 제시함
    -   Lighthouse 사용 시 고려 사항
        -   종합적인 접근 : Lighthouse는 다양한 측면에서 웹사이트를 분석하는데, 성능 측정 결과는 여러 요소에 의해 영향을 받을 수 있으므로, 각각의 측면을 고려하여 종합적으로 개선해야함
        -   지속적인 최적화 : 웹 기술과 트렌드의 지속적인 변화에 따라, 성능 최적화는 끊임없이 진행되어야 하는 과정
    -   Lighthouse 사용 방법
        -   Chrome DevTools 인증이 필요한 페이지를 간편하게 감사하고 사용자 친화적인 형식으로 보고서를 읽을 수 있음
        -   Npm 패키지를 전역으로 설치하여 사용 명령줄에서 셸 스크립트를 통해 Lighthouse 실행을 자동화함
        -   프로그래밍 방식으로 노드 모듈로 사용 Lighthouse를 지속적 통합 시스템에 통합
        -   웹 UI 에서 아무것도 설치하지 않고 Lighthouse 를 실행하고 보고서에 연결
            -   PageSpeed Insights 에서 Lighthouse 결과를 확인할 수 있음
            -   Chrome 확장 프로그램으로 Lighthouse 실행

### 보안 이슈

### 팀 운영하기

### 배포 전략 설정

### 장애 대응

## MFA를 이용하여 커리어 플랫폼 서비스 만들기(결과물)

![결과물]()

## 사례로 배우는 모놀리식에서 마이크로 프론트엔드로의 점진적 전환

### 사례로 배우는 모놀리식에서 마이크로 프론트엔드로의 점진적 전환

-   시나리오 소개(FE 모놀리식 SPA, BE 마이크로 서비스)
-   모노레포 안의 패키지 분리(Feat. TypeScript)
-   단순 코드 분할에서 의존성 정리 및 패키지 계층 분리(Feat. TypeScript)
-   빌드 타임 코드 공유에서 패키지 빌드 후 공유로 점진적 전환
-   런타임 공유 패키지와 마이크로 앱 분할 및 독립 개발 환경 구축

## 런타임 인젝션 통합방식을 활용한 카카오의 MFA

### 모두의 MFA, Legacy에서도 적용하는 마이크로 프론트엔드

### 실습 환경 및 초기 셋팅

### 스타일 격리를 위한 실습

### runtime injection을 위한 webpack 설정

### antd, redux를 활용한 MailList 컴포넌트 작성

### tailwind, zustand를 활용한 ShoppingList 컴포넌트 작성

### Routing을 통한 서로 다른 프로젝트에서의 MFA Component 사용

### legacy 환경 프로젝트 구축

### legacy 에서의 MFA
