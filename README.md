# SwiftTransact v0

A modern financial transaction application built with Nuxt 3, Vue 3, and TailwindCSS.

## 📚 Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue 3 (Composition API)
- **Styling**: TailwindCSS v4 (with custom design tokens)
- **PWA**: @vite-pwa/nuxt
- **Utilities**: @vueuse/core
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
swiftransact-v0/
├── app/
│   ├── app.vue                 # Root component
│   ├── error.vue               # Error page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css        # Global styles
│   │   │   ├── colors.css      # Design tokens & theme colors
│   │   │   └── fonts.css       # Font-face declarations
│   │   └── typography/         # Font files (SF Pro Rounded)
│   ├── components/
│   │   └── Icon.vue            # Centralized icon component
│   ├── composables/            # Vue composables (see below)
│   ├── layouts/                # Layout components (optional)
│   ├── pages/                  # File-based routing (see below)
│   └── utils/
│       └── types/
│           └── icons.ts        # Icon type definitions
├── public/                     # Static assets
├── nuxt.config.ts             # Nuxt configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

---

## 🎨 Design System

### Icons

**Location**: `app/components/Icon.vue` + `app/utils/types/icons.ts`

All icons in the app are managed through a centralized `Icon` component for consistency and maintainability.

#### Usage:

```vue
<template>
  <Icon name="home-bold" :size="24" color="#EA4E1B" />
</template>
```

#### Adding New Icons:

1. Add the SVG to `app/components/Icon.vue` as a new `v-else-if` condition
2. Add the icon name to the `ICON_NAMES` array in `app/utils/types/icons.ts`
3. TypeScript will automatically provide type-safe autocomplete

**Available Icons**:

- `arrow-back`, `arrow-left`
- `home-bold`, `home-fill`
- `settings`, `notifications`
- `transfer`, `swap-vert`, `swap-fill`
- `electricity-circle`, `electricity-fill`
- `check-mark`, `warning`
- `face-scan`, `fingerprint`
- `chat`, `send`
- `euros`, `token-branded`
- `backpack`, `phantom`, `trust`, `zerion`
- And more... (see `icons.ts` for full list)

---

### Fonts

**Location**: `app/assets/css/fonts.css`

The app uses **SF Pro Rounded** with 9 weight variants (100-900).

#### Usage:

```css
/* Default font (already applied to body in main.css) */
font-family: "SF Pro Rounded", sans-serif;

/* With specific weights */
font-weight: 300; /* Light */
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semibold */
font-weight: 700; /* Bold */
```

#### Available Weights:

- 100 - Ultralight
- 200 - Thin
- 300 - Light
- 400 - Regular (default)
- 500 - Medium
- 600 - Semibold
- 700 - Bold
- 800 - Heavy
- 900 - Black

---

### Colors

**Location**: `app/assets/css/colors.css`

Colors are defined as design tokens in the `@theme` block and support both **light** and **dark** modes.

#### Color Categories:

**Primary & Brand Colors**

```css
--color-primary: #EA4E1B
--color-button: #000 (light) / #EA4E1B (dark)
--color-button-disabled: #FF9A79
```

**Background Colors**

```css
--color-background: #FFFFFF (light) / #0F0F0F (dark)
--color-background-input: #F6F6F6 (light) / #333 (dark)
--color-background-disabled: #F6F6F6 (light) / #2A2A2A (dark)
--color-background3: #0C0C0C
--color-background4: #101720
--color-background5: #F0EFE7
```

**Text Colors**

```css
--color-text: #1D1D1D (light) / #FFF (dark)
--color-text1: #616161 (light) / #E0E0E0 (dark)
--color-text2: #A7A7A7
--color-text3: #212121
--color-subtext: #9CA3AF
```

**Border Colors**

```css
--color-border: #EEE
--color-border1: #D5D5D5
--color-border3: #E8E8E88C
--color-border4: #CCCCCC54
```

**Semantic Colors**

```css
--color-success: #29941B
--color-success-1: #4CB465
--color-error: #F00
--color-warning: #FFCB05
--color-green: #7AB8A6
--color-shade1: #FFCBA4
```

