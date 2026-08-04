from PIL import Image

path = r"C:\Users\AnanthapadmanabhanG\.gemini\antigravity-ide\brain\5809fc6d-4a7f-41a8-a738-6e613cd51962\media__1785839344058.jpg"
img = Image.open(path)

# Dictionary of crops: {filename: (left, top, right, bottom)}
doodles = {
    "contact-mail-doodle.png": (340, 330, 395, 380),
    "contact-insta-doodle.png": (550, 330, 600, 380),
    "contact-map-doodle.png": (750, 330, 800, 380),
    "contact-plane-trail.png": (0, 40, 245, 130),
    "contact-clouds-birds.png": (750, 35, 1005, 145),
    "contact-community-icon.png": (40, 470, 100, 530) # Let's crop the 3-people circular icon on the left
}

def make_transparent(cropped_img):
    rgba = cropped_img.convert("RGBA")
    data = rgba.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # If background is white or near white, make it transparent
        if r > 235 and g > 235 and b > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))
    rgba.putdata(new_data)
    return rgba

for filename, box in doodles.items():
    try:
        cropped = img.crop(box)
        transparent = make_transparent(cropped)
        transparent.save(f"c:\\Users\\AnanthapadmanabhanG\\Desktop\\New folder (2)\\public\\assets\\{filename}")
        print(f"Saved {filename}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("All doodles extracted and made transparent successfully.")
