export interface IUserAuth {
    id: number; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // User email address
    password?: string; // Optional password field (not returned in responses for security reasons)
    token?: string; // Authentication token (e.g., JWT token)
    role?: string; // Role of the user (e.g., admin, user, etc.)
    isAuthenticated?: boolean; // Indicates if the user is authenticated
}