import os

# 1. Revert index.css
css_path = 'c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('@apply text-black font-sans antialiased;\n    background-color: #f8f8f8;', '@apply bg-black text-white font-sans antialiased;')
with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

# 2. Revert Navbar.tsx
nav_path = 'c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/components/custom/Navbar.tsx'
with open(nav_path, 'r', encoding='utf-8') as f:
    nav = f.read()

nav = nav.replace('bg-white/95 backdrop-blur-md shadow-lg border-b border-black/5', 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/5')
nav = nav.replace('border-2 border-black flex items-center justify-center mr-3 hover:scale-105 transition-transform bg-black/5', 'border-2 border-white flex items-center justify-center mr-3 hover:scale-105 transition-transform bg-white/5')
nav = nav.replace('text-black font-extrabold', 'text-white font-extrabold')
nav = nav.replace('text-black/80', 'text-white/80')
nav = nav.replace('text-black text-xs font-bold', 'text-white text-xs font-bold')
nav = nav.replace('hover:text-black/70', 'hover:text-white/70')
nav = nav.replace('bg-black text-white px-4 py-2 hover:bg-black/90 transition-all z-[60] group border border-transparent hover:border-black', 'bg-white text-black px-4 py-2 hover:bg-white/90 transition-all z-[60] group border border-transparent hover:border-white')

with open(nav_path, 'w', encoding='utf-8') as f:
    f.write(nav)

# 3. Revert HeroSection.tsx
hero_path = 'c:/Users/kw3ci/OneDrive/Desktop/Github Projects/mercylife_all_nations/src/sections/HeroSection.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace('bg-transparent overflow-hidden', 'bg-black overflow-hidden')
hero = hero.replace('border-black/20 flex items-center justify-center text-black/80 hover:bg-black hover:text-white hover:border-black', 'border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white')
hero = hero.replace('border border-black/30 flex items-center justify-center mb-6 bg-white/50 backdrop-blur-sm shadow-sm', 'border border-white/30 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm shadow-xl')
hero = hero.replace('text-black globe-rotate', 'text-white globe-rotate')
hero = hero.replace('from-black/50 to-transparent', 'from-white/50 to-transparent')
hero = hero.replace('bg-black/60', 'bg-white/60') # Cross
hero = hero.replace('border-black/5 bg-white/60 backdrop-blur-md', 'border-white/5 bg-black/60 backdrop-blur-md')
hero = hero.replace('text-black/70 hover:text-black', 'text-white/70 hover:text-white')
hero = hero.replace('bg-black hover:bg-black/90 text-white', 'bg-white hover:bg-white/90 text-black')
hero = hero.replace('hover:border-black', 'hover:border-white')

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(hero)

print("Navbar, Hero and index.css reverted to dark mode successfully.")
