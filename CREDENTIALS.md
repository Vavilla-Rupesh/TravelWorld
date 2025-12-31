# TravelWorld Authentication System

## 🔐 Demo Credentials

### Normal User Accounts
Use these credentials to login as a regular user with access to all booking features:

| Email | Password | User Name |
|-------|----------|-----------|
| user@travelworld.com | user123 | John Doe |
| user2@travelworld.com | user456 | Jane Smith |
| demo@example.com | demo123 | Demo User |

### Admin Accounts
Use these credentials to login as an admin with access to the Admin Dashboard:

| Email | Password | User Name |
|-------|----------|-----------|
| admin@travelworld.com | admin123 | Admin User |
| admin2@travelworld.com | admin456 | Super Admin |

## 📋 User Permissions

### Regular Users Can:
- ✅ Browse all services (Flights, Hotels, Trains, Buses, Cabs, Packages)
- ✅ Make bookings and proceed to payment
- ✅ View booking success page after payment
- ✅ Access all public pages
- ❌ Cannot access Admin Dashboard

### Admin Users Can:
- ✅ All regular user permissions
- ✅ Access Admin Dashboard at `/admin`
- ✅ View statistics and analytics
- ✅ Manage bookings, users, and coupons
- ✅ Admin badge displayed in navbar

## 🚀 How to Use

1. **Login as User:**
   - Navigate to Login page
   - Enter: `user@travelworld.com` / `user123`
   - Browse and book travel services
   - Proceed through payment flow

2. **Login as Admin:**
   - Navigate to Login page
   - Enter: `admin@travelworld.com` / `admin123`
   - Click "Admin Panel" in navbar
   - Access admin dashboard features

3. **Signup:**
   - New users can create accounts via signup
   - All new signups default to "user" role
   - Email must be unique

## 🔒 Protected Routes

The following routes require authentication:
- `/payment` - Requires any logged-in user
- `/booking-success` - Requires any logged-in user
- `/admin` - Requires admin user only

Non-authenticated users will be redirected to the login page.
Non-admin users trying to access admin routes will be redirected to home.

## 💾 Data Persistence

- Authentication state is persisted in localStorage
- Users remain logged in even after page refresh
- Logout clears all authentication data

## 📱 UI Indicators

- **User Badge:** Shows logged-in user's name in navbar
- **Admin Shield:** Purple shield icon for admin users
- **Logout Button:** Red logout button when authenticated
- **Mobile Menu:** Full authentication support in mobile view
