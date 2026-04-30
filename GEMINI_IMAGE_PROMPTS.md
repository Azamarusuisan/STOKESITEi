# Gemini 画像生成 指示書 — STORK Corporate Site

このドキュメントは、サイト内の画像プレースホルダー(`<ImageSlot>`)に差し込む画像を Google Gemini (Imagen) で生成するための指示書です。

## 共通スタイルガイド

すべての画像で以下を守ってください:

- **Brand color (アクセント)**: 緑 `#00A84F` (彩度を抑えた深緑、明るすぎない)
- **基調**: 黒・濃紺 (`#000` 〜 `#0f1115`) と 白 (`#ffffff`) のモノトーン基調 + ピンポイントの緑アクセント
- **トーン**: 落ち着いた / 知的 / コンサルティングファーム的(Accenture / McKinsey 風)
- **NG**: ロボット顔・3Dレンダリング感の強いガラスのAI脳・派手な虹色グラデ・ChatGPTアイコン的記号
- **写真の場合**: 自然光、シネマティック、わずかにフィルム調、シャープすぎない
- **イラストの場合**: 線が細くミニマル、グリッド/抽象幾何/ドキュメンタリー風
- **テキスト埋め込み禁止**: 画像内に文字や数字は入れない (CSS側で重ねる)
- **被写体に日本人が含まれる場合**: 日本のオフィス・日本の街並みを基調に
- **書き出し**: PNG または高品質 JPG、`public/images/` 直下に保存

---

## 画像スロット一覧

各スロットの配置場所・スロットID・サイズ・用途・推奨プロンプトを記載しています。

スロットIDは画面上のプレースホルダーに表示されているので、それと突合してください。

---

### 1. `hero-main` — Hero(ファーストビュー右側)

- **設置場所**: トップページ最上部 Hero セクション右カラム
- **コンポーネント**: `src/components/Hero.tsx`
- **アスペクト比**: 4 : 5 (縦長)
- **推奨解像度**: 1200 × 1500 px
- **保存ファイル**: `public/images/hero-main.jpg`
- **役割**: サイト第一印象を決める看板ビジュアル。AI×事業 の融合を象徴。

**Gemini プロンプト (英)**
```
A vertical 4:5 cinematic editorial photograph for an enterprise AI consulting firm.
Foreground: a focused Japanese business person in a dark navy suit looking at a translucent data visualization, no face visible or only side profile, neutral mood.
Background: minimalist modern Tokyo office with floor-to-ceiling windows, soft daylight, faint emerald green (#00A84F) accent reflections only.
Color palette: black, charcoal, off-white, single accent of deep emerald green.
Style: muted, sophisticated, Accenture/McKinsey corporate aesthetic, slight film grain, shallow depth of field, no text, no logos, no robotic imagery, no cliché AI brain.
```

**Gemini プロンプト (日)**
```
縦長4:5、エンタープライズAIコンサルティング企業向けのシネマティック・エディトリアル写真。
手前: 濃紺スーツの日本人ビジネスパーソンが半透明のデータビジュアライゼーションを見ている、顔は写らないか横顔のみ、ニュートラルな雰囲気。
背景: 床から天井までの窓があるミニマルでモダンな東京のオフィス、柔らかな自然光、深緑#00A84Fのアクセント光の反射が控えめに。
カラーパレット: 黒・チャコール・オフホワイト、深緑のアクセント1色のみ。
スタイル: 抑えた色味、洗練されたAccenture/McKinsey系コーポレート、わずかなフィルムグレイン、浅い被写界深度。
文字・ロゴ・ロボット・AI脳のクリシェは禁止。
```

---

### 2. `industries-banner` — 業界別ソリューション 上部バナー

- **設置場所**: Industries セクション 見出し直下 ワイドバナー
- **コンポーネント**: `src/components/Industries.tsx`
- **アスペクト比**: 21 : 9
- **推奨解像度**: 2400 × 1029 px
- **保存ファイル**: `public/images/industries-banner.jpg`

**Gemini プロンプト (英)**
```
Ultra-wide 21:9 cinematic banner image symbolizing multiple industries (finance, retail, manufacturing, healthcare, logistics, education) connected by a subtle network.
A long horizontal composition with abstract architectural geometry: skyscrapers fading into a manufacturing line fading into a hospital corridor fading into a logistics warehouse, photographed in a single horizontal pan.
Monochrome black and dark slate base with thin emerald green (#00A84F) connecting lines, almost invisible, minimal.
No text, no humans facing camera, premium consulting firm aesthetic, soft studio lighting.
```

