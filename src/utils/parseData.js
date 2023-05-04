/**
 * change gender data format for render
 * @param {string} gender gender value
 * @returns {string} gender value
 */
export const formatGender = gender => {
  if (gender === undefined) return '성별 데이터를 불러오지 못했어요 😥';
  if (gender === 'ALL') return '성별 무관';
  if (gender === 'MALE') return '남성';
  if (gender === 'FEMALE') return '여성';
};

/**
 * change age data for render
 * @param {string} minAge
 * @param {string} maxAge
 * @returns {string}
 */
export const formatAge = (minAge, maxAge) => {
  if (minAge === undefined) return '연령 데이터를 불러오지 못했어요 😥';
  if (minAge === 0 && maxAge === 100) return `연령 무관`;
  return `${minAge}세 이상 ${maxAge}세 이하`;
};

/**
 * check benefit value : if value is null - return undefined
 * @param {string} benefit
 * @returns
 */
export const formatBenefit = benefit => {
  if (benefit === undefined) return '우대사항 데이터를 불러오지 못했어요 😥';
  if (benefit !== 'null') {
    return benefit;
  }
};

/**
 * is this null? just check 'null' string
 * @param {*} element
 * @returns
 */
export const isNull = element => {
  if (element === null || element === 'null') return true;
  return false;
};

/**
 * is this default image?
 * @param {string} url
 * @returns
 */
export const isDefaultImage = url => {
  if (
    url ===
    'https://cdn.icon-icons.com/icons2/931/PNG/512/empty_file_icon-icons.com_72420.png'
  )
    return true;
};
