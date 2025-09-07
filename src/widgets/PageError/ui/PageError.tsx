import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const handleReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.PageError}>
            <p className={cls.message}>{t('An error occurred, please reload the page.')}</p>
            <div className={cls.actions}>
                <Button onClick={handleReload}>
                    {t('Refresh')}
                </Button>
            </div>
        </div>
    );
};
