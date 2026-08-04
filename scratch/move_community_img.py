import shutil
import os

src = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\src\newcomunity.png"
dst = r"c:\Users\AnanthapadmanabhanG\Desktop\New folder (2)\public\assets\newcomunity.png"

shutil.move(src, dst)
print("Moved newcomunity.png to public/assets/")
