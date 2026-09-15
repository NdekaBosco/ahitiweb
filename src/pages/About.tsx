import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  MapPin, Eye, Target, Heart, CheckCircle2, 
  Users, ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const coreValues = [
    'Professionalism', 'Efficiency', 'Effectiveness', 'Integrity', 'Objectivity',
    'Teamwork', 'Accountability', 'Transparency', 'Impartiality', 'Meritocracy',
    'Gender Equity', 'Commitment'
  ]

  const leadership = [
    {
      name: 'Mr. G.W. Silfuna',
      title: 'Principal',
      description: 'Leading the institute with over 20 years of experience in livestock development and education.',
      image: '/images/IMG_0716-1@-1369504436.jpg'
    },
    {
      name: 'Mr. Stephen Gachege Ndia',
      title: 'Director of Studies',
      description: 'Coordinating curriculum development and ensuring quality education standards.',
      image: '/images/director-of-studies.jpeg'
    },
    {
      name: 'Dr. Eunice Mungai',
      title: 'Registrar',
      description: 'Managing student admissions, records, and administrative operations.',
      image: '/images/registrar.jpeg'
    }
  ]

  const studentCouncil = [
    { name: 'John Kamau', position: 'President', course: 'Diploma in Animal Health' },
    { name: 'Mary Wanjiru', position: 'Vice President', course: 'Diploma in Animal Health' },
    { name: 'Peter Ochieng', position: 'Secretary General', course: 'Certificate in Animal Health' },
    { name: 'Grace Akinyi', position: 'Treasurer', course: 'Diploma in Animal Health' },
    { name: 'James Muriithi', position: 'Academic Rep', course: 'Certificate in Animal Health' },
    { name: 'Lucy Njeri', position: 'Welfare Rep', course: 'Diploma in Animal Health' },
  ]

  const milestones = [
    { year: '1984', event: 'AHITI Ndomba established by the Government of Kenya' },
    { year: '1990', event: 'First graduation ceremony held' },
    { year: '2000', event: 'Expansion of training facilities and curriculum' },
    { year: '2010', event: 'Introduction of short courses program' },
    { year: '2015', event: 'Modernization of practical training facilities' },
    { year: '2020', event: 'Digital learning platforms introduced' },
    { year: '2025', event: 'President launches Goat AI Center - first in East & Central Africa' },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-ahiti-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About AHITI Ndomba
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Learn more about our history, leadership, vision, and commitment to excellence 
              in animal health training.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/DJI_0033@1129346556.jpg"
                alt="AHITI Ndomba Campus"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-ahiti-primary/10 text-ahiti-primary">Who We Are</Badge>
              <h2 className="text-3xl font-bold text-ahiti-primary">
                Government Institution of Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Animal Health and Industry Training Institute (AHITI) – Ndomba is a registered 
                Technical and Vocational Training Institute, located in Mwea East Sub-County, 
                Kirinyaga County, approximately three (3) kilometres from Kutus Town.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is one of the National Livestock Training Institutes, within the State Department 
                for Livestock Development, in the Ministry of Agriculture and Livestock Development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nested away from the hustles of urban centres, on approximately 194.25 Hectares 
                (480 acres) of land, the institute provides a serene learning environment, with 
                good training and learning facilities, to ensure production of quality graduates.
              </p>
              <div className="flex items-center space-x-4 text-ahiti-primary pt-4">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Mwea East, Kirinyaga County, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Our Direction</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary">
              Vision, Mission & Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-ahiti-primary to-ahiti-dark rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To become a center of excellence in Animal Health and Production training for 
                sustainable development of the livestock sub-sector in East and Central Africa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-ahiti-secondary to-yellow-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-ahiti-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-ahiti-primary" />
              </div>
              <h3 className="text-2xl font-bold text-ahiti-primary mb-4">Our Mission</h3>
              <p className="text-ahiti-primary/80 leading-relaxed text-lg">
                To provide quality training of technical personnel in Animal Health and Production 
                for effective performance in the livestock sub-sector, and contribute to wealth 
                creation, in a sustainable environment.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-ahiti-primary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-ahiti-primary" />
              </div>
              <h3 className="text-2xl font-bold text-ahiti-primary">Our Core Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreValues.map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-ahiti-primary/10 text-ahiti-primary rounded-full font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Institute Leadership
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Meet the dedicated team leading AHITI Ndomba towards excellence in animal health education.
            </p>
          </div>

          {/* Senior Leadership */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ahiti-primary mb-1">{leader.name}</h3>
                  <p className="text-white bg-ahiti-primary px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Student Council */}
          <div className="bg-gradient-to-br from-ahiti-primary to-ahiti-dark rounded-2xl p-8 text-white">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-ahiti-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Student Council</h3>
                <p className="text-white/70">2024/2025 Academic Year</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {studentCouncil.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-ahiti-secondary font-medium">{member.position}</p>
                  <p className="text-white/70 text-sm">{member.course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Our Journey</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              History & Milestones
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              A journey of over 40 years dedicated to excellence in animal health training.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ahiti-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <h4 className="text-2xl font-bold text-ahiti-primary mb-2">{milestone.year}</h4>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-ahiti-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-ahiti-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Our Commitment</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Quality Policy Statement
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              At AHITI Ndomba, we are committed to achieving and maintaining the highest standards 
              of quality in all aspects of our educational and training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Excellence in Education and Training',
              'Trainee-centered approach in Training',
              'Good governance',
              'Enhanced Research and Innovation',
              'Strict adherence to international quality management standards',
              'Strict adherence to professional ethical practices and integrity',
              'Efficient, effective and friendly delivery of services',
              'Strong Collaborations and partnerships',
              'Enhanced Community engagement and outreach',
              'Continuous improvement of the institute operations'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white/10 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-ahiti-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
            Want to Know More?
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Explore our courses or get in touch with us for more information about AHITI Ndomba.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
              <a href="/courses">
                View Our Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
