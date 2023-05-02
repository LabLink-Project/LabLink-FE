export const URI = {
  crud: {
    home: '/',
    search: '/search',
    studys: '/studys',
    studyDetail: '/studys/:id',
    studyApply: '/studys/:id/apply',
    bookmark: '/bookmarks',
  },
  auth: {
    signin: {
      home: '/auth/signin',
      user: '/auth/signin/user',
      company: '/auth/signin/company',
    },
    signup: {
      home: '/auth/signup',
      user: '/auth/signup/user',
      userTerm: '/auth/signup/user/term',
      company: '/auth/signup/company',
      companyTerm: '/auth/signup/company/term',
      done: '/auth/signup/done',
      findID: '/auth/findid',
    },
  },
  mypage: {
    user: {
      home: '/mypage/user',
      editInfo: '/mypage/user/editinfo',
      apply: '/mypage/user/apply',
      application: '/mypage/user/application',
    },
    company: {
      home: '/mypage/company',
      createStudy: '/mypage/company/createstudy',
      ongoingStudy: '/mypage/company/ongoingstudy',
      endStudy: '/mypage/company/endstudy',
      applicant: '/mypage/company/applicant',
      feedback: '/mypage/company/feedbacks',
      studySchedule: '/mypage/company/studyschedule',
    },
  },
};
