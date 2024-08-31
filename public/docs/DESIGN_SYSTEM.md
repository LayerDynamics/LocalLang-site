Here’s the most comprehensive and detailed version of your Unified Design System, incorporating all the suggested improvements. This version not only enhances accessibility, performance, and scalability but also ensures a fully robust, maintainable, and user-friendly design system.

# LocalLang Unified Design System

## 1. Foundations

### 1.1 Color Palette

Primary Colors:
- **Modern and Vibrant**
  - Primary: #ff6f47 (Matte Orange)
  - Secondary: #df3459 (Pink-Red)
  - Tertiary: #708090 (Slate Grey)
  
- **Professional and Calm**
  - Primary: #2c3e50 (Dark Blue Gray)
  - Secondary: #27ae60 (Green)
  - Tertiary: #e67e22 (Orange)

Neutrals:
- White: #FFFFFF
- Black: #000000
- Gray Scale:
  - Gray-50: #F9FAFB
  - Gray-100: #F3F4F6
  - Gray-200: #E5E7EB
  - Gray-300: #D1D5DB
  - Gray-400: #9CA3AF
  - Gray-500: #6B7280
  - Gray-600: #4B5563
  - Gray-700: #374151
  - Gray-800: #1F2937
  - Gray-900: #111827

Semantic Colors:
- Success: #10B981
- Warning: #FBBF24
- Error: #EF4444
- Info: #3B82F6

Accent Colors:
- Accent-1: #8B5CF6
- Accent-2: #EC4899
- Accent-3: #10B981
- Accent-4: #F59E0B

#### Accessibility Considerations
- **Contrast Ratios:** All primary, secondary, and semantic colors should meet or exceed the WCAG AA standard contrast ratio of 4.5:1 for text and 3:1 for larger text.
- **Color Blindness:** Consider offering alternate color palettes or patterns for users with color vision deficiencies.

### 1.2 Typography

Font Families:
- Primary: 'Inter', sans-serif
- Secondary: 'Roboto Mono', monospace
- Tertiary: 'Merriweather', serif

Font Sizes:
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)
- 7xl: 4.5rem (72px)

Font Weights:
- Thin: 100
- ExtraLight: 200
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700
- ExtraBold: 800
- Black: 900

Line Heights:
- Tight: 1.25
- Snug: 1.375
- Normal: 1.5
- Relaxed: 1.625
- Loose: 2

Letter Spacing:
- Tighter: -0.05em
- Tight: -0.025em
- Normal: 0em
- Wide: 0.025em
- Wider: 0.05em
- Widest: 0.1em

#### Accessibility Considerations
- **Readable Font Sizes:** Ensure all font sizes are at least 16px (base) to ensure readability, with appropriate scaling for smaller devices.
- **Font Pairing:** Ensure a clear visual hierarchy by using distinct font pairings for headings, body text, and code.

### 1.3 Spacing

Use a consistent spacing scale:
- 0: 0
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 1.5: 0.375rem (6px)
- 2: 0.5rem (8px)
- 2.5: 0.625rem (10px)
- 3: 0.75rem (12px)
- 3.5: 0.875rem (14px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 7: 1.75rem (28px)
- 8: 2rem (32px)
- 9: 2.25rem (36px)
- 10: 2.5rem (40px)
- 11: 2.75rem (44px)
- 12: 3rem (48px)
- 14: 3.5rem (56px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)
- 28: 7rem (112px)
- 32: 8rem (128px)
- 36: 9rem (144px)
- 40: 10rem (160px)
- 44: 11rem (176px)
- 48: 12rem (192px)
- 52: 13rem (208px)
- 56: 14rem (224px)
- 60: 15rem (240px)
- 64: 16rem (256px)
- 72: 18rem (288px)
- 80: 20rem (320px)
- 96: 24rem (384px)

#### Accessibility Considerations
- **Consistent Spacing:** Use consistent spacing throughout the application to provide a clean, uncluttered interface that is easy to navigate.
- **Adjustable Spacing:** Allow users to customize spacing for accessibility reasons (e.g., users with low vision).

### 1.4 Border Radius

- None: 0
- Sm: 0.125rem (2px)
- Default: 0.25rem (4px)
- Md: 0.375rem (6px)
- Lg: 0.5rem (8px)
- Xl: 0.75rem (12px)
- 2xl: 1rem (16px)
- 3xl: 1.5rem (24px)
- Full: 9999px

### 1.5 Shadows

- None: none
- Sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- Md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- Lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- Xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
- 2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
- Inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)

