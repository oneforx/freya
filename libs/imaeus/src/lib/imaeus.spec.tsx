import { render } from '@testing-library/react';

import Imaeus from './imaeus';

describe('Imaeus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Imaeus />);
    expect(baseElement).toBeTruthy();
  });
});