#### Dark Mode:

Dark mode is automatically handled using `@vueuse/core`'s `useDark()` composable. The dark class is automatically applied to the HTML element.

**Usage**:

```vue
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()">
    {{ isDark ? "Dark" : "Light" }}
  </button>
</template>
```

The color variables automatically switch between light and dark values based on the dark mode state.

---

## 📦 Application Architecture

### Logging (`app/utils/log.ts`)

**⚠️ IMPORTANT: Never use `console.log` directly in your code!**

The app provides a logging utility that ensures console logs only work in development mode. All logs are automatically suppressed in production builds.

**Usage**:

```typescript
import log from "~/utils/log";

// Different log levels
log.info("User logged in", { userId: 123 });
log.debug("API response:", responseData);
log.warn("Deprecated function used");
log.error("Failed to fetch data", error);
```

**Benefits**:

- 🔒 Automatic suppression in production (no logs leak to production)
- 🕒 Timestamps on all log messages
- 📊 Different log levels for better debugging
- 🎨 Consistent log formatting

**Available Methods**:

- `log.debug()` - Detailed debugging information
- `log.info()` - General informational messages
- `log.warn()` - Warning messages for potential issues
- `log.error()` - Error messages for failures

**Example**:

```typescript
// ❌ DON'T DO THIS
console.log("User data:", user);

// ✅ DO THIS INSTEAD
import log from "~/utils/log";
log.info("User data:", user);
```

---

### Reusable Components

The app provides a set of pre-built, styled components for common UI patterns. Always use these instead of creating custom implementations.

#### AppButton (`app/components/AppButton.vue`)

A flexible button component with multiple variants and loading states.

**Props**:

- `title` (string, required) - Button text
- `variant` ('primary' | 'secondary' | 'tertiary' | 'tertiary1', required) - Button style variant
- `disabled` (boolean, required) - Disabled state
- `loading` (boolean, optional) - Shows loader when true

**Usage**:

```vue
<template>
  <AppButton
    title="Sign In"
    variant="primary"
    :disabled="false"
    :loading="isLoading"
    @click="handleSubmit"
  />
</template>
```

**Variants**:

- `primary` - Main CTA button (primary color, white text)
- `secondary` - Secondary actions (secondary color, white text)
- `tertiary` - Tertiary actions (background1 color)
- `tertiary1` - Alternative tertiary (background2 color)

---

#### AppInput (`app/components/AppInput.vue`)

A versatile input component with icons, validation, and type support.

**Props**:

- `modelValue` (string | number, required) - Input value (v-model)
- `label` (string, optional) - Input label
- `placeholder` (string, optional, default: 'Type here') - Placeholder text
- `type` (string, optional, default: 'text') - Input type ('text', 'password', 'number', etc.)
- `editable` (boolean, optional, default: true) - Whether input is editable
- `prependIcon` (IconName, optional) - Icon before input
- `appendIcon` (IconName, optional) - Icon after input
- `orientation` ('vertical' | 'horizontal', optional, default: 'vertical') - Layout direction
- `error` (string, optional) - Error message to display

**Usage**:

```vue
<script setup>
const email = ref("");
const password = ref("");
const amount = ref(0);
</script>

<template>
  <!-- Basic input -->
  <AppInput
    v-model="email"
    label="Email Address"
    placeholder="Enter your email"
    type="email"
  />

  <!-- Password input (auto-shows eye icon) -->
  <AppInput v-model="password" label="Password" type="password" />

  <!-- Input with icons -->
  <AppInput
    v-model="amount"
    label="Amount"
    type="number"
    prepend-icon="token-branded"
    placeholder="0.00"
  />

  <!-- Input with error -->
  <AppInput v-model="email" label="Email" error="Invalid email format" />

  <!-- Horizontal layout -->
  <AppInput v-model="value" label="Amount" orientation="horizontal" />
</template>
```

**Features**:

- Automatic password visibility toggle for `type="password"`
- Dark mode support
- Icon support (prepend/append)
- Error state handling
- Number type support with validation

