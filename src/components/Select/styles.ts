import styled from 'styled-components';
import ReactSelect, { Styles, Theme } from 'react-select';

export const Container = styled.div`
  flex: 1;
`;

export const SelectComponent = styled(ReactSelect).attrs({
  styles: {
    control: styles => ({
      ...styles,
      height: 40,
      backgroundColor: '#F2F6F6',
      borderRadius: 2,
      borderColor: '#dfe1e8',
      borderWidth: 1,
      paddingLeft: 4,
      paddingRight: 4,
      ':hover': {
        borderColor: '#dfe1e8',
      },
    }),
    placeholder: styles => ({
      ...styles,
      color: '#8F8F8F',
      fontFamily: 'Montserrat',
    }),
    container: styles => ({
      ...styles,
      ':focus': {
        borderColor: '#FF7600',
      },
    }),
    indicatorSeparator: () => ({
      opacity: 0,
    }),
    option: styles => ({
      ...styles,
      fontFamily: 'Montserrat',
      color: '#8F8F8F',
      background: 'transparent',
      ':hover': {
        backgroundColor: '#fafafa',
      },
    }),
  } as Styles,
  theme: (theme: Theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#FF7600',
    },
  }),
})``;
