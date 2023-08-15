import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  dropdown: {
    border: 0,
    boxShadow: '0px 17.395349502563477px 48.09302520751953px 5.116279125213623px rgba(161, 136, 198, 0.20)',
    borderRadius: '40.93px 0px 0px 40.93px',
    padding: 0,
  },

  avatar: {
    backgroundColor: '#FFC9B3',
    border: `1px solid ${theme.colors.violet[4]}`,
  },

  dropdownContent: {
    borderRadius: '40.93px 0px 0px 40.93px',
    padding: '1.72rem 1.81rem',
  },

  largeAvatar: {
    backgroundColor: '#FFC9B3',
    border: `4px solid ${theme.colors.violet[4]}`,
    width: '6rem',
    height: '6rem',
  },
}));

export default useStyles;
