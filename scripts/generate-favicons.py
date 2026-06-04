#!/usr/bin/env python3
"""Generate favicon PNG sizes and favicon.ico from AM logo design."""

from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("Install Pillow: pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"

BG = (10, 15, 20)  # #0a0f14
ACCENT = (52, 211, 153)  # #34d399
SIZES = [16, 32, 48, 180, 512]


def draw_logo(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    pad = max(1, int(size * 0.08))
    radius = max(2, int(size * 0.22))
    draw.rounded_rectangle(
        (0, 0, size - 1, size - 1),
        radius=radius,
        fill=BG,
    )

    inset = max(2, int(size * 0.1))
    border = max(1, int(size * 0.045))
    draw.rounded_rectangle(
        (inset, inset, size - inset - 1, size - inset - 1),
        radius=max(2, radius - inset),
        outline=ACCENT,
        width=border,
    )

    text = "AM"
    font_size = int(size * 0.38)
    font = None
    for path in (
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf",
    ):
        try:
            font = ImageFont.truetype(path, font_size)
            break
        except OSError:
            continue
    if font is None:
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2 - int(size * 0.02)
    draw.text((x, y), text, fill=ACCENT, font=font)

    return img


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    APP.mkdir(parents=True, exist_ok=True)

    images: dict[int, Image.Image] = {}
    for s in SIZES:
        im = draw_logo(s)
        images[s] = im
        name = f"favicon-{s}x{s}.png" if s != 180 else "apple-touch-icon.png"
        im.save(PUBLIC / name, optimize=True)
        print(f"Wrote {PUBLIC / name}")

    # Next.js convention files
    images[32].save(APP / "icon.png", optimize=True)
    images[180].save(APP / "apple-icon.png", optimize=True)
    print(f"Wrote {APP / 'icon.png'}")
    print(f"Wrote {APP / 'apple-icon.png'}")

    # Multi-size favicon.ico
    ico_images = [images[s].convert("RGBA") for s in (16, 32, 48)]
    ico_path = APP / "favicon.ico"
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in (16, 32, 48)],
        append_images=ico_images[1:],
    )
    print(f"Wrote {ico_path}")

    images[512].save(PUBLIC / "icon-512x512.png", optimize=True)
    print(f"Wrote {PUBLIC / 'icon-512x512.png'}")


if __name__ == "__main__":
    main()
