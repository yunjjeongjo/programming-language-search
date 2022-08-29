## 프로그래밍 언어 검색
- Vanilla JS를 이용하여 프로그래밍 언어를 검색하는 서비스를 구현하였습니다.
## API 문서
Base URL : https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev

### 프로그래밍 언어 조회
- /languages
- Method : GET 
- Query Parameter : keyword
- 검색하고자 하는 키워드를 query parameter로 넘기면 조건에 맞는 데이터를 조회하여 응답합니다.
- response body
  ```
  // 'java'라는 키워드로 조회
  /languages?keyword=java

  // 응답 결과는 다음과 같습니다.
  [
    "Java",
    "JavaFX Script",
    "JavaScript",
    "Join Java"
  ]

  ```
  

### 디렉토리 구조
```
programming-language-search
├─ index.html
├─ src
│  ├─ api.js
│  ├─ App.js
│  ├─ main.js
│  ├─ SearchForm.js
│  ├─ SelectedLanguages.js
│  └─ Suggestion.js
└─ style.css

```
