import Title from './Title'
import { services } from './data'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" sub="Services" />
      <div className="section-center services-center">
        {services.map((s) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={s.class}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{s.title}</h4>
                <p className="service-text">{s.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
