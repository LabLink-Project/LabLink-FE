CRUD

- 홈 : /
- 검색 : /search
- 검색결과 (공고 리스트) : /studys
- 디테일 (공고 상세조회) : /studys/:id
- 찜 목록 : /bookmarks

회원가입

- 로그인 선택 : /auth -> 수정 예정
- 개인 로그인 : /auth/signin/user
- 기업 로그인 : /auth/signin/company
- 회원가입 선택 : /auth/signup
- 개인 회원가입 정보 입력 : /auth/signup/user
- 개인 회원가입 약관 : /auth/signup/user/term
- 기업 회원가입 정보 입력 : /auth/signup/company
- 기업 회원가입 약관 : /auth/signup/company/term -> 구현 예정
- 회원가입 완료 : /auth/signup/done
- 아이디/비밀번호 찾기 : /auth/findid -> 구현 예정

개인 마이페이지

- 홈 : /mypage/user
- 비밀번호 확인 : /mypage/user/checkpw -> 3번으로 통일
- 내 정보 수정 : /mypage/user/editinfo
- 비밀번호 변경 : /mypage/user/editpw -> 3번으로 통일
- 신청한 실험 : /mypage/user/apply
- 진행할 실험 : /mypage/user/progress -> 수정 예정
- 완료된 실험 : /mypage/user/done -> 수정 예정
- 신청서 작성 : /mypage/user/application -> 구현 예정

기업 마이페이지

- 홈 : /mypage/company
- 공고 작성 : /mypage/company/createstudy
- 내가 올린 공고 : /mypage/company/studys
- 지원자 확인 : /mypage/company/applicant
- 피드백 확인 : /mypage/company/feedbacks
- 공고 작성 : /mypage/company/makestudy
