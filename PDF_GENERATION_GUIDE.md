# How to Create the Playbook PDF

The playbook content is ready at `/public/playbook/WorkFree-Blueprint.md`

## Option 1: Online PDF Converter (Easiest)

1. Copy content from `WorkFree-Blueprint.md`
2. Use one of these tools:
   - **Markdown to PDF:** https://www.markdowntopdf.com/
   - **Pandoc Online:** https://pandoc.org/try/
   - **PDF.co Markdown to PDF**

3. Customize design:
   - Use minimalist template
   - White background
   - "WorkFreeWork" header in all caps
   - Clean typography (Space Grotesk or similar)

## Option 2: Use Canva (More Control)

1. Sign up at canva.com
2. Create new PDF document (A4 or Letter size)
3. Use "Minimal Report" or "White Paper" template
4. Copy/paste content from markdown file
5. Customize with your brand colors
6. Export as PDF

## Option 3: Use Figma or Adobe InDesign

For professional design:
- Import content
- Design custom layout
- Export high-quality PDF

## Option 4: Command Line (Pandoc)

```bash
# Install pandoc
brew install pandoc

# Convert to PDF
pandoc public/playbook/WorkFree-Blueprint.md \
  -o public/playbook/WorkFree-Blueprint.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in \
  -V fontsize=11pt
```

## Design Specifications

**Cover:**
- Minimalist white background
- "WORKFREEWORK" in all caps (Space Grotesk Bold, 48pt)
- Subtitle: "How to Reclaim 20+ Hours a Week Without Going Broke" (18pt)
- Bottom: "Automation for humans, not corporations." (14pt grey)

**Interior:**
- Clean white pages
- Generous margins
- Headers in bold
- Tools/examples in bullet lists
- Section breaks with horizontal rules

**Footer on Each Page:**
- Page numbers
- "WorkFreeWork | workfreework.com"

**Back Cover:**
- Logo
- Website URL
- Social handles
- QR code to site (optional)

## Where to Put the PDF

Once created:
1. Save as `/public/playbook/WorkFree-Blueprint.pdf`
2. Update email delivery to link to this file
3. Test download works

## Email Delivery Setup

In ConvertKit:
1. Create automation
2. When someone subscribes → send email with PDF attached
3. Or use direct download link: `https://workfreework.com/playbook/WorkFree-Blueprint.pdf`

---

**Estimated Time:** 30-60 minutes for a good-looking PDF
**Recommended:** Canva for best balance of quality/speed

