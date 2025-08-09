import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div className={classNames(cls.loader, {}, [className])}>
    <span />
    <span />
    <span />
  </div>
); 