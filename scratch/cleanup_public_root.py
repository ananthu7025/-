import os

public_dir = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public"
src_dir = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\src"

# Get all public root files
public_files = [f for f in os.listdir(public_dir) if os.path.isfile(os.path.join(public_dir, f))]

# Read all src file contents
src_contents = []
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js')):
            with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                src_contents.append(f.read())

unused_files = []
for pfile in public_files:
    used = False
    for content in src_contents:
        if pfile in content:
            used = True
            break
    if not used:
        unused_files.append(pfile)

print("Unused public root files:", unused_files)
for pfile in unused_files:
    os.remove(os.path.join(public_dir, pfile))
    print(f"Deleted: {pfile}")
