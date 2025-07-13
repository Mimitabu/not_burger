import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme();

    return (
        <button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            TOGGLE
        </button>
    )
};