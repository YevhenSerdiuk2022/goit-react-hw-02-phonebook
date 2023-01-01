import styled from 'styled-components';

export const ContactsItem = styled.li`
display: flex;
padding: ${p => p.theme.space[3]}px;
`;
export const Button = styled.button`

  margin: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
 
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px; 
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.muted};
  font-family: ${p => p.theme.fonts.dody};
  font-size: ${p => p.theme.fontSize.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};

 &:hover,
 &:focus{
    background-color: ${p => p.theme.colors.secondary};
  }
`;
export const ContactsText = styled.p`
 margin-top: ${p => p.theme.space[0]}px;
 margin-bottom: ${p => p.theme.space[0]}px;
 margin-right: ${p => p.theme.space[4]}px;
`; 