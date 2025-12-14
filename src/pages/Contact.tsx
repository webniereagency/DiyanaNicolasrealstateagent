import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container-luxury text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Let's Connect
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're ready to start your real estate journey or just have
            questions about the Sedona market, I'm here to help. Reach out
            today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="luxury-card rounded-lg p-8 md:p-10">
              <h2 className="font-playfair text-2xl text-foreground mb-2">
                Send Me a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h2 className="font-playfair text-2xl text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium mb-1">Phone</p>
                      <a
                        href="tel:+19285551234"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (928) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium mb-1">Email</p>
                      <a
                        href="mailto:diyana@sedonaluxury.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        diyana@sedonaluxury.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium mb-1">Office</p>
                      <p className="text-muted-foreground">
                        2155 W Highway 89A, Suite 100
                        <br />
                        Sedona, AZ 86336
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium mb-1">Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-playfair text-xl text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-playfair text-xl text-foreground mb-4">
                  Location
                </h3>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52687.13283891815!2d-111.81867485!3d34.86975445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d0724879fcb8f%3A0x9d906c63f7f8fabc!2sSedona%2C%20AZ!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sedona Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-16 bg-charcoal">
        <div className="container-luxury text-center">
          <div className="luxury-card rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-foreground mb-4">
              My Promise to You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When you reach out, you'll hear back from me personally—not an
              assistant or automated system. I respond to all inquiries within
              24 hours, often much sooner. Your time is valuable, and so are
              your real estate goals.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