---

#### OtpInput (`app/components/OtpInput.vue`)

A specialized input component for OTP (One-Time Password) entry with auto-focus and paste support.

**Props**:

- `modelValue` (string, required) - OTP value (v-model)
- `length` (number, optional, default: 4) - Number of OTP digits
- `disabled` (boolean, optional, default: false) - Disabled state
- `error` (boolean, optional, default: false) - Error state
- `success` (boolean, optional, default: false) - Success state
- `secure` (boolean, optional, default: true) - Mask input with dots

**Usage**:

```vue
<script setup>
const otp = ref("");
</script>

<template>
  <!-- Basic OTP input (4 digits) -->
  <OtpInput v-model="otp" />

  <!-- 6-digit OTP -->
  <OtpInput v-model="otp" :length="6" />

  <!-- With error state -->
  <OtpInput v-model="otp" :error="true" />

  <!-- With success state -->
  <OtpInput v-model="otp" :success="true" />

  <!-- Show plain numbers (not masked) -->
  <OtpInput v-model="otp" :secure="false" />
</template>
```

**Features**:

- Auto-focus next input on entry
- Backspace navigation
- Paste support (auto-fills all inputs)
- Arrow key navigation
- Number-only input validation
- Secure masking with dots
- Error/success visual states
- Dark mode support

---

#### Loader (`app/components/Loader.vue`)

A customizable loading spinner component.

**Props**:

- `size` (number, optional, default: 20) - Spinner size in pixels
- `color` (string, optional, default: '#fff') - Spinner color
- `thickness` (number, optional, default: 2) - Border thickness in pixels
- `speed` (string, optional, default: '1s') - Animation speed

**Usage**:

```vue
<template>
  <!-- Default loader -->
  <Loader />

  <!-- Custom size and color -->
  <Loader :size="40" color="#EA4E1B" />

  <!-- Custom thickness and speed -->
  <Loader :thickness="3" speed="0.5s" />

  <!-- Large loader -->
  <Loader :size="60" :thickness="4" color="#7AB8A6" />
</template>
```

**Use Cases**:

- Button loading states (used in `AppButton`)
- Page loading indicators
- Content loading placeholders
- API request states

---

### Composables (`app/composables/`)

Composables are reusable composition functions for managing stateful logic, side effects, and shared functionality across components.

**Purpose**: Extract and reuse component logic following the Composition API pattern

**Example**:

```typescript
// app/composables/useAuth.ts
export const useAuth = () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const login = async (credentials) => {
    // Login logic
  };

  const logout = () => {
    // Logout logic
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
```

**Usage in components**:

```vue
<script setup>
const { user, isAuthenticated, login } = useAuth();
</script>
```

**Best Practices**:

- Prefix with `use` (e.g., `useAuth`, `useWallet`, `useTransaction`)
- Keep composables focused on a single responsibility
- Composables are auto-imported in Nuxt (no need to import manually)

---

### Utils (`app/utils/`)

Utilities contain pure functions, type definitions, constants, and helper functions that don't require Vue reactivity.

**Structure**:

```
app/utils/
├── types/           # TypeScript type definitions
│   └── icons.ts
├── helpers.ts       # Pure utility functions
├── constants.ts     # App-wide constants
└── validators.ts    # Validation functions
```

**Example**:

```typescript
// app/utils/formatters.ts
export const formatCurrency = (amount: number, currency: string = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

// app/utils/validators.ts
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

**Usage**:

```vue
<script setup>
import { formatCurrency } from "~/utils/formatters";

const price = formatCurrency(1234.56, "EUR");
</script>
```

---

### Pages (`app/pages/`)

Nuxt uses **file-based routing** - each Vue file in the `pages/` directory automatically becomes a route.

**Routing Examples**:

```
pages/
├── index.vue              → /
├── about.vue              → /about
├── transactions/
│   ├── index.vue          → /transactions
│   └── [id].vue           → /transactions/:id (dynamic route)
├── wallet/
│   ├── index.vue          → /wallet
│   └── deposit.vue        → /wallet/deposit
└── settings/
    ├── index.vue          → /settings
    ├── profile.vue        → /settings/profile
    └── security.vue       → /settings/security
