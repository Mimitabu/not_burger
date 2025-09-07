import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('simple', () => {
        render(<><Button>TEST</Button></>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('applies CLEAR theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Click</Button>);
        const btn = screen.getByRole('button', { name: 'Click' });
        expect(btn).toHaveClass('clear');
        screen.debug();
    });
});