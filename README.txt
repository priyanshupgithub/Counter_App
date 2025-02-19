Why use useContext?
Centralized State Management: Keeps the theme state in a single place, making it accessible to all components without prop drilling.
Efficient Re-renders: Components will only re-render when the theme changes, improving performance.
Cleaner Code: Avoids passing theme props to every component manually.


Why Use Redux?
Centralized State Management: All state (theme and counter) will be managed in one place.
Easier Scalability: If we add more features later, Redux keeps state management predictable.
Avoid Prop Drilling: No need to pass down props through multiple components.