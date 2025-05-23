# 🏥 MediMart — Online Medicine Shop (Client)

[Live Site 🌐](https://medicine-shop-client.vercel.app)

MediMart is a modern and user-friendly online pharmacy platform where users can browse, order, and manage medicines with ease. Built with **Next.js 13+**, **Tailwind CSS**, and **Redux**, this frontend app integrates with a secure backend API and supports admin control, payment integration, and dynamic user experiences.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 13+ (App Router)](https://nextjs.org/)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Authentication**: JWT (via API), stored in cookies/localStorage
- **Payment Integration**: SurjoPay (sandbox ready)
- **Deployment**: Vercel

---

## ✨ Features

### 👥 User Functionality

- ✅ Registration & Login
- ✅ View medicines by category
- ✅ Add to cart (with Redux)
- ✅ Checkout with prescription upload
- ✅ SurjoPay integration for payment
- ✅ View order history
- ✅ Profile update

### 🔒 Admin Dashboard

- 🔧 Add / Edit / Delete Medicines
- 🛆 Manage Orders (update status, cancel)
- 👤 Manage Users (activate / deactivate)
- 📊 Dashboard Sidebar (Responsive)

---

## 📁 Project Structure

```
src/
├── app/                      # App directory (Next.js App Router)
│   ├── (WithCommonLayout)/
│   ├── (WithDashboardLayout)/admin/
│   └── not-found.tsx         # Custom 404 page
├── components/               # Reusable components
├── redux/                    # Redux setup (store, slices, hooks)
├── hooks/                    # Custom hooks (e.g., useUser)
├── lib/                      # Utility functions
```

---

## 🌐 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

> 🔐 Make sure to add this in [Vercel Project Settings → Environment Variables](https://vercel.com/docs/projects/environment-variables) for production too.

---
### 📦 Dependencies

- `@reduxjs/toolkit` ^2.6.1  
- `@tailwindcss/vite` ^4.1.3  
- `react` ^19.0.0  
- `react-dom` ^19.0.0  
- `react-hook-form` ^7.55.0  
- `react-hot-toast` ^2.5.2  
- `react-icons` ^5.5.0  
- `react-range` ^1.10.0  
- `react-redux` ^9.2.0  
- `react-router-dom` ^7.5.0  
- `sonner` ^2.0.3  
- `sweetalert2` ^11.17.2  
- `tailwindcss` ^4.1.3  

### 🛠️ Dev Dependencies

- `@eslint/js` ^9.21.0  
- `@types/react` ^19.0.10  
- `@types/react-dom` ^19.0.4  
- `@vitejs/plugin-react` ^4.3.4  
- `daisyui` ^5.0.17  
- `eslint` ^9.21.0  
- `eslint-plugin-react-hooks` ^5.1.0  
- `eslint-plugin-react-refresh` ^0.4.19  
- `globals` ^15.15.0  
- `typescript` ~5.7.2  
- `typescript-eslint` ^8.24.1  
- `vite` ^6.2.0
---

## 🚀 Deployment

This project is **deployed on Vercel**:
- CI/CD is enabled via GitHub.
- Automatic deployment on `main` branch push.

---

## 🛡️ Security Considerations

- JWT stored in cookies for secure middleware protection
- Route guards to protect `/admin` routes
- CORS configured for backend access

---

## 🧰 Future Enhancements

- 🔐 Add refresh token logic
- 📱 PWA support for mobile devices
- 🛆 Inventory auto-sync from backend
- 📧 Email notifications

---

## 📸 Screenshots

Coming soon...

---

## 👨‍💻 Author

**Md Asif Shahariar**  
Frontend Developer | React & Next.js Specialist  
[Portfolio](#) | [LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/)

---

> If you found this project useful, feel free to ⭐️ the repo and share it!

