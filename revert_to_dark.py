import os
import glob
import re

directories = ['c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/sections/*.tsx',
               'c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/components/custom/*.tsx']

files = []
for d in directories:
    files.extend(glob.glob(d))

skip_files = ['HeroSection.tsx', 'Navbar.tsx', 'Reveal.tsx']

for file_path in files:
    filename = os.path.basename(file_path)
    if filename in skip_files:
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('bg-white/60', 'bg-black/60')
    content = content.replace('bg-white/50', 'bg-black/50')
    content = content.replace('bg-white/80', 'bg-black/80')
    
    content = content.replace('bg-transparent', 'bg-black')
    content = content.replace('text-black', 'text-white')
    content = content.replace('border-black', 'border-white')
    content = content.replace('from-[#f8f8f8]', 'from-black')
    content = content.replace('to-[#f8f8f8]', 'to-black')
    
    # Check for the button class my script inserted and revert
    content = content.replace('bg-black hover:bg-black/90 text-white ', 'bg-white hover:bg-white/90 text-black ')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Dark mode reversal completed.")
