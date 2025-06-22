from PIL import Image

# Reload the necessary images
front_image_path = "/mnt/data/3eba6748-59e9-4139-840d-081f041a8507.png"
logo_image_path = "/mnt/data/WhatsApp Image 2025-06-10 at 10.31.59 PM.jpeg"

# Open and process the front side
front_full = Image.open(front_image_path)
width, height = front_full.size
front_cropped = front_full.crop((0, 0, width, height // 2))

# Open and resize the logo for the back side
logo = Image.open(logo_image_path)
logo_resized = logo.resize(front_cropped.size)

# Save temporary PNGs for PDF generation
front_png = "/mnt/data/final_avatar_front.png"
back_png = "/mnt/data/final_avatar_back.png"
front_cropped.save(front_png)
logo_resized.save(back_png)

# Generate print-ready PDF
from fpdf import FPDF

pdf = FPDF(unit="mm", format=[90, 50])  # Standard business card size
pdf.add_page()
pdf.image(front_png, x=0, y=0, w=90, h=50)
pdf.add_page()
pdf.image(back_png, x=0, y=0, w=90, h=50)

# Save the final PDF
final_pdf = "/mnt/data/Avatar_Events_Business_Card_Final.pdf"
pdf.output(final_pdf)
