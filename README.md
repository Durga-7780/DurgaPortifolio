# AI Engineer Portfolio

Modern portfolio for a Python & AI Engineer focused on LLM systems, FastAPI backends, LangChain workflows, and production AI infrastructure.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Customize content

Update shared portfolio content in:

- `src/utils/portfolioData.ts`

That file controls:

- name, email, phone, links
- hero roles
- skills
- projects
- experience
- strengths
- future vision text

## Resume

Place your resume PDF here:

- `public/resume/durgasaiprasadp.pdf`

The hero button is already wired to download that file.

## Profile Photo

Place your profile photo here:

- `public/profile/durgasaiprasadp.jpg`

The hero section is already wired to display that image.

## Contact form

The contact form submits to:

- `/api/contact`

A serverless example is included in:

- `api/contact.ts`

To receive email alerts, configure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Notes

- `package-lock.json` may still contain older dependency history until you run `npm install` again.
