import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Initial Setup Test', () => {
    it('should pass a basic test', () => {
        expect(1 + 1).toBe(2);
    });

    it('should be able to render a basic div', () => {
        render(<div>Hello Vitest</div>);
        expect(screen.getByText('Hello Vitest')).toBeInTheDocument();
    });
});
