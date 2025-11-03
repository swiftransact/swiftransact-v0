# SwiftTransact v0

A modern financial transaction application built with Nuxt 3, Vue 3, and TailwindCSS.

## 📚 Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue 3 (Composition API)
- **Styling**: TailwindCSS v4 (with custom design tokens)
- **State Management**: Pinia (via Nuxt stores)
- **Data Fetching**: TanStack Query (Vue Query)
- **HTTP Client**: Axios
- **Phone Validation**: libphonenumber-js
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
│   ├── components/             # Reusable UI components (40+ components)
│   │   ├── Icon.vue            # Centralized icon component
│   │   ├── AppButton.vue       # Button component
│   │   ├── AppInput.vue        # Input component
│   │   ├── Toast.vue           # Notification system
│   │   ├── BottomSlider.vue    # Modal/bottom sheet
│   │   ├── SelectBank.vue      # Bank account input with verification
│   │   └── ...                 # Many more components
│   ├── composables/            # Vue composables
│   │   ├── useToast.ts         # Toast notifications
│   │   ├── useBank.ts          # Paystack integration
│   │   └── useTeleport.ts      # Teleport helpers
│   ├── layouts/                # Layout components
│   │   ├── default.vue
│   │   ├── custom.vue
│   │   └── navigation.vue
│   ├── pages/                  # File-based routing
│   │   ├── index.vue           # Landing page
│   │   ├── home.vue            # Home page
│   │   ├── auth/               # Authentication pages
│   │   ├── services/           # Service pages (bills, recharge, etc.)
│   │   └── receipts/           # Receipt pages
│   ├── plugins/                # Nuxt plugins
│   │   └── vue-query.ts        # TanStack Query setup
│   ├── store/                  # Pinia stores
│   │   └── app.ts              # Global app state
│   └── utils/                  # Utility functions
│       ├── types/              # Type definitions
│       │   ├── icons.ts        # Icon types
│       │   ├── types.d.ts      # Global types
│       │   └── rules.ts        # Validation types
│       ├── constants/          # App constants
│       ├── log.ts              # Logging utility
│       ├── validateNumber.ts   # Phone validation
│       ├── copy.ts             # Clipboard utility
│       └── ...                 # More utilities
├── public/                     # Static assets
│   └── images/                 # Images (coins, logos, etc.)
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

The app provides a comprehensive set of pre-built, styled components for common UI patterns. Always use these instead of creating custom implementations.

#### Toast (`app/components/Toast.vue`)

A stacked notification system that displays up to 3 toast messages with automatic dismissal.

**Features**:

- Stacked display with scale animations
- Auto-dismissal after 15 seconds
- Support for success, error, warning, and info types
- Duplicate prevention
- Color-coded by type

**Usage**:

```vue
<script setup>
// Use the useToast composable (see Composables section)
const showNotification = (type, message) => {
  useToast(type, message);
};
</script>

<template>
  <!-- Toast component should be placed in your layout/app.vue -->
  <Toast />
</template>
```

**Toast Types**:

- `success` - Green background with checkmark icon
- `error` - Red background with close icon
- `warning` - Orange background with warning icon
- `info` - Blue background

---

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

#### AmountInput (`app/components/AmountInput.vue`)

A specialized input component for entering monetary amounts with Nigerian Naira (₦) symbol.

**Props**:

- `modelValue` (string | number, required) - Amount value (v-model)
- `placeholder` (string, optional, default: 'Enter Amount') - Placeholder text
- `orientation` ('vertical' | 'horizontal', optional, default: 'vertical') - Layout direction
- `disabled` (boolean, optional, default: false) - Disabled state
- `buttonTitle` (string, required) - Button text
- `onClick` (function, optional) - Button click handler

**Usage**:

```vue
<script setup>
const amount = ref("");
const handlePayment = () => {
  console.log("Amount:", amount.value);
};
</script>

<template>
  <!-- Vertical layout -->
  <AmountInput
    v-model="amount"
    placeholder="Enter Amount"
    buttonTitle="Pay"
    :disabled="!amount"
    :onClick="handlePayment"
  />

  <!-- Horizontal layout -->
  <AmountInput
    v-model="amount"
    orientation="horizontal"
    buttonTitle="Continue"
  />
</template>
```

**Features**:

- Numeric input only
- Automatic non-digit filtering
- Max length of 10 digits
- Naira symbol display
- Built-in button for actions
- Responsive layouts

---

#### BottomSlider (`app/components/BottomSlider.vue`)

A versatile bottom sheet/modal component with two modes: slot-based (with title) or modal-based (pre-configured).

**Props**:

- `modelValue` (boolean, required) - Controls visibility (v-model)
- `title` (string, optional) - Title for slot-based mode
- `modal` (Modal, optional) - Pre-configured modal object

**Usage**:

```vue
<script setup>
const showSheet = ref(false);
const showModal = ref(false);

const modalConfig: Modal = {
  icon: "check-mark",
  title: "Success",
  subtitle: "Payment completed successfully",
  primaryActionTitle: "View Receipt",
  primaryAction: () => {
    navigateTo("/receipts");
  },
  secondaryActionTitle: "Close",
  secondaryAction: () => {
    showModal.value = false;
  },
  type: "success",
};
</script>

<template>
  <!-- Slot-based mode (custom content) -->
  <BottomSlider v-model="showSheet" title="Select Payment Method">
    <div class="p-4">
      <!-- Your custom content here -->
    </div>
  </BottomSlider>

  <!-- Modal mode (pre-configured layout) -->
  <BottomSlider v-model="showModal" :modal="modalConfig" />
</template>
```

**Features**:

- Smooth slide-up/down animations
- Backdrop overlay with click-to-close
- Auto scroll-lock when open
- Drag handle
- Support for icons and actions
- Type-based text colors (success/error/warning/info)
- Safe area support

---

#### SelectBank (`app/components/SelectBank.vue`)

An advanced bank account input component with Paystack integration for account verification.

**Props**:

- `modelValue` (BankAccountDetails | null, required) - Bank account data (v-model)

**Usage**:

```vue
<script setup>
import type { BankAccountDetails } from "~/components/SelectBank.vue";

const bankAccount = (ref < BankAccountDetails) | (null > null);

watch(bankAccount, (newVal) => {
  if (newVal?.accountName) {
    console.log("Verified account:", newVal);
  }
});
</script>

<template>
  <SelectBank v-model="bankAccount" />

  <!-- Display verification status -->
  <p v-if="bankAccount?.accountName" class="text-success">
    {{ bankAccount.accountName }}
  </p>
</template>
```

**Features**:

- Searchable bank dropdown
- Real-time account verification via Paystack API
- Auto-populated account name on successful verification
- 10-digit account number validation
- Loading states during verification
- Error handling and display
- Dark mode support

**BankAccountDetails Type**:

```typescript
{
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string; // Auto-filled after verification
}
```

---

#### Toggle (`app/components/Toggle.vue`)

A customizable toggle/switch component with label support.

**Props**:

- `modelValue` (boolean, required) - Toggle state (v-model)
- `disabled` (boolean, optional, default: false) - Disabled state
- `label` (string, optional) - Label text
- `orientation` ('vertical' | 'horizontal', optional, default: 'horizontal') - Layout direction

**Usage**:

```vue
<script setup>
const notificationsEnabled = ref(true);
const darkMode = ref(false);
</script>

<template>
  <!-- With label (horizontal) -->
  <Toggle v-model="notificationsEnabled" label="Enable Notifications" />

  <!-- Vertical layout -->
  <Toggle v-model="darkMode" label="Dark Mode" orientation="vertical" />

  <!-- Disabled state -->
  <Toggle v-model="setting" label="Coming Soon" :disabled="true" />
</template>
```

