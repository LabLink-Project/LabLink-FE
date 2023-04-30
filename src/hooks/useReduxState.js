import { useSelector } from 'react-redux';

/**
 * get a study state in redux store
 * @param {String} type, redux state name
 * @return {any} redux state
 */
function useReduxState(type) {
  const { studyTypeHandler } = useSelector(state => state);

  // expect 'type's type : string
  if (!type) return studyTypeHandler;
  if (type) return studyTypeHandler[type];
}

export default useReduxState;

/**
 * get a account state in redux store
 * @param {String} type, redux state name
 * @return {any} redux state
 */
export function useAccountState(type) {
  const { accountHandler } = useSelector(state => state);
  if (!type) return accountHandler;
  return accountHandler[type];
}

// 두 함수를 도메인을 분리해 하나로 합칠 수 있겠다.
