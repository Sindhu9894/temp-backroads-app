import Title from './Title'
import { tours } from './data'

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="Featured" sub="Tours" />

      <div className="section-center featured-center">
        {tours.map((t) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={t.src} className="tour-img" alt="" />
                <p className="tour-date">{t.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{t.title}</h4>
                </div>
                <p>{t.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {t.location}
                  </p>
                  <p>{t.duration}</p>
                  <p>{t.cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
