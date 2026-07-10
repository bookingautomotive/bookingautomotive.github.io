---
layout: page
title: Integrations & API Documentation
permalink: /docs/integrations/
---

# Integrations & API Documentation

Connect Booking Automotive to the tools you already use. Our open integration platform and REST API let you sync data, automate workflows, and build custom solutions for your auto repair shop.

---

## Overview

Booking Automotive is built to play nicely with your existing software stack. Whether you need to sync appointments to your calendar, push invoices to your accounting system, or build a custom workflow, our integrations and API make it straightforward.

**[Get started with Booking Automotive](https://bookingautomotive.com)** — every integration listed below is available on all plans.

---

## How to Join Integration Waitlists

Some integrations (marked "Coming soon" or "In beta") require joining a waitlist for early access. Here's how the process works:

### Step-by-Step Guide

1. **Find the integration** you want in this documentation
2. **Click the waitlist link** in the integration description
3. **Fill out the form** with:
   - Your shop name and contact info
   - Current software you're using (e.g., "We use Xero for accounting")
   - Why you need this integration
   - Expected timeline (e.g., "Need within 30 days" or "Just exploring")
4. **Submit and confirm** — You'll receive an email confirmation
5. **Wait for invitation** — We notify waitlist members in batches as we onboard new integrations

### Waitlist Priority Factors

We prioritize waitlist members based on:
- **Number of requests** — More shops requesting = higher priority
- **Use case clarity** — Specific, detailed requests get prioritized
- **Timeline urgency** — Shops with near-term needs may get early access
- **Feedback willingness** — Beta participants who provide feedback get priority

### Expected Timelines

- **High-demand integrations** (QuickBooks, Slack, etc.): 2-4 weeks
- **Niche integrations** (specialty tools): 1-3 months
- **Custom API requests**: Varies by complexity

### What Happens When You're Off the Waitlist?

1. **Email invitation** with setup instructions
2. **Early access period** (typically 2 weeks) to test the integration
3. **Feedback survey** to help us improve before general release
4. **General availability** — integration becomes available to all users

**[View current waitlist status](https://bookingautomotive.com/integrations/roadmap)** — see which integrations are in development, beta, or generally available.

---

## Accounting Integrations

### QuickBooks Online

Sync invoices, payments, and customer data directly with QuickBooks Online. Eliminate double data entry and keep your books accurate in real time.

- **Automatic invoice sync** — Push completed repair orders to QuickBooks as invoices
- **Customer matching** — Map Booking Automotive customers to existing QuickBooks contacts
- **Payment reconciliation** — Recorded payments appear in QuickBooks automatically
- **Tax configuration** — Pull tax rates and rules from QuickBooks

[Set up QuickBooks integration](https://bookingautomotive.com) — available in your shop dashboard under Settings > Integrations.

### Xero

Coming soon. [Join the waitlist](https://bookingautomotive.com) to get early access when Xero support launches.

---

## Payment Processing

### Stripe

Accept credit card payments online and in-person with Stripe. Secure, PCI-compliant, and fast to set up.

- **Online payments** — Customers pay deposits or full invoices through a branded payment page
- **In-person terminal** — Use Stripe Terminal for card-present transactions at the shop
- **Recurring billing** — Set up maintenance plan subscriptions with automatic billing
- **Payout scheduling** — Choose daily, weekly, or monthly payouts to your bank account

[Connect Stripe](https://bookingautomotive.com) in Settings > Payments.

### Square

Square integration is in beta. [Contact us](https://bookingautomotive.com) if you'd like to join the beta program.

---

## Calendar & Scheduling

### Google Calendar

Two-way sync with Google Calendar keeps your personal and shop schedules aligned.

- **Appointment creation** — New bookings in Booking Automotive appear on your Google Calendar instantly
- **Availability blocking** — Personal events on Google Calendar block availability in Booking Automotive
- **Multi-calendar support** — Sync to multiple calendars for different technicians

### Microsoft Outlook / Office 365

Full two-way sync with Outlook calendars. Same features as Google Calendar sync, plus native Exchange support for enterprise shops.

### Apple Calendar

Subscribe your Apple Calendar to Booking Automotive via iCal feed. One-way sync is available now; two-way sync is on the roadmap.

---

## Communication Integrations

### SMS & Email Providers

Booking Automotive works with Twilio, SendGrid, and Amazon SES for transactional messages.

- **Twilio** — Send SMS appointment reminders, confirmations, and follow-ups using your own Twilio account
- **SendGrid** — Deliver email reminders, invoices, and marketing campaigns via SendGrid
- **Amazon SES** — Cost-effective email delivery for high-volume shops

Configure messaging providers in Settings > Communication.

### Review Platforms

Automatically request Google Reviews after completed appointments. Our integration monitors the review status and sends follow-up reminders to customers who haven't left a review yet.

[Learn more about review automation](https://bookingautomotive.com/auto-repair-shop-software/google-maps/)

---

## Parts & Inventory

### Parts Suppliers

Connect directly to major parts distributors for real-time pricing, availability, and automated ordering.

- **NAPA** — Real-time parts lookup and automated ordering
- **O'Reilly Auto Parts** — Availability and pricing integration
- **Advance Auto Parts** — Catalog search and order submission
- **WorldPac** — European and import parts specialist

Set up parts integrations in Settings > Inventory > Suppliers.

---

## API Reference

### REST API Overview

The Booking Automotive REST API is available for all accounts. Use it to build custom dashboards, sync data to external systems, or automate workflows.

**Base URL:** `https://api.bookingautomotive.com/v1`

**Authentication:** Bearer token (generate in Settings > API Keys)

**Rate limits:** 100 requests per minute on standard plans, 1,000 per minute on enterprise.

### Key Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /appointments` | List appointments with filtering by date, status, technician |
| `POST /appointments` | Create a new appointment |
| `GET /customers` | List customers with search and pagination |
| `POST /customers` | Create a new customer record |
| `GET /vehicles` | List vehicles by customer or VIN |
| `GET /invoices` | List invoices with payment status |
| `GET /reports/aro` | Average repair order data by time period |
| `GET /reports/no-shows` | No-show rate statistics |
| `GET /reports/labor-rates` | Labor rate benchmarks by region |

### Webhooks

Subscribe to real-time events:

- `appointment.created` — Triggered when a new appointment is booked
- `appointment.updated` — Triggered when an appointment is modified or rescheduled
- `appointment.completed` — Triggered when a repair order is marked complete
- `invoice.paid` — Triggered when a payment is received
- `customer.review.requested` — Triggered when a review request is sent

Configure webhooks in Settings > API > Webhooks.

### SDK & Client Libraries

- **JavaScript/Node.js** — `npm install @bookingautomotive/api-client`
- **Python** — `pip install bookingautomotive`
- **PHP** — `composer require bookingautomotive/api-client`

All SDKs are open-source and hosted on GitHub. [View SDK repositories](https://github.com/bookingautomotive) and contribute improvements.

### Open-Source Examples

We maintain a collection of open-source integration examples on GitHub:

- **QuickBooks Sync Script** — Python script that syncs invoices to QuickBooks Online
- **Slack Notifications** — Node.js webhook receiver that posts appointment updates to Slack
- **Google Sheets Dashboard** — Google Apps Script that pulls daily KPIs into a spreadsheet
- **Zapier Integration** — Pre-built Zapier triggers and actions

[Browse integration examples](https://github.com/bookingautomotive)

---

## Getting Help

- **API Support** — Email `api-support@bookingautomotive.com` for integration help
- **Documentation** — Full API docs with interactive examples at [bookingautomotive.com/developers](https://bookingautomotive.com)
- **Community** — Join the developer discussion on GitHub Discussions
- **Status Page** — Check API uptime at [status.bookingautomotive.com](https://bookingautomotive.com)

---

Ready to build something? **[Get your API key](https://bookingautomotive.com)** and start integrating today.

[Back to all documentation](/docs/)
