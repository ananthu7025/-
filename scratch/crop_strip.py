from PIL import Image

path = r"C:\Users\AnanthapadmanabhanG\.gemini\antigravity-ide\brain\5809fc6d-4a7f-41a8-a738-6e613cd51962\media__1785839344058.jpg"
img = Image.open(path)
w, h = img.size

# Let's save a horizontal strip of the cards to inspect where they are
strip = img.crop((0, 150, w, 400))
strip.save(r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets\temp_cards_strip.png")
print("Cards strip saved.")
