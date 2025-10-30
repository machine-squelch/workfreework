#!/bin/bash

# WorkFreeWork Setup Script
# This script helps you get started quickly

echo "🚀 WorkFreeWork Setup"
echo "===================="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old. Please upgrade to Node.js 18 or higher."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOL
# WorkFreeWork Environment Variables
# Update these values before deployment

NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id_here
EOL
    echo "✅ Created .env.local (update with your values)"
else
    echo "ℹ️  .env.local already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Open: http://localhost:3000"
echo "  3. Review: README.md for full documentation"
echo ""
echo "Quick commands:"
echo "  npm run dev   - Start development server"
echo "  npm run build - Build for production"
echo "  npm start     - Start production server"
echo ""
echo "Happy building! 🚀"