**Features**:

- Smooth animations
- Dark mode support
- Customizable orientation
- Accessible (ARIA attributes)
- Primary color theming

---

#### CheckBox (`app/components/CheckBox.vue`)

A styled checkbox component with custom sizing and colors.

**Props**:

- `modelValue` (boolean, required) - Checkbox state (v-model)
- `disabled` (boolean, optional, default: false) - Disabled state
- `label` (string, optional) - Label text
- `id` (string, optional) - HTML id (auto-generated if not provided)
- `size` (string, optional, default: '20px') - Checkbox size
- `color` (string, optional, default: 'var(--color-success)') - Checked color

**Usage**:

```vue
<script setup>
const agreedToTerms = ref(false);
const newsletter = ref(true);
</script>

<template>
  <!-- Basic checkbox -->
  <CheckBox v-model="agreedToTerms" label="I agree to the terms" />

  <!-- Custom size and color -->
  <CheckBox
    v-model="newsletter"
    label="Subscribe to newsletter"
    size="24px"
    color="#EA4E1B"
  />

  <!-- Disabled -->
  <CheckBox v-model="setting" label="Not available" :disabled="true" />
</template>
```

**Features**:

- Custom sizing (automatically scales checkmark)
- Custom colors
- Auto-generated unique IDs
- Dark mode support
- Smooth transitions

---

#### SForm (`app/components/SForm.vue`)

A smart form wrapper component that automatically tracks validation state of child inputs and manages form submission.

**Props**:

- `modelValue` (boolean, optional, default: false) - Form validity state (v-model)

**Emits**:

- `update:modelValue` - Emits when form validity changes
- `submit` - Emits when form is submitted and valid

**Usage**:

```vue
<script setup>
const isFormValid = ref(false);

const handleSubmit = () => {
  console.log("Form submitted successfully!");
  // Process form data
};
</script>

<template>
  <SForm v-model="isFormValid" @submit="handleSubmit">
    <!-- Child inputs automatically register with the form -->
    <AppInput
      v-model="email"
      label="Email"
      type="email"
      :rules="[
        { rule: (v) => !!v, message: 'Email is required' },
        { rule: (v) => /@/.test(v), message: 'Invalid email' },
      ]"
    />

    <AppInput
      v-model="password"
      label="Password"
      type="password"
      :rules="[{ rule: (v) => v.length >= 8, message: 'Min 8 characters' }]"
    />

    <AppButton type="submit" title="Submit" :disabled="!isFormValid" />
  </SForm>
</template>
```

**Features**:

- Automatic validation state tracking across all child inputs
- Computes overall form validity in real-time
- Provides `formContext` to child components via Vue's provide/inject
- Prevents submission when form is invalid
- No manual validation state management needed
- Child inputs can register/unregister dynamically

**How It Works**:

1. Child inputs inject the `formContext`
2. Each input registers itself with validation state on mount
3. Form watches all input validation states
4. Form validity is computed automatically
5. `v-model` on form reflects overall validity
6. Form only emits `submit` when all inputs are valid

**Best Practices**:

- Use with `AppInput` or other components that support form context
- Bind `v-model` to track form validity state
- Disable submit button based on form validity
- Handle `@submit` event for form processing

---

### Store (`app/store/`)

The application uses Pinia for global state management. Stores are automatically registered by Nuxt.

#### useAppStore (`app/store/app.ts`)

Global application state store managing wallet selection and toast notifications.

**State**:

```typescript
{
  selectedWallet: string           // Currently selected wallet
  toasts: Toast[]                  // Active toast notifications
}
```

**Actions**:

```typescript
removeToast(id: string): void     // Removes a toast by ID
```

**Usage**:

```vue
<script setup>
import { useAppStore } from "~/store/app";

const appStore = useAppStore();
const { selectedWallet, toasts } = storeToRefs(appStore);

// Update wallet
selectedWallet.value = "metamask";

// Remove a toast
appStore.removeToast("toast-id");
</script>
```

