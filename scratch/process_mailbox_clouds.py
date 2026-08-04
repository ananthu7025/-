import shutil
from PIL import Image

src = r"C:\Users\AnanthapadmanabhanG\.gemini\antigravity-ide\brain\5809fc6d-4a7f-41a8-a738-6e613cd51962\mailbox_clouds_dispatch_1785837584111.png"
dst = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets\mailbox-clouds.png"

# Copy
shutil.copy(src, dst)

# Make transparent
img = Image.open(dst).convert("RGBA")
data = img.getdata()
new_data = []
for item in data:
    r, g, b, a = item
    if r > 230 and g > 230 and b > 220:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)
img.save(dst)
print("Copied and made transparent successfully.")
