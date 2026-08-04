import os

root_dir = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)"

found = []
for root, dirs, files in os.walk(root_dir):
    for f in files:
        if "comunity" in f.lower() or "community" in f.lower():
            found.append(os.path.join(root, f))

print("Found files:", found)
