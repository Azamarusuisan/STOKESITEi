const groups = [
  {
    title: 'AI / ML',
    items: ['OpenAI', 'Anthropic', 'Google Vertex AI', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LlamaIndex'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'BigQuery', 'Snowflake'],
  },
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Astro'],
  },
  {
    title: 'Infrastructure',
    items: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Datadog'],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="section section--accent">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Technology</p>
          <h2 className="section__title">対応技術スタック</h2>
          <p className="section__lead">
            AI/ML、データ基盤、Webアプリケーション、インフラまで幅広く対応。お客様の既存環境や要件に合わせて、最適な技術選定を行います。
          </p>
        </header>
        <div className="stack">
          {groups.map((g) => (
            <div key={g.title} className="stack__group">
              <h3 className="stack__title">{g.title}</h3>
              <ul className="stack__items">
                {g.items.map((it) => (
                  <li key={it} className="stack__item">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
