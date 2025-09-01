# Cresta - AI-Powered Marketplace

A modern, glassmorphism-styled marketplace built with Next.js, MongoDB, and shadcn/ui components.

## 🌟 Features

- **Glassmorphism Design**: Beautiful frosted glass effects throughout the interface
- **Shadcn/UI Components**: Native shadcn components for consistent design
- **Motion Primitives**: Smooth animations with motion primitives library
- **MongoDB Integration**: Full CRUD operations with MongoDB
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works perfectly on all devices
- **AI-Powered**: Ready for AI-driven product recommendations

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: MongoDB with connection pooling
- **UI Components**: shadcn/ui (New York style)
- **Animations**: Motion primitives
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🎨 Design Features

- **Modern Glassmorphism**: Frosted glass cards with backdrop blur
- **Smooth Animations**: Subtle motion without zoom effects
- **Clean Typography**: Optimized fonts with proper spacing
- **Color Harmony**: Beautiful color scheme with your custom theme
- **Cursor Pointer**: All interactive elements have proper cursor states

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Add sample data
curl -X POST http://localhost:3000/api/seed

# Check API health
curl http://localhost:3000/api/health
```

## 📱 API Endpoints

- `GET /api/items` - Get all items
- `POST /api/items` - Create new item
- `GET /api/items/[id]` - Get specific item
- `PUT /api/items/[id]` - Update item
- `DELETE /api/items/[id]` - Delete item
- `POST /api/seed` - Add sample data
- `GET /api/health` - Check database health

## 🔧 Environment Setup

Create a `.env.local` file:

```env
MONGODB_URI="your-mongodb-connection-string"
DB_NAME="cresta"
```

## 🎯 Navigation

The navbar includes:

- **Logo**: Animated Cresta branding
- **Categories**: Product categories
- **Trending**: Popular items
- **New**: Latest additions
- **Deals**: Special offers
- **AI Picks**: AI-recommended products
- **Favorites**: User's liked items
- **Search**: Expandable search functionality
- **Login**: User authentication

## ✨ Design Philosophy

- **Minimalist**: Clean, uncluttered interface
- **Glassmorphism**: Modern frosted glass aesthetic
- **Accessibility**: Proper contrast and focus states
- **Performance**: Optimized animations and images
- **Mobile-First**: Responsive design approach

Visit `http://localhost:3000` to see your beautiful new marketplace! 🎉
