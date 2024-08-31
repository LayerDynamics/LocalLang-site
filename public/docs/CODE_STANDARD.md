# LocalLang Code Standard

## Table of Contents
1. [Introduction](#introduction)
2. [General Guidelines](#general-guidelines)
3. [File Structure](#file-structure)
4. [Naming Conventions](#naming-conventions)
5. [TypeScript and JavaScript](#typescript-and-javascript)
6. [React Components](#react-components)
7. [State Management](#state-management)
8. [Styling](#styling)
9. [Error Handling](#error-handling)
10. [Testing](#testing)
11. [Documentation](#documentation)
12. [Rust Backend](#rust-backend)
13. [Examples](#examples)

## 1. Introduction

This document outlines the coding standards and best practices for the LocalLang project. It is designed to ensure consistency, readability, and maintainability across the codebase. All developers working on the project are expected to adhere to these standards.

## 2. General Guidelines

- Use TypeScript for all frontend code.
- Use Rust for all backend code.
- Maintain consistent indentation (2 spaces for TypeScript/JavaScript, 4 spaces for Rust).
- Keep lines of code to a maximum of 100 characters.
- Use meaningful and descriptive names for variables, functions, and classes.
- Write self-documenting code and add comments only when necessary to explain complex logic.
- Follow the DRY (Don't Repeat Yourself) principle.
- Prefer immutability when possible.

## 3. File Structure

- Organize files by feature or module.
- Use lowercase with hyphens for folder and file names (e.g., `file-manager`).
- Use PascalCase for React component file names (e.g., `FileManager.tsx`).
- Use camelCase for utility and hook file names (e.g., `useFileSystem.ts`).
- Group related files in subdirectories.

Example directory structure:
```
src/
  components/
    file-manager/
      FileManager.tsx
      FileList.tsx
      FileUploader.tsx
    node-editor/
      NodeEditor.tsx
      Node.tsx
      Edge.tsx
  hooks/
    useFileSystem.ts
    useNodeEditor.ts
  utils/
    fileHelpers.ts
    nodeHelpers.ts
  types/
    fileTypes.ts
    nodeTypes.ts
  styles/
    theme.ts
    globalStyles.ts
```

## 4. Naming Conventions

- Use PascalCase for React components and type names.
- Use camelCase for variables, functions, and method names.
- Use UPPER_CASE for constants and enum values.
- Use `is` or `has` prefix for boolean variables and functions.
- Use `on` prefix for event handler props in React components.

Examples:
```typescript
// Component
const FileManager: React.FC = () => { ... }

// Function
function handleFileUpload(file: File): void { ... }

// Variable
const isFileUploaded = true;

// Constant
const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10MB

// Event handler prop
<Button onClick={onFileSelect} />
```

## 5. TypeScript and JavaScript

- Use TypeScript for all new code.
- Enable strict mode in TypeScript configuration.
- Use explicit type annotations for function parameters and return types.
- Use interfaces for defining object shapes.
- Use type aliases for complex types or unions.
- Use `const` for variables that won't be reassigned, and `let` for those that will.
- Avoid using `any` type; use `unknown` if the type is truly unknown.
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators when appropriate.

Example:
```typescript
interface File {
  name: string;
  size: number;
  type: string;
}

type FileList = File[];

function processFiles(files: FileList): void {
  files.forEach((file) => {
    const fileSize = file.size ?? 0;
    console.log(`Processing file: ${file.name} (${fileSize} bytes)`);
  });
}
```

## 6. React Components

- Use functional components with hooks instead of class components.
- Use TypeScript's React.FC (FunctionComponent) type for components.
- Define prop types using interfaces.
- Use destructuring for props and state.
- Keep components small and focused on a single responsibility.
- Use custom hooks to extract complex logic from components.
- Use React.memo for performance optimization when appropriate.

Example:
```typescript
interface FileListProps {
  files: File[];
  onFileSelect: (file: File) => void;
}

const FileList: React.FC<FileListProps> = React.memo(({ files, onFileSelect }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file.name} onClick={() => onFileSelect(file)}>
          {file.name}
        </li>
      ))}
    </ul>
  );
});
```

## 7. State Management

- Use React Context API for global state management.
- Use `useState` for local component state.
- Use `useReducer` for complex state logic.
- Use custom hooks to encapsulate state logic and provide a clean API.

Example:
```typescript
const useFileManager = () => {
  const [files, setFiles] = useState<File[]>([]);

  const addFile = useCallback((file: File) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  }, []);

  const removeFile = useCallback((fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  }, []);

  return { files, addFile, removeFile };
};
```

## 8. Styling

- Use styled-components for component-specific styles.
- Use a global theme for consistent colors, typography, and spacing.
- Use CSS-in-JS for dynamic styles based on props or state.
- Use semantic class names when necessary.

Example:
```typescript
import styled from 'styled-components';

const FileListContainer = styled.ul`
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
`;

const FileItem = styled.li<{ isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, isSelected }) => 
    isSelected ? theme.colors.primary : 'transparent'};
  color: ${({ theme, isSelected }) => 
    isSelected ? theme.colors.white : theme.colors.text};
  cursor: pointer;
`;
```

## 9. Error Handling

- Use try-catch blocks for handling synchronous errors.
- Use async/await with try-catch for handling asynchronous errors.
- Create custom error classes for specific error types.
- Use error boundaries in React for catching and displaying errors.

Example:
```typescript
class FileUploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileUploadError';
  }
}

async function uploadFile(file: File): Promise<void> {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: file,
    });

    if (!response.ok) {
      throw new FileUploadError('Failed to upload file');
    }
  } catch (error) {
    if (error instanceof FileUploadError) {
      console.error('File upload failed:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
```

## 10. Testing

- Write unit tests for all utility functions and hooks.
- Write integration tests for React components.
- Use Jest as the test runner and React Testing Library for component testing.
- Aim for high test coverage, especially for critical business logic.
- Use meaningful test descriptions that explain the expected behavior.

Example:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import FileList from './FileList';

describe('FileList', () => {
  const mockFiles = [
    { name: 'file1.txt', size: 1024, type: 'text/plain' },
    { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
  ];

  it('renders a list of files', () => {
    render(<FileList files={mockFiles} onFileSelect={() => {}} />);
    expect(screen.getByText('file1.txt')).toBeInTheDocument();
    expect(screen.getByText('file2.jpg')).toBeInTheDocument();
  });

  it('calls onFileSelect when a file is clicked', () => {
    const handleFileSelect = jest.fn();
    render(<FileList files={mockFiles} onFileSelect={handleFileSelect} />);
    fireEvent.click(screen.getByText('file1.txt'));
    expect(handleFileSelect).toHaveBeenCalledWith(mockFiles[0]);
  });
});
```

## 11. Documentation

- Use JSDoc comments for documenting functions, classes, and interfaces.
- Write clear and concise README files for each module or major feature.
- Keep documentation up-to-date with code changes.
- Use Markdown for longer form documentation.

Example:
```typescript
/**
 * Represents a file in the system.
 */
interface File {
  /** The name of the file, including its extension. */
  name: string;
  /** The size of the file in bytes. */
  size: number;
  /** The MIME type of the file. */
  type: string;
}

/**
 * Uploads a file to the server.
 * @param file - The file to upload.
 * @returns A promise that resolves when the upload is complete.
 * @throws {FileUploadError} If the upload fails.
 */
async function uploadFile(file: File): Promise<void> {
  // Implementation...
}
```

## 12. Rust Backend

- Follow the Rust API Guidelines for idiomatic Rust code.
- Use the `rustfmt` tool to maintain consistent formatting.
- Use the `clippy` linter to catch common mistakes and non-idiomatic code.
- Prefer using `Result` for error handling instead of `panic!`.
- Use meaningful error types and implement the `std::error::Error` trait.
- Use `async`/`await` for asynchronous operations.
- Use the `#[derive]` attribute for common traits when applicable.

Example:
```rust
use thiserror::Error;

#[derive(Error, Debug)]
pub enum FileError {
    #[error("File not found: {0}")]
    NotFound(String),
    #[error("Permission denied: {0}")]
    PermissionDenied(String),
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
}

pub async fn read_file(path: &str) -> Result<String, FileError> {
    use tokio::fs::File;
    use tokio::io::AsyncReadExt;

    let mut file = File::open(path).await.map_err(|e| {
        if e.kind() == std::io::ErrorKind::NotFound {
            FileError::NotFound(path.to_owned())
        } else if e.kind() == std::io::ErrorKind::PermissionDenied {
            FileError::PermissionDenied(path.to_owned())
        } else {
            FileError::Io(e)
        }
    })?;

    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    Ok(contents)
}
```

## 13. Examples

### Example 1: React Component with TypeScript and Styled Components

```typescript
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<Omit<ButtonProps, 'onClick' | 'children'>>`
  background-color: ${({ theme, primary }) => 
    primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.fontSize.sm;
      case 'large': return theme.fontSize.lg;
      default: return theme.fontSize.md;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'small': return `${theme.spacing.xs} ${theme.spacing.sm}`;
      case 'large': return `${theme.spacing.md} ${theme.spacing.lg}`;
      default: return `${theme.spacing.sm} ${theme.spacing.md}`;
    }
  }};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, primary }) => 
      primary ? theme.colors.primaryDark : theme.colors.secondaryDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  primary = false, 
  size = 'medium', 
  onClick, 
  children 
}) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
```

### Example 2: Custom Hook with TypeScript

```typescript
import { useState, useCallback, useEffect } from 'react';

interface UseLocalStorageOptions<T> {
  key: string;
  initialValue: T | (() => T);
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
}

export function useLocalStorage<T>({
  key,
  initialValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}: UseLocalStorageOptions<T>): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : (
        typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue
      );
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, serialize(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, serialize, storedValue]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(deserialize(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, deserialize]);

  return [storedValue, setValue];
}
```


### Example 3: Rust Backend API with Error Handling

```rust
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use thiserror::Error;
use sqlx::postgres::PgPool;

#[derive(Error, Debug)]
enum ApiError {
    #[error("Database error: {0}")]
    DatabaseError(#[from] sqlx::Error),
    #[error("Not found: {0}")]
    NotFound(String),
    #[error("Bad request: {0}")]
    BadRequest(String),
    #[error("Internal server error")]
    InternalServerError,
}

impl actix_web::error::ResponseError for ApiError {
    fn error_response(&self) -> HttpResponse {
        match self {
            ApiError::DatabaseError(_) => HttpResponse::InternalServerError().json("Internal server error"),
            ApiError::NotFound(msg) => HttpResponse::NotFound().json(msg),
            ApiError::BadRequest(msg) => HttpResponse::BadRequest().json(msg),
            ApiError::InternalServerError => HttpResponse::InternalServerError().json("Internal server error"),
        }
    }
}

#[derive(Serialize, Deserialize)]
struct User {
    id: i32,
    username: String,
    email: String,
}

async fn get_user(db: web::Data<PgPool>, user_id: web::Path<i32>) -> Result<impl Responder, ApiError> {
    let user = sqlx::query_as!(
        User,
        "SELECT id, username, email FROM users WHERE id = $1",
        user_id.into_inner()
    )
    .fetch_optional(db.get_ref())
    .await?;

    user.map(|u| HttpResponse::Ok().json(u))
        .ok_or_else(|| ApiError::NotFound(format!("User with id {} not found", user_id)))
}

#[derive(Deserialize)]
struct CreateUserRequest {
    username: String,
    email: String,
}

async fn create_user(
    db: web::Data<PgPool>,
    user: web::Json<CreateUserRequest>,
) -> Result<impl Responder, ApiError> {
    if user.username.is_empty() || user.email.is_empty() {
        return Err(ApiError::BadRequest("Username and email are required".into()));
    }

    let new_user = sqlx::query_as!(
        User,
        "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING id, username, email",
        user.username,
        user.email
    )
    .fetch_one(db.get_ref())
    .await?;

    Ok(HttpResponse::Created().json(new_user))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let pool = PgPool::connect("postgres://username:password@localhost/database")
        .await
        .expect("Failed to connect to Postgres");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .route("/users/{id}", web::get().to(get_user))
            .route("/users", web::post().to(create_user))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
```

### Example 4: React Context for Global State Management

```typescript
import React, { createContext, useContext, useReducer, useCallback } from 'react';

// Define the shape of our global state
interface GlobalState {
  theme: 'light' | 'dark';
  user: User | null;
  isLoading: boolean;
}

// Define the possible actions
type Action =
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean };

// Define the User type
interface User {
  id: string;
  name: string;
  email: string;
}

// Create the context
const GlobalStateContext = createContext
  | {
      state: GlobalState;
      dispatch: React.Dispatch<Action>;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);

// Define the initial state
const initialState: GlobalState = {
  theme: 'light',
  user: null,
  isLoading: false,
};

// Define the reducer function
function reducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

// Create the provider component
export const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulating an API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const user = await response.json();
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'SET_USER', payload: null });
  }, []);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook for using the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

// Usage example
const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <MainContent />
    </GlobalStateProvider>
  );
};

const MainContent: React.FC = () => {
  const { state, login, logout } = useGlobalState();

  return (
    <div>
      {state.user ? (
        <>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('user@example.com', 'password')}>Login</button>
      )}
      <p>Current theme: {state.theme}</p>
    </div>
  );
};
```

### Example 5: Integration Test for a React Component using React Testing Library and MSW

```typescript
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProfile } from './UserProfile';

// Mock server setup
const server = setupServer(
  rest.get('/api/user/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software developer',
      })
    );
  }),
  rest.put('/api/user/:userId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'Profile updated successfully' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserProfile', () => {
  it('renders user profile and allows editing', async () => {
    render(<UserProfile userId="123" />);

    // Wait for the profile to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Software developer')).toBeInTheDocument();

    // Click edit button
    userEvent.click(screen.getByRole('button', { name: /edit/i }));

    // Edit the bio
    const bioInput = screen.getByLabelText(/bio/i);
    userEvent.clear(bioInput);
    userEvent.type(bioInput, 'Full-stack developer');

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    // Wait for the success message
    await waitFor(() => {
      expect(screen.getByText('Profile updated successfully')).toBeInTheDocument();
    });

    // Verify that the bio has been updated
    expect(screen.getByText('Full-stack developer')).toBeInTheDocument();
  });

  it('handles API errors gracefully', async () => {
    server.use(
      rest.get('/api/user/:userId', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal server error' }));
      })
    );

    render(<UserProfile userId="123" />);

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('Failed to load user profile')).toBeInTheDocument();
    });
  });
});
```

----