---

### 3. `ceo-portrait` — 代表メッセージ ビジュアル

- **設置場所**: ValueHeader (黒背景セクション) 上部右
- **コンポーネント**: `src/components/ValueHeader.tsx`
- **アスペクト比**: 16 : 9
- **推奨解像度**: 1920 × 1080 px
- **保存ファイル**: `public/images/ceo-portrait.jpg`
- **背景**: 黒背景セクションに配置されるため、暗めのトーンで

**Gemini プロンプト (英)**
```
A 16:9 dark, moody editorial portrait of a Japanese male CEO in his 50s in a charcoal suit, three-quarter profile, looking thoughtfully off-frame.
Studio lighting from one side, deep black background, subtle rim light with a cold green tint (#00A84F).
Clean, dignified, confident, Forbes/Nikkei feature article style, no smile, slight contemplative expression.
Sharp on the eyes, soft falloff, no logos, no text.
```

---

### 4. `process-visual` — 導入プロセス ワイドバナー

- **設置場所**: Process セクション 見出し直下
- **コンポーネント**: `src/components/Process.tsx`
- **アスペクト比**: 21 : 9
- **推奨解像度**: 2400 × 1029 px
- **保存ファイル**: `public/images/process-visual.jpg`

**Gemini プロンプト (英)**
```
A 21:9 ultra-wide editorial photograph of a multi-disciplinary team in a bright modern Tokyo workshop.
Three to five Japanese professionals around a large white table covered with sticky notes, sketches, and a laptop showing abstract diagrams (no readable text).
Natural daylight, slightly overcast, minimal whites and warm woods, with one small accent of emerald green (#00A84F) on a notebook spine or cup.
Documentary, candid, no posed smiles, Accenture-style corporate documentary aesthetic.
No logos, no readable text on screens or paper.
```

---

### 5–8. `insight-1` 〜 `insight-4` — Insights サムネイル(4枚)

- **設置場所**: Insights セクション 各記事カード上部
- **コンポーネント**: `src/components/Insights.tsx`
- **アスペクト比**: 16 : 9
- **推奨解像度**: 1280 × 720 px
- **保存ファイル**: `public/images/insight-1.jpg` 〜 `insight-4.jpg`
- **共通**: 落ち着いた抽象ビジュアル、文字なし、4枚で統一感

#### `insight-1` 「生成AIを企業導入する際の3つの落とし穴」
```
16:9 abstract editorial thumbnail symbolizing enterprise generative AI pitfalls.
Concept: a clean modern office desk shot from above, with three slightly tilted blank document cards, one of them folding/breaking subtly. Monochrome with a single emerald green (#00A84F) thread running across.
Minimal, conceptual, no text, no faces.
```

#### `insight-2` 「社内ナレッジ × RAG: 失敗しないアーキテクチャ」
```
16:9 abstract conceptual thumbnail for a tech blog post about RAG architecture.
Concept: a wall of identical dark folders or document spines viewed straight on, with one folder pulled forward and slightly highlighted by a thin emerald green (#00A84F) light beam. Minimalist, library-meets-data, no text.
```

#### `insight-3` 「飲食チェーン向けCRM刷新で売上 +18%」
```
16:9 case study thumbnail of a modern Japanese restaurant interior, empty, photographed in soft late-afternoon light.
Wide composition, warm wood tones, with one tablet on a counter (no readable screen), tasteful, premium Tokyo bistro aesthetic. Single small accent of emerald green (#00A84F) — perhaps a plant. No text, no logos.
```

#### `insight-4` 「MLOps 入門: 運用で詰まらないための10の指標」
```
16:9 abstract conceptual thumbnail for a tech blog about MLOps monitoring.
Concept: an extreme close-up macro shot of a thin transparent layered diagram (like architectural acetate sheets), each layer showing a faint different abstract chart pattern, lit with cool light and one emerald green (#00A84F) glow. Editorial, scientific, no readable numbers or text.
```

---

### 9–11. `testimonial-1` 〜 `testimonial-3` — お客様の声 アバター(3枚)

