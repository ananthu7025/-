import os

assets_dir = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets"
src_dir = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\src"

# Get all asset filenames
assets = [f for f in os.listdir(assets_dir) if os.path.isfile(os.path.join(assets_dir, f))]

# Read all src file contents
src_contents = []
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js')):
            with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                src_contents.append(f.read())

unused_assets = []
for asset in assets:
    # Check if asset name is referenced anywhere in src files
    used = False
    for content in src_contents:
        if asset in content:
            used = True
            break
    if not used:
        unused_assets.append(asset)

print("Unused assets found:", unused_assets)

# Delete the unused assets
for asset in unused_assets:
    path = os.path.join(assets_dir, asset)
    os.remove(path)
    print(f"Deleted: {asset}")
