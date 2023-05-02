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
      serviceTerm: '/auth/signup/term/service',
      personalTerm: '/auth/signup/term/personal',
      marketingTerm: '/auth/signup/term/marketing',
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
      applyStudy: '/mypage/user/applystudy',
      ongoingStudy: '/mypage/user/ongoingstudy',
      endStudy: '/mypage/user/endstudy',
      application: '/mypage/user/application',
      feedback: '/mypage/user/feedback'
    },
    company: {
      home: '/mypage/company',
      editInfo: '/mypage/company/editinfo',
      createStudy: '/mypage/company/createstudy',
      ongoingStudy: '/mypage/company/ongoingstudy',
      endStudy: '/mypage/company/endstudy',
      applicant: '/mypage/company/applicant',
      feedback: '/mypage/company/feedbacks',
      studySchedule: '/mypage/company/studyschedule',
    },
  },
};
