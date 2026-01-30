# V4 Ferraz Piai Internal Data Hub & Automation

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()
[![Google Ads API](https://img.shields.io/badge/Google%20Ads%20API-v16-blue.svg)](https://developers.google.com/google-ads/api)

## 📋 Overview

The **V4 Ferraz Piai Internal Data Hub** is a proprietary Node.js application built exclusively for V4 Ferraz Piai's operational team. It serves as a centralized interface for traffic managers to audit, report, and optimize multiple client Google Ads accounts simultaneously.

**User Type:** Internal (Agency Employees Only)

---

## 🎯 Primary Use Cases

### 1. **Automated Audit & Monitoring** (Read Access)
- Identifies critical issues:
  - Low budget alerts
  - Disapproved ads detection
  - Zero-impression campaigns
- Retrieves historical performance metrics (CPA, ROAS, CPC)
- PostgreSQL caching for trend analysis without repetitive API calls

### 2. **Campaign Optimization & Management** (Write Access)
- **Rule-Based Actions:**
  - Automatic pausing of underperforming keywords/ads based on KPI thresholds
  - Integration with N8N workflows for intelligent automation
- **Campaign Creation & Expansion:**
  - New Ad Group creation
  - Keyword addition
  - Text ad deployment via internal content workflows

### 3. **AI-Powered Insights**
- Performance data analysis via internal AI logic
- Automated bid adjustment suggestions
- Ad copy improvement recommendations
- N8N workflow integration for ML-driven insights

---

## 🏗️ Technical Architecture

### Technology Stack

| Component | Technology |
|-----------|-----------|
| **Runtime** | Node.js v18+ |
| **Framework** | Express.js |
| **Database** | PostgreSQL |
| **Template Engine** | EJS |
| **Workflow Automation** | N8N Integration |
| **Deployment** | Docker Container |
| **API Integration** | Google Ads API v16 |

### Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│          V4 Ferraz Piai Internal Hub               │
├─────────────────────────────────────────────────────┤
│  Frontend (EJS Templates)                          │
│  ├── Landing Page                                  │
│  ├── Dashboard (Mockup)                            │
│  ├── Privacy Policy                                │
│  └── Terms of Service                              │
├─────────────────────────────────────────────────────┤
│  Backend (Node.js + Express)                       │
│  ├── Route Handlers                                │
│  ├── Google Ads API Integration                    │
│  └── N8N Workflow Triggers                         │
├─────────────────────────────────────────────────────┤
│  Data Layer                                        │
│  ├── PostgreSQL (Metrics Cache)                    │
│  └── Google Ads API (Live Data)                    │
└─────────────────────────────────────────────────────┘
```

---

## 🔐 Security & Compliance

### Access Control
- **Strictly limited** to authorized V4 Ferraz Piai employees
- Secure authentication mechanism (to be implemented)
- No external client access

### Data Protection
- ✅ All data encrypted in transit (TLS/SSL)
- ✅ Encrypted at rest using industry-standard protocols
- ✅ Temporary storage for analysis only
- ✅ Automatic data purging based on retention policies

### Google API Compliance
Full adherence to:
- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
- **Limited Use Requirements**
- Google Ads API Terms of Service

### Data Usage Policy
- ✅ Data used **exclusively** for managing authenticated accounts
- ❌ **NO** selling, sharing, or unauthorized transfers
- ❌ **NO** external access to this internal tool
- ✅ Strict compliance with LGPD (Brazil) and GDPR principles

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository** (or download the files)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`

### Docker Deployment

```bash
# Build the Docker image
docker build -t v4-ferraz-piai-hub .

# Run the container
docker run -p 3000:3000 v4-ferraz-piai-hub
```

---

## 📁 Project Structure

```
v4-ferraz-piai-hub/
├── views/
│   ├── index.ejs          # Landing page
│   ├── dashboard.ejs      # Dashboard interface
│   ├── privacy.ejs        # Privacy policy
│   └── terms.ejs          # Terms of service
├── public/                # Static assets (CSS, JS, images)
├── server.js              # Main application server
├── package.json           # Node.js dependencies
├── Dockerfile             # Docker configuration
└── README.md              # This file
```

---

## 🔌 Required API Scopes

### Read Access
- Campaign metrics (clicks, impressions, cost, conversions)
- Performance data (CPA, ROAS, CPC, CTR)
- Account structure (campaigns, ad groups)
- Keyword lists and configurations

### Write Access
- Campaign modifications
- Ad creation and updates
- Keyword management
- Bid adjustments
- Ad group operations

---

## 📧 Contact Information

**Organization:** V4 Ferraz Piai  
**Email:** [ferramenta.ferraz@v4company.com](mailto:ferramenta.ferraz@v4company.com)  
**Application:** V4 Ferraz Piai Internal Data Hub  
**Purpose:** Google Ads API Integration for Internal Operations

---

## 📄 Important Pages

- **Privacy Policy:** [/privacy](/privacy)
- **Terms of Service:** [/terms](/terms)
- **Dashboard:** [/dashboard](/dashboard)
- **Health Check:** [/health](/health)

---

## 🛡️ Compliance Statement

This application strictly adheres to:
- ✅ Google API Services User Data Policy
- ✅ Limited Use Requirements
- ✅ LGPD (Lei Geral de Proteção de Dados - Brazil)
- ✅ Industry-standard security practices

**No data is shared, sold, or transferred to unauthorized parties.**

---

## 📝 Version History

### Version 1.0.0 (January 30, 2026)
- Initial release
- Landing page with technical specifications
- Privacy Policy and Terms of Service
- Dashboard mockup
- Google Ads API integration documentation

---

## ⚠️ Important Notes

1. **Internal Use Only:** This application is NOT for public use
2. **Authentication Required:** Access restricted to authorized personnel
3. **API Dependencies:** Functionality depends on Google Ads API availability
4. **Data Retention:** Metrics cached temporarily per retention policy
5. **Compliance:** Full adherence to Google's Limited Use policy

---

## 📞 Support

For technical support, API verification questions, or access requests:
- **Email:** ferramenta.ferraz@v4company.com
- **Application Issues:** Contact V4 Ferraz Piai technical team

---

**© 2026 V4 Ferraz Piai. All rights reserved. Proprietary and confidential.**
