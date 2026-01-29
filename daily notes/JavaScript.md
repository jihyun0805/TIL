## 📌 async
- async = “이 함수 안에서는 시간이 걸리는 작업을 기다릴 수 있게 해준다”
```
const handleClick = async () => {
  const data = await getMyInfo()
  setUser(data)
}
```
| 줄                 | 의미                |
| ----------------- | ----------------- |
| async             | “기다림 허용”          |
| await getMyInfo() | “백엔드 응답 올 때까지 대기” |
| setUser(data)     | “받은 데이터로 화면 업데이트” |

```async () => {}``` “비동기 처리를 할 수 있는 함수 선언” / await는 async 함수 안에서만 사용 가능

## 📌 Next.js(App Router) 라우팅 규칙 전체 정리
- “폴더 구조 = URL” ➡️ URL: /history
```
app/
  history/
    page.tsx
```

- 동적 라우팅 ➡️ /users/123
```
app/
  users/
    [id]/
      page.tsx
```
- 하위 경로 ➡️ /history/detail
```
app/
  history/
    detail/
      page.tsx
```



