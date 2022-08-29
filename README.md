## 프로그래밍 언어 검색
![녹화_2022_08_30_03_22_48_135](https://user-images.githubusercontent.com/93373357/187271419-c07d9da9-8f5c-4b03-b3dd-0d0d8167dd68.gif)


- Vanilla JS를 이용하여 프로그래밍 언어를 검색하는 서비스를 구현하였습니다.
### 구현사항
#### 언어 검색
- [x] 입력한 검색어 기준으로 언어 목록 렌더링
- [x] 화살표 키로 렌더링된 언어 목록 순회
#### 언어 선택
- [x] 엔터키 누르면 언어 선택
- [x] 클릭하면 언어 선택
- [x] 선택된 언어 alert 처리
#### 선택된 언어 렌더링
- [x] alert 처리 후 SelectedLanguage에 렌더링
- [x] 언어 중복 선택 처리 (이미 선택된 언어를 다시 넣으면 맨 뒤로)
- [x] 선택된 언어 최대 갯수 제한 (5개 제한, FIFO)

### 보너스 구현사항
#### 사용성 개선
- [ ] 화면에 접속하면 input에 focus가 자동으로 가도록 합니다.
- [ ] 렌더링 된 추천 언어 목록 내에서 입력한 키워드와 일치하는 문자열에 대해서 Suggestion__item--matched 클래스를 사용하여 강조 처리를 합니다.

#### API 사용 최적화
- [ ] 검색어를 입력하는 동안은 API 호출을 지연하고, 검색어 입력이 완료 되었다고 판단이 되는 경우 API를 호출하도록 최적화 처리를 합니다.
- [ ] 검색어에 따른 API 응답을 캐시해서 사용합니다. 검색어 캐시의 경우, 브라우저를 닫았다 다시 켜면 초기화 되어야 합니다.
#### 기타
- [ ] 화면을 닫았다 다시 켜도 선택된 언어 목록이 유지되도록 만듭니다.
- [ ] 화면을 닫았다 다시 켜도 마지막 화면 상태가 모두 유지되도록 만듭니다. (입력중이던 검색어, 검색된 언어 목록 등)
- [ ] 각 스크립트는 용도에 맞게 적절히 분리하여 별도의 파일로 작성해주세요.

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
