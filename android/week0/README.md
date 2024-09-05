# Wafflestudio Android Seminar Assignment 0

## 과제의 목표

- 안드로이드 스튜디오 설치
- 첫 세미나의 원활한 진행을 위해 환경설정 및 각종 의존성 다운로드
- 코틀린 기본 문법 익히기

# 과제 0-a. 안드로이드 스튜디오 설치하고 첫 앱 실행하기

현재 공식 버전은 [Koala](https://developer.android.com/studio)입니다. 이걸 다운받으셔도 되고, 조금 더 최신 버전을 받고 싶으시다면 [Preview 버전(Jellyfish)](https://developer.android.com/studio/preview)를 다운받아 주세요.

## 첫 프로젝트 만들기

1. New Project를 눌러 줍니다.

2. 선택지가 참 많은데, Empty Views Activity를 골라 줍니다(디폴트로 선택되어 있는 보라색 Empty Activity가 아님에 주의). Activity가 뭔지는 모르겠지만 우선 넘어갑시다.
    <details>
    <summary>스크린샷</summary>
    <div markdown="1">
    
    <img width="901" alt="image" src="https://github.com/user-attachments/assets/a0500a71-6c03-446d-b75e-a4d02b8ad112">
    
    </div>
    </details>
   
3. 적당히 프로젝트의 이름을 적어 주고 finish를 눌러 줍니다.
    <details>
    <summary>스크린샷</summary>
    <div markdown="1">
    
    <img width="898" alt="image" src="https://github.com/user-attachments/assets/c17af9ba-5c31-4325-b12a-8955e2afc373">
    
    </div>
    </details>

5. 이것저것 잔뜩 다운로드되면 Finish 를 누르고, 새로 열린 창에서 Gradle project sync in progress... 알림이 사라질 때까지 대기합니다(우하단 `Gradle: ~~` 프로그레스 바가 없어지면 됩니다). 꽤 오래 걸립니다.

6. sync가 끝나면 좌상단 드롭다운을 Android 에서 Project 로 변경해 줍니다.
    <details>
    <summary>스크린샷</summary>
    <div markdown="1">
    
    <img width="1389" alt="image" src="https://github.com/user-attachments/assets/7b203700-7142-444c-8fde-18796311d8e0">
    
    </div>
    </details>
   


8. MainActivity.kt라는 것이 생겨 있지만, 일단 신경쓰지 않고 좌상단의 초록색 재생 버튼을 누릅니다.

9. 높은 확률로 노트북의 팬이 돌아가기 시작하고... 조금 기다리면 오른쪽에 휴대폰(에뮬레이터) 화면이 등장합니다. Hello World! 라는 글씨가 보이면 완료입니다. 이 상태의 스크린샷을 찍어서 업로드 해 주세요. 그리고 이 상태로 첫 번째 세미나에 오시면 됩니다!
    <details>
    <summary>스크린샷</summary>
    <div markdown="1">
    
    <img width="1398" alt="image" src="https://github.com/user-attachments/assets/89760403-9300-45eb-afed-711d1ce006ce">
    
    </div>
    </details>
    

설치 중 문제가 발생할 경우 슬랙으로 바로 물어봐 주세요.

# 과제 0-b. 코틀린 기초 문법 익히기

### Kotlin 파일 실행하는 법

코틀린(.kt) 파일은 안드로이드 스튜디오에서도 실행할 수 있습니다.
적당히 MainActivity.kt 옆에 Main.kt 파일을 만들어 주고

```kotlin
fun main() {
  println("Hello World!")
}
```

를 입력해 주시면 라인 번호 옆에 초록색 재생 버튼이 생깁니다. 누르시면 main 함수를 실행할 수 있습니다.

더욱 가볍게 코틀린을 실행해 보고 싶으시면, 웹 사이트 [https://play.kotlinlang.org/](https://play.kotlinlang.org/)에서도 코틀린 코드를 실행시킬 수 있습니다.

### 코틀린 기초 문법 공부하기

1. [https://kotlinlang.org/docs/kotlin-tour-hello-world.html](https://kotlinlang.org/docs/kotlin-tour-hello-world.html)
   위 사이트에서 1번(Hello World) 부터 7번(Null Safety)까지 진행해 주세요.

2. [https://play.kotlinlang.org/byExample/01_introduction/01_Hello%20world](https://play.kotlinlang.org/byExample/01_introduction/01_Hello%20world) 를 보며 공부합니다.

1번 항목은 당장의 세미나를 위해 반드시 모두 알고 오셔야 합니다.
다만 2번의 내용을 전부 파악하는 것은 직접 코드를 많이 써보기 전까지는 어려울 수 있습니다("언어" 공부니까요!). 자신에게 익숙한 언어와 비교해서 어떤 점이 비슷하고 어떤 점이 다른지, 코틀린에는 어떤 처음 보는 문법이 있는지 비교해 보며 훑어 보기만 해도 충분합니다. Java에 익숙하신 분이라면 매우 금방 익힐 수 있습니다.

## 과제: 코테 문제 Kotlin으로 다시 풀기

코테의 아무 문제나, 자신의 코드에서 핵심 로직 부분을 Kotlin으로 다시 써 봅니다.
전/후 코드를 업로드 해 주시면 됩니다.
앞서 공부한 코틀린의 다양한 syntax sugar를 활용해서, 코드를 최대한 간결하게 작성해 보세요.

# 제출 방법
[과제 전용 레포](https://github.com/wafflestudio/seminar-2024-android-assignment)를 fork 한 뒤, week0 폴더의 submit.md 파일에 
1. 안드로이드 스튜디오 환경설정 스크린샷
2. 코테 문제 전/후 코드
3. 코틀린 기초 문법 2번 항목 읽으면서 자신이 알고 있는 언어와 어떤 점에서 비슷하고 뭐가 달랐는지, 난생 처음보는 문법이 있었다면 뭐가 있었는지 간략하게 정리 (3~4가지 정도)

세 가지 내용을 채워서 커밋한 뒤, PR을 올려 주세요.