#### Accessibility Considerations
- **Shadow Intensity:** Ensure that shadows are used subtly to improve visual hierarchy without creating visual clutter. Test with users who have visual impairments to ensure clarity.

### 1.6 Z-index Scale

- Behind: -1
- Auto: 'auto'
- Base: 0
- Raised: 1
- Dropdown: 1000
- Sticky: 1100
- Fixed: 1200
- Overlay: 1300
- Modal: 1400
- Popover: 1500
- Tooltip: 1600

## 2. Component Styles

### 2.1 Buttons

```typescript
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'outline' | 'link' | 'icon-only';
type ButtonSize = 'small' | 'medium' | 'large';

const buttonSizes = {
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme

 }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  `,
  large: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  `,
};

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  `,
  tertiary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.errorDark};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  link: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  'icon-only': css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing[2]};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
};

export const Button = styled.button<{ variant: ButtonVariant; size: ButtonSize }>`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;

  ${({ size }) => buttonSizes[size]}
  ${({ variant }) => buttonVariants[variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &.button__with-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;
```

#### Accessibility Considerations
- **Focus States:** Ensure focus states are prominent, with clear visual indicators like box shadows.
- **Keyboard Navigation:** The buttons must be fully operable with keyboard inputs, including the `Enter` and `Space` keys.
- **ARIA Labels:** For icon-only buttons, provide an `aria-label` attribute to describe the button's purpose.

### 2.2 Input Fields

```typescript
import styled, { css } from 'styled-components';

type InputSize = 'small' | 'medium' | 'large';

const inputSizes = {
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  `,
  large: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  `,
};

export const Input = styled.input<{ size: InputSize }>`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: all 0.2s ease-in-out;
  width: 100%;

  ${({ size }) => inputSizes[size]}

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;

export const TextArea = styled.textarea<{ size: InputSize }>`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: all 0.2s ease-in-out;
  width: 100%;
  resize: vertical;

  ${({ size }) => inputSizes[size]}

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;
```

#### Accessibility Considerations
- **Labels:** Ensure every input field is associated with a label. If the label is visually hidden, use the `sr-only` class or equivalent.
- **Error States:** Clearly indicate input errors using color, icons, and error messages.
- **Keyboard Accessibility:** Ensure users can navigate through input fields using the `Tab` key.

### 2.3 Cards

```typescript
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[6]};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const CardHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const CardBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const CardFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  display: flex;
  justify-content: flex-end;
`;

export const HoverableCard = styled(Card)`
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const ClickableCard = styled(Card)`
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const ShadowlessCard = styled(Card)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;
```

#### Accessibility Considerations
- **ARIA Roles:** Use ARIA roles to define different card sections (e.g., `role="heading"` for headers).
- **Keyboard Navigation:** Make sure clickable cards can be accessed via keyboard, with `tabindex="0"` and appropriate ARIA roles.

### 2.4 Modals

```typescript
import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndices.modal};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

export const ModalHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ModalBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ModalFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: flex-end;
`;

export const FullscreenModal = styled(ModalContent)`
  width: 100%;
  height: 100%;
  border-radius: 0;
`;

export const SideDrawer

Modal = styled(ModalContent)`
  width: 30%;
  height: 100%;
  border-radius: 0;
  margin-left: auto;
  margin-right: 0;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
```

#### Accessibility Considerations
- **Focus Management:** Automatically focus the first interactive element when the modal opens, and return focus to the trigger element when it closes.
- **Keyboard Accessibility:** The modal should close when the `Escape` key is pressed.
- **ARIA Attributes:** Use `aria-modal="true"` and `aria-labelledby` for the modal title.

### 2.5 Navigation

```typescript
import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavbarLink = styled.li`
  margin-left: ${({ theme }) => theme.spacing[4]};
  
  a {
    color: ${({ theme }) => theme.colors.gray[600]};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export const ResponsiveNavbar = styled(Navbar)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
```

