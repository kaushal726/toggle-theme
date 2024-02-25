// src/components/GlobalHeader/GlobalHeader.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions/themeActions';

const GlobalHeader: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header>
      <h1>Global Header</h1>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <p>Using - {theme === 'light' ? 'Light' : 'Dark'} Theme</p>
    </header>
  );
};

export default GlobalHeader;
