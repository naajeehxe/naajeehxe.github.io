# jeehyena.github.io

Personal academic homepage of **Jeehye Na** (MLV Lab, KAIST).
Plain HTML/CSS/JS — no build step, served directly by GitHub Pages.

Live URL (after the first push): **https://jeehyena.github.io**

---

## 1. 처음 게시하기 (GitHub Pages)

> GitHub 계정 `JeehyeNa` 기준. user 사이트는 레포 이름이 반드시 `JeehyeNa.github.io` 여야 합니다.

1. GitHub에서 새 레포 생성: <https://github.com/new>
   - Repository name: `JeehyeNa.github.io`
   - **Public**, README/.gitignore/license는 추가하지 않음 (비어 있는 레포)
2. 터미널에서 이 폴더로 이동한 뒤:

   ```bash
   cd "/Users/jeehyena/Desktop/나지혜/개인홈페이지"
   git init
   git add .
   git commit -m "Initial homepage"
   git branch -M main
   git remote add origin https://github.com/JeehyeNa/JeehyeNa.github.io.git
   git push -u origin main
   ```

3. 레포 → **Settings → Pages** → *Build and deployment*
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → Save
4. 1~2분 뒤 <https://jeehyena.github.io> 에서 확인.
   (user 사이트 `*.github.io` 레포는 보통 push만 해도 자동으로 Pages가 켜집니다.)

이후 수정은 파일 고치고 `git add . && git commit -m "update" && git push` 만 하면 됩니다.

---

## 2. 내용 수정하기

| 바꿀 것 | 파일 |
|---|---|
| 논문 추가/수정, News 추가 | `assets/js/data.js` (맨 위가 최신) |
| 소개글, 관심 분야, Education, Experience, Teaching, 링크 | `index.html` |
| 색상·글꼴·간격 | `assets/css/style.css` (`:root` 변수) |
| CSS/JS 수정 후 브라우저 캐시 갱신 | `index.html`에서 `style.css?v=2`, `data.js?v=2`, `main.js?v=2`의 숫자를 하나 올리기 |
| 프로필 사진 | `assets/img/profile.jpg` 로 저장 (정사각형 추천, 600×600 이상) |
| 논문 썸네일 | `assets/pubs/<id>.png` — `assets/pubs/README.md` 참고 |
| CV | `assets/cv.pdf` 로 저장 후 `index.html`에서 CV 링크의 `hidden` 제거 |
| Google Scholar | `index.html`에서 Scholar 링크 URL 수정 후 `hidden` 제거 |

### 논문 추가 예시 (`assets/js/data.js`)

```js
{
  id: "my-new-paper",            // 썸네일 파일명: assets/pubs/my-new-paper.png
  title: "Paper Title",
  authors: ["Jeehye Na*", "Someone*", "Hyunwoo J. Kim"],   // * = equal contribution
  venue: "ICLR",
  venueFull: "International Conference on Learning Representations (ICLR), 2027",
  year: 2027,
  note: "with Google",           // 선택
  links: { paper: "https://arxiv.org/abs/...", code: "https://github.com/..." }
},
```

`authors` 에서 `"Jeehye Na"` 와 정확히 같은 이름이 자동으로 굵게 표시됩니다.

---

## 3. 로컬에서 미리보기

```bash
cd "/Users/jeehyena/Desktop/나지혜/개인홈페이지"
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000
```

---

## 4. 확인해야 할 것 (TODO)

- [ ] `assets/img/profile.jpg` 프로필 사진 넣기
- [ ] `assets/pubs/` 썸네일 넣기 (없어도 placeholder로 표시됨)
- [ ] `assets/js/data.js` News 날짜(월) 확인 — 논문 accept 시점은 추정값
- [ ] `index.html` Experience 섹션 — 학부 인턴 기간(2024–2025), 그 외 인턴/수상 추가
- [ ] Google Scholar / CV 링크
