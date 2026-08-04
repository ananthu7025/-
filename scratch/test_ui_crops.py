from PIL import Image

path = r"C:\Users\AnanthapadmanabhanG\.gemini\antigravity-ide\brain\5809fc6d-4a7f-41a8-a738-6e613cd51962\media__1785839344058.jpg"
img = Image.open(path)

# Let's save a series of test crops
crops = {
    "airplane": (170, 70, 240, 140),
    "cloud": (840, 70, 980, 150),
    "email_doodle": (330, 480, 400, 555),
    "insta_doodle": (545, 480, 615, 555),
    "map_doodle": (745, 480, 815, 555),
    "community_circle": (40, 680, 110, 750), # wait, let's check Y coordinates for community circle
    "community_card_left": (40, 420, 120, 580) # let's crop a wider area to inspect
}

for name, box in crops.items():
    try:
        c = img.crop(box)
        c.save(f"c:\\Users\\AnanthapadmanabhanG\\Desktop\\New folder (2)\\public\\assets\\temp_{name}.png")
    except Exception as e:
        print(f"Error cropping {name}: {e}")

print("Test crops saved.")
