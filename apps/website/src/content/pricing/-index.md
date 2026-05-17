---
title: "Pricing"
meta_title: "Pricing - Arcto Career Growth Platform"
description: "Simple, per-seat pricing for engineering teams ready to invest in structured developer growth."
image: ""
draft: false

page_header:
  badge: "Pricing"
  title: "Pricing That Scales With Your Team"
  content: "Annual commitment. Per seat. Full platform access from day one. Minimum 20 seats."

toggler:
  monthly_label: "Monthly"
  yearly_label: "Yearly"

plans:
  - title: "Starter"
    price: "20"
    yearly_price: "240"
    is_featured: false
    button:
      enable: true
      label: "Book a Demo"
      link: "/contact"
    description: "Core goal setting and AI planning for teams getting started with structured developer growth."
    features:
      - label: "AI-powered goal setting"
        included: true
      - label: "Personalized 90-day plans"
        included: true
        tooltip: "Generated in under 5 minutes via conversational chat."
      - label: "Curated learning recommendations"
        included: true
      - label: "Mentor matching & scheduling"
        included: false
      - label: "Training budget visibility"
        included: false

  - title: "Growth"
    price: "30"
    yearly_price: "360"
    is_featured: true
    offer_text: Most Popular
    button:
      enable: true
      label: "Book a Demo"
      link: "/contact"
    description: "The full Arcto platform. Every feature, every developer, one place."
    features:
      - label: "Everything in Starter"
        included: true
      - label: "Mentor matching & scheduling"
        included: true
        tooltip: "Internal mentors at launch. External specialists as premium add-on."
      - label: "Training budget visibility"
        included: true
      - label: "Milestone tracking"
        included: true
      - label: "Skills coverage dashboard"
        included: true

  - title: "Enterprise"
    price: "Custom"
    yearly_price: "Custom"
    is_featured: false
    button:
      enable: true
      label: "Talk to Sales"
      link: "/contact"
    description: "For teams of 200+ with advanced security, compliance, and integration requirements."
    features:
      - label: "Everything in Growth"
        included: true
      - label: "SSO & SAML"
        included: true
        tooltip: "Okta, Azure AD, and other identity providers."
      - label: "HRIS integration"
        included: true
      - label: "Custom onboarding"
        included: true
      - label: "Dedicated Customer Success Manager"
        included: true

comparison:
  enable: true
  badge: "Plan Matrix"
  title: "Pricing Plans <strong>Comparison</strong>"
  headers:
    - label: "Features"
    - label: "Starter"
    - label: "Growth"
    - label: "Enterprise"
  rows:
    - feature: "Price per seat / month"
      values: ["€20", "€30", "Custom"]
    - feature: "Minimum seats"
      values: ["20", "20", "200"]
    - feature: "AI-powered goal setting"
      values: [true, true, true]
    - feature: "90-day development plans"
      values: [true, true, true]
    - feature: "Curated learning recommendations"
      values: [true, true, true]
    - feature: "Mentor matching & scheduling"
      values: [false, true, true]
    - feature: "Training budget visibility"
      values: [false, true, true]
    - feature: "Milestone tracking"
      values: [false, true, true]
    - feature: "Skills coverage dashboard (anonymized)"
      values: [false, true, true]
    - feature: "SSO & SAML"
      values: [false, false, true]
    - feature: "HRIS integration"
      values: [false, false, true]
    - feature: "Support"
      values: ["Email", "Priority", "Dedicated CSM"]
---
