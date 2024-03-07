# Today Problem
[with-algorithm](https://github.com/kangjae4real/with-algorithm) [README.md](https://github.com/kangjae4real/with-algorithm/blob/master/README.md) 문서에 문제 내용을 추가해주는 스크립트입니다. <br />

## Requirements
- Node.js
- yarn

## Environment
`.env.example`을 참고하여 환경변수를 설정해주세요. <br />
환경변수가 없다면 Script가 동작하지 않습니다.
```dotenv
GITHUB_API_ACCESS_TOKEN="Gtihub 액세스 토큰(repo 접근 권한이 포함되어야 합니다.)"
OWNER="수정할 레포지토리 오너(사용자)"
REPO="수정할 레포지토리"
TARGET_PATH="수정할 레포지토리의 파일 경로"
MESSAGE="커밋 메세지"
NAME="Git 사용자명"
EMAIL="Git 사용자 이메일"
TITLE="제목"
DESCRIPTION="설명(Optional)"
LINK_TITLE="링크 내용(Optional)"
LINK="링크 주소"
```

## Run
```shell
$ yarn # or npm install
$ yarn start # or npm run start
```

## Result
![Result](./docs/result.png)