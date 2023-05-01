import styled from 'styled-components';

export const StSignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StSignupSpan = styled.span`
  font-size: 14px;
  color: gray;
`;

export const StSignupLogin = styled.div`
  margin-top: 350px;
  display: flex;
  justify-content: center;
`;

export const StSignupHeader = styled.div`
  margin: 16px 0;
`;

export const StSignupTitle = styled.h2`
  font-size: 20px;
`;

export const StSignupLapLink = styled.span`
  font-weight: 700;
  font-size: 35px;
`;

export const StSignupTermWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 24px 0;
`;

export const StSignupTermTitle = styled.div`
  font-size: 20px;
`;

export const StAllAgreement = styled.label`
  margin-bottom: 48px;
  /* margin-left: 22px; */
  display: flex;
`;

export const StTerms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StTermLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StRequirement = styled.span`
  color: red;
  font: bold;
`;

export const StSignupFormWrap = styled.div`
  margin-top: 16px;
`;

export const StSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StSignupInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StSignupLabel = styled.label`
  width: ${({ width }) => width};
`;

export const StSignupInput = styled.input`
  width: ${({ width }) => width};
  height: 50px;
  border-radius: 10px;
  border: 2px solid gray;
  padding: 14px 12px 14px 8px;
`;

export const StSignupInputName = styled.span`
  margin-left: 8px;
`;

export const StSignupInputCondition = styled.p`
  margin-left: 8px;
`;
