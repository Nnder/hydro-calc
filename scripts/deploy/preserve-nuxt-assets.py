#!/usr/bin/python3
"""Preserve built Nuxt assets before service start; run from release directory."""
from pathlib import Path
import os
import shutil
import tempfile

source = Path.cwd() / '.output/public/_nuxt'
destination = Path('/var/www/athydro/shared-assets/_nuxt')
if not source.is_dir():
    raise SystemExit('Missing Nuxt build assets')
for path in source.rglob('*'):
    relative = path.relative_to(source)
    # Build discovery must come from the active application, not the archive.
    if relative.parts[0] == 'builds' or not path.is_file() or path.is_symlink():
        continue
    target = destination / relative
    if target.exists():
        continue
    target.parent.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix='.asset-', dir=target.parent)
    try:
        with os.fdopen(fd, 'wb') as output, path.open('rb') as input_file:
            shutil.copyfileobj(input_file, output)
        os.chmod(temporary, 0o644)
        os.replace(temporary, target)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)
