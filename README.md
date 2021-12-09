# Omniscient-Public-Point-Of-View
## 프로젝트 소개
<img src ="https://user-images.githubusercontent.com/78855847/145418626-02b99678-febf-4ba8-bb1e-d4c549f284cf.png" width = "73%">
<img src ="https://user-images.githubusercontent.com/78855847/145418621-772c8a8d-b533-48d2-94de-af24f60ee9c6.png" width = "73%">

#### 진보 언론의 뉴스기사와 보수 언론의 뉴스기사를 동시에 비교하면서 볼 수 있는 웹 서비스입니다.<br><br>

## 프로젝트 계획이유
최근 떠오르는 키워드로 **필터버블**이라는 단어가 있습니다.  
**필터버블**은 인터넷 정보 제공자가 이용자에게 맞춤형 정보를 제공함에 따라  
의도적으로 반대에 있는 정보를 찾아보지 않는 이상 **선별된 정보에만 노출되게 되는 현상**을 말합니다.  
이 현상은 다양한 부작용을 일으키고 있지만, 특히 정치적 이슈에 관해서 편향된 시야를 만드는 경우가 잦아   
어떻게 하면 의도가 담겨있는 기사들을 읽어도 편향되지 않은 시야를 가질 수 있을까 고민한 결과  
**아주 다른 시각의 기사를 동시에 비교하며 읽어보는 것이 좋은 해결책**이 될 것이라고 생각하였습니다.
<br><br>

## 서버 설치 방법
1. 작업할 폴더에서 ``` git clone http://khuhub.khu.ac.kr/2018110651/Omniscient-Public-Point-Of-View.git ```
2. [NaverApi](https://developers.naver.com/apps/#/register?defaultScope=search, "naverapi link")에 접속하여 api등록 후 **Client_id**와 **Client_secret**을 GET 
3. **server.js** 파일의 다음 부분을 수정<pre><code>var client_id = 'Q5XjQPuQgvUh7MQCyBHx';  
var client_secret = 'dF9OQ6AqrV'; 
</code></pre>
<br><br>

## 웹페이지 배포 및 접속 방법
1. **Google cloud platform** 가입
2. 새로운 프로젝트를 만들거나 기존 프로젝트를 선택
3. 왼쪽 메뉴에서 **App Engine**을 선택한 후 애플리케이션 만들기를 진행
4. 배포를 위해 **Cloud SDK** 설치
5. 터미널에서 프로젝트 폴더에 들어가 ```gcloud init``` 
    - 시키는 대로 로그인
    - 아까 생성한 프로젝트 선택
6. 터미널에 ```gcloud app deploy```
7. 배포가 완료되면 **Google cloud platform** 대시보드에서 **url** 확인
8. list.ejs 파일을 열어 방금 확인한 **url**로 다음 태그의 **src** 수정(도메인 부분만) 
```
<iframe src="https://oppov-334600.du.r.appspot.com/result/progress/<%=주제%> 
width="550" height="600" marginwidth="0" frameborder="2" scrolling="yes">
```
9. (5),(6)번을 다시 진행(업데이트)
10. 대시보드에서 확인한 **url**로 사이트 접속
<br><br>

## 웹페이지 기능 설명
#### 검색 기능
<img src ="https://user-images.githubusercontent.com/78855847/145418621-772c8a8d-b533-48d2-94de-af24f60ee9c6.png" width = "50%" height = "50%">

**키워드를 검색하게 되면**  
**진보 영역에는 한겨레, 오마이뉴스와 같은 진보언론의 기사를**  
**보수 영역에는 조선일보, 중앙일보와 같은 보수언론 기사의 검색결과를 출력합니다.**
<br><br>

#### 뉴스 비교 기능
<img src ="https://user-images.githubusercontent.com/78855847/145418613-920dcb10-b7e9-4727-98eb-d8240e150ba6.png" width = "50%" height = "50%">

**웹페이지는 iframe기능을 통해 진보 영역과 보수 영역 각자 개별적인 웹페이지를 사용합니다.**  
**그래서 사용자는 각각의 검색결과 중 원하는 뉴스의 원하는 부분을 바로 비교하며 볼 수 있습니다.**  
**또한 진보나 보수영역을 클릭하고 뒤로가기 등의 브라우저 기능을 사용하면 각각 따로 웹페이지를 조종할 수 있습니다.**
<br><br>

## 프로젝트 구성 
<img src ="https://user-images.githubusercontent.com/78855847/145418622-82b3532b-1d2e-499b-aecf-a15a9459ace8.png" width = "80%" height = "80%">
<br><br>

## 프로젝트 작성자 및 참고 자료

### 작성자
- 컴퓨터공학과 2018110651 신동해
- 오픈소스SW개발 수업 프로젝트

### 참고자료
- YouTube : 코딩 애플