```

**Dynamic Routes**:

```vue
<!-- pages/transactions/[id].vue -->
<script setup>
const route = useRoute();
const transactionId = route.params.id;
</script>
```

**Navigation**:

```vue
<NuxtLink to="/transactions">View Transactions</NuxtLink>
<!-- or -->
<button @click="navigateTo('/wallet')">Go to Wallet</button>
```

---

### Layouts (`app/layouts/`)

Layouts are wrapper components for pages with shared UI structure (headers, footers, sidebars).

**Status**: Currently optional. Use layouts when most pages share the same structure.

**Example**:

```vue
<!-- app/layouts/default.vue -->
<template>
  <div>
    <AppHeader />
    <main>
      <slot />
      <!-- Page content renders here -->
    </main>
    <AppFooter />
  </div>
</template>
```

**Usage in pages**:

```vue
<!-- pages/index.vue -->
<script setup>
definePageMeta({
  layout: "default",
});
</script>
```

**Common Layout Patterns**:

- `default.vue` - Main app layout (header + content + footer)
- `auth.vue` - Authentication pages (centered card, no header/footer)
- `dashboard.vue` - Dashboard with sidebar navigation
- `blank.vue` - No layout (full-page components)

---

## 🎯 Development Guidelines

### Logging

**⚠️ CRITICAL RULE: Never use `console.log` in your code!**

- ✅ **DO**: Use `log.info()`, `log.debug()`, `log.warn()`, `log.error()`
- ❌ **DON'T**: Use `console.log()`, `console.error()`, etc.
- Logs automatically suppressed in production
- All logs include timestamps for better debugging

```typescript
// ❌ BAD
console.log("User data:", user);

// ✅ GOOD
import log from "~/utils/log";
log.info("User data:", user);
```

---

### Reusable Components

Always use the provided reusable components instead of building custom ones:

**For Forms**:

- ✅ Use `<AppInput>` for text inputs, passwords, numbers
- ✅ Use `<AppButton>` for all buttons
- ✅ Use `<OtpInput>` for OTP/PIN entry

**For UI Elements**:

- ✅ Use `<Loader>` for loading states
- ✅ Use `<Icon>` for all icons
- ✅ Use `<IconBox>` for icons with circular backgrounds

**Benefits**:

- Consistent UI across the app
- Built-in dark mode support
- Type-safe props with TypeScript
- Accessible and tested

---

### Component Naming

- Use PascalCase for components: `UserProfile.vue`, `TransactionCard.vue`
- Use kebab-case for component instances: `<user-profile />`, `<transaction-card />`

### TypeScript

- Always define prop types with TypeScript
- Use type inference where possible
- Create shared types in `app/utils/types/`

### Styling

- Use Tailwind utility classes first
- Create custom CSS variables in `colors.css` for theme values
- Use `@apply` sparingly in component styles

### Composables vs Utils

- **Composables**: Reactive state, lifecycle hooks, Vue APIs
- **Utils**: Pure functions, no Vue dependencies

### Icon Component

- Always use the `Icon` component instead of inline SVGs
- Add new icons to the central component for reusability

---

## 🧪 Testing (To be added)

Testing setup is not yet configured. Consider adding:

- Vitest for unit tests
- Playwright or Cypress for E2E tests

---

## 📝 Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Example
NUXT_PUBLIC_API_URL=https://api.example.com
NUXT_PUBLIC_APP_ENV=development
```

Access in code:

```typescript
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
```

---

## 🤝 Contributing

### Adding New Features

1. Create feature branch from `dev`
2. Follow the project structure conventions
3. Add types for all new functionality
4. Update this README if adding new patterns
5. Test in both light and dark modes

### Code Style

- Use Composition API (`<script setup>`)
- Prefer `const` over `let`
- Use TypeScript for type safety
- Follow Vue 3 style guide

---

## 📄 License

## 👥 Team
