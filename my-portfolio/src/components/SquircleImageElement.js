const TAG_NAME = 'squircle-image'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const buildSuperellipsePolygon = (segments = 80, smoothing = 4.2) => {
  const n = clamp(Number.isFinite(smoothing) ? smoothing : 4.2, 2.2, 10)
  const points = []

  for (let i = 0; i <= segments; i += 1) {
    const theta = (i / segments) * Math.PI * 2
    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    const x = Math.sign(cos) * Math.pow(Math.abs(cos), 2 / n)
    const y = Math.sign(sin) * Math.pow(Math.abs(sin), 2 / n)

    const px = ((x + 1) / 2) * 100
    const py = ((y + 1) / 2) * 100
    points.push(`${px.toFixed(2)},${py.toFixed(2)}`)
  }

  return points.join(' ')
}

const buildMaskUrl = (polygonPoints) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><polygon points='${polygonPoints}' fill='white' /></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

class SquircleImageElement extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'alt', 'fit', 'loading', 'smoothing']
  }

  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' })

    root.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }

        .shape {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #1c1c1c;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.16);
          transform: translateZ(0);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: var(--fit, cover);
          display: block;
        }
      </style>
      <div class='shape'>
        <img />
      </div>
    `

    this._shape = root.querySelector('.shape')
    this._img = root.querySelector('img')
  }

  connectedCallback() {
    this.#syncImage()
    this.#syncMask()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return
    }

    if (name === 'smoothing') {
      this.#syncMask()
      return
    }

    this.#syncImage()
  }

  #syncImage() {
    const src = this.getAttribute('src') || ''
    const alt = this.getAttribute('alt') || ''
    const fit = this.getAttribute('fit') || 'cover'
    const loading = this.getAttribute('loading') || 'lazy'

    this.style.setProperty('--fit', fit)
    this._img.src = src
    this._img.alt = alt
    this._img.loading = loading
    this._img.decoding = 'async'
  }

  #syncMask() {
    const smoothing = Number(this.getAttribute('smoothing') || 4.2)
    const polygon = buildSuperellipsePolygon(84, smoothing)
    const maskUrl = buildMaskUrl(polygon)

    this._shape.style.webkitMaskImage = maskUrl
    this._shape.style.webkitMaskRepeat = 'no-repeat'
    this._shape.style.webkitMaskSize = '100% 100%'
    this._shape.style.maskImage = maskUrl
    this._shape.style.maskRepeat = 'no-repeat'
    this._shape.style.maskSize = '100% 100%'
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, SquircleImageElement)
}
