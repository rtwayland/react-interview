import styled from '@emotion/styled';

export const Options = styled.div({
  position: 'absolute',
  font: '12px sans-serif',
  width: 'max-content',
  maxHeight: 150,
  color: '#333',
  backgroundColor: '#fafafa',
  border: `1px solid #ccc`,
  borderRadius: 3,
  padding: '5px 0',
  zIndex: 2,
  overflowY: 'auto',
  top: 23,
});

export const Option = styled.div({
  border: 'none',
  padding: '5px 15px',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: '#e6e6e6',
  },
});

export const DropdownContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});
