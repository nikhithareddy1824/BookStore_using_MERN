# 📚 Modern Bookstore Application

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

**A modern, responsive bookstore application built with Next.js, React, and TypeScript**

[🚀 Live Demo](https://your-vercel-app.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/your-username/bookstore-app/issues) • [✨ Request Feature](https://github.com/your-username/bookstore-app/issues)

</div>

---

## 🌟 Features

- 🔐 **User Authentication** - Secure login/register system with localStorage
- 🛒 **Shopping Cart** - Add, remove, and manage items with persistent storage
- 📚 **Book Catalog** - Browse, search, and filter books by category
- 💳 **Checkout Process** - Complete order flow with form validation
- 👤 **User Profile** - Manage user information and order history
- 🌙 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📱 **Responsive Design** - Mobile-first approach with modern UI components
- ⚡ **Fast Performance** - Optimized with Next.js and modern React patterns
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.13
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Theme**: next-themes for dark/light mode

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Vercel

---

## 📁 Project Structure

```
bookstore-app/
├── 📁 app/                          # Next.js App Router
│   ├── 📄 globals.css              # Global styles and CSS variables
│   ├── 📄 layout.tsx               # Root layout with theme provider
│   └── 📄 page.tsx                 # Main application entry point
│
├── 📁 components/                   # React Components
│   ├── 📄 BookCatalog.tsx          # Book browsing and search interface
│   ├── 📄 BookSkeleton.tsx         # Loading skeleton for books
│   ├── 📄 Cart.tsx                 # Shopping cart management
│   ├── 📄 Checkout.tsx             # Order checkout process
│   ├── 📄 Header.tsx               # Navigation header with search
│   ├── 📄 Home.tsx                 # Landing page with featured books
│   ├── 📄 Login.tsx                # User authentication form
│   ├── 📄 mode-toggle.tsx          # Dark/light theme toggle
│   ├── 📄 Profile.tsx              # User profile management
│   ├── 📄 ProtectedRoute.tsx       # Route protection wrapper
│   ├── 📄 Register.tsx             # User registration form
│   ├── 📄 theme-provider.tsx       # Theme context provider
│   │
│   └── 📁 ui/                      # Reusable UI Components (shadcn/ui)
│       ├── 📄 accordion.tsx        # Collapsible content sections
│       ├── 📄 alert-dialog.tsx     # Modal dialogs for confirmations
│       ├── 📄 alert.tsx            # Alert notifications
│       ├── 📄 avatar.tsx           # User avatar component
│       ├── 📄 badge.tsx            # Status and category badges
│       ├── 📄 button.tsx           # Interactive buttons
│       ├── 📄 card.tsx             # Content cards
│       ├── 📄 carousel.tsx         # Image/content carousel
│       ├── 📄 checkbox.tsx         # Form checkboxes
│       ├── 📄 dialog.tsx           # Modal dialogs
│       ├── 📄 dropdown-menu.tsx    # Dropdown navigation menus
│       ├── 📄 form.tsx             # Form components with validation
│       ├── 📄 input.tsx            # Text input fields
│       ├── 📄 label.tsx            # Form labels
│       ├── 📄 select.tsx           # Dropdown select inputs
│       ├── 📄 separator.tsx        # Visual separators
│       ├── 📄 skeleton.tsx         # Loading placeholders
│       ├── 📄 table.tsx            # Data tables
│       ├── 📄 tabs.tsx             # Tabbed interfaces
│       ├── 📄 toast.tsx            # Toast notifications
│       ├── 📄 tooltip.tsx          # Hover tooltips
│       └── 📄 ... (40+ components) # Complete UI component library
│
├── 📁 contexts/                     # React Context Providers
│   ├── 📄 AuthContext.tsx          # User authentication state
│   ├── 📄 BookContext.tsx          # Book catalog and search state
│   └── 📄 CartContext.tsx          # Shopping cart state management
│
├── 📁 hooks/                        # Custom React Hooks
│   ├── 📄 use-mobile.ts            # Mobile device detection
│   └── 📄 use-toast.ts             # Toast notification hook
│
├── 📁 lib/                          # Utility Functions
│   └── 📄 utils.ts                 # Common utility functions (cn, etc.)
│
├── 📁 public/                       # Static Assets
│   ├── 🖼️ atomic-habits-inspired-cover.png
│   ├── 🖼️ clean-code-book-cover.png
│   ├── 🖼️ dune-book-cover.png
│   ├── 🖼️ great-gatsby-book-cover.png
│   ├── 🖼️ psychology-of-money-book-cover.png
│   ├── 🖼️ sapiens-book-cover.png
│   ├── 🖼️ to-kill-a-mockingbird-cover.png
│   ├── 🖼️ placeholder-logo.png
│   ├── 🖼️ placeholder-user.jpg
│   └── 🖼️ ... (book cover images)
│
├── 📁 styles/                       # Additional Styles
│   └── 📄 globals.css              # Global CSS styles
│
├── 📄 components.json               # shadcn/ui configuration
├── 📄 next.config.mjs              # Next.js configuration
├── 📄 package.json                 # Dependencies and scripts
├── 📄 postcss.config.mjs           # PostCSS configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
└── 📄 tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **pnpm** (recommended) or npm
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bookstore-app.git
   cd bookstore-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📖 Documentation

### Core Features

#### 🔐 Authentication System
- **Login/Register**: Secure user authentication with form validation
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Session Management**: Persistent login state with localStorage
- **User Profile**: Manage personal information and preferences

#### 🛒 Shopping Cart
- **Add to Cart**: One-click book addition with quantity management
- **Cart Persistence**: Items saved across browser sessions
- **Quantity Control**: Increase/decrease item quantities
- **Remove Items**: Easy item removal from cart
- **Price Calculation**: Real-time total price updates

#### 📚 Book Catalog
- **Search Functionality**: Find books by title, author, or description
- **Category Filtering**: Filter books by genre/category
- **Grid/List View**: Toggle between different viewing modes
- **Book Details**: Comprehensive book information display
- **Rating System**: Star-based rating display
- **Stock Status**: Real-time availability indicators

#### 💳 Checkout Process
- **Form Validation**: Comprehensive form validation with error handling
- **Order Summary**: Detailed order breakdown
- **Payment Integration**: Ready for payment gateway integration
- **Order Confirmation**: Success confirmation with order details

### Component Architecture

#### Context Providers
- **AuthContext**: Manages user authentication state and methods
- **BookContext**: Handles book catalog, search, and filtering
- **CartContext**: Manages shopping cart state and operations

#### UI Components
Built with **shadcn/ui** and **Radix UI** primitives:
- Accessible and keyboard navigable
- Fully customizable with Tailwind CSS
- Dark/light mode support
- Mobile-responsive design

### State Management

The application uses React Context API for state management:

```typescript
// Authentication State
interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

// Cart State
interface CartContextType {
  items: CartItem[]
  addToCart: (book: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}
```

---

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Neutral base with accent colors
- **Typography**: Montserrat and Open Sans font families
- **Spacing**: Consistent spacing scale with Tailwind CSS
- **Components**: Modular, reusable component library

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color combinations
- **Focus Management**: Clear focus indicators

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Optional: Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Customization

#### Theme Customization
Modify `app/globals.css` to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... other CSS variables */
}
```

#### Component Customization
All UI components can be customized by modifying the component files in `components/ui/`.

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. **Deploy** with automatic deployments on push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for new features
- Include proper error handling
- Write meaningful commit messages
- Test your changes thoroughly

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **shadcn/ui** for the amazing component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** team for the excellent React framework
- **Vercel** for seamless deployment platform

---

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: your-email@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/bookstore-app/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/bookstore-app/discussions)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/your-username)

</div>