#### Accessibility Considerations
- **Keyboard Navigation:** Ensure links are focusable and operable via keyboard.
- **ARIA Attributes:** Add ARIA attributes to indicate dropdowns, current page, and navigation state.

## 3. Hooks

### 3.1 useTheme

```typescript
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
```

### 3.2 useMediaQuery

```typescript
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};
```

### 3.3 useLocalStorage

```typescript
import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
```

### 3.4 useDarkMode

```typescript
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMediaQuery } from './useMediaQuery';

export const useDarkMode = (): [boolean, () => void] => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-enabled', false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, () => setEnabledState(!enabled)];
};
```

### 3.5 useFocusTrap

```typescript
import { useEffect } from 'react';

export const useFocusTrap = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const focusableElements = ref.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    ref.current?.addEventListener('keydown', handleTabKey);

    return () => {
      ref.current?.removeEventListener('keydown', handleTabKey);
    };
  }, [ref]);
};
```

#### Accessibility Considerations
- **Focus Trapping:** Ensure focus is trapped within modals or other interactive containers to prevent focus from moving outside of the element.

## 4. Additional Components

### 4.1 Dropdown

```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 160px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const DropdownItem = styled.a`
  color: ${({ theme }) => theme.colors.gray[800]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

interface DropdownProps {
  label: string;
  items: { label: string; onClick: () => void }[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {label}
        {isOpen ? '▲' : '▼'}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map((item,

 index) => (
          <DropdownItem key={index} onClick={item.onClick}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Roles:** Use `aria-haspopup="true"`, `aria-expanded={isOpen}`, and `aria-controls` for the dropdown to indicate its state and relationship to the dropdown content.
- **Keyboard Navigation:** Allow users to open/close the dropdown using the `Enter` or `Space` keys and navigate items using arrow keys.

### 4.2 Tooltip

```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.gray[800]} transparent transparent transparent;
  }
`;

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      role="tooltip"
    >
      {children}
      <TooltipContent isVisible={isVisible}>{content}</TooltipContent>
    </TooltipContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Role:** Use `role="tooltip"` on the tooltip content to associate it with the trigger element.
- **Focus Triggering:** Allow the tooltip to be triggered by both focus and hover events for keyboard and screen reader users.

### 4.3 Accordion

```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme, isOpen }) => (isOpen ? theme.colors.gray[100] : theme.colors.white)};
  border: none;
  text-align: left;
  cursor: pointer;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ theme, isOpen }) => (isOpen ? theme.spacing[4] : 0)};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader isOpen={openIndex === index} onClick={() => toggleItem(index)} aria-expanded={openIndex === index}>
            {item.title}
            {openIndex === index ? '▲' : '▼'}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Attributes:** Use `aria-expanded`, `aria-controls`, and `aria-labelledby` to indicate the state of the accordion panels.
- **Keyboard Navigation:** Ensure that users can navigate the accordion using arrow keys and open/close panels using `Enter` or `Space`.

### 4.4 Breadcrumb

```typescript
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumbContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const BreadcrumbItem = styled.span`
  margin-right: ${({ theme }) => theme.spacing[2]};
  &:not(:last-child):after {
    content: '/';
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;

interface BreadcrumbProps {
  items: { label: string; to: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer aria-label="breadcrumb">
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          {index !== items.length - 1 ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Role:** Use `role="navigation"` and `aria-label="breadcrumb"` to ensure screen readers recognize the breadcrumb navigation.
- **Keyboard Navigation:** Breadcrumb links should be accessible via the keyboard, ensuring proper focus management.

### 4.5 Notification

```typescript
import React from 'react';
import styled from 'styled-components';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

const NotificationContainer = styled.div<{ type: NotificationType }>`
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      case 'info':
        return theme.colors.info;
      default:
        return theme.colors.gray[800];
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const NotificationIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const NotificationMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

interface NotificationProps {
  type: NotificationType;
  message: string;
  icon?: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ type, message, icon }) => {
  return (
    <NotificationContainer type={type} role="alert">
      {icon && <NotificationIcon>{icon}</NotificationIcon>}
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Role:** Use `role="alert"` to notify screen readers of the notification immediately.
- **Keyboard Accessibility:** Ensure notifications can be dismissed via the keyboard, using a button or another interactive element.

### 4.6 Tabs

```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

const TabList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TabItem = styled.li<{ isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? theme.fontWeights.bold : theme.fontWeights.regular)};
  border-bottom: ${({ isActive, theme }) => (isActive ? `2px solid ${theme.colors.primary}` : 'none')};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.gray[600])};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
`;

const TabPanel = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex]

 = useState(0);

  return (
    <div>
      <TabsContainer role="tablist">
        <TabList>
          {tabs.map((tab, index) => (
            <TabItem
              key={index}
              isActive={activeIndex === index}
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? setActiveIndex(index) : null}
            >
              {tab.label}
            </TabItem>
          ))}
        </TabList>
      </TabsContainer>
      <TabPanel role="tabpanel">
        {tabs[activeIndex].content}
      </TabPanel>
    </div>
  );
};
```

#### Accessibility Considerations
- **ARIA Roles:** Use `role="tablist"`, `role="tab"`, and `role="tabpanel"` for proper screen reader navigation.
- **Keyboard Navigation:** Implement arrow key navigation for tabs and `Enter`/`Space` for activation.

### 4.7 Pagination

```typescript
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const PaginationItem = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.white)};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.gray[700])};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primaryDark : theme.colors.gray[100])};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
`;

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ total, current, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > total) return;
    onPageChange(page);
  };

  return (
    <PaginationContainer aria-label="Pagination">
      <PaginationItem onClick={() => handlePageChange(current - 1)} disabled={current === 1}>
        Previous
      </PaginationItem>
      {[...Array(total)].map((_, index) => (
        <PaginationItem
          key={index}
          isActive={current === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PaginationItem>
      ))}
      <PaginationItem onClick={() => handlePageChange(current + 1)} disabled={current === total}>
        Next
      </PaginationItem>
    </PaginationContainer>
  );
};
```

#### Accessibility Considerations
- **ARIA Attributes:** Use `aria-label`, `aria-current`, and `aria-disabled` to indicate the state of pagination items.
- **Keyboard Accessibility:** Ensure users can navigate between pages using the `Tab` key and activate with `Enter` or `Space`.

---

## 5. Documentation and Testing

### 5.1 Storybook Integration

Integrate [Storybook](https://storybook.js.org/) into your project to create a live style guide and showcase your components in isolation. This allows developers to see all component states, test different configurations, and even automate visual regression testing.

#### Steps to Integrate Storybook:

1. Install Storybook:
   ```bash
   npx sb init
   ```
2. Create stories for each component:
   ```typescript
   // Example: Button.stories.tsx
   import React from 'react';
   import { Button } from './Button';

   export default {
     title: 'Components/Button',
     component: Button,
   };

   export const Primary = () => <Button variant="primary">Primary Button</Button>;
   export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
   // Add more stories as needed
   ```
3. Run Storybook:
   ```bash
   npm run storybook
   ```

### 5.2 Unit and Integration Testing

Use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit and integration tests for your components.

#### Example Unit Test with React Testing Library:

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders primary button', () => {
  render(<Button variant="primary">Primary</Button>);
  const buttonElement = screen.getByText(/primary/i);
  expect(buttonElement).toBeInTheDocument();
});
```

### 5.3 End-to-End Testing

Incorporate [Cypress](https://www.cypress.io/) for end-to-end testing to ensure that all components work together as expected.

#### Example Cypress Test:

```typescript
describe('Button Component', () => {
  it('should navigate to the next page on click', () => {
    cy.visit('/');
    cy.get('button').contains('Next').click();
    cy.url().should('include', '/next-page');
  });
});
```

