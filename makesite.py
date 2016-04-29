import os
import sys
from glob import glob
import argparse

ap = argparse.ArgumentParser()
ap.add_argument('--prefix', default='.')

ns = ap.parse_args()

def main():
    list_of_slides = sorted(glob(os.path.join(ns.prefix, 'sections', '*.html')))
    chunks = []
    for fn in list_of_slides:
        with open(fn, 'r') as ff:
            chunks.append(ff.read())
    chunks = '\n'.join(chunks)

    with open('template.html', 'r') as ff:
        template = ff.read()
    template = template.replace('@SECTIONS@', chunks)

    with open('site/index.html', 'w') as ff:
        ff.write(template)

if __name__ == '__main__':
    main()
