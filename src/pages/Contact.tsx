import { useState } from 'react'
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2
} from 'lucide-react'
import { socialLinks } from '@/lib/social'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'AHITI Ndomba',
        'Mwea East Sub-County',
        'Kirinyaga County, Kenya',
        '3km from Kutus Town'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '020 209 6540'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'ahitindomba@kilimo.go.ke'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 12:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const departments = [
    { name: 'Principal\'s Office' },
    { name: 'Admissions Office' },
    { name: 'Registrar\'s Office' },
    { name: 'Academic Affairs' },
    { name: 'Finance Office' },
    { name: 'Student Affairs' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-ahiti-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Get In Touch</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-ahiti-primary" />
                </div>
                <h3 className="font-bold text-ahiti-primary mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-ahiti-primary mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 7XX XXX XXX" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept, index) => (
                          <SelectItem key={index} value={dept.name.toLowerCase().replace(/\s+/g, '-')}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help?" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      className="mt-2 min-h-[120px]" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-ahiti-primary mb-4">Our Location</h3>
                <div className="rounded-xl overflow-hidden h-80">
                  <iframe
                    title="AHITI Ndomba Kerugoya location"
                    src="https://maps.google.com/maps?q=-0.5827750,37.3379630&ll=-0.5827750,37.3379630&z=16&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://www.google.com/maps?q=-0.5827750,37.3379630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ahiti-primary hover:underline mt-4"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View on Google Maps
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-ahiti-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="text-white/80 mb-6">Stay connected with us on social media for the latest updates.</p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-ahiti-secondary hover:text-ahiti-primary transition-colors"
                    >
                      {social.icon('w-6 h-6')}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">FAQ</Badge>
            <h2 className="text-3xl font-bold text-ahiti-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What are the minimum entry requirements?',
                a: 'For Diploma: KCSE Mean Grade C with C in Biology, C- in Chemistry. For Certificate: KCSE Mean Grade C with C- in Biology.'
              },
              {
                q: 'How much is the application fee?',
                a: 'The non-refundable application fee is KSh 1,000, payable to the institute.'
              },
              {
                q: 'When is the application deadline?',
                a: 'The application deadline for the September 2026 intake is to be updated. Please check back soon.'
              },
              {
                q: 'Do you offer accommodation?',
                a: 'Yes, we have on-campus accommodation available for students at affordable rates.'
              },
              {
                q: 'Are there scholarships available?',
                a: 'Government scholarships are available through the Higher Education Loans Board (HELB) and county bursaries.'
              },
              {
                q: 'Can I apply for short courses online?',
                a: 'Yes, short course applications can be submitted online or in person at the registrar\'s office.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-ahiti-primary mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
            Ready to Join AHITI Ndomba?
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Applications for the 2026 intake are now open. Start your application today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
              <a href="/admissions">
                Apply Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
              <a href="/courses">View Courses</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
