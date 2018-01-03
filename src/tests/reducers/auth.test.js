import authReducer from '../../reducers/auth';

test('should set uid for lgin', () => {
  const uid = 'TOKEN';
  const state = authReducer({}, { type: 'LOGIN', uid });
  expect(state).toEqual({ uid });
});

test('should clear uid logout', () => {
  const state = authReducer({ uid: 'TOKEN' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});