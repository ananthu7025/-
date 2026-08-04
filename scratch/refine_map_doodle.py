from PIL import Image

path = r"C:\Users\AnanthapadmanabhanG\.gemini\antigravity-ide\brain\5809fc6d-4a7f-41a8-a738-6e613cd51962\media__1785839344058.jpg"
img = Image.open(path)

# Let's crop the map doodle with X shifted right to avoid "e." text
box = (757, 330, 804, 380)

cropped = img.crop(box)
rgba = cropped.convert("RGBA")
data = rgba.getdata()
new_data = []
for item in data:
    r, g, b, a = item
    if r > 235 and g > 235 and b > 230:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))
rgba.putdata(new_data)
rgba.save(r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets\contact-map-doodle.png")
print("Map doodle refined successfully.")
