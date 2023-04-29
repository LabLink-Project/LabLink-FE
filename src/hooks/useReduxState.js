import { useSelector } from 'react-redux';

/**
 * get a state in redux store
 * @param {String} type, redux state name
 * @return {any} redux state
 */
function useReduxState(type) {
  const address = useSelector(state => state);

  // expect 'type's type : string
  //
  if (!type) return address.studyTypeHandler;
  if (type) return address[type];
}

export default useReduxState;
