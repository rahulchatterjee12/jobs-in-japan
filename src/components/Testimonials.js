import styles from "./Testimonials.module.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Walker",
      title: "Software Engineer",
      company: "Sony Interactive Entertainment",
      quote:
        "Working in Japan has been an incredible experience. I've grown so much professionally and personally.",
      image: "/alice-walker.jpg",
    },
    {
      id: 2,
      name: "David Kim",
      title: "Graphic Designer",
      company: "Dentsu Inc.",
      quote:
        "The work culture in Japan is very collaborative and supportive. I feel valued and challenged in my role.",
      image: "/david-kim.jpg",
    },
    // Add more testimonials here
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className="font-semibold font-serif text-3xl mb-5">Testimonials</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialItem}>
            <img
              className={styles.avatar}
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className={styles.testimonialContent}>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.reviewerInfo}>
                <span className={styles.reviewerName}>{testimonial.name}</span>
                <span className={styles.reviewerTitle}>
                  ({testimonial.title}, {testimonial.company})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
