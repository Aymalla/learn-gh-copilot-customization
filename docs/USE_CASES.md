# Common Copilot Use Cases

This document provides examples of how to use GitHub Copilot effectively for common coding tasks.

## 1. Function Implementation

### Python

**Input (comment):**
```python
# Function to validate email address using regex
```

**Copilot generates:**
```python
def validate_email(email: str) -> bool:
    """
    Validate email address using regex.
    
    Args:
        email: Email address to validate
    
    Returns:
        True if valid, False otherwise
    """
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None
```

### JavaScript

**Input (comment):**
```javascript
// Function to debounce user input with 300ms delay
```

**Copilot generates:**
```javascript
const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
```

## 2. Test Generation

### Python (pytest)

**Input:**
```python
# Test for validate_email function
```

**Copilot generates:**
```python
def test_validate_email():
    """Test email validation function."""
    assert validate_email("user@example.com") == True
    assert validate_email("invalid.email") == False
    assert validate_email("user@domain") == False
    assert validate_email("@example.com") == False
    assert validate_email("user@.com") == False
```

### JavaScript (Jest)

**Input:**
```javascript
// Test suite for debounce function
```

**Copilot generates:**
```javascript
describe('debounce', () => {
  jest.useFakeTimers();

  test('should delay function execution', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should cancel previous calls', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
```

## 3. API Endpoints

### Express.js

**Input:**
```javascript
// GET endpoint to fetch user by ID with error handling
```

**Copilot generates:**
```javascript
app.get('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

### FastAPI (Python)

**Input:**
```python
# GET endpoint to fetch user by ID with Pydantic models
```

**Copilot generates:**
```python
@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    """
    Fetch user by ID.
    
    Args:
        user_id: The user's ID
    
    Returns:
        User object
    
    Raises:
        HTTPException: If user not found
    """
    user = await database.fetch_one(
        users.select().where(users.c.id == user_id)
    )
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user
```

## 4. Data Transformations

### Python

**Input:**
```python
# Transform list of dictionaries to CSV string
```

**Copilot generates:**
```python
def dict_list_to_csv(data: List[Dict[str, Any]]) -> str:
    """
    Transform list of dictionaries to CSV string.
    
    Args:
        data: List of dictionaries
    
    Returns:
        CSV formatted string
    """
    if not data:
        return ""
    
    import csv
    from io import StringIO
    
    output = StringIO()
    writer = csv.DictWriter(output, fieldnames=data[0].keys())
    writer.writeheader()
    writer.writerows(data)
    
    return output.getvalue()
```

### JavaScript

**Input:**
```javascript
// Convert array of objects to grouped object by key
```

**Copilot generates:**
```javascript
const groupByKey = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};
```

## 5. Error Handling

### Python

**Input:**
```python
# Retry decorator with exponential backoff
```

**Copilot generates:**
```python
import time
from functools import wraps
from typing import Callable, Type

def retry_with_backoff(
    max_retries: int = 3,
    base_delay: float = 1.0,
    exceptions: tuple = (Exception,)
) -> Callable:
    """
    Retry decorator with exponential backoff.
    
    Args:
        max_retries: Maximum number of retry attempts
        base_delay: Initial delay in seconds
        exceptions: Tuple of exceptions to catch
    """
    def decorator(func: Callable) -> Callable:
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_retries - 1:
                        raise
                    delay = base_delay * (2 ** attempt)
                    time.sleep(delay)
            return None
        return wrapper
    return decorator
```

## 6. React Components

### TypeScript + React

**Input:**
```typescript
// UserCard component with name, email, and avatar
```

**Copilot generates:**
```typescript
interface UserCardProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl }) => {
  return (
    <div className="user-card">
      <img 
        src={avatarUrl} 
        alt={`${name}'s avatar`}
        className="user-avatar"
      />
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
```

## 7. Database Queries

### SQL

**Input:**
```sql
-- Query to find users who made purchases in the last 30 days
```

**Copilot generates:**
```sql
SELECT DISTINCT u.id, u.name, u.email
FROM users u
INNER JOIN purchases p ON u.id = p.user_id
WHERE p.purchase_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
ORDER BY u.name;
```

### MongoDB (JavaScript)

**Input:**
```javascript
// Find active users with more than 5 posts
```

**Copilot generates:**
```javascript
const activeUsers = await User.aggregate([
  {
    $match: { status: 'active' }
  },
  {
    $lookup: {
      from: 'posts',
      localField: '_id',
      foreignField: 'userId',
      as: 'posts'
    }
  },
  {
    $match: {
      'posts.5': { $exists: true }
    }
  },
  {
    $project: {
      name: 1,
      email: 1,
      postCount: { $size: '$posts' }
    }
  }
]);
```

## 8. Algorithm Implementation

### Binary Search

**Input:**
```python
# Binary search implementation with type hints
```

**Copilot generates:**
```python
def binary_search(arr: List[int], target: int) -> int:
    """
    Perform binary search on sorted array.
    
    Args:
        arr: Sorted list of integers
        target: Value to find
    
    Returns:
        Index of target if found, -1 otherwise
    """
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

## 9. Data Validation

### TypeScript

**Input:**
```typescript
// Validate user registration form data
```

**Copilot generates:**
```typescript
interface RegistrationData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const validateRegistration = (data: RegistrationData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.username || data.username.length < 3) {
    errors.username = 'Username must be at least 3 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.password || data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
```

## 10. Async Operations

### JavaScript

**Input:**
```javascript
// Fetch data from multiple APIs in parallel and combine results
```

**Copilot generates:**
```javascript
const fetchCombinedData = async (userId) => {
  try {
    const [user, posts, comments] = await Promise.all([
      fetch(`/api/users/${userId}`).then(res => res.json()),
      fetch(`/api/users/${userId}/posts`).then(res => res.json()),
      fetch(`/api/users/${userId}/comments`).then(res => res.json())
    ]);

    return {
      user,
      posts,
      comments,
      totalActivity: posts.length + comments.length
    };
  } catch (error) {
    console.error('Error fetching combined data:', error);
    throw new Error('Failed to fetch user data');
  }
};
```

## Tips for Better Suggestions

1. **Write descriptive comments** before the code
2. **Use clear function/variable names** that indicate intent
3. **Provide context** through surrounding code
4. **Include type hints** (Python, TypeScript) for better suggestions
5. **Break complex tasks** into smaller functions
6. **Review and refine** generated code
7. **Test thoroughly** - Copilot suggestions may need adjustments