- **設置場所**: Testimonials セクション 引用末尾の小さい円形アバター
- **コンポーネント**: `src/components/Testimonials.tsx`
- **アスペクト比**: 1 : 1 (正方形 / 円形マスク表示)
- **推奨解像度**: 400 × 400 px
- **保存ファイル**: `public/images/testimonial-1.jpg` 〜 `testimonial-3.jpg`
- **注意**: 実在の人物に見える顔写真は避け、抽象的なシルエット風 or **クライアント企業の架空ロゴ風** が望ましい (実在企業と混同される可能性を避ける)

#### `testimonial-1` (A社 / 製造業)
```
1:1 square abstract corporate avatar for a manufacturing client.
Style: a minimalist geometric monogram on a soft warm gray background, the monogram a thin-line industrial gear motif, subtle emerald green (#00A84F) accent dot.
No real logos, no readable letters, premium understated.
```

#### `testimonial-2` (B社 / 小売)
```
1:1 square abstract corporate avatar for a retail/store-chain client.
Style: a minimalist geometric monogram on a soft cream background, abstract shopping/storefront silhouette in thin lines, single emerald green (#00A84F) accent.
No real logos, no readable letters.
```

#### `testimonial-3` (C社 / SaaS)
```
1:1 square abstract corporate avatar for a SaaS startup client.
Style: a minimalist geometric monogram on a soft cool gray background, abstract cube or modular shape in thin lines, single emerald green (#00A84F) accent.
No real logos, no readable letters.
```

---

### 12. `about-team` — About セクション ビジュアル

- **設置場所**: MixedMedia セクション (CTA手前) 左カラム
- **コンポーネント**: `src/components/MixedMedia.tsx`
- **アスペクト比**: 4 : 3
- **推奨解像度**: 1600 × 1200 px
- **保存ファイル**: `public/images/about-team.jpg`

**Gemini プロンプト (英)**
```
A 4:3 documentary-style photograph of a small Japanese consulting team (3-4 people, mixed gender, age 30-50) in a candid working moment inside a renovated mid-century Tokyo office.
They are looking at a wall covered with abstract sticky notes and printouts, having a discussion. No faces directly to camera, natural body language.
Soft natural daylight, muted palette, slightly desaturated, single emerald green (#00A84F) accent on a wall or chair somewhere subtle.
Editorial, real, not posed, no readable text on the wall, no logos.
```

---

### 13. `company-office` — 会社概要 ビジュアル

- **設置場所**: 会社概要セクション 表の上
- **コンポーネント**: `src/components/CompanySection.tsx`
- **アスペクト比**: 16 : 7
- **推奨解像度**: 2240 × 980 px
- **保存ファイル**: `public/images/company-office.jpg`

**Gemini プロンプト (英)**
```
A 16:7 wide architectural photograph of a modern mid-rise Tokyo office building exterior in the Takadanobaba / Shinjuku area, evening blue hour, warm interior lights glowing through floor-to-ceiling windows.
Clean composition, slightly low angle, contextual urban Tokyo elements (a quiet street, traffic light) but not overwhelming.
Cinematic, editorial, single emerald green (#00A84F) reflection on glass somewhere subtle.
No visible signage or readable text.
```

または内観バリエーション:
```
A 16:7 wide interior photograph of a modern Tokyo office reception area, minimalist, charcoal floor, white walls, a single low couch, soft daylight from large windows, a small green plant for emerald (#00A84F) accent.
Editorial architectural photography, no text, no logos, no people.
```

---

## 差し込み手順

1. Geminiで生成した画像を `public/images/` に保存 (例: `public/images/hero-main.jpg`)
2. 該当する `<ImageSlot ... />` の呼び出しに `src="/images/hero-main.jpg"` を追加
   ```tsx
   <ImageSlot id="hero-main" alt="..." ratio="4 / 5" src="/images/hero-main.jpg" />
   ```
3. これだけでプレースホルダーが画像に差し変わります(`next/image` で最適化されます)

---

## チェックリスト

- [ ] hero-main (4:5)
- [ ] industries-banner (21:9)
- [ ] ceo-portrait (16:9, 暗背景)
- [ ] process-visual (21:9)
- [ ] insight-1 〜 insight-4 (16:9 × 4枚)
- [ ] testimonial-1 〜 testimonial-3 (1:1 × 3枚)
- [ ] about-team (4:3)
- [ ] company-office (16:7)

合計 **13 枚**
