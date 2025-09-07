import React, { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// компонент для тестирования ошибок 
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    if (error) {
        throw new Error('BugButton test error');
    }

    return (
        <Button onClick={onThrow}>
            Выкинуть ошибку
        </Button>
    );
};


