# 🔧 Git 핵심 용어 정리 (실전 기준)

---

## 1️⃣ Git / Repository 기본

### Git
- 버전 관리 도구
- 파일의 변경 이력을 시간순으로 저장함
- 누가 / 언제 / 무엇을 바꿨는지 추적 가능

### Repository (Repo)
- Git으로 관리되는 프로젝트 저장소
- 두 종류
  - 로컬 저장소: 내 컴퓨터
  - 원격 저장소: GitHub / GitLab

---

## 2️⃣ 작업 흐름 핵심 3단계

### Working Directory
- 지금 내가 코드 수정하고 있는 공간
- 아직 Git이 “기억”하지 않음

### Staging Area
- 커밋할 파일을 선별해서 올려두는 곳
- 사용 명령어
  git add

### Commit
- 변경사항을 하나의 버전 스냅샷으로 저장
- 사용 명령어
  git commit -m "메시지"

📌 흐름
수정 → add → commit

---

## 3️⃣ 브랜치 (Branch)

### Branch
- 독립된 작업 공간
- 기본 브랜치와 분리해서 작업 가능

### main / master
- 최종 배포용 브랜치
- 항상 안정 상태여야 함

### develop
- 팀 개발의 중심 브랜치
- 기능들이 모이는 곳

### feature 브랜치
- 기능 단위 작업 브랜치
- 예
  - feature/login
  - feature/signup


---

## 4️⃣ 브랜치 이동 & 생성

### checkout
- 브랜치 이동
  git checkout develop

### switch (요즘 권장)
- git switch develop

### branch
- 브랜치 생성
  git branch feature/login

### checkout -b / switch -c
- 생성 + 이동
  git switch -c feature/login

---

## 5️⃣ 원격 저장소 관련

### origin
- 원격 저장소의 별명
- 보통 기본값이 origin

### clone
- 원격 → 로컬로 복사
  git clone 주소

### push
- 로컬 → 원격으로 업로드
  git push origin feature/login

### pull
- 원격 변경사항 가져오고 + 합치기
  git pull origin develop

### fetch ⭐ (중요)
- 가져오기만 하고 합치지는 않음
  git fetch origin

📌 실무에서는
fetch → 확인 → merge
이게 더 안전함

---

## 6️⃣ Merge & 충돌

### merge
- 브랜치 합치기
  git merge develop

### Conflict (충돌)
- 같은 파일의 같은 줄을 서로 다르게 수정했을 때 발생
- 사람이 직접 해결해야 함

📌 충돌은 실수 아님
👉 협업하면 반드시 겪음

---

## 7️⃣ MR / PR (협업 핵심)

### Merge Request (MR) / Pull Request (PR)
- “이 브랜치 → 저 브랜치로 합쳐주세요” 요청
- 코드 리뷰 + 테스트 + 토론

📌 GitLab = MR
📌 GitHub = PR

### LGTM
- Looks Good To Me
- 리뷰 통과 👍

---

## 8️⃣ 상태 & 로그 확인

### status
- 지금 상태 확인
  git status

### log
- 커밋 이력 보기
  git log

### diff
- 변경 내용 비교
  git diff

---

## 9️⃣ 커밋 수정 관련

### amend
- 마지막 커밋 수정
  git commit --amend

### force push ⚠️
- 원격 히스토리 강제 변경
  git push --force

📌 팀 프로젝트에서는 매우 조심
👉 혼자 쓰는 브랜치에서만!

---

## 🔟 기타 자주 나오는 용어

### HEAD
- 현재 내가 보고 있는 커밋 위치

### Stash
- 작업 중인 변경사항 임시 보관
  git stash

### Rebase (고급)
- 커밋 히스토리 정리
- 초반엔 merge만 써도 충분

---