# Tasty-Inventory: Back-End

### 1. 개요

---

#### 1.1. 소개

쉽고 간편한 재고 관리, 맛있는 재고와 함께 시작해요! - [바로가기](https://tasty-inventory-fe.vercel.app/)

* ✅ **제작 의도**: 매일 엑셀 파일에 정리했던 재고를 맛있는 재고에서 간편하게 입력하고, 남은 수량을 예측할 수 있어요.
  
#### 1.2. 기술 스택


| Category | Used |
| --- | --- |
| JavaScript | JavaScript ES6 |
| React version | 18.2.0 |
| react-dom | 18.2.0 |
| react-router-dom | 6.22.3 |
| react-scripts | 5.0.1 |
| redux | 5.0.1 |
| styled-components | 6.1.8 |
| API Docs | Swagger, Notion |
| CI/CD | Vercel |
| Monitoring | Sentry |

### 2. 실행방법

---

#### 2.1. Config

* `.env` 파일 프로젝트 최상위 디렉토리에 위치

    <br>

    ![alt text](<Screenshot 2024-06-19 at 11.30.01 AM.png>)

    <br>

### 2.2. `npm test`

대화형 감시 모드에서 테스트 실행기를 시작합니다.\
자세한 내용은 [테스트 실행](https://facebook.github.io/create-react-app/docs/running-tests) 섹션을 참조하세요.

### 2.3. `npm run build`

`build` 폴더에 프로덕션용 앱을 빌드합니다.\
프로덕션 모드에서 React를 올바르게 번들링하고 최고의 성능을 위해 빌드를 최적화합니다.

빌드는 압축되고 파일 이름에는 해시가 포함됩니다.\
앱이 배포할 준비가 완료되었습니다!

자세한 내용은 [배포](https://facebook.github.io/create-react-app/docs/deployment) 섹션을 참조하세요.

### 2.4. `npm run eject`

**참고: 이 작업은 되돌릴 수 없습니다. 한 번 `eject`를 하면 다시 되돌릴 수 없습니다!**

빌드 도구 및 구성 선택에 만족하지 않는 경우 언제든지 `eject`할 수 있습니다. 이 명령은 프로젝트에서 단일 빌드 종속성을 제거합니다.

대신 모든 구성 파일과 전이 종속성(webpack, Babel, ESLint 등)을 프로젝트로 복사하여 완전한 제어 권한을 가질 수 있습니다. `eject`를 제외한 모든 명령은 여전히 작동하지만, 복사된 스크립트를 가리키므로 이를 수정할 수 있습니다. 이 시점부터는 스스로 관리해야 합니다.

`eject`를 사용할 필요는 없습니다. 큐레이팅된 기능 세트는 소규모 및 중규모 배포에 적합하며, 이 기능을 사용해야 한다는 압박감을 느끼지 않아도 됩니다. 그러나 준비가 되었을 때 사용자 지정할 수 없다면 이 도구가 유용하지 않다는 점을 이해합니다.

### 3. 🤝 Code Convention

---

#### 3.1 ✓ File Naming
- 파일 이름: **케밥 케이스(kebab-case)** 
- 컴포넌트 파일 이름: **파스칼 케이스(PascalCase)**
- 함수 및 변수 이름: **카멜 케이스(camelCase)**

#### 3.2 ✓ 인터페이스 이름에 명사/형용사 사용 [interface-noun-adj]

타입스크립트의 경우 인터페이스(interface)의 이름은 명사/명사절 혹은 형용사/형용사절로 짓는다.

#### 3.3 ✓ 클래스 이름에 명사 사용 [class-noun]

클래스 이름은 명사나 명사절로 짓는다.

#### 3.4 ✓ 함수 이름은 동사/전치사로 시작 [function-verb-preposition]

함수명은 기본적으로 동사로 시작한다. 다른 타입으로 전환하는 함수에서는 전치사를 사용할 수 있다.

#### 3.5 ✓ 상수는 대문자와 언더스코어로 구성 [constant_uppercase]

상수 이름은 대문자로 작성하며, 복합어는 언더스코어 '_'를 사용하여 단어를 구분한다.

#### 3.6 ✓ 변수에 소문자 카멜표기법 적용 [var-lower-camelcase]

상수가 아닌 변수에는 소문자 카멜표기법(Lower camel case)을 사용한다.

#### 3.7 ✓ 임시 변수 외에는 1 글자 이름 사용 금지 [avoid-1-char-var]

함수 범위 이상의 생명 주기를 가지는 변수에는 1글자로 된 이름을 쓰지 않는다. 반복문의 인덱스나 화살표 함수의 파라미터 등 짧은 범위의 임시 변수에는 관례적으로 1글자 변수명을 사용할 수 있다.

### 예시

```javascript
// File: my-component.js
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

### 추가 설명

- **파일 이름**: 컴포넌트 파일 이름은 `MyComponent.js`와 같이 파스칼 케이스를 사용하고, 일반 파일 이름은 `my-component.js`와 같이 케밥 케이스를 사용합니다.
- **함수 및 변수 이름**: `handleClick`과 같이 카멜 케이스를 사용합니다.
- **상수 이름**: 상수는 `API_URL`과 같이 대문자와 언더스코어를 사용합니다.
- **임시 변수**: 반복문 인덱스나 화살표 함수의 파라미터로 사용되는 경우에만 `i`와 같은 1글자 이름을 사용합니다.
### 4. 🤝 Git Convention

---


#### 4.1 Issue

모든 작업의 단위는 github에 생성된 Issue를 기준으로 합니다.

Issue의 볼륨은 최소 하나의 기능으로 합니다.

하나의 이슈를 마무리하기 전에는 특별한 상황이 아닌 이상 다른 작업에 대한 이슈를 생성하지 않습니다.

#### 4.2 PR (Pull Request)

Issue ≤ PR

하나의 이슈에 대해서 반드시 하나의 PR이 열려야하는 건 아닙니다.

원활한 코드리뷰와 리뷰에 대한 내용을 반영하기 위해서 PR은 3개의 commit을 넘어가지 않아야합니다.

하나의 PR에 3개 이상의 File Change는 지양합니다.
 

### 5. Commit

---

| 커밋 구분 | 설명 |
| --- | --- |
| Feature | (Feature) 개선 또는 기능 추가 |
| Bug | (Bug Fix) 버그 수정 |
| Doc | (Documentation) 문서 작업 |
| Test | (Test) 테스트 추가/수정 |
| Build | (Build) 빌드 프로세스 관련 수정(yml) |
| Performance | (Performance) 속도 개선 |
| Refactor | (Cleanup) 코드 정리/리팩토링 |

- 이슈번호와 함께 커밋 내용을 적는다.
- 예시 : [#1] feataure : ~