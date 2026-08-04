import os

path = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets\community-cropped-inside.png"
if os.path.exists(path):
    os.remove(path)
    print("Deleted community-cropped-inside.png successfully.")
