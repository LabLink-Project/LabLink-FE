import { useDispatch, useSelector } from 'react-redux';
import { createStudy } from 'src/redux/modules/createStudyHandler';

// 두 함수를 도메인을 분리해 하나로 합칠 수 있겠다.

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

/**
 * get a create study state in redux
 * @param {String} type, state name
 * @returns {any} state value
 */
export function useCreateStudyState(type) {
  const { createStudyHandler } = useSelector(state => state);
  // console.log(createStudyHandler[type]);
  if (type) return createStudyHandler[type];
  return createStudyHandler;
}

/**
 * set a create study state in redux
 * @param {string} type state name
 * @returns {any} state value
 */
export function useSetCreateStudyState() {
  // console.log('keyboard event is working');

  const dispatch = useDispatch();

  const onChangeHandler = (type, state) => {
    dispatch(createStudy({ name: type, value: state }));
  };

  return onChangeHandler;
}