**Integration**:

- Used by `useToast` composable for notification management
- Used by `Toast` component for displaying notifications
- Used throughout app for wallet selection state

**Best Practices**:

- Use `storeToRefs()` to maintain reactivity when destructuring
- Actions can be destructured directly without `storeToRefs`
- Stores are auto-imported, no manual import needed in most cases

---

### Composables (`app/composables/`)

Composables are reusable composition functions for managing stateful logic, side effects, and shared functionality across components. All composables are auto-imported in Nuxt.

#### useToast (`app/composables/useToast.ts`)

Displays toast notifications with automatic management and dismissal.

**Signature**:

```typescript
useToast(type: 'success' | 'error' | 'warning' | 'info', notification: string): void
```

**Usage**:

```vue
<script setup>
const handleSuccess = () => {
  useToast("success", "Payment completed successfully!");
};

const handleError = (error: Error) => {
  useToast("error", "Failed to process payment");
};

const showWarning = () => {
  useToast("warning", "Low balance detected");
};

const showInfo = () => {
  useToast("info", "Processing your request...");
};
</script>
```

**Features**:

- Maximum 3 toasts displayed at once
- Auto-dismissal after 15 seconds
- Duplicate prevention (same message won't show twice)
- Automatic stacking with FIFO queue
- Works with the `Toast` component

---

#### useBank (`app/composables/useBank.ts`)

Provides integration with Paystack's Bank API for fetching Nigerian banks and verifying account numbers.

**Functions**:

1. **useBank()** - Fetches list of all banks

```typescript
const { data, isLoading, error } = useBank();

// data.value.data contains array of Bank objects
```

2. **verifyAccount(accountNumber, bankCode)** - Verifies a bank account

```typescript
const accountNumber = ref("0123456789");
const bankCode = ref("058");

const { data, isLoading, error } = verifyAccount(accountNumber, bankCode);

// Automatically triggers when both values are valid
// data.value.data.account_name contains the verified account name
```

**Usage Example**:

```vue
<script setup>
const accountNumber = ref("");
const selectedBankCode = ref("");

// Get all banks
const { data: banks } = useBank();

// Verify account (auto-runs when account number is 10 digits)
const {
  data: verification,
  isLoading: isVerifying,
  error: verificationError,
} = verifyAccount(accountNumber, selectedBankCode);

watch(verification, (newVal) => {
  if (newVal?.data?.account_name) {
    console.log("Account verified:", newVal.data.account_name);
  }
});
</script>
```

**Features**:

- Infinite cache for bank list (doesn't refetch)
- Automatic account verification when conditions met
- 24-hour cache for verified accounts
- Requires `NUXT_PUBLIC_PAYSTACK_SECRET_KEY` in environment variables

---

#### useTeleport (`app/composables/useTeleport.ts`)

Checks if a teleport target element is ready in the DOM.

**Signature**:

```typescript
useTeleport(targetId: string): { isReady: Ref<boolean> }
```

**Usage**:

```vue
<script setup>
const { isReady } = useTeleport("#app-nav-right");
</script>

<template>
  <Teleport to="#app-nav-right" v-if="isReady">
    <button>Action Button</button>
  </Teleport>
</template>
```

**Features**:

- Polls for target element availability
- Auto-cleanup on unmount
- Prevents teleport errors for dynamic targets
- Useful for navigation slot patterns

---

**Best Practices**:

- Prefix with `use` (e.g., `useAuth`, `useWallet`, `useTransaction`)
- Keep composables focused on a single responsibility
- Composables are auto-imported in Nuxt (no need to import manually)
- Use composables for reactive state and side effects
- Use utils for pure functions

---

### Utils (`app/utils/`)

Utilities contain pure functions, type definitions, constants, and helper functions that don't require Vue reactivity.

**Structure**:

```
app/utils/
├── types/              # TypeScript type definitions
│   ├── icons.ts        # Icon name types
│   ├── rules.ts        # Validation rule types
│   └── types.d.ts      # Global type definitions
├── constants/          # App-wide constants
│   ├── appData.ts      # Application data
│   └── mockData.ts     # Mock data for development
├── log.ts              # Logging utility
├── validateNumber.ts   # Phone number validation
├── copy.ts             # Clipboard utility
├── goBack.ts           # Navigation helper
├── goTo.ts             # Navigation helper
├── getFlagEmoji.ts     # Country flag utility
├── getErrorMessage.ts  # Error message formatter
└── helpers.ts          # General utility functions
```

#### Core Utilities

**validateNumber** (`app/utils/validateNumber.ts`)

Validates Nigerian phone numbers for specific network providers.

```typescript
import validateNumber from "~/utils/validateNumber";

const result = validateNumber("08012345678", "mtn");

// Returns:
// {
//   isValid: true,
//   message: 'Valid MTN phone number',
//   normalizedNumber: '08012345678',
//   network: 'mtn'
// }
```

**Supported Networks**: MTN, Airtel, Glo, 9mobile

**Features**:

- Validates phone number format using `libphonenumber-js`
- Checks network-specific prefixes
- Normalizes numbers (handles +234, 234, 0 formats)
- Returns detailed validation results

---

**copy** (`app/utils/copy.ts`)

Copies text to clipboard with toast feedback.

```typescript
import copy from "~/utils/copy";

const handleCopy = async () => {
  const success = await copy("Text to copy");
  // Shows success/error toast automatically
};
```

**Features**:

- Browser compatibility check
- Automatic toast notifications
- Returns boolean success status
- Async/await support

---

**goBack** (`app/utils/goBack.ts`)

Navigates back in history or to home if no history exists.

```typescript
import goBack from "~/utils/goBack";

const handleBack = () => {
  goBack(); // Goes back or to '/' if no history
};
```

---

**goTo** (`app/utils/goTo.ts`)

Simple navigation helper.

```typescript
import goTo from "~/utils/goTo";

goTo("/profile"); // Navigates to profile page
```

---

**getFlagEmoji** (`app/utils/getFlagEmoji.ts`)

Converts country codes to flag emojis.

```typescript
import getFlagEmoji from "~/utils/getFlagEmoji";

const flag = getFlagEmoji("NG"); // Returns: 🇳🇬
```

---

**getErrorMessage** (`app/utils/getErrorMessage.ts`)

Extracts user-friendly error messages from error objects.

```typescript
import { handleError } from "~/utils/getErrorMessage";

try {
  // API call
} catch (error) {
  const message = handleError(error);
  useToast("error", message);
}
```

---

#### Type Definitions (`app/utils/types/`)

**types.d.ts** - Core application types:

```typescript
type NetworkProvider = "mtn" | "glo" | "airtel" | "9mobile";

type Modal = {
  title?: string;
  subtitle?: string;
  icon: IconName;
  primaryActionTitle: string;
  primaryAction: () => void;
  secondaryActionTitle?: string;
  secondaryAction?: () => void;
  iconColor?: string;
  primaryActionIcon?: IconName;
  secondaryActionIcon?: IconName;
  type?: "success" | "error" | "warning" | "info";
};

type Bank = {
  id: number;
  name: string;
  code: string;
  // ... Paystack bank object fields
};

type Toast = {
  notification: string;
  type: "success" | "error" | "warning" | "info";
  id: string;
};

type ReceiptType = "transfer" | "electricity" | "data" | "airtime";
```

**icons.ts** - Icon name types (see Icons section)

**rules.ts** - Validation rule types:

```typescript
type Rule = {
  rule: (value: any) => boolean;
  message: string;
};
```

---

### Plugins (`app/plugins/`)

Plugins extend the application with additional functionality and are automatically registered by Nuxt.

#### vue-query.ts

Integrates TanStack Query (formerly React Query) for powerful data fetching and caching.

**Features**:

- Client-side and server-side data hydration
- 5-second default stale time
- Automatic background refetching
- Cache management
- Query invalidation support

**Usage**:

```vue
<script setup>
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";

// Fetch data
const { data, isLoading, error, refetch } = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const response = await fetch("/api/users");
    return response.json();
  },
  staleTime: 60000, // 1 minute
});

// Mutations
const queryClient = useQueryClient();
const mutation = useMutation({
  mutationFn: async (newUser) => {
    return await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
  },
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ["users"] });
  },
});
</script>
```

**Already Used In**:

- `useBank` composable for Paystack bank fetching
- `verifyAccount` composable for account verification

---

### Pages (`app/pages/`)

Nuxt uses **file-based routing** - each Vue file in the `pages/` directory automatically becomes a route.

**Actual Application Routes**:

```
pages/
├── index.vue                          → /
├── home.vue                           → /home
├── settings.vue                       → /settings
├── profile.vue                        → /profile
├── transfer.vue                       → /transfer
├── bills.vue                          → /bills
├── beneficiaries.vue                  → /beneficiaries
├── enableNotifications.vue            → /enable-notifications
├── auth/
│   ├── signup.vue                     → /auth/signup
│   └── setup.vue                      → /auth/setup
├── services/
│   ├── electricity.vue                → /services/electricity
│   ├── flight.vue                     → /services/flight
│   ├── tickets.vue                    → /services/tickets
│   └── recharge[[type]]/
│       ├── index.vue                  → /services/recharge (all types)
│       └── [provider].vue             → /services/recharge/airtime/mtn
└── receipts/
    └── [type].vue                     → /receipts/:type (transfer, electricity, data, airtime)
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

**For Forms & Input**:

- ✅ Use `<SForm>` as form wrapper for automatic validation tracking
- ✅ Use `<AppInput>` for text inputs, passwords, numbers
- ✅ Use `<AppButton>` for all buttons
- ✅ Use `<OtpInput>` for OTP/PIN entry
- ✅ Use `<AmountInput>` for monetary amounts
- ✅ Use `<SelectBank>` for bank account input with verification
- ✅ Use `<CheckBox>` for checkboxes
- ✅ Use `<Toggle>` for switches/toggles

**For Selection**:

- ✅ Use `<SelectNetwork>` for network provider selection
- ✅ Use `<SelectCoin>` for cryptocurrency selection
- ✅ Use `<SelectWallet>` for wallet selection
- ✅ Use `<SelectPrepaid>` for prepaid service selection

**For UI Elements**:

- ✅ Use `<Icon>` for all icons
- ✅ Use `<IconBox>` for icons with circular backgrounds
- ✅ Use `<Loader>` for loading states
- ✅ Use `<Toast>` for notifications (via `useToast`)

**For Modals & Overlays**:

- ✅ Use `<BottomSlider>` for bottom sheets and modals

**For Navigation**:

- ✅ Use `<TopNav>`, `<BottomNav>`, `<appNav>` for navigation
- ✅ Use `<BackButton>` for back navigation
- ✅ Use `<Tab>` for tab navigation

**Benefits**:

- Consistent UI across the app
- Built-in dark mode support
- Type-safe props with TypeScript
- Accessible and tested
- Integrated with app theme and design system

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

## 📝 Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Paystack Integration (required for bank verification)
NUXT_PUBLIC_PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```

Access in code:

```typescript
const config = useRuntimeConfig();
const paystackKey = config.public.paystackSecretKey;
const apiUrl = config.public.apiUrl;
```

**Required Environment Variables**:

- `NUXT_PUBLIC_PAYSTACK_SECRET_KEY` - Required for `SelectBank` component and `useBank` composable

---

## 🤝 Contributing

### Adding New Features

1. Create feature branch from `main`
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
