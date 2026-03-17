import os
import glob
import re

directories = ['c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/sections/*.tsx',
               'c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/components/custom/*.tsx']

files = []
for d in directories:
    files.extend(glob.glob(d))

# Files we already fully updated for light mode
skip_files = ['HeroSection.tsx', 'Navbar.tsx', 'Reveal.tsx']

for file_path in files:
    filename = os.path.basename(file_path)
    if filename in skip_files:
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic flips for light mode:
    # 1. Backgrounds
    content = content.replace('bg-black', 'bg-transparent')
    
    # 2. Text colors
    content = content.replace('text-white', 'text-black')
    
    # 3. Borders
    content = content.replace('border-white', 'border-black')
    
    # 4. Gradients that faded to/from black should probably fade to/from white/transparent
    content = content.replace('from-black', 'from-[#f8f8f8]')
    content = content.replace('to-black', 'to-[#f8f8f8]')
    
    # 5. We need to fix buttons that were "bg-white text-black" to be "bg-black text-white" so they stand out
    # A simple regex to find these common button combinations and invert them
    content = re.sub(r'bg-transparent\s(hover:bg-black/90\s)?text-black\s', 'bg-black hover:bg-black/90 text-white ', content)
    
    # Let's fix specific edge cases
    # For YouthCampSection, there was a bg-black/60 backdrop. It became bg-transparent/60 which is invalid.
    content = content.replace('bg-transparent/60', 'bg-white/60')
    content = content.replace('bg-transparent/50', 'bg-white/50')
    content = content.replace('bg-transparent/80', 'bg-white/80')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Light mode replacement script completed.")
