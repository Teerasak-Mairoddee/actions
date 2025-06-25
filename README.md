# Next.js DevSecOps Lab

This project is a purposefully vulnerable **Next.js application** with a complete **DevSecOps CI/CD pipeline** built in GitHub Actions. It demonstrates my ability to not only build applications but also to secure them using automated, reproducible pipelines, a critical skill in today’s secure software development landscape.

> I deliberately added insecure libraries and code to test detection capabilities of tools like **Trivy**, **CodeQL**, and **Semgrep**. All vulnerabilities were successfully flagged and uploaded to the **GitHub Security tab**, proving this system works.

---

## Project Purpose

This lab was designed to answer a core question:

> *How do you integrate security directly into the software development lifecycle, not just bolt it on later?*

Through this repository, I demonstrate:

- Deep understanding of **DevSecOps principles**
- Working knowledge of **secure CI/CD with GitHub Actions**
- Real-world testing of **insecure dependencies and code**
- Familiarity with **industry security tooling** used in modern pipelines

---

## Vulnerabilities Injected & Detected

On **June 25, 2025**, I committed multiple deliberate vulnerabilities:

### Critical
- `eval()` usage in `unsafe_eval.js` — detected by **CodeQL**

### Medium
- XSS via unsanitized forms — detected by **Trivy**
- Regex DoS — detected by **Trivy**
- HTML escaping issues — detected by **Trivy**

### Low
- `cookie` package with unsafe bounds — detected by **Trivy**

### Library Vulnerabilities Added
- `lodash@4.17.15` — vulnerable to prototype pollution
- `minimist@0.0.8` — known parameter pollution CVE

---

## DevSecOps Pipeline

### Triggered On:
- Every **push** and **pull request** to `main`
- Weekly via **cron job** (scheduled automation)

### 🛠 Jobs in the Pipeline

| Tool         | Role                                         | Outcome                                                  |
|--------------|----------------------------------------------|-----------------------------------------------------------|
| **CodeQL**   | Static code analysis for insecure logic      | Found unsafe use of `eval()`                             |
| **Trivy**    | Vulnerability scanning of code & lock files  | Flagged multiple CVEs in dependencies                    |
| **Semgrep**  | Lightweight static analysis with rule sets   | Extra coverage for custom linting                        |
| **SonarCloud**| Code quality, smells, duplication            | Highlights code maintainability issues                   |
| **Dependabot Metadata** | Fetches insights on dependency status | Informs future patching decisions                        |

All SARIF reports are uploaded to GitHub's **Security dashboard**.

---

## Commit Highlights (June 25, 2025)

| Commit Message                              | Purpose                                               |
|---------------------------------------------|--------------------------------------------------------|
| `add vulnerable lodash 4.17.15`             | Intentionally added CVE-affected lib                  |
| `add newer trivy and vuln libs`             | Updated scanner version for accuracy                  |
| `test CodeQL with insecure code`            | Wrote unsafe JS to check CodeQL alerting              |
| `test vuln file`                            | Added broken logic for Trivy detection                |
| `correct vuln-type for trivy`               | Ensured library scanning was included                 |

Every change was done to build **trust in the pipeline**, test its effectiveness, and demonstrate its real-world applicability.

---

## Summary

- Design and implement security gates in CI/CD pipelines
- Understand how malicious input flows through code and dependencies
- Use security tools in the wild — not just in theory
- Respond to and triage alerts based on real data

---

## Tech Stack

- **App**: Next.js, TailwindCSS, Postgres, NextAuth
- **Security**: Trivy, CodeQL, Semgrep, SonarCloud, GitHub Actions
- **Langs**: TypeScript, JavaScript, React

---

## Run Locally

```bash
pnpm install
pnpm dev
