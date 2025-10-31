<template>
  <div class="h-full pb-6">
    <!-- Appearance Section -->
    <div class="settings-section">
      <h4 class="mb-4">Appearance</h4>
      <div class="bg-surface border border-border-subtle rounded-[12px] p-4">
        <Toggle v-model="isDark" label="Dark mode" />
      </div>
    </div>

    <!-- Account Section -->
    <div class="settings-section">
      <h4 class="mb-4">Account</h4>
      <div class="bg-surface border border-border-subtle rounded-[12px] overflow-hidden">
        <SettingsItem 
          icon="profile" 
          icon-color="#4FA088"
          label="Profile Information" 
          @click="goTo('/profile')"
        />
        <Divider />
        <SettingsItem 
          icon="token-branded" 
          icon-color="#0500FF"
          label="Connected Wallets" 
          :badge="walletOptions.length.toString()"
        />
        <Divider />
        <SettingsItem 
          icon="star" 
          icon-color="#E0CC7F"
          label="Saved Beneficiaries" 
          @click="goTo('/beneficiaries')"
        />
      </div>
    </div>

    <!-- Security Section -->
    <div class="settings-section">
      <h4 class="mb-4">Security</h4>
      <div class="bg-surface border border-border-subtle rounded-[12px] overflow-hidden">
        <SettingsItem 
          icon="eye-off" 
          icon-color="#F00"
          label="Change Password" 
        />
        <Divider />
        <SettingsItem 
          icon="fingerprint" 
          icon-color="#34A853"
          label="Biometric Login"
        >
          <Toggle v-model="biometricEnabled" />
        </SettingsItem>
        <Divider />
        <SettingsItem 
          icon="fingerprint" 
          icon-color="#2461ED"
          label="Two-Factor Authentication"
        >
          <Toggle v-model="twoFactorEnabled" />
        </SettingsItem>
      </div>
    </div>

    <!-- Notifications Section -->
    <div class="settings-section">
      <h4 class="mb-4">Notifications</h4>
      <div class="bg-surface border border-border-subtle rounded-[12px] overflow-hidden">
        <SettingsItem 
          icon="bell" 
          icon-color="#FBBC05"
          label="Push Notifications"
        >
          <Toggle v-model="pushNotifications" />
        </SettingsItem>
        <Divider />
        <SettingsItem 
          icon='mail-checkmark' 
          icon-color="#4FA088"
          label="Email Notifications"
        >
          <Toggle v-model="emailNotifications" />
        </SettingsItem>
        <Divider />
        <SettingsItem 
          icon="bell" 
          icon-color="#E0CC7F"
          label="Transaction Alerts"
        >
          <Toggle v-model="transactionAlerts" />
        </SettingsItem>
      </div>
    </div>

    <!-- Support Section -->
    <div class="settings-section">
      <h4 class="mb-4">Support & About</h4>
      <div class="bg-surface border border-border-subtle rounded-[12px] overflow-hidden">
        <SettingsItem 
          icon="info" 
          icon-color="#2461ED"
          label="Help Center" 
        />
        <Divider />
        <SettingsItem 
          icon="info" 
          icon-color="#34A853"
          label="Terms of Service" 
        />
        <Divider />
        <SettingsItem 
          icon="scan" 
          icon-color="#4FA088"
          label="Privacy Policy" 
        />
        <Divider />
        <SettingsItem 
          icon="receipt"
          icon-color="#E0CC7F"
          label="App Version" 
          value="v1.0.0"
        />
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="settings-section">
      <div class="bg-surface border border-border-subtle rounded-[12px] overflow-hidden">
        <SettingsItem 
          icon="arrow-back" 
          icon-color="#F00"
          label="Log Out" 
          is-danger
          @click="handleLogout"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { walletOptions } from '~/utils/constants/appData'

const isDark = useDark()

definePageMeta({
  layout: 'navigation',
  title: 'Settings',
})

// Settings state
const biometricEnabled = ref(false)
const twoFactorEnabled = ref(false)
const pushNotifications = ref(true)
const emailNotifications = ref(true)
const transactionAlerts = ref(true)

const handleLogout = () => {
  console.log('Logging out...')
}
</script>

<style scoped>
.settings-section {
  width: 100%;
  margin-bottom: 24px;
}
</style>